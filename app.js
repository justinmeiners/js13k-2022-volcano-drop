
    const MATERIALS = [
        204,204,204,0,8,145,255,118,8,119,43,21,7,7,7,211,157,118,96,0,156,4,4,4,119,119,119,204,23,0,73,40,23,255,255,255
    ];
    
    const RING_MODEL = {
        verts: [-0.00,-7.59,0.00,-0.00,-6.90,-0.69,-0.00,-6.21,0.00,-0.00,-6.90,0.69,-3.80,-6.57,0.00,-3.45,-5.98,-0.69,-3.11,-5.38,0.00,-3.45,-5.98,0.69,-6.57,-3.79,0.00,-5.98,-3.45,-0.69,-5.38,-3.10,0.00,-5.98,-3.45,0.69,-7.59,-0.00,0.00,-6.90,-0.00,-0.69,-6.21,-0.00,0.00,-6.90,0.00,0.69,-6.57,3.79,-0.00,-5.98,3.45,-0.69,-5.38,3.10,-0.00,-5.98,3.45,0.69,-3.80,6.57,-0.00,-3.45,5.98,-0.69,-3.11,5.38,-0.00,-3.45,5.98,0.69,-0.00,7.59,-0.00,-0.00,6.90,-0.69,-0.00,6.21,-0.00,-0.00,6.90,0.69,3.79,6.57,-0.00,3.45,5.98,-0.69,3.10,5.38,-0.00,3.45,5.98,0.69,6.57,3.79,-0.00,5.98,3.45,-0.69,5.38,3.10,-0.00,5.98,3.45,0.69,7.59,-0.00,0.00,6.90,-0.00,-0.69,6.21,-0.00,0.00,6.90,-0.00,0.69,6.57,-3.80,0.00,5.98,-3.45,-0.69,5.38,-3.11,0.00,5.98,-3.45,0.69,3.79,-6.57,0.00,3.45,-5.98,-0.69,3.11,-5.38,0.00,3.45,-5.98,0.69],
        faces: [4,1,0,1,6,2,6,3,2,3,4,0,8,5,4,5,10,6,10,7,6,7,8,4,8,13,9,13,10,9,14,11,10,11,12,8,12,17,13,17,14,13,18,15,14,19,12,15,16,21,17,17,22,18,22,19,18,23,16,19,24,21,20,25,22,21,22,27,23,23,24,20,28,25,24,25,30,26,30,27,26,27,28,24,32,29,28,29,34,30,34,31,30,31,32,28,36,33,32,37,34,33,34,39,35,35,36,32,40,37,36,37,42,38,42,39,38,43,36,39,40,45,41,41,46,42,46,43,42,47,40,43,44,1,45,1,46,45,46,3,47,3,44,47,4,5,1,1,5,6,6,7,3,3,7,4,8,9,5,5,9,10,10,11,7,7,11,8,8,12,13,13,14,10,14,15,11,11,15,12,12,16,17,17,18,14,18,19,15,19,16,12,16,20,21,17,21,22,22,23,19,23,20,16,24,25,21,25,26,22,22,26,27,23,27,24,28,29,25,25,29,30,30,31,27,27,31,28,32,33,29,29,33,34,34,35,31,31,35,32,36,37,33,37,38,34,34,38,39,35,39,36,40,41,37,37,41,42,42,43,39,43,40,36,40,44,45,41,45,46,46,47,43,47,44,40,44,0,1,1,2,46,46,2,3,3,0,44],
        materials: [1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0]
    };
    
    const EAGLE_MODEL = {
        verts: [0.48,-1.59,-0.18,0.48,-1.59,0.18,-0.48,-1.59,-0.09,-0.48,-1.59,0.18,0.58,1.74,-0.21,0.58,1.74,0.21,-0.58,1.74,-0.21,-0.58,1.74,0.21,-0.00,-1.59,-0.17,-0.00,-1.59,0.26,0.00,1.74,-0.31,0.00,1.74,0.31,-0.32,2.42,0.15,-0.32,2.42,-0.15,0.00,2.42,-0.27,0.00,2.42,0.27,0.32,2.42,0.15,0.32,2.42,-0.15,0.00,2.96,-0.14,-1.14,-3.02,0.21,-0.00,-3.25,0.21,1.14,-3.02,0.21,2.50,-0.45,0.08,2.41,1.22,0.16,0.50,-0.70,0.08,0.50,1.42,0.08,4.39,0.27,0.08,4.40,1.48,0.08,5.67,1.79,0.08,4.23,-0.57,0.14,0.97,-1.40,-0.01,1.51,1.02,0.28,1.75,-0.74,0.08,2.00,-1.22,0.18,5.14,0.59,-0.13,-0.58,0.34,-0.45,-0.58,-0.48,0.21,0.58,0.34,-0.45,0.58,-0.48,0.21,-0.00,-0.48,0.31,0.00,0.34,-0.54,3.41,1.35,0.08,3.34,-0.30,0.08,3.00,-0.67,-0.07,-2.41,-0.45,0.08,-2.33,1.22,0.11,-0.45,-0.70,0.08,-0.41,1.42,0.08,-4.30,0.27,0.08,-4.31,1.39,0.01,-5.58,1.70,0.08,-4.40,-0.57,0.23,-1.12,-1.40,0.16,-1.43,1.25,0.23,-1.66,-0.74,0.08,-1.81,-1.22,-0.03,-5.25,0.59,-0.04,-3.32,1.35,0.08,-3.25,-0.30,0.08,-2.74,-0.67,0.13],
        faces: [2,20,19,35,7,6,4,16,5,38,0,37,10,37,40,39,1,38,3,39,36,35,10,40,11,12,7,3,2,19,12,15,18,13,12,18,10,13,14,10,17,4,11,16,15,6,12,13,0,1,21,31,24,32,16,17,18,14,13,18,17,14,18,15,16,18,41,26,27,1,20,21,3,20,9,0,20,8,27,26,28,42,22,43,32,24,30,22,32,33,22,31,32,28,26,34,35,8,2,36,11,7,39,5,11,40,0,8,5,37,4,2,36,35,26,42,29,23,42,41,46,53,54,57,48,58,49,50,48,58,59,44,54,52,46,44,55,54,44,53,45,50,56,48,48,51,58,45,58,44,2,8,20,35,36,7,4,17,16,38,1,0,10,4,37,39,9,1,3,9,39,35,6,10,11,15,12,10,6,13,10,14,17,11,5,16,6,7,12,31,25,24,41,42,26,1,9,20,3,19,20,0,21,20,22,23,31,35,40,8,36,39,11,39,38,5,40,37,0,5,38,37,2,3,36,23,22,42,46,47,53,57,49,48,44,54,53,45,57,58],
        materials: [5,3,4,3,3,3,3,3,4,5,2,2,4,4,4,4,5,3,2,2,2,2,3,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,3,4,3,3,3,3,3,4,4,4,4,4,3,3,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3]
    };
    
    const PLANE_MODEL = {
        verts: [16.25,-3.54,-0.01,-16.25,-3.54,-0.01,16.25,1.67,-0.30,16.25,1.67,0.30,-16.25,1.67,-0.30,-16.25,1.67,0.30,-16.25,2.29,0.14,-16.25,2.29,-0.14,16.25,2.29,-0.14,16.25,2.29,0.14,2.24,-2.69,-3.71,2.06,-2.69,-0.14,-2.13,-2.69,-3.71,-1.96,-2.69,-0.14,2.24,1.36,-3.50,1.82,2.08,-0.14,-2.13,1.36,-3.50,-1.71,2.08,-0.14,-1.36,-2.69,-5.07,1.47,-2.69,-5.07,-1.36,2.08,-5.07,1.47,2.08,-5.07,-1.46,3.32,-1.39,-1.96,4.24,-3.34,2.06,4.24,-3.34,1.57,3.32,-1.39,1.47,4.59,-4.67,-1.36,4.59,-4.67,-1.10,6.25,-1.62,-1.48,6.36,-3.15,1.59,6.36,-3.15,1.21,6.25,-1.62,1.13,6.36,-4.19,-1.03,6.36,-4.19,-0.61,-19.59,-3.36,0.72,-19.59,-3.36,0.72,-19.59,-2.23,-0.61,-19.59,-2.23,-0.41,-19.59,-3.62,0.52,-19.59,-3.62,-0.54,7.93,-1.67,-0.56,7.93,-2.73,0.67,7.93,-2.73,0.65,7.93,-1.67,5.45,-19.29,-2.60,-5.45,-19.29,-2.60,5.45,-16.62,-3.14,5.45,-16.62,-2.53,-5.45,-16.62,-3.14,-5.45,-16.62,-2.53,-5.45,-16.01,-2.84,5.45,-16.01,-2.84,0.00,-19.29,-2.60,0.00,-14.08,-3.14,0.00,-14.08,-2.53,0.00,-13.47,-2.84,0.01,-19.37,2.58,-0.30,-16.70,2.58,0.31,-16.70,2.58,0.01,-16.09,2.58,0.01,-19.37,-2.53,-0.30,-14.17,-1.90,0.31,-14.17,-1.90,0.01,-13.55,-1.90,1.90,-0.81,-3.73,1.39,-0.44,-4.12,1.34,-1.18,-4.05,4.19,-1.41,-7.06,-1.18,-0.83,-3.65,-0.67,-1.20,-4.05,-0.62,-0.46,-3.97,-3.47,-1.41,-6.98,0.06,2.97,-4.42,-0.24,2.46,-4.67,0.27,2.46,-4.67,0.03,4.86,-7.12,4.43,-2.48,-7.68,4.59,-2.95,-6.77,3.84,-2.48,-7.68,3.68,-2.95,-6.77,4.43,-0.87,-7.68,4.59,-0.66,-6.77,3.84,-0.87,-7.68,3.68,-0.66,-6.77,-3.11,-2.48,-7.68,-2.95,-2.95,-6.77,-3.70,-2.48,-7.68,-3.87,-2.95,-6.77,-3.11,-0.87,-7.68,-2.95,-0.66,-6.77,-3.70,-0.87,-7.68,-3.87,-0.66,-6.77,0.29,4.17,-7.77,0.45,3.59,-6.91,-0.30,4.17,-7.77,-0.46,3.59,-6.91,0.29,5.76,-7.57,0.45,5.86,-6.64,-0.30,5.76,-7.57,-0.46,5.86,-6.64,2.19,-2.65,-1.47,-2.00,-2.65,-1.47,-1.92,0.97,-1.82,2.03,0.97,-1.82],
        faces: [1,5,4,2,9,3,2,3,0,4,0,1,1,3,5,6,8,7,4,8,2,3,6,5,5,7,4,13,36,11,13,102,101,21,24,14,103,11,100,14,19,21,13,15,17,20,19,18,16,18,12,12,38,34,15,22,17,26,33,32,27,29,33,20,23,27,21,27,26,32,41,42,33,29,41,25,28,22,23,28,29,26,30,24,24,31,25,36,34,35,35,38,39,10,39,19,37,13,101,100,11,36,19,38,18,40,42,41,31,40,28,28,41,29,30,32,42,31,42,43,45,49,48,47,46,51,46,47,44,52,46,44,52,47,54,53,50,55,54,51,55,48,49,50,54,50,49,53,51,46,49,52,54,48,52,45,56,58,57,61,59,63,57,58,59,62,59,58,58,60,62,57,60,56,64,67,65,65,67,66,66,67,64,68,71,69,69,71,70,70,71,68,72,75,73,73,75,74,74,75,72,76,79,78,78,83,82,83,80,82,81,76,80,82,76,78,79,81,83,84,87,86,86,91,90,91,88,90,89,84,88,90,84,86,91,85,89,92,95,94,94,99,98,99,96,98,97,92,96,98,92,94,99,93,97,103,10,14,12,102,16,17,22,102,25,15,103,14,25,103,16,22,23,12,37,101,36,10,100,2,8,9,4,2,0,1,0,3,6,9,8,4,7,8,3,9,6,5,6,7,13,37,36,13,17,102,21,26,24,103,15,11,14,10,19,13,11,15,20,21,19,16,20,18,12,18,38,15,25,22,26,27,33,27,23,29,20,16,23,21,20,27,32,33,41,25,31,28,23,22,28,26,32,30,24,30,31,36,37,34,35,34,38,10,35,39,19,39,38,40,43,42,31,43,40,28,40,41,31,30,42,52,53,46,52,44,47,53,48,50,54,47,51,54,55,50,53,55,51,49,45,52,48,53,52,61,57,59,62,63,59,58,56,60,57,61,60,76,77,79,78,79,83,83,81,80,81,77,76,82,80,76,79,77,81,84,85,87,86,87,91,91,89,88,89,85,84,90,88,84,91,87,85,92,93,95,94,95,99,99,97,96,97,93,92,98,96,92,99,95,93,103,100,10,12,101,102,14,24,25,16,102,22,12,34,37,36,35,10],
        materials: [6,6,6,8,8,8,8,8,6,8,7,8,7,8,8,8,8,8,7,8,8,8,8,8,8,6,6,8,6,8,8,8,8,8,8,6,6,6,8,6,8,8,8,8,6,8,8,8,8,8,6,8,8,8,8,8,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,8,8,8,8,8,6,8,8,8,8,8,6,8,8,7,7,8,8,8,8,6,8,8,8,8,8,6,8,7,8,7,8,8,8,8,8,7,8,8,8,8,8,6,6,8,6,8,8,8,8,6,6,6,6,8,6,8,8,8,8,6,8,8,8,6,6,8,8,8,8,8,6,8,8,8,8,8,6,8,8,8,8,8,6,8,8,8,8,8,8]
    };
    
    const SKYDIVER_BODY_MODEL = {
        verts: [-0.62,3.23,-0.20,-0.62,1.75,-0.73,0.68,3.23,-0.20,0.68,1.75,-0.73,-0.63,2.80,1.01,-0.63,1.32,0.48,0.67,2.80,1.01,0.67,1.32,0.48,0.98,-1.78,0.50,0.98,1.38,0.50,-1.00,-1.78,0.50,-1.00,1.38,0.50,0.98,-1.78,-0.80,0.98,1.38,-0.80,-1.00,-1.78,-0.80,-1.00,1.38,-0.80,0.43,0.88,0.96,0.43,-1.25,0.96,0.61,0.88,0.86,0.61,-1.25,0.86,0.61,0.88,0.66,0.61,-1.25,0.66,0.43,0.88,0.56,0.43,-1.25,0.56,0.26,0.88,0.66,0.26,-1.25,0.66,0.26,0.88,0.86,0.26,-1.25,0.86,-0.07,0.83,0.94,-0.07,-1.29,0.94,0.13,0.83,0.92,0.13,-1.29,0.92,0.21,0.83,0.74,0.21,-1.29,0.74,0.10,0.83,0.58,0.10,-1.29,0.58,-0.10,0.83,0.59,-0.10,-1.29,0.59,-0.19,0.83,0.77,-0.19,-1.29,0.77,-0.62,0.92,0.71,-0.62,-1.21,0.71,-0.56,0.92,0.90,-0.56,-1.21,0.90,-0.37,0.92,0.95,-0.37,-1.21,0.95,-0.23,0.92,0.81,-0.23,-1.21,0.81,-0.28,0.92,0.62,-0.28,-1.21,0.62,-0.48,0.92,0.57,-0.48,-1.21,0.57,-0.40,0.74,1.08,-0.40,-1.39,1.08,-0.33,0.74,1.26,-0.33,-1.39,1.26,-0.13,0.74,1.29,-0.13,-1.39,1.29,-0.01,0.74,1.13,-0.01,-1.39,1.13,-0.08,0.74,0.94,-0.08,-1.39,0.94,-0.28,0.74,0.92,-0.28,-1.39,0.92,0.13,0.81,1.26,0.13,-1.31,1.26,0.33,0.81,1.29,0.33,-1.31,1.29,0.46,0.81,1.13,0.46,-1.31,1.13,0.39,0.81,0.95,0.39,-1.31,0.95,0.19,0.81,0.92,0.19,-1.31,0.92,0.06,0.81,1.07,0.06,-1.31,1.07,0.54,-0.66,1.19,0.82,-0.65,0.52,0.54,-0.04,1.19,0.82,-0.02,0.52,0.24,-0.65,1.41,0.24,-0.02,1.41,-0.34,-0.65,1.33,-0.34,-0.02,1.33,-0.57,-0.65,1.10,-0.57,-0.02,1.10,-0.78,-0.68,0.51,-0.78,-0.06,0.51],
        faces: [0,3,1,0,6,2,5,0,1,1,7,5,7,4,5,2,7,3,9,10,8,11,14,10,14,13,12,12,9,8,14,8,10,11,13,15,17,18,16,19,20,18,21,22,20,23,24,22,25,23,21,25,26,24,27,16,26,18,22,26,29,30,28,31,32,30,33,34,32,35,36,34,35,33,29,37,38,36,39,28,38,36,38,30,41,42,40,43,44,42,45,46,44,47,48,46,47,45,41,49,50,48,51,40,50,42,46,50,53,54,52,55,56,54,57,58,56,59,60,58,53,61,57,61,62,60,63,52,62,58,60,62,65,66,64,67,68,66,69,70,68,71,72,70,73,71,69,73,74,72,75,64,74,72,74,66,77,78,76,78,80,76,81,82,80,83,84,82,84,87,86,0,2,3,0,4,6,5,4,0,1,3,7,7,6,4,2,6,7,9,11,10,11,15,14,14,15,13,12,13,9,14,12,8,11,9,13,17,19,18,19,21,20,21,23,22,23,25,24,21,19,25,19,17,25,17,27,25,25,27,26,27,17,16,26,16,18,18,20,22,22,24,26,29,31,30,31,33,32,33,35,34,35,37,36,33,31,29,29,39,37,37,35,29,37,39,38,39,29,28,38,28,30,30,32,34,34,36,30,41,43,42,43,45,44,45,47,46,47,49,48,45,43,41,41,51,49,49,47,41,49,51,50,51,41,40,50,40,42,42,44,46,46,48,50,53,55,54,55,57,56,57,59,58,59,61,60,57,55,53,53,63,61,61,59,57,61,63,62,63,53,52,62,52,54,54,56,62,56,58,62,65,67,66,67,69,68,69,71,70,71,73,72,69,67,65,65,75,69,75,73,69,73,75,74,75,65,64,74,64,66,66,68,70,70,72,66,77,79,78,78,81,80,81,83,82,83,85,84,84,85,87],
        materials: [0,0,0,0,0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10]
    };
    
    const SKYDIVER_ARM_MODEL = {
        verts: [0.13,-0.47,-0.43,0.13,-0.47,0.43,0.13,0.47,-0.43,0.13,0.47,0.43,3.21,-0.47,-0.43,3.21,-0.47,0.43,3.21,0.47,-0.43,3.21,0.47,0.43,-0.03,0.31,-0.28,-0.03,-0.31,-0.28,-0.03,-0.31,0.28,-0.03,0.31,0.28],
        faces: [2,11,3,3,6,2,7,4,6,5,0,4,6,0,2,3,5,7,10,8,9,0,10,9,3,10,1,2,9,8,2,8,11,3,7,6,7,5,4,5,1,0,6,4,0,3,1,5,10,11,8,0,1,10,3,11,10,2,0,9],
        materials: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    };
    
    const SKYDIVER_LEG_MODEL = {
        verts: [0.13,-0.53,-0.43,0.13,-0.53,0.43,0.13,0.53,-0.43,0.13,0.53,0.43,4.16,-0.53,-0.43,4.16,-0.53,0.43,4.16,0.53,-0.43,4.16,0.53,0.43,-0.03,0.34,-0.28,-0.03,-0.34,-0.28,-0.03,-0.34,0.28,-0.03,0.34,0.28],
        faces: [2,11,3,3,6,2,7,4,6,5,0,4,6,0,2,3,5,7,10,8,9,0,10,9,3,10,1,0,8,2,2,8,11,3,7,6,7,5,4,5,1,0,6,4,0,3,1,5,10,11,8,0,1,10,3,11,10,0,9,8],
        materials: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    };
    
    const SPHERE_MODEL = {
        verts: [0.00,0.00,-2.00,1.45,-1.05,-0.89,-0.55,-1.70,-0.89,-1.79,0.00,-0.89,-0.55,1.70,-0.89,1.45,1.05,-0.89,0.55,-1.70,0.89,-1.45,-1.05,0.89,-1.45,1.05,0.89,0.55,1.70,0.89,1.79,0.00,0.89,0.00,0.00,2.00,-0.32,-1.00,-1.70,0.85,-0.62,-1.70,0.53,-1.62,-1.05,1.70,0.00,-1.05,0.85,0.62,-1.70,-1.05,0.00,-1.70,-1.38,-1.00,-1.05,-0.32,1.00,-1.70,-1.38,1.00,-1.05,0.53,1.62,-1.05,1.90,-0.62,0.00,1.90,0.62,0.00,0.00,-2.00,0.00,1.18,-1.62,0.00,-1.90,-0.62,0.00,-1.18,-1.62,0.00,-1.18,1.62,0.00,-1.90,0.62,0.00,1.18,1.62,0.00,0.00,2.00,0.00,1.38,-1.00,1.05,-0.53,-1.62,1.05,-1.70,0.00,1.05,-0.53,1.62,1.05,1.38,1.00,1.05,0.32,-1.00,1.70,1.05,0.00,1.70,-0.85,-0.62,1.70,-0.85,0.62,1.70,0.32,1.00,1.70],
        faces: [0,13,12,1,13,15,0,12,17,0,17,19,0,19,16,1,15,22,2,14,24,3,18,26,4,20,28,5,21,30,1,22,25,2,24,27,3,26,29,4,28,31,5,30,23,6,32,37,7,33,39,8,34,40,9,35,41,10,36,38,38,41,11,38,36,41,36,9,41,41,40,11,41,35,40,35,8,40,40,39,11,40,34,39,34,7,39,39,37,11,39,33,37,33,6,37,37,38,11,37,32,38,32,10,38,23,36,10,23,30,36,30,9,36,31,35,9,31,28,35,28,8,35,29,34,8,29,26,34,26,7,34,27,33,7,27,24,33,24,6,33,25,32,6,25,22,32,22,10,32,30,31,9,30,21,31,21,4,31,28,29,8,28,20,29,20,3,29,26,27,7,26,18,27,18,2,27,24,25,6,24,14,25,14,1,25,22,23,10,22,15,23,15,5,23,16,21,5,16,19,21,19,4,21,19,20,4,19,17,20,17,3,20,17,18,3,17,12,18,12,2,18,15,16,5,15,13,16,13,0,16,12,14,2,12,13,14,13,1,14],
        materials: [11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11]
    };
    
