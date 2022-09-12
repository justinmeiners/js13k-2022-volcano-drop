
// Converts a MIDI file into a list of notes and times
// to be played by the Web Audio API.

// Special thanks to: https://faydoc.tripod.com/formats/mid.htm

use std::fs::File;
use std::path::Path;
use std::env::args;
use std::io;
use std::io::{Error, ErrorKind, Read};

struct Note {
    pub time: u32, // milliseconds
    pub pitch: u8,
}

fn main() {
    if args().len() != 2 {
        println!("Usage: ./midi <midi-file>");
        std::process::exit(1);
    }

    let filename = args().nth(1).unwrap();

    let path = Path::new(&filename);

    let mut file = match File::open(&path) {
        Err(why) => {
            println!("Failed to open {}: {}", path.display(), why);
            std::process::exit(1);
        },
        Ok(file) => file,
    };

    let notes = match parse_file(&mut file) {
        Err(why) => {
            println!("Failed to parse {}: {}", path.display(), why);
            std::process::exit(1);
        },
        Ok(result) => result,
    };

    print!("const SONG = [");
    for note in notes {
        print!("[{}, {}],", note.pitch, note.time);
    }
    println!("]");
}

fn parse_file(file: &mut File) -> io::Result<Vec<Note>> {
    let mut vec: Vec<Note> = Vec::new();

    // Read midi header
    let mut buf: [u8; 14] = [0; 14];
    file.read_exact(&mut buf)?;

    if to_int(&buf[0..4]) != 0x4D_54_68_64 {
        return Err(error("Invalid midi header magic"));
    }
    if to_int(&buf[4..8]) != 6 {
        return Err(error("Invalid midi header length"));
    }
    if to_int(&buf[8..10]) > 1 {
        return Err(error("Asynchronous tracks not supported"));
    }

    let tracks = to_int(&buf[10..12]);
    let deltas_per_quart = to_int(&buf[12..14]);
    let mut us_per_quart: u32 = 0;

    for _ in 0..tracks {
        // Read track header
        let mut buf: [u8; 8] = [0; 8];
        file.read_exact(&mut buf)?;

        if to_int(&buf[0..4]) != 0x4D_54_72_6B {
            return Err(error("Invalid track header magic"));
        }

        let track_len = to_int(&buf[4..8]);

        let mut track_data: Vec<u8> = vec![0; track_len as usize];
        file.read_exact(&mut track_data[..])?;

        parse_track(&track_data[..], &mut vec, deltas_per_quart,
                    &mut us_per_quart)?;
    }

    return Ok(vec);
}

fn parse_track(buf: &[u8], vec: &mut Vec<Note>, deltas_per_quart: u32,
               us_per_quart: &mut u32)
    -> io::Result<()> {

    let mut deltas: u32 = 0;
    let mut i: usize = 0;

    loop {
        if i >= buf.len() {
            return Ok(());
        }

        // First, get the delta_time
        let (delta, len) = delta_time(&buf[i..]);
        i += len;

        deltas += delta;

        // Now parse the command
        let command = buf[i] >> 4;
        let channel = buf[i] & 0x0F;
        i += 1;

        match command {
            // Note off (ignored because we always play one note at a time)
            0x8 => i += 2,
            // Note on
            0x9 => {
                let pitch = buf[i];
                let _velocity = buf[i + 1];

                let note = Note {
                    time: (((deltas as u64) * (*us_per_quart as u64))
                           / (deltas_per_quart as u64) / 1000) as u32, // For overflow
                    pitch: pitch,
                };
                vec.push(note);

                i += 2;
            },
            // Key after-touch (ignored)
            0xA => i += 2,
            // Control change (ignored)
            0xB => i += 2,
            // Program change (ignored)
            0xC => i += 1,
            // Channel after-touch (ignored)
            0xD => i += 1,
            // Pitch wheel change (ignored)
            0xE => i += 2,
            // Meta event
            0xF => {
                if channel == 0xF {
                    let subcommand = buf[i];
                    i += 1;

                    match subcommand {
                        // Text-ish commands (ignored)
                        0..=7 => (),
                        // End of track
                        0x2F => return Ok(()),
                        // Set tempo
                        0x51 => *us_per_quart = to_int(&buf[(i + 1)..(i + 4)]),
                        // Time signature (ignored)
                        0x58 => (),
                        // Key signature (ignored)
                        0x59 => (),
                        // Sequence specific information (ignored)
                        0x7F => (),
                        _ => {
                            println!("Unknown subcommand: {}", subcommand);
                            return Err(error("Unknown subcommand"));
                        },
                    };

                    i += (buf[i] as usize) + 1;
                } else {
                    // System control messages (ignored)
                    i += (buf[i] as usize) + 1;
                }
            },
            _ => {
                println!("Unknown command: {}", command);
                return Err(error("Unknown command"));
            },
        };
    }
}

fn error(msg: &str) -> Error {
    return Error::new(ErrorKind::Other, msg);
}

fn to_int(slice: &[u8]) -> u32 {
    let mut result: u32 = 0;
    for x in slice {
        result <<= 8;
        result |= *x as u32;
    }
    return result;
}

fn delta_time(slice: &[u8]) -> (u32, usize) {
    let mut result: u32 = 0;
    let mut len: usize = 0;
    for x in slice {
        len += 1;

        result <<= 7;
        if *x < 128 {
            // Last one
            result |= *x as u32;
            break;
        } else {
            // More coming
            result |= (*x & (!0x80)) as u32;
        }
    }
    return (result, len);
}
