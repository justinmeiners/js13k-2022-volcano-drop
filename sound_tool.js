
// Creating using the 'serialize' button at https://sfxr.me/

// Indices:
// const SOUND_THROUGH_RING = 0;
// const SOUND_GET_BIRD = 1;
// const SOUND_HIT_RING = 2;
// const SOUND_HIT_FLARE = 3;
// const SOUND_HIT_PLANE = 4;
// const SOUND_EXPLODE = 5;
// const SOUND_PICK_MENU = 6;

const SOUNDS = [
`
{
"oldParams": true,
"wave_type": 1,
"p_env_attack": 0,
"p_env_sustain": 0.08471101207408382,
"p_env_punch": 0.3468633995198561,
"p_env_decay": 0.357179930548691,
"p_base_freq": 0.6811589321967947,
"p_freq_limit": 0,
"p_freq_ramp": 0,
"p_freq_dramp": 0,
"p_vib_strength": 0,
"p_vib_speed": 0,
"p_arp_mod": 0.41912637580473566,
"p_arp_speed": 0.6487335786143021,
"p_duty": 0,
"p_duty_ramp": 0,
"p_repeat_speed": 0,
"p_pha_offset": 0,
"p_pha_ramp": 0,
"p_lpf_freq": 1,
"p_lpf_ramp": 0,
"p_lpf_resonance": 0,
"p_hpf_freq": 0,
"p_hpf_ramp": 0,
"sound_vol": 0.25,
"sample_rate": 44100,
"sample_size": 8
}
`,
`
{
"oldParams": true,
"wave_type": 1,
"p_env_attack": 0,
"p_env_sustain": 0.2248469135034446,
"p_env_punch": 0,
"p_env_decay": 0.4958265678246262,
"p_base_freq": 0.37756649565996814,
"p_freq_limit": 0,
"p_freq_ramp": 0.14431964296874503,
"p_freq_dramp": 0,
"p_vib_strength": 0,
"p_vib_speed": 0,
"p_arp_mod": 0,
"p_arp_speed": 0,
"p_duty": 1,
"p_duty_ramp": 0,
"p_repeat_speed": 0,
"p_pha_offset": 0,
"p_pha_ramp": 0,
"p_lpf_freq": 1,
"p_lpf_ramp": 0,
"p_lpf_resonance": 0,
"p_hpf_freq": 0,
"p_hpf_ramp": 0,
"sound_vol": 0.25,
"sample_rate": 44100,
"sample_size": 8
}
`,
`
{
"oldParams": true,
"wave_type": 3,
"p_env_attack": 0,
"p_env_sustain": 0.06841022161375787,
"p_env_punch": 0,
"p_env_decay": 0.403,
"p_base_freq": 0.3280483280173474,
"p_freq_limit": 0,
"p_freq_ramp": -0.5887646078252177,
"p_freq_dramp": 0,
"p_vib_strength": 0,
"p_vib_speed": 0,
"p_arp_mod": 0,
"p_arp_speed": 0,
"p_duty": 0,
"p_duty_ramp": 0,
"p_repeat_speed": 0,
"p_pha_offset": 0,
"p_pha_ramp": 0,
"p_lpf_freq": 1,
"p_lpf_ramp": 0,
"p_lpf_resonance": 0,
"p_hpf_freq": 0,
"p_hpf_ramp": 0,
"sound_vol": 0.25,
"sample_rate": 44100,
"sample_size": 8
}
`,
`
{
"oldParams": true,
"wave_type": 3,
"p_env_attack": 0,
"p_env_sustain": 0.0813713430429975,
"p_env_punch": 0,
"p_env_decay": 0.22567589583494954,
"p_base_freq": 0.695525791616842,
"p_freq_limit": 0,
"p_freq_ramp": -0.46141484506510827,
"p_freq_dramp": 0,
"p_vib_strength": 0,
"p_vib_speed": 0,
"p_arp_mod": 0,
"p_arp_speed": 0,
"p_duty": 0,
"p_duty_ramp": 0,
"p_repeat_speed": 0,
"p_pha_offset": 0,
"p_pha_ramp": 0,
"p_lpf_freq": 1,
"p_lpf_ramp": 0,
"p_lpf_resonance": 0,
"p_hpf_freq": 0.025630963865669387,
"p_hpf_ramp": 0,
"sound_vol": 0.25,
"sample_rate": 44100,
"sample_size": 8
}
`,
`
{
"oldParams": true,
"wave_type": 3,
"p_env_attack": 0,
"p_env_sustain": 0.257837057859972,
"p_env_punch": 0.47594063886278615,
"p_env_decay": 0.2934573294998162,
"p_base_freq": 0.23179617917817402,
"p_freq_limit": 0,
"p_freq_ramp": 0,
"p_freq_dramp": 0,
"p_vib_strength": 0,
"p_vib_speed": 0,
"p_arp_mod": 0,
"p_arp_speed": 0,
"p_duty": 0,
"p_duty_ramp": 0,
"p_repeat_speed": 0.6715554672938782,
"p_pha_offset": 0,
"p_pha_ramp": 0,
"p_lpf_freq": 1,
"p_lpf_ramp": 0,
"p_lpf_resonance": 0,
"p_hpf_freq": 0,
"p_hpf_ramp": 0,
"sound_vol": 0.25,
"sample_rate": 44100,
"sample_size": 8
}
`,
`
{
"oldParams": true,
"wave_type": 3,
"p_env_attack": 0,
"p_env_sustain": 0.35,
"p_env_punch": 0.527,
"p_env_decay": 0.694,
"p_base_freq": 0.03498685185395313,
"p_freq_limit": 0,
"p_freq_ramp": 0.0199162440173406,
"p_freq_dramp": 0,
"p_vib_strength": 0.18176693090338614,
"p_vib_speed": 0.4993350372296267,
"p_arp_mod": 0,
"p_arp_speed": 0,
"p_duty": 0,
"p_duty_ramp": 0,
"p_repeat_speed": 0.4255423790055556,
"p_pha_offset": 0,
"p_pha_ramp": 0,
"p_lpf_freq": 1,
"p_lpf_ramp": 0,
"p_lpf_resonance": 0,
"p_hpf_freq": 0,
"p_hpf_ramp": 0,
"sound_vol": 0.25,
"sample_rate": 44100,
"sample_size": 8
}
`,
`
{
"oldParams": true,
"wave_type": 1,
"p_env_attack": 0,
"p_env_sustain": 0.043234146187052895,
"p_env_punch": 0.4932882977952163,
"p_env_decay": 0.25885335733347026,
"p_base_freq": 0.8997029847534574,
"p_freq_limit": 0,
"p_freq_ramp": 0,
"p_freq_dramp": 0,
"p_vib_strength": 0,
"p_vib_speed": 0,
"p_arp_mod": 0.43487715157261797,
"p_arp_speed": 0.5884500505757229,
"p_duty": 0,
"p_duty_ramp": 0,
"p_repeat_speed": 0,
"p_pha_offset": 0,
"p_pha_ramp": 0,
"p_lpf_freq": 1,
"p_lpf_ramp": 0,
"p_lpf_resonance": 0,
"p_hpf_freq": 0,
"p_hpf_ramp": 0,
"sound_vol": 0.25,
"sample_rate": 44100,
"sample_size": 8
}
`,
];

const desired_keys = [
    'wave_type',       'p_env_attack',
    'p_env_sustain',   'p_env_punch',
    'p_env_decay',     'p_base_freq',
    'p_freq_limit',    'p_freq_ramp',
    'p_freq_dramp',    'p_vib_strength',
    'p_vib_speed',     'p_arp_mod',
    'p_arp_speed',     'p_duty',
    'p_duty_ramp',     'p_repeat_speed',
    'p_pha_offset',    'p_pha_ramp',
    'p_lpf_freq',      'p_lpf_ramp',
    'p_lpf_resonance', 'p_hpf_freq',
    'p_hpf_ramp'
];

function trimSound(sound) {
    let result = '';
    sound = JSON.parse(sound);
    for (key of desired_keys) {
        result += `${key}:${sound[key]},`;
    }
    return `{${result}}`;
}

console.log(`const SOUNDS = [\n${SOUNDS.map(trimSound).join(',\n')}\n];`);