const WHITE_MATERIAL_START = MATERIALS.length / 3;
MATERIALS.push(255, 255, 255);

// MATH/UTILS
// ============================================

const F32 = Float32Array;

function copy_array(from, from_offset, to, to_offset, n) {
    for (var i = 0; i < n; ++i) to[to_offset + i] = from[from_offset + i];
}

function rand_0_1() {
    return Math.random();
}

function random_int(max) {
  return (rand_0_1() * max) | 0;
}

function random_range(range) {
    return (2 * rand_0_1() - 1) * range;
}

function gen_triangle_fan(f, segments, material) {
    var verts = [0, 0, 0];
    var faces = [];

    let angle = (2 * Math.PI) / segments;

    for (var i = 0; i < segments; ++i) {
        const a = angle * i;
        const r = f(a);
        verts.push(r * Math.cos(a), r * Math.sin(a), 0);
    }

    for (var i = 0; i < segments; ++i) {
        // shifted by one for center point
        faces.push(0, i + 1, (i + 1) % segments + 1);
    }
    return {
        verts, faces, materials: Array(segments).fill(material)
    };
}


function clamp(t, a, b) {
    if (t < a) {
        return a;
    } else if (t > b) {
        return b;
    } else {
        return t;
    }
}

function add(a, b, out) {
    for (var i = 0; i < a.length; ++i) out[i] = a[i] + b[i];
}

function sub(a, b, out) {
    for (var i = 0; i < a.length; ++i) out[i] = a[i] - b[i];
}

function mul(a, b, out) {
	for (var i = 0; i < a.length; ++i) out[i] = a[i] * b[i];
}

function equiv(a, b, epsilon) {
    for (var i = 0; i < a.length; ++i) {
        if (Math.abs(a[i] - b[i]) > epsilon) return false;
    }
    return true;
}

function scale(s, a) {
    for (var i = 0; i < a.length; ++i) a[i] *= s;
    return a;
}

function interp(t, a, b, out) {
    for (var i = 0; i < a.length; ++i) out[i] = (1 - t) * a[i] + t * b[i];
}

function angle_between(a, b) {
    return Math.acos(clamp(dot(a, b), -1, 1));
}

function norm(v) {
    return Math.sqrt(dot(v, v));
}

function distance(a, b) {
    var delta = [];
    sub(a, b, delta);
    return norm(delta);
}

function distance_xy(a, b) {
	var delta = [];
	sub(a, b, delta);
	delta[2] = 0;
    return norm(delta); 
}

function cross(a, b, out) {
	out[0] = a[1] * b[2] - a[2] * b[1];
	out[1] = a[2] * b[0] - a[0] * b[2];
	out[2] = a[0] * b[1] - a[1] * b[0];
}

function dot(a, b) {
	return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function normalize(in_out) {
    return scale(1 / norm(in_out), in_out);
}

function transform_identity(in_out) {
    in_out.fill(0);
    in_out[0] = 1;
    in_out[5] = 1;
    in_out[10] = 1;
    in_out[15] = 1;
    return in_out;
}

function transform_create() {
    return transform_identity(new F32(16));
}

const TRANSFORM_X = 3;
const TRANSFORM_Y = 7;
const TRANSFORM_Z = 11;

function transform_up(m) {
    return [m[2], m[6], m[10]];
}

function transform_position(m) {
	return [m[TRANSFORM_X], m[TRANSFORM_Y], m[TRANSFORM_Z]];
}

function transform_translate(position, out) {
    out[TRANSFORM_X] = position[0];
    out[TRANSFORM_Y] = position[1];
    out[TRANSFORM_Z] = position[2];
    return out;
}

function transform_scale(s, transform) {
	for (var row = 0; row < 3; ++row) {
		for (var col = 0; col < 3; ++col) {
			transform[row * 4 + col] *= s;
		}
	}
};

function transform_rotate(angle, axis, m) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);

    if (axis == 2) {
        m[0] = c;
        m[4] = s;

        m[1] = -s;
        m[5] = c;
    } else if (axis == 1) {
        m[0] = c;
        m[8] = s;

        m[2] = -s;
        m[10] = c;
    } else if (axis == 0) {
        m[5] = c;
        m[9] = s;

        m[6] = -s;
        m[10] = c;
    }
    return m;
}

function transform_transpose(m) {
    for (var col = 0; col < 4; ++col) {
        for (var row = 0; row < 4; ++row) {
            var temp = m[row * 4 + col];
            m[row * 4 + col] = m[col * 4 + row];
            m[col * 4 + row] = temp;
        }
    }
}

// https://www.geertarien.com/blog/2017/07/30/breakdown-of-the-lookAt-function-in-OpenGL/
function transform_look(from, to, up, out) {
    var zaxis = [];
    sub(to, from, zaxis);
    normalize(zaxis);

    var xaxis = [];
    cross(zaxis, up, xaxis);
    normalize(xaxis);

    var yaxis = [];
    cross(xaxis, zaxis, yaxis);

    for (var i = 0; i < 3; ++i) {
        out[i] = xaxis[i];
        out[i + 4] = yaxis[i];
        out[i + 8] = -zaxis[i];
        out[i + 12] = 0;
    }
    out[3] = -dot(xaxis, from);
    out[7] = -dot(yaxis, from);
    out[11] = dot(zaxis, from);
    out[15] = 1;
}

function transform_perspective(aspect, angle, near, far, out) {
    const plane = Math.tan(angle / 2.0);
    out[0] = 1.0 / (aspect * plane);
    out[5] = 1.0 / plane;
    out[10] = -(near + far) / (far - near);
    out[11] = -2.0 * near * far / (far - near);
    out[14] = -1;
    return out;
}

function transform_apply(matrix, vertex, out) {
    out.fill(0);
    for (let row = 0; row < 4; ++row) {
        for (let col = 0; col < 4; ++col) {
            out[row] += matrix[row * 4 + col] * vertex[col];
        }
    }
}

function transform_multiply(a, b, out) {
    for (var col = 0; col < 4; ++col) {
        for (var row = 0; row < 4; ++row) {
            var i = row + col * 4;
            out[i] = 0;
            for (var k = 0; k < 4; ++k) {
                out[i] += a[k + col * 4] * b[row + k * 4];
            }
        }
    }
}

// RENDERER
// ============================================

function clip_polygon(vertices, out) {
    // Only need to clip against near plane.
    
    const N = vertices.length;
    for (var i = 0; i < N; i += 4) {
        const a_offset = i;
        const b_offset = (i + 4) % N; 

        const a_w = vertices[a_offset + 3];
        const b_w = vertices[b_offset + 3];

        const a_z = vertices[a_offset + 2] + a_w;
        const b_z = vertices[b_offset + 2] + b_w;

        if (a_z > 0) {
            // A is inside. Save it.
            for (var j = 0; j < 4; ++j) {
                out.push(vertices[a_offset + j]);
            }
        }

        if (a_z * b_z < 0) {
            // cross the near plane. Find intersection point.
            const t = -a_z / (b_z - a_z);

            for (var j = 0; j < 4; ++j) {
                const delta = vertices[b_offset + j] - vertices[a_offset + j];
                out.push(vertices[a_offset + j] + t * delta);
            }
        }
    }
}

function perspective_divide(coords, out) {
    var z_avg = 0.0;
    for (var i = 0; i < coords.length; i += 4) {
        const w_coord = coords[i + 3];
        for (var j = 0; j < 3; ++j) out.push(coords[i + j] / w_coord);
        z_avg += coords[i + 2];
    }
    return z_avg / (coords.length / 4);
}

function mesh_3d_to_polygons(model_matrix, camera_matrix, vertices, FACES, COLORS) {
    const FACE_ELEMENTS = 3;

    const N = vertices.length / 3;
    const M = FACES.length / FACE_ELEMENTS;

    // == VERTEX TRANSFORM ==

    // temporary elements
    let temp1 = new F32(4);
    let temp2 = new F32(4);

    // output buffer
    let clip = new F32(N * 4);

    // multiplying these matrices first saves a lot of computation
    const mvp_matrix = transform_create();
    transform_multiply(camera_matrix, model_matrix, mvp_matrix);

    for (var i = 0; i < N; ++i) {
        // copy 3d vector into 4d
        temp1[3] = 1;
        copy_array(vertices, i * 3, temp1, 0, 3);
        // local -> eye space -> clip_space
        transform_apply(mvp_matrix, temp1, temp2);
        copy_array(temp2, 0, clip, i * 4, 4);
    }

    // == PRIMITIVE ASSEMBLY ==
    var polygons = [];

    // temporary elements 
    var face_clip = new F32(FACE_ELEMENTS * 4);

    var p0 = new F32(4);
    var p1 = new F32(3);
    var p2 = new F32(3);
    var e1 = new F32(3);
    var e2 = new F32(3);

    let clip_output = [];

    for (var i = 0; i < M; ++i) {
        // assemble face
        copy_array(clip, FACES[i * FACE_ELEMENTS] * 4, face_clip, 0, 4);
        copy_array(clip, FACES[i * FACE_ELEMENTS + 1] * 4, face_clip, 4, 4);
        copy_array(clip, FACES[i * FACE_ELEMENTS + 2] * 4, face_clip, 8, 4);

        // clip against near plane
        clip_output.length = 0;
        clip_polygon(face_clip, clip_output);

        if (clip_output.length < 3) continue;

        // divide by w to get screeen space
        var points = [];
        const avg_z = perspective_divide(clip_output, points);

        // face normal
        copy_array(vertices, FACES[i * FACE_ELEMENTS] * 3, p0, 0, 3);
        copy_array(vertices, FACES[i * FACE_ELEMENTS + 1] * 3, p1, 0, 3);
        copy_array(vertices, FACES[i * FACE_ELEMENTS + 2] * 3, p2, 0, 3);

        // get edge vectors
        sub(p1, p0, e1);
        sub(p2, p0, e2);

        cross(e1, e2, temp1);
        temp1[3] = 0;
        
        // local -> eye space
        transform_apply(model_matrix, temp1, temp2);
        normalize(temp2);
        
        // Back face culling. Is the eye behind the face plane?
        // https://www.cs.helsinki.fi/group/goa/render/piilopinnat/cull.html
        p0[3] = 1;
        transform_apply(model_matrix, p0, temp1);
        // CULL
        if (dot(temp1, temp2) >= 0) continue;

        polygons.push([ points, temp2.slice(0, 3), COLORS[i], avg_z ]);
    }

    return polygons;
}

function toCssColor(rgb) {
	return 'rgba(' + rgb.join(',') + ')';
}

function fill_polygons(polygons, tint, light_dir) {
    if (polygons.length == 0) return;
	// == DEPTH SORT ==
	polygons.sort((a, b) => b[3] - a[3]);

    // == BATCH OPTIMIZATION ==
    // try to do one fill for sev
    var current_color_index = -1;
    var current_normal = null;
	let rgb = new F32(4);

	polygons.forEach(([points, normal, color_index, _]) => {
        if (current_color_index != color_index ||
            !equiv(normal, current_normal, 0.005)) {

            // fill the previous batch
            if (current_color_index != -1) ctx.fill();

            current_color_index = color_index;
            current_normal = normal;

            // compute new rgb color
            copy_array(MATERIALS, color_index * 3, rgb, 0, 3);
            const light = Math.min(1, light_dir ? Math.max(0.45, dot(normal, light_dir)) : 1);
            scale(light, rgb);
            rgb[3] = 1;
            if (tint) mul(tint, rgb, rgb);

            // set fill for next batch
		    ctx.fillStyle = toCssColor(rgb);
		    ctx.beginPath();
        }

        // add subpath to current batch
	    ctx.moveTo(points[0], points[1] );
		for (var j = 3; j < points.length; j += 3) ctx.lineTo(points[j + 0], points[j + 1]);
		ctx.closePath();
	});

    // fill the last batch
    ctx.fill();
}

// GAME
// ============================================

const TIME_PER_FRAME = 16;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d", { alpha: false, antialias: false });

const JS_LOOP_TIMER = setInterval(sim_loop, TIME_PER_FRAME);

const KEYS = {};

window.addEventListener('keydown', (evt) => KEYS[evt.keyCode] = true);
window.addEventListener('keyup', (evt) => {
    KEYS[evt.keyCode] = false;
    if (evt.keyCode == 81) sim_reset();
});

const MODE_MENU = 0;
const MODE_TUTORIAL = 1;
const MODE_GAME = 2;
const MODE_FAIL = 3;
const MODE_WIN = 4;

const GAME = {
    camera: transform_create(),
    perspective: transform_perspective(4.0 / 3.0, 0.785, 1.0, 20.0, transform_create()),
    sun: normalize([0, -0.5, 1]),
    initial_height: 3600,
    diver: null
};

const ENTITY_SCENERY = 1;
const ENTITY_DIVER = 2;
const ENTITY_RING = 4;
const ENTITY_CONTROLLER = 8;
const ENTITY_BIRD = 16;
const ENTITY_INTRO = 32;
const ENTITY_TARGET = 64;
const ENTITY_LIMB = 128;
const ENTITY_FLARE = 256;
const ENTITY_CANNON = 512;
const ENTITY_PLANE = 1024;

/**
 * @constructor
 * @param{number} type
 * @param{Array=} position
 */
function Entity(type, position) {
    this.type = type;
    this.transform = transform_create();
    this.modelview_matrix = transform_create();
    if (position) {
        this.position = position;
        transform_translate(position, this.transform);
    }

    this.colliders = [];
    this.transformed_colliders = [];

    this.roll_matrix = transform_identity(transform_create());
    this.pitch_matrix = transform_identity(transform_create());
}


/**
 * @constructor
 * @extends{Entity}
 */
function Diver(position) {
    Entity.call(this, ENTITY_DIVER, position);

	this.model = SKYDIVER_BODY_MODEL;

    this.dive_factor = 0;

    this.falling = false;

    this.roll_target = 0;
    this.pitch_target = 0;

    this.roll = 0;
    this.pitch = 0;

    this.hp = 100;


	this.colliders = [
        { center: [0, 0, 0], radius: 1 },
        { center: [0, 2, 0], radius: 1 }
    ];

    this.spawn = () => {
        sim_spawn(new Limb(this, SKYDIVER_ARM_MODEL, [1, 0.6, 0.05], [1, 0.1, 0.2]));
        sim_spawn(new Limb(this, SKYDIVER_ARM_MODEL, [-1, 0.6, 0.05], [-1, 0.1, 0.2]));
        sim_spawn(new Limb(this, SKYDIVER_LEG_MODEL, [0.5, -1.75, 0.05], [0.25, -1, 0.3]));
        sim_spawn(new Limb(this, SKYDIVER_LEG_MODEL, [-0.5, -1.75, 0.05], [-0.25, -1, 0.3]));

        this.powerup_entity = sim_spawn(new BirdPower(this, [0, 0, 1.3]));
        GAME.diver = this;
    };

    this.hurt_factor = 0;
    this.tint = [1, 1, 1];

    this.powerup_time = 0;
    this.powerup_entity = null;


    this.hurt = (dmg) => {
        this.hp = Math.max(this.hp - dmg, 0);
        this.hurt_factor = 1;
        if (this.hp <= 0) sim_set_mode(MODE_FAIL);
    };

    this.prepare_spin = () => {
        this.rotate = this.transform.slice();

        const temp1 = transform_identity(transform_create());
        transform_rotate(random_range(0.08), 0, temp1);

        const temp2 = transform_identity(transform_create());
        transform_rotate(random_range(0.08), 1, temp2);

        this.tilt = transform_create();
        transform_multiply(temp1, temp2, this.tilt);
    };

    this.keyboard_move = () => {
        const VELOCITY = 0.15 * (1.0 - 0.5 * this.dive_factor);

        this.roll_target *= 0.25;
        this.pitch_target *= 0.25;

        if (KEYS[16]) {
            this.dive_factor = clamp(this.dive_factor + 0.02, 0, 1);
        } else {
            this.dive_factor *= 0.95;
        }

        if (KEYS[40]) {
            this.position[1] -= VELOCITY;
            this.pitch_target = 0.2;
        } else if (KEYS[38]) {
            this.position[1] += VELOCITY;
            this.pitch_target = -0.2;
        }

        if (KEYS[37]) {
            this.position[0] -= VELOCITY;
            this.roll_target = 0.2;
        } else if (KEYS[39]) {
            this.position[0] += VELOCITY;
            this.roll_target = -0.2;
        }

        this.roll += clamp(this.roll_target - this.roll, -0.02, 0.02);
        this.pitch += clamp(this.pitch_target - this.pitch, -0.02, 0.02);

        transform_rotate(this.roll, 1, this.roll_matrix);
        transform_rotate(this.pitch + this.dive_factor * -Math.PI / 2, 0, this.pitch_matrix);
        transform_multiply(this.roll_matrix, this.pitch_matrix, this.transform);
    };

    this.powerup = () => {
        this.powerup_time = 900;
    };


	this.update = () => {
        this.powerup_time = Math.max(0, this.powerup_time - 1);
        const POWERUP = this.powerup_time > 0;
        this.powerup_entity.model = POWERUP ? EAGLE_MODEL : null;

        if (this.falling) {
            const TERMINAL = POWERUP ? 0.75 : 0.5;

            GAME.fall_velocity = clamp(GAME.fall_velocity + 0.005, 0, TERMINAL + this.dive_factor * 0.25);
        } else {
            GAME.fall_velocity = 0;
        }

        GAME.fall_height -= GAME.fall_velocity;

        this.hurt_factor = clamp(this.hurt_factor - 0.05, 0, 1);
        interp(this.hurt_factor, [1, 1, 1], [1, 0, 0], this.tint);

        if (GAME.mode == MODE_MENU) {

        } else {
            if (GAME.time > 0) {
                GAME.time = Math.max(GAME.time - 16, 0); 

                if (GAME.time <= 0) {
                    sim_spawn(new Explosion(this.position, () => this.type = 0));
                    sim_set_mode(MODE_FAIL);
                }
            }
        }

        if (GAME.mode == MODE_FAIL) {
            if (!this.rotate) this.prepare_spin();
            transform_multiply(this.tilt, this.rotate, this.transform);
            this.rotate = this.transform.slice();
        } else if (GAME.mode == MODE_TUTORIAL ||
                   GAME.mode == MODE_GAME) {
            this.keyboard_move();
        
            if (GAME.fall_height <= 5) {
                sim_set_mode(MODE_FAIL);
                this.type = 0;
            }
        }
        transform_translate(this.position, this.transform);
	};
}

function along_vector_transform(dir, up, out) {
    transform_identity(out);

    var side = [];
    cross(up, dir, side);
    normalize(side);

    var u = [];
    cross(dir, side, u);

    for (var i = 0; i < 3; ++i) {
        out[i * 4] = dir[i];
        out[i * 4 + 1] = side[i];
        out[i * 4 + 2] = u[i];
    }
}

function slerp(v0, v1, t, out) {
    const angle = angle_between(v0, v1);
    const sinOfAngle = Math.sin(angle);

    if (Math.abs(sinOfAngle) > 0.0001) {
        var tmp1 = v0.slice();
        scale(Math.sin((1 - t) * angle) / sinOfAngle, tmp1);

        var tmp2 = v1.slice();
        scale(Math.sin(t * angle) / sinOfAngle, tmp2);
        add(tmp1, tmp2, out);
    } else {
        copy_array(v0, 0, out, 0, 3);
    }
}

/**
 * @constructor
 * @extends{Entity}
 */

function Limb(parent, model, position, target) {
    Entity.call(this, ENTITY_LIMB, position);
    this.model = model;

    this.offset = [position[0], position[1], position[2], 1];
    this.target_dir = normalize(target);
    this.world_target = Array(4);
    this.dir = this.target_dir.slice(); 
	this.colliders = [
        { center: [1, 0, 0], radius: 0.4 }
    ];

    this.target = parent

    this.hurt = (dmg) => {
        this.dir[2] += 0.5;
        this.target?.hurt(dmg);
    }

    this.powerup = () => {
        this.target?.powerup();
    };

    this.update = () => {
        if (!this.target) {
            this.type = 0;
            return;
        }

        this.tint = this.target.tint;

        // get joint in position
        transform_apply(this.target.transform, this.offset, this.position);

        // rotate target to match body
        var temp = [this.target_dir[0], this.target_dir[1], this.target_dir[2], 0];
        transform_apply(this.target.transform, temp, this.world_target);

        // add error
        const air_force = GAME.fall_velocity * 0.1;
        add(this.dir, [0, 0, air_force * (1.0 - this.dir[2])], this.dir);

        // move towards target position
        normalize(this.dir);
        slerp(this.dir, this.world_target, 0.04, this.dir);

        // rotate to follow direction
        along_vector_transform(this.dir, transform_up(this.target.transform), this.transform);
        transform_translate(this.position, this.transform);
    };
}


const RING_SPAWN_Z = -250;

function make_plane(x, y, z) {
    const angle = random_range(Math.PI);
    return sim_spawn(new Plane([x + 90.0 * Math.cos(angle), y + 90.0 * Math.sin(angle), z]));
}


/**
 * @constructor
 * @extends{Entity}
 */
function AutoController() {
    Entity.call(this, ENTITY_CONTROLLER);

	GAME.time = GAME.hard ? 13000 : 25000;

    this.difficulty = 0.5;
    this.intensity = 0.25;

    this.last_x = 0;
    this.last_y = 0;

    this.previous_ring_height = GAME.initial_height + 200;

    this.plane_timer = rand_0_1() * 800;

    this.bird_spawns = [];
    for (var i = 0; i < 5; ++i) {
        this.bird_spawns.push((0.05 + 0.8 * rand_0_1()) * GAME.initial_height);
    };
    this.bird_spawns.sort((a, b) => a - b);

    function difficulty_over_time(t) {
        const t1 = Math.sin(t * Math.PI);
        const t2 = Math.sin(3 * t * Math.PI);
        return 0.5 * (t1 * t1 + t2 * t2);
    }

    this.spawn = () => {
        const target = ENTITIES.find(x => x.type == ENTITY_TARGET);
        sim_spawn(new Cannon(transform_position(target.transform)));
    }

    this.update = () => {
        if (RING_SPAWN_Z + GAME.fall_height < 0) {
            this.type = 0;
            return;
        }

        this.difficulty = difficulty_over_time(1.0 - GAME.fall_height / GAME.initial_height);
        
        const MAX_TARGET_RANGE = 600;

        const height_delta = this.previous_ring_height - GAME.fall_height;

        if (height_delta > 100) {
            const range = 36.0 * this.difficulty;

            this.last_x = clamp(this.last_x + random_range(range), -MAX_TARGET_RANGE, MAX_TARGET_RANGE); 
            this.last_y = clamp(this.last_y + random_range(range), -MAX_TARGET_RANGE, MAX_TARGET_RANGE); 
            sim_spawn(new Ring([this.last_x, this.last_y, RING_SPAWN_Z]));

            this.previous_ring_height = GAME.fall_height;
        }

        --this.plane_timer
        if (this.plane_timer <= 0) {
            const diver = GAME.diver; 
            if (diver) {
                make_plane(diver.position[0], diver.position[1], -175);

                this.plane_timer = 1000 + rand_0_1() * 400;
            }
        }


        const count = this.bird_spawns.length;
        if (count > 0 && GAME.fall_height - RING_SPAWN_Z < this.bird_spawns[count - 1]) {
            const bird = sim_spawn(new Bird([
                this.last_x,
                this.last_y,
                RING_SPAWN_Z * 1.5
            ]));
            this.bird_spawns.pop();

        }
    }
};

// GLOBAL DIVER constant

/**
 * @constructor
 * @extends{Entity}
 */
function TutorialController() {
    Entity.call(this, ENTITY_CONTROLLER);
    GAME.time = 120000;
    this.timeline = [
        [250, () => GAME.message = "It's time to blow up the volcano!"],
        [250, () => GAME.message = "The fuse is burning. Deliver the TNT before it explodes!"],
        [250, () => GAME.message = "Use arrow keys to move. Hold shift to dive."],
        [250, () => GAME.message = "Diving is faster, but limits mobility."],
        [300, () => {
            GAME.message = "Fly through rings to earn more time.";
            sim_spawn(new Ring([0, 0, RING_SPAWN_Z]));
        }],
        [300, () => {
            sim_spawn(new Ring([10, 0, RING_SPAWN_Z]));
        }],
        [400, () => {
            GAME.message = null; 
            sim_spawn(new Ring([0, 0, RING_SPAWN_Z]));
        }],
        [450, () => {
            GAME.message = "Catch the bird to get a powerup!"; 
            sim_spawn(new Bird([0, 0, RING_SPAWN_Z], true));
        }],
        [500, () => {
            GAME.message = "Birds fly away from you as you approach."; 
            sim_spawn(new Bird([0, 0, RING_SPAWN_Z]));
        }],
        [500, () => {
            GAME.message = "Avoid hitting planes. They hurt :("; 
            const diver = GAME.diver; 
            make_plane(diver.position[0], diver.position[1], RING_SPAWN_Z);
        }],
        [600, () => {
            GAME.message = "Watch out for flares from the volcano!"; 
            sim_spawn(new Cannon([0, 0, 0]));
            sim_spawn(new Ring([-10, 0, RING_SPAWN_Z]));
        }],
        [600, () => {
            GAME.message = "Land in the volcano! You may have to leave rings behind."; 
            sim_spawn(new Ring([30, 50, RING_SPAWN_Z]));
        }]
    ];

    this.timer = 0;
    this.event_index = -1;

    this.update = () => {
        --this.timer;
        if (this.timer <= 0) {
            ++this.event_index;

            if (this.event_index < this.timeline.length) {
                const e = this.timeline[this.event_index];
                this.timer = e[0];
                e[1]?.();
            } else {
                this.type = 0;
            }
        }
    };
}

/**
 * @constructor
 * @extends{Entity}
 */
function Ring(position) {
    Entity.call(this, ENTITY_RING);
	this.collide = (entity) => {
        this.type = ENTITY_SCENERY;

        if (distance_xy(transform_position(entity.transform), transform_position(this.transform)) < 4.5) {
            enter_ring_sound();

            this.spin_speed *= 2.0;
            this.timer = 100;

            GAME.time += GAME.hard ? 2800 : 3200;

            var oldUpdate = this.update;

            this.update = () => {
                this.tint = [0, 1, 0, this.timer / 100];
                oldUpdate.call(this);
                --this.timer;
                
                if (this.timer < 0) this.type = 0;
            };
        } else {

            this.timer = 10;
            this.update = () => {
                this.tint = [1, 1, 1, this.timer / 10];
                --this.timer;
                if (this.timer < 0) {
                    this.type = 0;
                }
            };
            entity.hurt(15);
            hit_ring_sound();
            GAME.fall_velocity -= 0.5;
        }
	};
	this.colliders = [{center: [0, 0, 0], radius: 7}];
	this.model = RING_MODEL;
    transform_translate(position, this.transform);

    this.angle = 0;
	this.spin_speed = 0.025;

	this.update = () => {
        this.angle += this.spin_speed;
        transform_rotate(this.angle, 2, this.transform);

        this.transform[TRANSFORM_Z] += GAME.fall_velocity;

		if (this.transform[TRANSFORM_Z] > 0) {
			this.type = 0;
		}
	};
}

const FLARE_MODEL2 = gen_triangle_fan(_ => 0.5, 5, WHITE_MATERIAL_START);
FLARE_MODEL2.verts[2] = 6;

/**
 * @constructor
 * @extends{Entity}
 */
function Flare(position, direction) {
    Entity.call(this, ENTITY_FLARE, position);
	this.colliders = [{center: [0, 0, 0], radius: 1}];
	this.model = FLARE_MODEL2;

    this.tint = [1, 0.1, 0, 1];
    this.angle = 0;
    this.direction = direction;

    this.no_shade = true;

	this.collide = (other) => {
        other.hurt?.(15);
        this.type = 0;

        hit_flare_sound();
	};

	this.update = () => {
        this.angle += 0.1;
        transform_rotate(this.angle, 2, this.transform);

        const v = 2.0;

        this.transform[TRANSFORM_X] += v * this.direction[0];
        this.transform[TRANSFORM_Y] += v * this.direction[1];
        this.transform[TRANSFORM_Z] += v * this.direction[2];

        if (this.transform[TRANSFORM_Z] > 0) this.type = 0;
	};
}

/**
 * @constructor
 * @extends{Entity}
 */

function Cannon(position) {
    Entity.call(this, ENTITY_CANNON, position);

    const RELOAD_TIME = 250;
    const FIRE_TIME = 24;

    this.reload_timer = 0;
    this.rounds = 5;
    this.fire_timer = 0;

    this.spawn = () => this.target = GAME.diver;

    this.fire = () => {
        if (!this.target) return;

        const initial = transform_position(this.transform);
        initial[0] += random_range(6);
        initial[1] += random_range(6);

        const target = transform_position(this.target.transform);
        target[0] += random_range(8);
        target[1] += random_range(8);

        // vector from cannon to target
        const direction = Array(3);
        sub(target, initial, direction);

        const spawn_z = Math.max(RING_SPAWN_Z, initial[2]);

        // find where it intersects spawn plane
        const t = (spawn_z - initial[2]) / direction[2];
        const vector = direction.map(x => x);
        scale(t, vector);

        const MIN_RANGE = 100;
        const MAX_RANGE = 1600;

        if (vector[2] > MIN_RANGE && vector[2] < MAX_RANGE) {
            const spawn_point = Array(3);
            add(initial, vector, spawn_point);

            // compute direction
            sim_spawn(new Flare(spawn_point, normalize(direction)));
        } 
    }

    this.update = () => {
        if (this.fire_timer > 0) --this.fire_timer;
        if (this.reload_timer > 0) --this.reload_timer;

        if (this.rounds > 0 && this.fire_timer == 0) {
            --this.rounds;

            this.fire();

            if (this.rounds == 0) {
                this.reload_timer = RELOAD_TIME;
            } else {
                this.fire_timer = FIRE_TIME;
            }
        }

        if (this.rounds == 0 && this.reload_timer == 0) {
            this.rounds = 5;
        }


        this.transform[TRANSFORM_Z] = -GAME.fall_height;
    };
};

/**
 * @constructor
 * @extends{Entity}
 */
function Plane(position) {
    Entity.call(this, ENTITY_PLANE, position);
    this.model = PLANE_MODEL;

    this.spawn = () => {
        this.target = GAME.diver;

        const target_angle = Math.atan2(
            this.target.transform[TRANSFORM_Y] - this.transform[TRANSFORM_Y],
            this.target.transform[TRANSFORM_X] - this.transform[TRANSFORM_X]
        );

        this.angle = target_angle;

        this.update();
    };

	this.collide = (other) => {
        this.type = ENTITY_SCENERY;

        hit_plane_sound();

        other.hurt(GAME.hard ? 75 : 50);
        GAME.fall_velocity -= 0.5;

        this.timer = 50;

        var oldUpdate = this.update;

        this.update = () => {
            --this.timer;
            this.tint = [1, 1, 1, this.timer / 50];

            if (this.timer < 0) this.type = 0;
        }
	};


	this.colliders = [
        // body
        {center: [0, 0, -3], radius: 3},
        {center: [0, 5, -2], radius: 2.5},
        {center: [0, -5, -2], radius: 2.5},
        {center: [0, -14, -2], radius: 2.5},
        {center: [0, -16, -2], radius: 4},

        // wings
        { center: [5.5, 0, -1], radius: 2 },
        { center: [9.5, 0, -1], radius: 2 },

        { center: [-5.5, 0, -1], radius: 2 },
        { center: [-9.5, 0, -1], radius: 2 }
    ];

    this.speed = 0.3 + rand_0_1() * 0.1;
    this.angle = random_range(Math.PI);

    this.update = () => {
        transform_rotate(this.angle - Math.PI / 2, 2, this.transform);
        this.transform[TRANSFORM_X] += Math.cos(this.angle) * this.speed;
        this.transform[TRANSFORM_Y] += Math.sin(this.angle) * this.speed;

        this.transform[TRANSFORM_Z] += GAME.fall_velocity;

		if (this.transform[TRANSFORM_Z] > 0) this.type = 0;
    };
}

/**
 * @constructor
 * @extends{Entity}
 *
 */
function BirdPower(target, position) {
    Entity.call(this, ENTITY_SCENERY, position);
    this.model = EAGLE_MODEL;

    const initial = transform_create();
    transform_translate(position, initial);
    //transform_scale([0.3, 0.3, 0.3], initial);
    
    this.target = target;

    this.update = () => {
        if (!this.target) {
            this.type = 0;
            return;
        }
        transform_multiply(this.target.transform, initial, this.transform);
    }
}


/**
 * @constructor
 * @extends{Entity}
 * @param{Array} position
 * @param{boolean=} dumb

 */
function Bird(position, dumb) {
    Entity.call(this, ENTITY_BIRD, position);

    this.spawn = (entity) => {
        if (!dumb) this.target = GAME.diver;
    };

    // I had flares killing birds, but it wasn't that fun.
    // this.hurt = (dmg) => this.type = 0;

	this.collide = (other) => {
        other.hurt(5);
        other.powerup?.();

        GAME.time += GAME.hard ? 7500 : 8000;

        this.type = 0;
        get_bird_sound();
	};

	this.colliders = [
        {center: [0, 1.5, 0], radius: 1.5},
        {center: [0, -1.5, 0], radius: 1.5},
        {center: [-2.5, -0, 0], radius: 1.5},
        {center: [2.5, -0, 0], radius: 1.5}
    ];

	this.model = EAGLE_MODEL;

    this.change_turn = () => {
        const turn_sign = rand_0_1() > 0.5 ? 1 : -1;
        this.turn = turn_sign * Math.PI / 400.0;
    };

    this.change_turn();
    this.angle = rand_0_1() * 2.0 * Math.PI;

	this.update = () => {
        if (this.target) {
            const d = distance(
                transform_position(this.target.transform),
                transform_position(this.transform)
            );

            const FLEE_DISTANCE = GAME.hard ? 43 : 35;

            this.speed = d < FLEE_DISTANCE ? 0.25 : 0.05;
        } else {
            this.speed = 0.05;
        }

        if (rand_0_1() < 0.01) this.change_turn();
        this.angle += this.turn;

        transform_rotate(this.angle - Math.PI / 2, 2, this.transform);

        this.transform[TRANSFORM_X] += Math.cos(this.angle) * this.speed;
        this.transform[TRANSFORM_Y] += Math.sin(this.angle) * this.speed;

        this.transform[TRANSFORM_Z] += GAME.fall_velocity;
		if (this.transform[TRANSFORM_Z] > 0)this.type = 0;
	};
}

/**
 * @constructor
 * @extends{Entity}
 */
function Fireball(position, speed) {
    Entity.call(this, ENTITY_SCENERY, position);
    this.model = SPHERE_MODEL;

	this.size = 0;
	this.timer = 45;

    const choices = [
        //[250, 197, 10],
        [222, 145, 11],
        [245, 110, 0],
        [245, 110, 0],
        [222, 62, 11],
        [222, 62, 11],
        [255, 21, 13]
    ];

    const color = choices[Math.floor(Math.random() * choices.length)]
             .map(x => x/255);

    this.tint = [...color, 1];

	this.update = () => {
		this.size += speed;
		this.tint[3] = 0.2 + 0.8 * clamp(this.timer / 45, 0, 1);

		transform_identity(this.transform);
		transform_translate(this.position, this.transform);
		transform_scale(this.size, this.transform);

		--this.timer;
		if (this.timer < 0) this.type = 0;
	};
};

/**
 * @constructor
 * @extends{Entity}
 * @param{Array} position
 * @param{Function} callback
 * @param{number=} count
 */
function Explosion(position, callback, count) {
    Entity.call(this, ENTITY_SCENERY, position);

	this.timer = 0;
	this.count = count || 6;

    this.explode = () => {
		for (var i = 0; i < 3; ++i) {
			var offset = Array(3).fill(0).map(_ => random_range(3));
			add(offset, position, offset);
			sim_spawn(new Fireball(offset, 0.15 + rand_0_1() * 0.1));
		}
        explode_sound();
    }

	this.update = () => {
		if (this.count > 0) {
			--this.timer;

			if (this.timer <= 0) {
                this.explode();

				--this.count;
				this.timer = 20;
			}
		} else {
            callback?.();
			this.type = 0;
		}
	};
};



/**
 * @constructor
 * @extends{Entity}
 */
function Intro() {
    Entity.call(this, ENTITY_INTRO);
    this.model = PLANE_MODEL;

    this.chosen_mode = MODE_MENU;

    this.spawn = () => {
        GAME.sun = normalize([0.5, 1, 0]);
        this.diver = sim_spawn(new Diver([0,0,0]));
        this.diver.falling = false;

        // volcano rumble
        // volcano suicide
        // volcano bomber
        GAME.title = "Volcano Drop!";
    };

    var t = 0;

    var shake = 0;
    this.update = () => {
        shake += 0.2;

        t = clamp(t, 0, 1);

        transform_identity(this.transform);
        transform_rotate(0.003 * Math.sin(shake) + 0.03 * Math.sin(shake / 20), 0, this.transform);
        transform_rotate(0.008 * Math.cos(0.2 * shake), 1, this.transform);

        if (t == 0) {
            this.diver.transform = this.transform.slice();
        }

        transform_translate([-5.5, 1.7, 6.5], this.transform);

        var from = [];
        interp(t, [6.5, -34, 8], [0, 0, 0], from);
        var u = [];
        interp(t, [0, 0, 1], [0, 1, 0], u)

        interp(t, [0, 0, 0], [0, 0, -30], this.diver.position);

        transform_look(from, this.diver.position, u, GAME.camera);

        interp(t, [0.5, 1, 0], [0, -0.5, 1], GAME.sun);
        normalize(GAME.sun);

        if (this.chosen_mode == MODE_MENU) {
            if (KEYS[49]) { 
                this.chosen_mode = MODE_TUTORIAL;
                pick_menu_sound();
            }
            else if (KEYS[50]) {
                GAME.hard = false;
                this.chosen_mode = MODE_GAME;
                pick_menu_sound();
            }
            else if (KEYS[51]) {
                GAME.hard = true;
                this.chosen_mode = MODE_GAME;
                pick_menu_sound();
            }
        } else {
            GAME.title = null;
            t += 0.015;

            if (t >= 1) {
                transform_identity(GAME.camera);
                this.type = 0;

                this.diver.falling = true;

                sim_spawn(new CameraFollow());
                sim_set_mode(this.chosen_mode);
            }
        }
    };
}


function compute_fog_alpha() {
    const LO = 500;
    const HI = 1800;
	return 1.0 - clamp((GAME.fall_height - LO) / (HI - LO), 0, 1) * 0.5;

}

/**
 * @constructor
 * @extends{Entity}
 * @param{Array} position
 * @param{number} size
 * @param{Array=} color
 * @param{number=} height
 */

function Island(position, size, color, height) {
    Entity.call(this, ENTITY_SCENERY, position);

    var radius = size;

    if (!color) {
        const choices = [
           [143, 174, 112],
           [106, 158, 54],
           [120, 210, 90],
           [72, 107, 36],
        ];

        color = choices[Math.floor(Math.random() * choices.length)]
             .map(x => x/255);
    }

    this.tint = [...color, 1];

    this.model = gen_triangle_fan(_ => {
        radius = Math.max(radius + random_range(0.4 * size), 0.5 * size);
        return radius;
    }, 20, WHITE_MATERIAL_START);

    // move center up
    if (!height) {
        height = rand_0_1() * 5 + 3;
    }
    this.offset = -height;
    this.model.verts[2] = height;

    this.update = () => {
        this.transform[TRANSFORM_Z] = -GAME.fall_height + this.offset;
        this.tint[3] = compute_fog_alpha();
    }
}

/**
 * @constructor
 * @extends{Entity}
 */

function Target(position) {
    Entity.call(this, ENTITY_TARGET, position);

    this.model = gen_triangle_fan((_) => 8, 24, WHITE_MATERIAL_START);
	this.tint = [.98, .26, .05, 1];

    this.no_shade = true;

	this.colliders = [{center: [0, 0, 0], radius: 8}];
	this.collide = (entity) => {
        entity.type = 0;
        sim_spawn(new Explosion(transform_position(this.transform), null, 50));
        sim_set_mode(MODE_WIN);
	};

    this.update = () => {
        this.transform[TRANSFORM_Z] = -GAME.fall_height;
        this.tint[3] = compute_fog_alpha();
    }
}


/**
 * @constructor
 * @extends{Entity}
 */
function CameraFollow() {
    Entity.call(this, ENTITY_SCENERY);

    this.extents = [8, 6, 5];

    this.spawn = () => {
        this.target = GAME.diver; 
    };

    this.update = () => {
        if (!this.target) return;

        const low_x = Math.min(0, this.target.transform[TRANSFORM_X] - (this.transform[TRANSFORM_X] - this.extents[0]));
        this.transform[TRANSFORM_X] += low_x;
        const high_x = Math.max(0, this.target.transform[TRANSFORM_X] - (this.transform[TRANSFORM_X] + this.extents[0]));
        this.transform[TRANSFORM_X] += high_x;

        const low_y = Math.min(0, this.target.transform[TRANSFORM_Y] - (this.transform[TRANSFORM_Y] - this.extents[1]));
        this.transform[TRANSFORM_Y] += low_y;
        const high_y = Math.max(0, this.target.transform[TRANSFORM_Y] - (this.transform[TRANSFORM_Y] + this.extents[1]));
        this.transform[TRANSFORM_Y] += high_y;

        var inv_position = transform_position(this.transform).map(x => -x);
        transform_translate(inv_position, GAME.camera);
    }
}

const COLLISION_MASKS = {
	[ENTITY_RING]: ENTITY_DIVER | ENTITY_LIMB,
    [ENTITY_TARGET]: ENTITY_DIVER,
    [ENTITY_BIRD]: ENTITY_DIVER | ENTITY_LIMB,
    [ENTITY_FLARE]: ENTITY_DIVER | ENTITY_LIMB,
    [ENTITY_PLANE]: ENTITY_DIVER | ENTITY_LIMB,
};

let ENTITIES = [];

function sim_reset() {
    GAME.mode = MODE_MENU;
    GAME.fall_height = GAME.initial_height;
    GAME.fall_velocity = 0;
    GAME.message = null;

    ENTITIES = [];
    ENTITIES.push(new Intro());

	const target = [random_range(20), random_range(20), 0];

    const number_of_small = random_int(2) + 6;
    for (var i = 0; i < number_of_small; ++i) {
		const radius = 100 + rand_0_1() * 300;
		const angle = rand_0_1() * 2 * Math.PI;

        ENTITIES.push(new Island([
			target[0] + Math.cos(angle) * radius,
			target[1] + Math.sin(angle) * radius,
			0
		],
			rand_0_1() * 15 + 20)
		);
    }

    ENTITIES.push(new Island(target, 60, [0.2, 0.2, 0.2], 10));
	ENTITIES.push(new Target([target[0], target[1], 8]));
    ENTITIES.forEach(e => e.spawn?.());
}

sim_reset();

function sim_set_mode(mode) {
    if (GAME.mode == mode) return;
    GAME.mode = mode;

    switch (mode) {
    case MODE_WIN:
    case MODE_FAIL:
        sim_kill_type(ENTITY_CONTROLLER);
        sim_kill_type(ENTITY_CANNON);
        GAME.title = (mode == MODE_WIN) ? "You win!" : "Game Over";
        GAME.message = "Press (q) to return to the menu.";
        break;
    case MODE_GAME:
    case MODE_TUTORIAL:
        sim_spawn((mode == MODE_GAME) ? new AutoController() : new TutorialController());
        break;
    }
}

function sim_loop() {
	ENTITIES.forEach(e => {
        if (e.target && e.target.type == 0) e.target = null;
        e.update?.();
    });

    if (!GAME.diver?.type) GAME.diver = null;

	const in_point_4d = new F32(4);
    const out_point_4d = new F32(4);

    ENTITIES.forEach(e => {
        if (e.transformed_colliders.length != e.colliders.length) {
            // make a copy
            e.transformed_colliders = e.colliders.map(s => {
                return { radius: 0, center: Array(3)};
            });
        }

        // transform local spheres into world space
        for (var i = 0; i < e.colliders.length; ++i) {
            const s = e.colliders[i];
			copy_array(s.center, 0, in_point_4d, 0, 3);
            in_point_4d[3] = 1;
			transform_apply(e.transform, in_point_4d, out_point_4d);
            copy_array(out_point_4d, 0, e.transformed_colliders[i].center, 0, 3);
            e.transformed_colliders[i].radius = s.radius;
        }
    });

	const delta = new F32(3);
	let collide_entities = (a, b) => {
		let as = ENTITIES[a].transformed_colliders;
		let bs = ENTITIES[b].transformed_colliders;

		for (let i = 0; i < as.length; i++) {
			for (let j = 0; j < bs.length; j++) {
				sub(as[i].center, bs[j].center, delta);
				let dist_sqr = dot(delta, delta);
				let extent = as[i].radius + bs[j].radius;
				if (dist_sqr < (extent * extent)) {
					return true;
				}
			}
		}

		return false;
	};

	for (let i = 0; i < ENTITIES.length; i++) {
		let a = ENTITIES[i];
		for (let j = i + 1; j < ENTITIES.length; j++) {
			let b = ENTITIES[j];

		    const a_mask = COLLISION_MASKS[a.type] || 0;
			const b_mask = COLLISION_MASKS[b.type] || 0;

			const collide_a = a_mask & b.type;
			const collide_b = b_mask & a.type;
			if (collide_a || collide_b) {
				if (collide_entities(i, j)) {
					if (collide_a) a.collide?.(b);
					if (collide_b) b.collide?.(a);
				}
			}
		}
	}

	ENTITIES = ENTITIES.filter(x => x.type);

    ENTITIES.forEach(entity => {
        transform_multiply(GAME.camera, entity.transform, entity.modelview_matrix);
    });

    sim_draw();
}

function sim_spawn(e) {
    ENTITIES.push(e);
    e.spawn?.();
    return e;
}

function sim_kill_type(type) {
    ENTITIES.filter(x => x.type == type).forEach(x => x.type = 0);
}

function sim_draw() {
    const w = canvas.width;
    const h = canvas.height;

    const WHITE = "#FFFFFF";
    const RED = "#FF0000";

    function draw_clear() {
        ctx.fillStyle = '#87CEEB';
        ctx.beginPath();
        ctx.rect(0, 0, w, h);
        ctx.fill();
    }

    function draw_health_bar(hp) {

        ctx.fillStyle = '#222222';
        ctx.strokeStyle = '#222222';

        ctx.beginPath();
        ctx.rect(24, 24, 270, 24);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = RED;
        ctx.beginPath();
        ctx.rect(24, 24, 270 * (hp / 100), 24);
        ctx.fill();
    }

    function draw_stats(speed, time) {
        ctx.font = '54px sans-serif';
        ctx.textAlign = 'right';

        const minutes = "" + ((time / 60000) | 0);
        const seconds = "" + ((time / 1000) | 0) % 60;


        if (time < 3000) {
            ctx.fillStyle = (((time / 100) | 0) % 2 == 0) ? RED : "#FFFF00";
        } else {
            ctx.fillStyle = RED;
        }

        ctx.fillText(minutes.padStart(2, '0') + ":" + seconds.padStart(2, '0'), 1012, 46);

        ctx.fillStyle = WHITE;
        ctx.fillText((speed * 195).toFixed(0), 980, 740);

        ctx.font = '16px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('mph', 980, 740);
    }

    function draw_message() {
        if (GAME.message) {
            ctx.fillStyle = RED;
            ctx.font = '36px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(GAME.message, 512, 700);
        }

        if (GAME.title) {
            ctx.fillStyle = WHITE;
            ctx.font = 'bold 84px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(GAME.title, 512, 112);
        }
    }

    function draw_menu() {
        if (GAME.mode != MODE_MENU || !GAME.title) return;

        ctx.fillStyle = WHITE;

        ctx.font = '34px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText("Press (1) for tutorial", 320, 580);
        ctx.fillText("Press (2) for regular", 700, 580);
        ctx.fillText("Press (3) for hard", 512, 660);

        ctx.fillStyle = "#222222";
        ctx.font = '16px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText("Created by Justin Meiners and Robert Williams for js13k 2022.", 1000, 730);
    }

    draw_clear();

    function fix_points(polygons) {
        for (var i = 0; i < polygons.length; ++i) {
            const points = polygons[i][0];
            for (var j = 0; j < points.length; j +=3) {
                points[j] = ((0.5 * points[j] + 0.5) * w) | 0;
                points[j + 1] = ((0.5 - 0.5 * points[j + 1]) * h) | 0;
            }
        }
    }

    // == DEPTH SORTING ==
	
    // we create a separate array to avoid messing up the update order.
    const to_render = ENTITIES.slice();
    to_render.sort((a, b) => 
		a.modelview_matrix[TRANSFORM_Z] - b.modelview_matrix[TRANSFORM_Z]);

	to_render.forEach(entity => {
        if (entity.model) {
            const polygons = mesh_3d_to_polygons(
                entity.modelview_matrix,
                GAME.perspective,
                entity.model.verts,
                entity.model.faces,
                entity.model.materials
            );

            fix_points(polygons);
            fill_polygons(polygons, entity.tint, entity.no_shade ? null : GAME.sun);
        }
	});

    if (GAME.mode != MODE_MENU) {
        draw_stats(GAME.fall_velocity, GAME.time);
    }

    if (GAME.mode == MODE_GAME || GAME.mode == MODE_TUTORIAL) {
        draw_health_bar(GAME.diver?.hp || 0);
    }

    draw_message();
    draw_menu();
}

// AUDIO

// https://github.com/grumdrig/jsfxr
// Unlicense License

// Wave shapes
const SQUARE = 0;
const SAWTOOTH = 1;
const SINE = 2;
const NOISE = 3;

const OVERSAMPLING = 8;

const SAMPLE_RATE = 44100;

function generateSound(ps) {
    //
    // Convert user-facing parameter values to units usable by the sound
    // generator
    //

    let effect = {};

    effect.initForRepeat = function() {
        effect.elapsedSinceRepeat = 0;

        effect.period = 100 / (ps.p_base_freq * ps.p_base_freq + 0.001);
        effect.periodMax = 100 / (ps.p_freq_limit * ps.p_freq_limit + 0.001);
        effect.enableFrequencyCutoff = (ps.p_freq_limit > 0);
        effect.periodMult = 1 - Math.pow(ps.p_freq_ramp, 3) * 0.01;
        effect.periodMultSlide = -Math.pow(ps.p_freq_dramp, 3) * 0.000001;

        effect.dutyCycle = 0.5 - ps.p_duty * 0.5;
        effect.dutyCycleSlide = -ps.p_duty_ramp * 0.00005;

        if (ps.p_arp_mod >= 0)
            effect.arpeggioMultiplier = 1 - Math.pow(ps.p_arp_mod, 2) * .9;
        else
            effect.arpeggioMultiplier = 1 + Math.pow(ps.p_arp_mod, 2) * 10;
        effect.arpeggioTime = Math.floor(Math.pow(1 - ps.p_arp_speed, 2) * 20000 + 32);
        if (ps.p_arp_speed === 1)
            effect.arpeggioTime = 0;
    }

    effect.initForRepeat();    // First time through, this is a bit of a misnomer

    // Waveform shape
    effect.waveShape = parseInt(ps.wave_type, 10);

    // Filter
    effect.fltw = Math.pow(ps.p_lpf_freq, 3) * 0.1;
    effect.enableLowPassFilter = (ps.p_lpf_freq != 1);
    effect.fltw_d = 1 + ps.p_lpf_ramp * 0.0001;
    effect.fltdmp = 5 / (1 + Math.pow(ps.p_lpf_resonance, 2) * 20) *
        (0.01 + effect.fltw);
    if (effect.fltdmp > 0.8) effect.fltdmp=0.8;
    effect.flthp = Math.pow(ps.p_hpf_freq, 2) * 0.1;
    effect.flthp_d = 1 + ps.p_hpf_ramp * 0.0003;

    // Vibrato
    effect.vibratoSpeed = Math.pow(ps.p_vib_speed, 2) * 0.01;
    effect.vibratoAmplitude = ps.p_vib_strength * 0.5;

    // Envelope
    effect.envelopeLength = [
        Math.floor(ps.p_env_attack * ps.p_env_attack * 100000),
        Math.floor(ps.p_env_sustain * ps.p_env_sustain * 100000),
        Math.floor(ps.p_env_decay * ps.p_env_decay * 100000)
    ];
    effect.envelopePunch = ps.p_env_punch;

    // Flanger
    effect.flangerOffset = Math.pow(ps.p_pha_offset, 2) * 1020;
    if (ps.p_pha_offset < 0) effect.flangerOffset = -effect.flangerOffset;
    effect.flangerOffsetSlide = Math.pow(ps.p_pha_ramp, 2) * 1;
    if (ps.p_pha_ramp < 0) effect.flangerOffsetSlide = -effect.flangerOffsetSlide;

    // Repeat
    effect.repeatTime = Math.floor(Math.pow(1 - ps.p_repeat_speed, 2) * 20000
        + 32);
    if (ps.p_repeat_speed === 0)
        effect.repeatTime = 0;

    effect.gain = Math.exp(0.25) - 1;

    // GENERATE

    var fltp = 0;
    var fltdp = 0;
    var fltphp = 0;

    var noise_buffer = Array(32);
    for (var i = 0; i < 32; ++i)
        noise_buffer[i] = Math.random() * 2 - 1;

    var envelopeStage = 0;
    var envelopeElapsed = 0;

    var vibratoPhase = 0;

    var phase = 0;
    var ipp = 0;
    var flanger_buffer = Array(1024);
    for (var i = 0; i < 1024; ++i)
        flanger_buffer[i] = 0;

    var num_clipped = 0;

    var buffer = [];

    var sample_sum = 0;
    var num_summed = 0;

    for(var t = 0; ; ++t) {

        // Repeats
        if (effect.repeatTime != 0 && ++effect.elapsedSinceRepeat >= effect.repeatTime)
            effect.initForRepeat();

        // Arpeggio (single)
        if(effect.arpeggioTime != 0 && t >= effect.arpeggioTime) {
            effect.arpeggioTime = 0;
            effect.period *= effect.arpeggioMultiplier;
        }

        // Frequency slide, and frequency slide slide!
        effect.periodMult += effect.periodMultSlide;
        effect.period *= effect.periodMult;
        if(effect.period > effect.periodMax) {
            effect.period = effect.periodMax;
            if (effect.enableFrequencyCutoff)
                break;
        }

        // Vibrato
        var rfperiod = effect.period;
        if (effect.vibratoAmplitude > 0) {
            vibratoPhase += effect.vibratoSpeed;
            rfperiod = effect.period * (1 + Math.sin(vibratoPhase) * effect.vibratoAmplitude);
        }
        var iperiod = Math.floor(rfperiod);
        if (iperiod < OVERSAMPLING) iperiod = OVERSAMPLING;

        // Square wave duty cycle
        effect.dutyCycle += effect.dutyCycleSlide;
        if (effect.dutyCycle < 0) effect.dutyCycle = 0;
        if (effect.dutyCycle > 0.5) effect.dutyCycle = 0.5;

        // Volume envelope
        if (++envelopeElapsed > effect.envelopeLength[envelopeStage]) {
            envelopeElapsed = 0;
            if (++envelopeStage > 2)
                break;
        }
        var env_vol;
        var envf = envelopeElapsed / effect.envelopeLength[envelopeStage];
        if (envelopeStage === 0) {                 // Attack
            env_vol = envf;
        } else if (envelopeStage === 1) {    // Sustain
            env_vol = 1 + (1 - envf) * 2 * effect.envelopePunch;
        } else {                                                     // Decay
            env_vol = 1 - envf;
        }

        // Flanger step
        effect.flangerOffset += effect.flangerOffsetSlide;
        var iphase = Math.abs(Math.floor(effect.flangerOffset));
        if (iphase > 1023) iphase = 1023;

        if (effect.flthp_d != 0) {
            effect.flthp *= effect.flthp_d;
            if (effect.flthp < 0.00001)
                effect.flthp = 0.00001;
            if (effect.flthp > 0.1)
                effect.flthp = 0.1;
        }

        // 8x oversampling
        var sample = 0;
        for (var si = 0; si < OVERSAMPLING; ++si) {
            var sub_sample = 0;
            phase++;
            if (phase >= iperiod) {
                phase %= iperiod;
                if (effect.waveShape === NOISE)
                    for(var i = 0; i < 32; ++i)
                        noise_buffer[i] = Math.random() * 2 - 1;
            }

            // Base waveform
            var fp = phase / iperiod;
            if (effect.waveShape === SQUARE) {
                if (fp < effect.dutyCycle)
                    sub_sample=0.5;
                else
                    sub_sample=-0.5;
            } else if (effect.waveShape === SAWTOOTH) {
                if (fp < effect.dutyCycle)
                    sub_sample = -1 + 2 * fp/effect.dutyCycle;
                else
                    sub_sample = 1 - 2 * (fp-effect.dutyCycle)/(1-effect.dutyCycle);
            } else if (effect.waveShape === SINE) {
                sub_sample = Math.sin(fp * 2 * Math.PI);
            } else if (effect.waveShape === NOISE) {
                sub_sample = noise_buffer[Math.floor(phase * 32 / iperiod)];
            } else {
                throw "ERROR: Bad wave type: " + effect.waveShape;
            }

            // Low-pass filter
            var pp = fltp;
            effect.fltw *= effect.fltw_d;
            if (effect.fltw < 0) effect.fltw = 0;
            if (effect.fltw > 0.1) effect.fltw = 0.1;
            if (effect.enableLowPassFilter) {
                fltdp += (sub_sample - fltp) * effect.fltw;
                fltdp -= fltdp * effect.fltdmp;
            } else {
                fltp = sub_sample;
                fltdp = 0;
            }
            fltp += fltdp;

            // High-pass filter
            fltphp += fltp - pp;
            fltphp -= fltphp * effect.flthp;
            sub_sample = fltphp;

            // Flanger
            flanger_buffer[ipp & 1023] = sub_sample;
            sub_sample += flanger_buffer[(ipp - iphase + 1024) & 1023];
            ipp = (ipp + 1) & 1023;

            // final accumulation and envelope application
            sample += sub_sample * env_vol;
        }

        // Accumulate samples appropriately for sample rate
        sample_sum += sample;
        if (++num_summed >= 1) {
            num_summed = 0;
            sample = sample_sum;
            sample_sum = 0;
        } else {
            continue;
        }

        sample = sample / OVERSAMPLING;
        sample *= effect.gain;

        buffer.push(sample);
    }

    return buffer;
}

function generateSoundBuffer(sound) {
    let buf = generateSound(sound);
    let buffer = new AudioBuffer({numberOfChannels: 1, length: buf.length, sampleRate: SAMPLE_RATE});
    let channel = buffer.getChannelData(0);
    for (let i = 0; i < buf.length; i++) {
        channel[i] = buf[i];
    }

    return buffer;
}

function playSoundBuffer(buffer, volume = 1) {
    let audioCtx = new AudioContext();

    let gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);

    let audioSrc = audioCtx.createBufferSource();

    audioSrc.buffer = buffer;
    audioSrc.connect(gainNode).connect(audioCtx.destination);
    audioSrc.start(audioCtx.currentTime);
}

const SONG_VOLUME = 0.18;
var SONG_OSC = null;
var SONG_TIMEOUT = null;
var SONG_AMP = null;
var SONG_CTX = null;
function playSong(song) {
    stopSong();
    SONG_CTX = new AudioContext();

    SONG_OSC = new OscillatorNode(SONG_CTX, {
        type: "sine",
        frequency: 0,
    });

    SONG_AMP = new GainNode(SONG_CTX, {
        value: 0,
    });

    let music_enabled = document.getElementById('music').checked;
    SONG_AMP.gain.setValueAtTime(music_enabled ? SONG_VOLUME : 0, 0);

    for (let [note, time] of song) {
        SONG_OSC.frequency.setValueAtTime(NOTES[note - 6], time / 1000);
    }

    let endTime = song.reduce((acc, x) => Math.max(acc, x[1]), 0) + 1000;

    for (let [note, time] of song) {
        SONG_OSC.frequency.setValueAtTime(NOTES[note], (time + endTime) / 1000);
    }

    SONG_OSC.connect(SONG_AMP).connect(SONG_CTX.destination);
    SONG_OSC.start(SONG_CTX.currentTime);

//    let endTime = song.reduce((acc, x) => Math.max(acc, x[1]), 0) + 3000;
    SONG_TIMEOUT = setTimeout(() => {
        SONG_TIMEOUT = null;
        playSong(song);
    }, endTime * 2);
}

function stopSong() {
    if (SONG_OSC) {
        SONG_OSC.stop(0);
        SONG_OSC = null;
    }
    if (SONG_TIMEOUT) {
        clearTimeout(SONG_TIMEOUT);
        SONG_TIMEOUT = null;
    }
    SONG_AMP = null;
    SONG_CTX = null;
}

const SOUND_THROUGH_RING = 0;
const SOUND_GET_BIRD = 1;
const SOUND_HIT_RING = 2;
const SOUND_HIT_FLARE = 3;
const SOUND_HIT_PLANE = 4;
const SOUND_EXPLODE = 5;
const SOUND_PICK_MENU = 6;

const SOUNDS = [
    {wave_type:1,p_env_attack:0,p_env_sustain:0.08471101207408382,p_env_punch:0.3468633995198561,p_env_decay:0.357179930548691,p_base_freq:0.6811589321967947,p_freq_limit:0,p_freq_ramp:0,p_freq_dramp:0,p_vib_strength:0,p_vib_speed:0,p_arp_mod:0.41912637580473566,p_arp_speed:0.6487335786143021,p_duty:0,p_duty_ramp:0,p_repeat_speed:0,p_pha_offset:0,p_pha_ramp:0,p_lpf_freq:1,p_lpf_ramp:0,p_lpf_resonance:0,p_hpf_freq:0,p_hpf_ramp:0,},
    {wave_type:1,p_env_attack:0,p_env_sustain:0.2248469135034446,p_env_punch:0,p_env_decay:0.4958265678246262,p_base_freq:0.37756649565996814,p_freq_limit:0,p_freq_ramp:0.14431964296874503,p_freq_dramp:0,p_vib_strength:0,p_vib_speed:0,p_arp_mod:0,p_arp_speed:0,p_duty:1,p_duty_ramp:0,p_repeat_speed:0,p_pha_offset:0,p_pha_ramp:0,p_lpf_freq:1,p_lpf_ramp:0,p_lpf_resonance:0,p_hpf_freq:0,p_hpf_ramp:0,},
    {wave_type:3,p_env_attack:0,p_env_sustain:0.06841022161375787,p_env_punch:0,p_env_decay:0.403,p_base_freq:0.3280483280173474,p_freq_limit:0,p_freq_ramp:-0.5887646078252177,p_freq_dramp:0,p_vib_strength:0,p_vib_speed:0,p_arp_mod:0,p_arp_speed:0,p_duty:0,p_duty_ramp:0,p_repeat_speed:0,p_pha_offset:0,p_pha_ramp:0,p_lpf_freq:1,p_lpf_ramp:0,p_lpf_resonance:0,p_hpf_freq:0,p_hpf_ramp:0,},
    {wave_type:3,p_env_attack:0,p_env_sustain:0.0813713430429975,p_env_punch:0,p_env_decay:0.22567589583494954,p_base_freq:0.695525791616842,p_freq_limit:0,p_freq_ramp:-0.46141484506510827,p_freq_dramp:0,p_vib_strength:0,p_vib_speed:0,p_arp_mod:0,p_arp_speed:0,p_duty:0,p_duty_ramp:0,p_repeat_speed:0,p_pha_offset:0,p_pha_ramp:0,p_lpf_freq:1,p_lpf_ramp:0,p_lpf_resonance:0,p_hpf_freq:0.025630963865669387,p_hpf_ramp:0,},
    {wave_type:3,p_env_attack:0,p_env_sustain:0.257837057859972,p_env_punch:0.47594063886278615,p_env_decay:0.2934573294998162,p_base_freq:0.23179617917817402,p_freq_limit:0,p_freq_ramp:0,p_freq_dramp:0,p_vib_strength:0,p_vib_speed:0,p_arp_mod:0,p_arp_speed:0,p_duty:0,p_duty_ramp:0,p_repeat_speed:0.6715554672938782,p_pha_offset:0,p_pha_ramp:0,p_lpf_freq:1,p_lpf_ramp:0,p_lpf_resonance:0,p_hpf_freq:0,p_hpf_ramp:0,},
    {wave_type:3,p_env_attack:0,p_env_sustain:0.35,p_env_punch:0.527,p_env_decay:0.694,p_base_freq:0.03498685185395313,p_freq_limit:0,p_freq_ramp:0.0199162440173406,p_freq_dramp:0,p_vib_strength:0.18176693090338614,p_vib_speed:0.4993350372296267,p_arp_mod:0,p_arp_speed:0,p_duty:0,p_duty_ramp:0,p_repeat_speed:0.4255423790055556,p_pha_offset:0,p_pha_ramp:0,p_lpf_freq:1,p_lpf_ramp:0,p_lpf_resonance:0,p_hpf_freq:0,p_hpf_ramp:0,},
    {wave_type:1,p_env_attack:0,p_env_sustain:0.043234146187052895,p_env_punch:0.4932882977952163,p_env_decay:0.25885335733347026,p_base_freq:0.8997029847534574,p_freq_limit:0,p_freq_ramp:0,p_freq_dramp:0,p_vib_strength:0,p_vib_speed:0,p_arp_mod:0.43487715157261797,p_arp_speed:0.5884500505757229,p_duty:0,p_duty_ramp:0,p_repeat_speed:0,p_pha_offset:0,p_pha_ramp:0,p_lpf_freq:1,p_lpf_ramp:0,p_lpf_resonance:0,p_hpf_freq:0,p_hpf_ramp:0,}
];

const SOUND_BUFFERS = SOUNDS.map(generateSoundBuffer);

const NOTES = [];
NOTES[57] = 440;
for (let i = 58; i <= 128; i++) {
    NOTES[i] = NOTES[i-1] * 1.0595;
}
for (let i = 56; i >= 0; i--) {
    NOTES[i] = NOTES[i+1] / 1.0595;
}

const SONG = [[58, 2000],[70, 2854],[68, 3864],[66, 4104],[65, 4312],[63, 4562],[66, 5557],[65, 5791],[63, 6000],[62, 6239],[63, 6901],[65, 7140],[58, 9104],[62, 9604],[63, 10244],[65, 10489],[66, 10708],[68, 10963],[66, 12083],[65, 12328],[66, 12552],[63, 13432],[65, 14072],[66, 14286],[68, 14505],[70, 14739],[58, 16104],[70, 16984],[68, 18057],[66, 18291],[65, 18505],[66, 18713],[65, 18927],[63, 19166],[66, 19880],[65, 20145],[63, 20343],[65, 20609],[63, 21343],[62, 21588],[60, 22265],[58, 22526],[58, 23864],[66, 24359],[66, 25375],[68, 25859],[66, 26078],[65, 26328],[65, 27260],[66, 27687],[65, 27916],[63, 28171],];

function enter_ring_sound() {
    playSoundBuffer(SOUND_BUFFERS[SOUND_THROUGH_RING]);
}

function get_bird_sound() {
    playSoundBuffer(SOUND_BUFFERS[SOUND_GET_BIRD]);
}

function hit_ring_sound() {
    playSoundBuffer(SOUND_BUFFERS[SOUND_HIT_RING]);
}

function hit_flare_sound() {
    playSoundBuffer(SOUND_BUFFERS[SOUND_HIT_FLARE]);
}

function hit_plane_sound() {
    playSoundBuffer(SOUND_BUFFERS[SOUND_HIT_PLANE]);
}

function explode_sound() {
    playSoundBuffer(SOUND_BUFFERS[SOUND_EXPLODE], random_range(0.75) + 1);
}

function pick_menu_sound() {
    playSoundBuffer(SOUND_BUFFERS[SOUND_PICK_MENU]);
    playSong(SONG);
}

document.getElementById("music")
    .addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            if (SONG_CTX) {
                SONG_AMP.gain.setValueAtTime(SONG_VOLUME, SONG_CTX.currentTime);
            }
        } else {
            if (SONG_CTX) {
                SONG_AMP.gain.setValueAtTime(0, SONG_CTX.currentTime);
            }
        }
    });

/*
 TODO
 - [ ] tuning timing.
 - [ ] sound

 - [x] finish tutorial
 - [x] planes
 - [x] bird power up
 - [x] target visual
 - [x] turret visual?
 - [x] keep timer runing after death.
 */

