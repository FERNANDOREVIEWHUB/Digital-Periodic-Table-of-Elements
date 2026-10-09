// Element data with all 118 elements
        const elements = {
            1: {symbol: 'H', name: 'Hydrogen', mass: 1.008, group: 1, period: 1, category: 'nonmetals', 
                oxidation: ['+1', '-1'], config: '1s¹', density: 0.09, boiling: -253, melting: -259, 
                electronegativity: 2.2, atomicRadius: 37, ionization: 1312, electronAffinity: 72.8, metallicity: 0.1},
            2: {symbol: 'He', name: 'Helium', mass: 4.003, group: 18, period: 1, category: 'noble-gases',
                oxidation: ['0'], config: '1s²', density: 0.18, boiling: -269, melting: -272,
                electronegativity: 0, atomicRadius: 32, ionization: 2372, electronAffinity: 0, metallicity: 0.0},
            3: {symbol: 'Li', name: 'Lithium', mass: 6.941, group: 1, period: 2, category: 'alkali-metals',
                oxidation: ['+1'], config: '[He] 2s¹', density: 0.53, boiling: 1342, melting: 181,
                electronegativity: 0.98, atomicRadius: 152, ionization: 520, electronAffinity: 59.6, metallicity: 0.98},
            4: {symbol: 'Be', name: 'Beryllium', mass: 9.012, group: 2, period: 2, category: 'alkaline-earth',
                oxidation: ['+2'], config: '[He] 2s²', density: 1.85, boiling: 2469, melting: 1287,
                electronegativity: 1.57, atomicRadius: 112, ionization: 899, electronAffinity: 0, metallicity: 1.57},
            5: {symbol: 'B', name: 'Boron', mass: 10.811, group: 13, period: 2, category: 'metalloids',
                oxidation: ['+3'], config: '[He] 2s² 2p¹', density: 2.34, boiling: 4000, melting: 2077,
                electronegativity: 2.04, atomicRadius: 85, ionization: 801, electronAffinity: 26.7, metallicity: 2.04},
            6: {symbol: 'C', name: 'Carbon', mass: 12.011, group: 14, period: 2, category: 'nonmetals',
                oxidation: ['+4', '-4'], config: '[He] 2s² 2p²', density: 2.27, boiling: 4027, melting: 3550,
                electronegativity: 2.55, atomicRadius: 77, ionization: 1086, electronAffinity: 121.9, metallicity: 2.55},
            7: {symbol: 'N', name: 'Nitrogen', mass: 14.007, group: 15, period: 2, category: 'nonmetals',
                oxidation: ['+5', '+3', '-3'], config: '[He] 2s² 2p³', density: 1.25, boiling: -196, melting: -210,
                electronegativity: 3.04, atomicRadius: 75, ionization: 1402, electronAffinity: 7.0, metallicity: 3.04},
            8: {symbol: 'O', name: 'Oxygen', mass: 15.999, group: 16, period: 2, category: 'nonmetals',
                oxidation: ['-2'], config: '[He] 2s² 2p⁴', density: 1.43, boiling: -183, melting: -218,
                electronegativity: 3.44, atomicRadius: 73, ionization: 1314, electronAffinity: 141.0, metallicity: 3.44},
            9: {symbol: 'F', name: 'Fluorine', mass: 18.998, group: 17, period: 2, category: 'halogens',
                oxidation: ['-1'], config: '[He] 2s² 2p⁵', density: 1.70, boiling: -188, melting: -220,
                electronegativity: 3.98, atomicRadius: 71, ionization: 1681, electronAffinity: 328.0, metallicity: 3.98},
            10: {symbol: 'Ne', name: 'Neon', mass: 20.180, group: 18, period: 2, category: 'noble-gases',
                oxidation: ['0'], config: '[He] 2s² 2p⁶', density: 0.90, boiling: -246, melting: -249,
                electronegativity: 0, atomicRadius: 69, ionization: 2081, electronAffinity: 0, metallicity: 0.0},
            11: {symbol: 'Na', name: 'Sodium', mass: 22.990, group: 1, period: 3, category: 'alkali-metals',
                oxidation: ['+1'], config: '[Ne] 3s¹', density: 0.97, boiling: 883, melting: 98,
                electronegativity: 0.93, atomicRadius: 186, ionization: 496, electronAffinity: 52.8, metallicity: 0.93},
            12: {symbol: 'Mg', name: 'Magnesium', mass: 24.305, group: 2, period: 3, category: 'alkaline-earth',
                oxidation: ['+2'], config: '[Ne] 3s²', density: 1.74, boiling: 1090, melting: 650,
                electronegativity: 1.31, atomicRadius: 160, ionization: 738, electronAffinity: 0, metallicity: 1.31},
            13: {symbol: 'Al', name: 'Aluminum', mass: 26.982, group: 13, period: 3, category: 'poor-metals',
                oxidation: ['+3'], config: '[Ne] 3s² 3p¹', density: 2.70, boiling: 2519, melting: 660,
                electronegativity: 1.61, atomicRadius: 143, ionization: 578, electronAffinity: 42.5, metallicity: 1.61},
            14: {symbol: 'Si', name: 'Silicon', mass: 28.086, group: 14, period: 3, category: 'metalloids',
                oxidation: ['+4', '-4'], config: '[Ne] 3s² 3p²', density: 2.33, boiling: 3265, melting: 1414,
                electronegativity: 1.90, atomicRadius: 118, ionization: 787, electronAffinity: 133.6, metallicity: 1.90},
            15: {symbol: 'P', name: 'Phosphorus', mass: 30.974, group: 15, period: 3, category: 'nonmetals',
                oxidation: ['+5', '+3', '-3'], config: '[Ne] 3s² 3p³', density: 1.82, boiling: 281, melting: 44,
                electronegativity: 2.19, atomicRadius: 110, ionization: 1012, electronAffinity: 72.0, metallicity: 2.19},
            16: {symbol: 'S', name: 'Sulfur', mass: 32.065, group: 16, period: 3, category: 'nonmetals',
                oxidation: ['+6', '+4', '-2'], config: '[Ne] 3s² 3p⁴', density: 2.07, boiling: 445, melting: 115,
                electronegativity: 2.58, atomicRadius: 103, ionization: 1000, electronAffinity: 200.4, metallicity: 2.58},
            17: {symbol: 'Cl', name: 'Chlorine', mass: 35.453, group: 17, period: 3, category: 'halogens',
                oxidation: ['+7', '+5', '+3', '+1', '-1'], config: '[Ne] 3s² 3p⁵', density: 3.21, boiling: -34, melting: -101,
                electronegativity: 3.16, atomicRadius: 99, ionization: 1251, electronAffinity: 349.0, metallicity: 3.16},
            18: {symbol: 'Ar', name: 'Argon', mass: 39.948, group: 18, period: 3, category: 'noble-gases',
                oxidation: ['0'], config: '[Ne] 3s² 3p⁶', density: 1.78, boiling: -186, melting: -189,
                electronegativity: 0, atomicRadius: 97, ionization: 1521, electronAffinity: 0, metallicity: 0.0},
            19: {symbol: 'K', name: 'Potassium', mass: 39.098, group: 1, period: 4, category: 'alkali-metals',
                oxidation: ['+1'], config: '[Ar] 4s¹', density: 0.86, boiling: 759, melting: 64,
                electronegativity: 0.82, atomicRadius: 227, ionization: 419, electronAffinity: 48.4, metallicity: 0.82},
            20: {symbol: 'Ca', name: 'Calcium', mass: 40.078, group: 2, period: 4, category: 'alkaline-earth',
                oxidation: ['+2'], config: '[Ar] 4s²', density: 1.54, boiling: 1484, melting: 842,
                electronegativity: 1.00, atomicRadius: 197, ionization: 590, electronAffinity: 2.4, metallicity: 1.00},
            21: {symbol: 'Sc', name: 'Scandium', mass: 44.956, group: 3, period: 4, category: 'transition-metals',
                oxidation: ['+3'], config: '[Ar] 4s<sup>2</sup> 3s<sup>1</sup>', density: 2.99, boiling: 2836, melting: 1541,
                electronegativity: 1.36, atomicRadius: 170, ionization: 633, electronAffinity: 18.1, metallicity: 1.36},
            22: {symbol: 'Ti', name: 'Titanium', mass: 47.867, group: 4, period: 4, category: 'transition-metals',
                oxidation: ['+4', '+3', '+2'], config: '[Ar] 4s² 3ds²', density: 4.51, boiling: 3287, melting: 1668,
                electronegativity: 1.54, atomicRadius: 160, ionization: 659, electronAffinity: 7.6, metallicity: 1.54},
            23: {symbol: 'V', name: 'Vanadium', mass: 50.942, group: 5, period: 4, category: 'transition-metals',
                oxidation: ['+5', '+4', '+3', '+2'], config: '[Ar] 4s<sup>2</sup> 3d<sup>3</sup>', density: 6.11, boiling: 3407, melting: 1910,
                electronegativity: 1.63, atomicRadius: 153, ionization: 651, electronAffinity: 50.6, metallicity: 1.63},
            24: {symbol: 'Cr', name: 'Chromium', mass: 51.996, group: 6, period: 4, category: 'transition-metals',
                oxidation: ['+6', '+3', '+2'], config: '[Ar] 4s<sup>2</sup> 3d<sup>5</sup>', density: 7.15, boiling: 2671, melting: 1907,
                electronegativity: 1.66, atomicRadius: 139, ionization: 653, electronAffinity: 64.3, metallicity: 1.66},
            25: {symbol: 'Mn', name: 'Manganese', mass: 54.938, group: 7, period: 4, category: 'transition-metals',
                oxidation: ['+7', '+4', '+3', '+2'], config: '[Ar] 3d⁵ 4s²', density: 7.44, boiling: 2061, melting: 1246,
                electronegativity: 1.55, atomicRadius: 139, ionization: 717, electronAffinity: 0, metallicity: 1.55},
            26: {symbol: 'Fe', name: 'Iron', mass: 55.845, group: 8, period: 4, category: 'transition-metals',
                oxidation: ['+3', '+2'], config: '[Ar] 4s<sup>2</sup> 3d<sup>6</sup>', density: 7.87, boiling: 2862, melting: 1538,
                electronegativity: 1.83, atomicRadius: 132, ionization: 762, electronAffinity: 15.7, metallicity: 1.83},
            27: {symbol: 'Co', name: 'Cobalt', mass: 58.933, group: 9, period: 4, category: 'transition-metals',
                oxidation: ['+3', '+2'], config: '[Ar] 4s<sup>2</sup> 3d<sup>7</sup>', density: 8.86, boiling: 2927, melting: 1495,
                electronegativity: 1.88, atomicRadius: 126, ionization: 760, electronAffinity: 63.7, metallicity: 1.88},
            28: {symbol: 'Ni', name: 'Nickel', mass: 58.693, group: 10, period: 4, category: 'transition-metals',
                oxidation: ['+2'], config: '[Ar] 4s<sup>2</sup> 3d<sup>8</sup>', density: 8.91, boiling: 2913, melting: 1455,
                electronegativity: 1.91, atomicRadius: 124, ionization: 737, electronAffinity: 112.0, metallicity: 1.91},
            29: {symbol: 'Cu', name: 'Copper', mass: 63.546, group: 11, period: 4, category: 'transition-metals',
                oxidation: ['+2', '+1'], config: '[Ar] 3d¹⁰ 4s¹', density: 8.96, boiling: 2562, melting: 1085,
                electronegativity: 1.90, atomicRadius: 132, ionization: 746, electronAffinity: 118.4, metallicity: 1.90},
            30: {symbol: 'Zn', name: 'Zinc', mass: 65.38, group: 12, period: 4, category: 'transition-metals',
                oxidation: ['+2'], config: '[Ar] 4s<sup>2</sup> 3d<sup>10</sup>', density: 7.13, boiling: 907, melting: 420,
                electronegativity: 1.65, atomicRadius: 142, ionization: 906, electronAffinity: 0, metallicity: 1.65},
            31: {symbol: 'Ga', name: 'Gallium', mass: 69.723, group: 13, period: 4, category: 'poor-metals',
                oxidation: ['+3'], config: '[Ar] 4s² 3d¹⁰ 4p¹', density: 5.91, boiling: 2204, melting: 30,
                electronegativity: 1.81, atomicRadius: 136, ionization: 579, electronAffinity: 28.9, metallicity: 1.81},
            32: {symbol: 'Ge', name: 'Germanium', mass: 72.64, group: 14, period: 4, category: 'metalloids',
                oxidation: ['+4', '+2'], config: '[Ar] 4s² 3d¹⁰ 4p²', density: 5.32, boiling: 2833, melting: 939,
                electronegativity: 2.01, atomicRadius: 125, ionization: 762, electronAffinity: 119.0, metallicity: 2.01},
            33: {symbol: 'As', name: 'Arsenic', mass: 74.922, group: 15, period: 4, category: 'metalloids',
                oxidation: ['+5', '+3', '-3'], config: '[Ar] 4s² 3d¹⁰ 4p³', density: 5.78, boiling: 614, melting: 817,
                electronegativity: 2.18, atomicRadius: 114, ionization: 947, electronAffinity: 78.0, metallicity: 2.18},
            34: {symbol: 'Se', name: 'Selenium', mass: 78.96, group: 16, period: 4, category: 'nonmetals',
                oxidation: ['+6', '+4', '-2'], config: '[Ar] 4s² 3d¹⁰ 4p⁴', density: 4.81, boiling: 685, melting: 221,
                electronegativity: 2.55, atomicRadius: 103, ionization: 941, electronAffinity: 195.0, metallicity: 2.55},
            35: {symbol: 'Br', name: 'Bromine', mass: 79.904, group: 17, period: 4, category: 'halogens',
                oxidation: ['+7', '+5', '+3', '+1', '-1'], config: '[Ar] 4s² 3d¹⁰ 4p⁵', density: 3.12, boiling: 59, melting: -7,
                electronegativity: 2.96, atomicRadius: 94, ionization: 1140, electronAffinity: 324.6, metallicity: 2.96},
            36: {symbol: 'Kr', name: 'Krypton', mass: 83.798, group: 18, period: 4, category: 'noble-gases',
                oxidation: ['0'], config: '[Ar] 4s² 3d¹⁰ 4p⁶', density: 3.75, boiling: -153, melting: -157,
                electronegativity: 3.00, atomicRadius: 88, ionization: 1351, electronAffinity: 0, metallicity: 0.0},
            37: {symbol: 'Rb', name: 'Rubidium', mass: 85.468, group: 1, period: 5, category: 'alkali-metals',
                oxidation: ['+1'], config: '[Kr] 5s¹', density: 1.53, boiling: 688, melting: 39,
                electronegativity: 0.82, atomicRadius: 248, ionization: 403, electronAffinity: 46.9, metallicity: 0.82},
            38: {symbol: 'Sr', name: 'Strontium', mass: 87.62, group: 2, period: 5, category: 'alkaline-earth',
                oxidation: ['+2'], config: '[Kr] 5s²', density: 2.64, boiling: 1377, melting: 777,
                electronegativity: 0.95, atomicRadius: 215, ionization: 549, metallicity: 0.95},
            39: {symbol: 'Y', name: 'Yttrium', mass: 88.906, group: 3, period: 5, category: 'transition-metals',
                oxidation: ['+3'], config: '[Kr] 5s² 4d¹', density: 4.47, boiling: 3345, melting: 1526,
                electronegativity: 1.22, atomicRadius: 190, ionization: 600, metallicity: 1.22},
            40: {symbol: 'Zr', name: 'Zirconium', mass: 91.224, group: 4, period: 5, category: 'transition-metals',
                oxidation: ['+4'], config: '[Kr] 5s² 4d²', density: 6.51, boiling: 4409, melting: 1855,
                electronegativity: 1.33, atomicRadius: 175, ionization: 640},
            41: {symbol: 'Nb', name: 'Niobium', mass: 92.906, group: 5, period: 5, category: 'transition-metals',
                oxidation: ['+5', '+3'], config: '[Kr] 5s<sup>2</sup> 4d<sup>3</sup>', density: 8.57, boiling: 5017, melting: 2477,
                electronegativity: 1.6, atomicRadius: 164, ionization: 652},
            42: {symbol: 'Mo', name: 'Molybdenum', mass: 95.96, group: 6, period: 5, category: 'transition-metals',
                oxidation: ['+6', '+4'], config: '[Kr] 4d⁵ 5s¹', density: 10.2, boiling: 4639, melting: 2623,
                electronegativity: 2.16, atomicRadius: 154, ionization: 684},
            43: {symbol: 'Tc', name: 'Technetium', mass: 98, group: 7, period: 5, category: 'transition-metals',
                oxidation: ['+7', '+4'], config: '[Kr]  5s² 4d⁵', density: 11, boiling: 4265, melting: 2157,
                electronegativity: 1.9, atomicRadius: 147, ionization: 702},
            44: {symbol: 'Ru', name: 'Ruthenium', mass: 101.07, group: 8, period: 5, category: 'transition-metals',
                oxidation: ['+4', '+3'], config: '[Kr] 5s<sup>2</sup> 4d<sup>6</sup>', density: 12.1, boiling: 4150, melting: 2334,
                electronegativity: 2.2, atomicRadius: 142, ionization: 710},
            45: {symbol: 'Rh', name: 'Rhodium', mass: 102.91, group: 9, period: 5, category: 'transition-metals',
                oxidation: ['+3'], config: '[Kr] 5s<sup>2 4d<sup>7</sup>', density: 12.4, boiling: 3695, melting: 1964,
                electronegativity: 2.28, atomicRadius: 141, ionization: 720},
            46: {symbol: 'Pd', name: 'Palladium', mass: 106.42, group: 10, period: 5, category: 'transition-metals',
                oxidation: ['+2'], config: '[Kr] 5s<sup>2</sup> 4d<sup>8</sup>', density: 12.0, boiling: 2963, melting: 1555,
                electronegativity: 2.20, atomicRadius: 139, ionization: 804},
            47: {symbol: 'Ag', name: 'Silver', mass: 107.87, group: 11, period: 5, category: 'transition-metals',
                oxidation: ['+1'], config: '[Kr] 4d¹⁰ 5s¹', density: 10.5, boiling: 2162, melting: 962,
                electronegativity: 1.93, atomicRadius: 145, ionization: 731},
            48: {symbol: 'Cd', name: 'Cadmium', mass: 112.41, group: 12, period: 5, category: 'transition-metals',
                oxidation: ['+2'], config: '[Kr] 5s² 4d¹⁰', density: 8.69, boiling: 767, melting: 321,
                electronegativity: 1.69, atomicRadius: 161, ionization: 868},
            49: {symbol: 'In', name: 'Indium', mass: 114.82, group: 13, period: 5, category: 'poor-metals',
                oxidation: ['+3'], config: '[Kr] 5s² 4d¹⁰ 5p<sup>3</sup>', density: 7.31, boiling: 2072, melting: 157,
                electronegativity: 1.78, atomicRadius: 156, ionization: 558},
            50: {symbol: 'Sn', name: 'Tin', mass: 118.71, group: 14, period: 5, category: 'poor-metals',
                oxidation: ['+4', '+2'], config: '[Kr] 5s² 4d¹⁰ 5p²', density: 7.29, boiling: 2602, melting: 232,
                electronegativity: 1.96, atomicRadius: 145, ionization: 709},
            51: {symbol: 'Sb', name: 'Antimony', mass: 121.76, group: 15, period: 5, category: 'metalloids',
                oxidation: ['+5', '+3', '-3'], config: '[Kr] 5s² 4d¹⁰  5p³', density: 6.68, boiling: 1587, melting: 631,
                electronegativity: 2.05, atomicRadius: 133, ionization: 834},
            52: {symbol: 'Te', name: 'Tellurium', mass: 127.6, group: 16, period: 5, category: 'metalloids',
                oxidation: ['+6', '+4', '-2'], config: '[Kr] 5s² 4d¹⁰ 5p⁴', density: 6.23, boiling: 988, melting: 450,
                electronegativity: 2.1, atomicRadius: 123, ionization: 869},
            53: {symbol: 'I', name: 'Iodine', mass: 126.90, group: 17, period: 5, category: 'halogens',
                oxidation: ['+7', '+5', '+1', '-1'], config: '[Kr] 5s² 4d¹⁰ 5p⁵', density: 4.93, boiling: 184, melting: 114,
                electronegativity: 2.66, atomicRadius: 115, ionization: 1008},
            54: {symbol: 'Xe', name: 'Xenon', mass: 131.29, group: 18, period: 5, category: 'noble-gases',
                oxidation: ['0'], config: '[Kr] 5s² 4d¹⁰ 5p⁶', density: 5.89, boiling: -108, melting: -112,
                electronegativity: 2.6, atomicRadius: 108, ionization: 1170},
            55: {symbol: 'Cs', name: 'Cesium', mass: 132.91, group: 1, period: 6, category: 'alkali-metals',
                oxidation: ['+1'], config: '[Xe] 6s¹', density: 1.87, boiling: 671, melting: 29,
                electronegativity: 0.79, atomicRadius: 265, ionization: 376},
            56: {symbol: 'Ba', name: 'Barium', mass: 137.33, group: 2, period: 6, category: 'alkaline-earth',
                oxidation: ['+2'], config: '[Xe] 6s²', density: 3.59, boiling: 1897, melting: 727,
                electronegativity: 0.89, atomicRadius: 222, ionization: 503},
            57: {symbol: 'La', name: 'Lanthanum', mass: 138.91, group: 3, period: 6, category: 'lanthanides',
                oxidation: ['+3'], config: '[Xe] 6s² 4f<sup>1</sup>', density: 6.15, boiling: 3464, melting: 920,
                electronegativity: 1.1, atomicRadius: 207, ionization: 538},
            58: {symbol: 'Ce', name: 'Cerium', mass: 140.12, group: 3, period: 6, category: 'lanthanides',
                oxidation: ['+4', '+3'], config: '[Xe] 6s² 4f<sup>2</sup>', density: 6.77, boiling: 3443, melting: 798,
                electronegativity: 1.12, atomicRadius: 204, ionization: 534},
            59: {symbol: 'Pr', name: 'Praseodymium', mass: 140.91, group: 3, period: 6, category: 'lanthanides',
                oxidation: ['+3'], config: '[Xe] 6s² 4f<sup>3</sup>', density: 6.77, boiling: 3520, melting: 931,
                electronegativity: 1.13, atomicRadius: 203, ionization: 527},
            60: {symbol: 'Nd', name: 'Neodymium', mass: 144.24, group: 3, period: 6, category: 'lanthanides',
                oxidation: ['+3'], config: '[Xe] 6s² 4f<sup>4</sup>', density: 7.01, boiling: 3074, melting: 1021,
                electronegativity: 1.14, atomicRadius: 201, ionization: 533},
            61: {symbol: 'Pm', name: 'Promethium', mass: 145, group: 3, period: 6, category: 'lanthanides',
                oxidation: ['+3'], config: '[Xe] 6s² 4f<sup>5</sup>', density: 7.26, boiling: 3000, melting: 1042,
                electronegativity: 1.13, atomicRadius: 199, ionization: 540},
            62: {symbol: 'Sm', name: 'Samarium', mass: 150.36, group: 3, period: 6, category: 'lanthanides',
                oxidation: ['+3', '+2'], config: '[Xe] 6s² 4f<sup>6</sup>', density: 7.52, boiling: 1794, melting: 1074,
                electronegativity: 1.17, atomicRadius: 198, ionization: 545},
            63: {symbol: 'Eu', name: 'Europium', mass: 151.96, group: 3, period: 6, category: 'lanthanides',
                oxidation: ['+3', '+2'], config: '[Xe] 6s² 4f<sup>7</sup>', density: 5.24, boiling: 1529, melting: 822,
                electronegativity: 1.2, atomicRadius: 198, ionization: 547},
            64: {symbol: 'Gd', name: 'Gadolinium', mass: 157.25, group: 3, period: 6, category: 'lanthanides',
                oxidation: ['+3'], config: '[Xe] 6s² 4f<sup>8</sup>', density: 7.90, boiling: 3273, melting: 1313,
                electronegativity: 1.2, atomicRadius: 196, ionization: 593},
            65: {symbol: 'Tb', name: 'Terbium', mass: 158.93, group: 3, period: 6, category: 'lanthanides',
                oxidation: ['+4', '+3'], config: '[Xe] 6s² 4f<sup>9</sup>', density: 8.23, boiling: 3230, melting: 1356,
                electronegativity: 1.2, atomicRadius: 194, ionization: 566},
            66: {symbol: 'Dy', name: 'Dysprosium', mass: 162.50, group: 3, period: 6, category: 'lanthanides',
                oxidation: ['+3'], config: '[Xe] 6s² 4f<sup>10</sup>', density: 8.55, boiling: 2567, melting: 1412,
                electronegativity: 1.22, atomicRadius: 192, ionization: 573},
            67: {symbol: 'Ho', name: 'Holmium', mass: 164.93, group: 3, period: 6, category: 'lanthanides',
                oxidation: ['+3'], config: '[Xe] 6s² 4f<sup>11</sup>', density: 8.80, boiling: 2720, melting: 1474,
                electronegativity: 1.23, atomicRadius: 192, ionization: 581},
            68: {symbol: 'Er', name: 'Erbium', mass: 167.26, group: 3, period: 6, category: 'lanthanides',
                oxidation: ['+3'], config: '[Xe] 6s² 4f<sup>12</sup>', density: 9.07, boiling: 2868, melting: 1529,
                electronegativity: 1.24, atomicRadius: 189, ionization: 589},
            69: {symbol: 'Tm', name: 'Thulium', mass: 168.93, group: 3, period: 6, category: 'lanthanides',
                oxidation: ['+3'], config: '[Xe] 6s² 4f<sup>13</sup>', density: 9.32, boiling: 1950, melting: 1545,
                electronegativity: 1.25, atomicRadius: 190, ionization: 597},
            70: {symbol: 'Yb', name: 'Ytterbium', mass: 173.05, group: 3, period: 6, category: 'lanthanides',
                oxidation: ['+3', '+2'], config: '[Xe] 6s² 4f<sup>14</sup>', density: 6.90, boiling: 1196, melting: 819,
                electronegativity: 1.1, atomicRadius: 187, ionization: 603},
            71: {symbol: 'Lu', name: 'Lutetium', mass: 174.97, group: 3, period: 6, category: 'lanthanides',
                oxidation: ['+3'], config: '[Xe] 6s² 4f<sup>14</sup> 5d<sup>1</sup>', density: 9.84, boiling: 3402, melting: 1663,
                electronegativity: 1.27, atomicRadius: 187, ionization: 524},
            72: {symbol: 'Hf', name: 'Hafnium', mass: 178.49, group: 4, period: 6, category: 'transition-metals',
                oxidation: ['+4'], config: '[Xe] 6s² 4f<sup>14</sup> 5d<sup>2</sup>', density: 13.3, boiling: 4603, melting: 2233,
                electronegativity: 1.3, atomicRadius: 175, ionization: 659},
            73: {symbol: 'Ta', name: 'Tantalum', mass: 180.95, group: 5, period: 6, category: 'transition-metals',
                oxidation: ['+5'], config: '[Xe] 6s² 4f<sup>14</sup> 5d<sup>3</sup>', density: 16.4, boiling: 5458, melting: 3017,
                electronegativity: 1.5, atomicRadius: 170, ionization: 761},
            74: {symbol: 'W', name: 'Tungsten', mass: 183.84, group: 6, period: 6, category: 'transition-metals',
                oxidation: ['+6', '+4'], config: '[Xe] 6s² 4f<sup>14</sup> 5d<sup>4</sup>', density: 19.3, boiling: 5555, melting: 3695,
                electronegativity: 2.36, atomicRadius: 162, ionization: 770},
            75: {symbol: 'Re', name: 'Rhenium', mass: 186.21, group: 7, period: 6, category: 'transition-metals',
                oxidation: ['+7', '+4'], config: '[Xe] 6s² 4f<sup>14</sup> 5d<sup>5</sup>', density: 20.8, boiling: 5596, melting: 3459,
                electronegativity: 1.9, atomicRadius: 151, ionization: 760},
            76: {symbol: 'Os', name: 'Osmium', mass: 190.23, group: 8, period: 6, category: 'transition-metals',
                oxidation: ['+4'], config: '[Xe] 6s² 4f<sup>14</sup> 5d<sup>6</sup>', density: 22.6, boiling: 5012, melting: 3033,
                electronegativity: 2.2, atomicRadius: 144, ionization: 840},
            77: {symbol: 'Ir', name: 'Iridium', mass: 192.22, group: 9, period: 6, category: 'transition-metals',
                oxidation: ['+4', '+3'], config: '[Xe] 6s² 4f<sup>14</sup> 5d<sup>7</sup>', density: 22.4, boiling: 4428, melting: 2466,
                electronegativity: 2.20, atomicRadius: 141, ionization: 880},
            78: {symbol: 'Pt', name: 'Platinum', mass: 195.08, group: 10, period: 6, category: 'transition-metals',
                oxidation: ['+4', '+2'], config: '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>8</sup>', density: 21.5, boiling: 3825, melting: 1768,
                electronegativity: 2.28, atomicRadius: 139, ionization: 870},
            79: {symbol: 'Au', name: 'Gold', mass: 196.97, group: 11, period: 6, category: 'transition-metals',
                oxidation: ['+3', '+1'], config: '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>9</sup>', density: 19.3, boiling: 2856, melting: 1064,
                electronegativity: 2.54, atomicRadius: 139, ionization: 890},
            80: {symbol: 'Hg', name: 'Mercury', mass: 200.59, group: 12, period: 6, category: 'transition-metals',
                oxidation: ['+2', '+1'], config: '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup>', density: 13.5, boiling: 357, melting: -39,
                electronegativity: 2.00, atomicRadius: 171, ionization: 1007},
            81: {symbol: 'Tl', name: 'Thallium', mass: 204.38, group: 13, period: 6, category: 'poor-metals',
                oxidation: ['+3', '+1'], config: '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>1</sup>', density: 11.8, boiling: 1473, melting: 304,
                electronegativity: 1.62, atomicRadius: 156, ionization: 589},
            82: {symbol: 'Pb', name: 'Lead', mass: 207.2, group: 14, period: 6, category: 'poor-metals',
                oxidation: ['+4', '+2'], config: '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>2</sup>', density: 11.3, boiling: 1749, melting: 328,
                electronegativity: 2.33, atomicRadius: 154, ionization: 716},
            83: {symbol: 'Bi', name: 'Bismuth', mass: 208.98, group: 15, period: 6, category: 'poor-metals',
                oxidation: ['+5', '+3'], config: '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>3</sup>', density: 9.81, boiling: 1564, melting: 271,
                electronegativity: 2.02, atomicRadius: 143, ionization: 703},
            84: {symbol: 'Po', name: 'Polonium', mass: 209, group: 16, period: 6, category: 'metalloids',
                oxidation: ['+4', '+2'], config: '[Xe] 46s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>4</sup>', density: 9.20, boiling: 962, melting: 254,
                electronegativity: 2.0, atomicRadius: 135, ionization: 812},
            85: {symbol: 'At', name: 'Astatine', mass: 210, group: 17, period: 6, category: 'halogens',
                oxidation: ['+7', '+5', '+3', '+1', '-1'], config: '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>5</sup>', density: 7, boiling: 337, melting: 302,
                electronegativity: 2.2, atomicRadius: 127, ionization: 920},
            86: {symbol: 'Rn', name: 'Radon', mass: 222, group: 18, period: 6, category: 'noble-gases',
                oxidation: ['0'], config: '[Xe] 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup>', density: 9.73, boiling: -62, melting: -71,
                electronegativity: 2.2, atomicRadius: 120, ionization: 1037},
            87: {symbol: 'Fr', name: 'Francium', mass: 223, group: 1, period: 7, category: 'alkali-metals',
                oxidation: ['+1'], config: '[Rn] 7s¹', density: 1.87, boiling: 677, melting: 27,
                electronegativity: 0.7, atomicRadius: 348, ionization: 380},
            88: {symbol: 'Ra', name: 'Radium', mass: 226, group: 2, period: 7, category: 'alkaline-earth',
                oxidation: ['+2'], config: '[Rn] 7s²', density: 5.5, boiling: 1737, melting: 696,
                electronegativity: 0.9, atomicRadius: 283, ionization: 509},
            89: {symbol: 'Ac', name: 'Actinium', mass: 227, group: 3, period: 7, category: 'actinides',
                oxidation: ['+3'], config: '[Rn] 7s² 5f<sup>1</sup>', density: 10.1, boiling: 3471, melting: 1051,
                electronegativity: 1.1, atomicRadius: 260, ionization: 499},
            90: {symbol: 'Th', name: 'Thorium', mass: 232.04, group: 3, period: 7, category: 'actinides',
                oxidation: ['+4'], config: '[Rn] 7s² 5f<sup>2</sup>', density: 11.7, boiling: 4788, melting: 1750,
                electronegativity: 1.3, atomicRadius: 237, ionization: 587},
            91: {symbol: 'Pa', name: 'Protactinium', mass: 231.04, group: 3, period: 7, category: 'actinides',
                oxidation: ['+5', '+4'], config: '[Rn] 7s² 5f<sup>3</sup>', density: 15.4, boiling: 4000, melting: 1572,
                electronegativity: 1.5, atomicRadius: 243, ionization: 568},
            92: {symbol: 'U', name: 'Uranium', mass: 238.03, group: 3, period: 7, category: 'actinides',
                oxidation: ['+6', '+4', '+3'], config: '[Rn] 7s² 5f<sup>4</sup>', density: 18.9, boiling: 4131, melting: 1135,
                electronegativity: 1.38, atomicRadius: 240, ionization: 598},
            93: {symbol: 'Np', name: 'Neptunium', mass: 237, group: 3, period: 7, category: 'actinides',
                oxidation: ['+6', '+5', '+4', '+3'], config: '[Rn] 7s² 5f<sup>5</sup>', density: 20.2, boiling: 4000, melting: 644,
                electronegativity: 1.36, atomicRadius: 239, ionization: 605},
            94: {symbol: 'Pu', name: 'Plutonium', mass: 244, group: 3, period: 7, category: 'actinides',
                oxidation: ['+6', '+5', '+4', '+3'], config: '[Rn] 7s² 5f<sup>6</sup>', density: 19.8, boiling: 3228, melting: 640,
                electronegativity: 1.28, atomicRadius: 244, ionization: 585},
            95: {symbol: 'Am', name: 'Americium', mass: 243, group: 3, period: 7, category: 'actinides',
                oxidation: ['+6', '+5', '+4', '+3'], config: '[Rn] 7s² 5f<sup>7</sup>', density: 13.7, boiling: 2011, melting: 1176,
                electronegativity: 1.3, atomicRadius: 245, ionization: 578},
            96: {symbol: 'Cm', name: 'Curium', mass: 247, group: 3, period: 7, category: 'actinides',
                oxidation: ['+4', '+3'], config: '[Rn] 7s² 5f<sup>8</sup>', density: 13.5, boiling: 3110, melting: 1345,
                electronegativity: 1.3, atomicRadius: 245, ionization: 581},
            97: {symbol: 'Bk', name: 'Berkelium', mass: 247, group: 3, period: 7, category: 'actinides',
                oxidation: ['+4', '+3'], config: '[Rn] 7s² 5f<sup>9</sup>', density: 14.8, boiling: 2900, melting: 1050,
                electronegativity: 1.3, atomicRadius: 244, ionization: 601},
            98: {symbol: 'Cf', name: 'Californium', mass: 251, group: 3, period: 7, category: 'actinides',
                oxidation: ['+4', '+3'], config: '[Rn] 7s² 5f<sup>10</sup>', density: 15.1, boiling: 1743, melting: 900,
                electronegativity: 1.3, atomicRadius: 245, ionization: 608},
            99: {symbol: 'Es', name: 'Einsteinium', mass: 252, group: 3, period: 7, category: 'actinides',
                oxidation: ['+3'], config: '[Rn] 7s² 5f<sup>11</sup>', density: 8.84, boiling: 1130, melting: 860,
                electronegativity: 1.3, atomicRadius: 245, ionization: 619},
            100: {symbol: 'Fm', name: 'Fermium', mass: 257, group: 3, period: 7, category: 'actinides',
                oxidation: ['+3'], config: '[Rn] 7s² 5f<sup>12</sup>', density: 9.7, boiling: 1800, melting: 1527,
                electronegativity: 1.3, atomicRadius: 245, ionization: 627},
            101: {symbol: 'Md', name: 'Mendelevium', mass: 258, group: 3, period: 7, category: 'actinides',
                oxidation: ['+3'], config: '[Rn] 7s² 5f<sup>13</sup>', density: 10.3, boiling: 1100, melting: 827,
                electronegativity: 1.3, atomicRadius: 246, ionization: 635},
            102: {symbol: 'No', name: 'Nobelium', mass: 259, group: 3, period: 7, category: 'actinides',
                oxidation: ['+3', '+2'], config: '[Rn] 7s² 5f<sup>14</sup>', density: 9.9, boiling: 1100, melting: 827,
                electronegativity: 1.3, atomicRadius: 246, ionization: 642},
            103: {symbol: 'Lr', name: 'Lawrencium', mass: 262, group: 3, period: 7, category: 'actinides',
                oxidation: ['+3'], config: '[Rn] 7s² 5f<sup>14</sup> 6d<sup>1</sup>', density: 15.6, boiling: 1900, melting: 1627,
                electronegativity: 1.3, atomicRadius: 246, ionization: 470},
            104: {symbol: 'Rf', name: 'Rutherfordium', mass: 267, group: 4, period: 7, category: 'transition-metals',
                oxidation: ['+4'], config: '[Rn] 7s² 5f<sup>14</sup> 6d<sup>2</sup>', density: 23, boiling: 5800, melting: 2400,
                electronegativity: 1.3, atomicRadius: 157, ionization: 580},
            105: {symbol: 'Db', name: 'Dubnium', mass: 268, group: 5, period: 7, category: 'transition-metals',
                oxidation: ['+5'], config: '[Rn] 7s² 5f<sup>14</sup> 6d<sup>3</sup>', density: 29, boiling: 5500, melting: 2100,
                electronegativity: 1.5, atomicRadius: 149, ionization: 665},
            106: {symbol: 'Sg', name: 'Seaborgium', mass: 271, group: 6, period: 7, category: 'transition-metals',
                oxidation: ['+6'], config: '[Rn] 7s² 5f<sup>14</sup> 6d<sup>4</sup>', density: 35, boiling: 4200, melting: 2700,
                electronegativity: 1.9, atomicRadius: 143, ionization: 757},
            107: {symbol: 'Bh', name: 'Bohrium', mass: 272, group: 7, period: 7, category: 'transition-metals',
                oxidation: ['+7'], config: '[Rn] 7s² 5f<sup>14</sup> 6d<sup>5</sup>', density: 37, boiling: 4100, melting: 2400,
                electronegativity: 2.2, atomicRadius: 141, ionization: 740},
            108: {symbol: 'Hs', name: 'Hassium', mass: 277, group: 8, period: 7, category: 'transition-metals',
                oxidation: ['+8'], config: '[Rn] 7s² 5f<sup>14</sup> 6d<sup>6</sup>', density: 41, boiling: 3800, melting: 2600,
                electronegativity: 2.3, atomicRadius: 134, ionization: 800},
            109: {symbol: 'Mt', name: 'Meitnerium', mass: 276, group: 9, period: 7, category: 'transition-metals',
                oxidation: ['+9'], config: '[Rn] 7s² 5f<sup>14</sup> 6d<sup>7</sup>', density: 37, boiling: 3500, melting: 2400,
                electronegativity: 2.3, atomicRadius: 129, ionization: 840},
            110: {symbol: 'Ds', name: 'Darmstadtium', mass: 281, group: 10, period: 7, category: 'transition-metals',
                oxidation: ['+8'], config: '[Rn] 7s² 5f<sup>14</sup> 6d<sup>8</sup>', density: 34, boiling: 3000, melting: 2100,
                electronegativity: 2.4, atomicRadius: 128, ionization: 900},
            111: {symbol: 'Rg', name: 'Roentgenium', mass: 280, group: 11, period: 7, category: 'transition-metals',
                oxidation: ['+5', '+3', '+1'], config: '[Rn] 7s² 5f<sup>14</sup> 6d<sup>9</sup>', density: 28, boiling: 2700, melting: 1900,
                electronegativity: 2.4, atomicRadius: 121, ionization: 1020},
            112: {symbol: 'Cn', name: 'Copernicium', mass: 285, group: 12, period: 7, category: 'transition-metals',
                oxidation: ['+4', '+2'], config: '[Rn] 7s² 5f<sup>14</sup> 6d<sup>10</sup>', density: 23, boiling: 357, melting: 10,
                electronegativity: 2.0, atomicRadius: 122, ionization: 1155},
            113: {symbol: 'Nh', name: 'Nihonium', mass: 284, group: 13, period: 7, category: 'poor-metals',
                oxidation: ['+3', '+1'], config: '[Rn] 7s² 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>1</sup>', density: 16, boiling: 1400, melting: 700,
                electronegativity: 1.6, atomicRadius: 136, ionization: 704},
            114: {symbol: 'Fl', name: 'Flerovium', mass: 289, group: 14, period: 7, category: 'poor-metals',
                oxidation: ['+4', '+2'], config: '[Rn] 7s² 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>2</sup>', density: 14, boiling: 380, melting: 200,
                electronegativity: 2.0, atomicRadius: 143, ionization: 832},
            115: {symbol: 'Mc', name: 'Moscovium', mass: 288, group: 15, period: 7, category: 'poor-metals',
                oxidation: ['+3', '+1'], config: '[Rn] 7s² 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>3</sup>', density: 13.5, boiling: 1400, melting: 700,
                electronegativity: 1.9, atomicRadius: 162, ionization: 538},
            116: {symbol: 'Lv', name: 'Livermorium', mass: 293, group: 16, period: 7, category: 'poor-metals',
                oxidation: ['+4', '+2'], config: '[Rn] 7s² 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>4</sup>', density: 12.9, boiling: 1085, melting: 709,
                electronegativity: 1.8, atomicRadius: 175, ionization: 663},
            117: {symbol: 'Ts', name: 'Tennessine', mass: 294, group: 17, period: 7, category: 'halogens',
                oxidation: ['+5', '+3', '+1', '-1'], config: '[Rn] 7s² 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>5</sup>', density: 7.2, boiling: 883, melting: 723,
                electronegativity: 1.9, atomicRadius: 165, ionization: 742},
            118: {symbol: 'Og', name: 'Oganesson', mass: 294, group: 18, period: 7, category: 'noble-gases',
                oxidation: ['0'], config: '[Rn] 7s² 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>6</sup>', density: 5.0, boiling: 350, melting: 325,
                electronegativity: 1.65, atomicRadius: 157, ionization: 860}
        };

        // Shared element database for feature modules such as Build a Compound.
        window.DPPTE_ELEMENTS = elements;

        // Quiz questions database
        const quizQuestions = {
            easy: [
                {
                    question: "What is the symbol for Hydrogen?",
                    options: ["H", "He", "Hy", "Hg"],
                    correct: 0
                },
                {
                    question: "What is the atomic number of Carbon?",
                    options: ["4", "6", "8", "12"],
                    correct: 1
                },
                {
                    question: "Which element has the symbol 'O'?",
                    options: ["Osmium", "Oxygen", "Gold", "Silver"],
                    correct: 1
                },
                {
                    question: "What is the symbol for Gold?",
                    options: ["Go", "Gd", "Au", "Ag"],
                    correct: 2
                },
                {
                    question: "Which element has atomic number 1?",
                    options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
                    correct: 1
                },
                {
                    question: "What is the symbol for Silver?",
                    options: ["Si", "Ag", "S", "Sr"],
                    correct: 1
                },
                {
                    question: "Which element has the symbol 'Fe'?",
                    options: ["Fluorine", "Iron", "Francium", "Fermium"],
                    correct: 1
                },
                {
                    question: "What is the atomic number of Oxygen?",
                    options: ["6", "7", "8", "9"],
                    correct: 2
                },
                {
                    question: "Which element has the symbol 'Na'?",
                    options: ["Nitrogen", "Sodium", "Nickel", "Neon"],
                    correct: 1
                },
                {
                    question: "What is the symbol for Calcium?",
                    options: ["C", "Ca", "Cl", "Cr"],
                    correct: 1
                },
                {
                    question: "What state is water at room temperature?",
                    options: ["Solid", "Liquid", "Gas", "Plasma"],
                    correct: 1
                },
                {
                    question: "Which element has the symbol 'K'?",
                    options: ["Krypton", "Potassium", "Calcium", "Cobalt"],
                    correct: 1
                },
                {
                    question: "What is the symbol for Nitrogen?",
                    options: ["Ni", "N", "Ne", "Na"],
                    correct: 1
                },
                {
                    question: "Which element is a noble gas?",
                    options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
                    correct: 2
                },
                {
                    question: "What is the atomic number of Helium?",
                    options: ["1", "2", "3", "4"],
                    correct: 1
                }
            ],
            moderate: [
                {
                    question: "Which group contains the alkali metals?",
                    options: ["Group 1", "Group 2", "Group 17", "Group 18"],
                    correct: 0
                },
                {
                    question: "What is the electron configuration of Neon?",
                    options: ["1s² 2s² 2p⁴", "1s² 2s² 2p⁶", "1s² 2s² 2p⁵", "1s² 2s²"],
                    correct: 1
                },
                {
                    question: "Which element is in period 3, group 17?",
                    options: ["Fluorine", "Chlorine", "Bromine", "Iodine"],
                    correct: 1
                },
                {
                    question: "What is the oxidation state of Aluminum in Al₂O₃?",
                    options: ["+2", "+3", "+4", "+1"],
                    correct: 1
                },
                {
                    question: "Which element has the highest electronegativity?",
                    options: ["Oxygen", "Nitrogen", "Fluorine", "Chlorine"],
                    correct: 2
                },
                {
                    question: "What is the molecular formula of water?",
                    options: ["HO", "H₂O", "H₃O", "H₂O₂"],
                    correct: 1
                },
                {
                    question: "Which element is a noble gas with atomic number 10?",
                    options: ["Helium", "Neon", "Argon", "Krypton"],
                    correct: 1
                },
                {
                    question: "What is the mass percent of oxygen in CO₂?",
                    options: ["27.3%", "36.4%", "72.7%", "63.6%"],
                    correct: 2
                },
                {
                    question: "Which element has the electron configuration [Ar] 4s²?",
                    options: ["Potassium", "Calcium", "Scandium", "Titanium"],
                    correct: 1
                },
                {
                    question: "What type of bond forms between Na and Cl?",
                    options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
                    correct: 1
                }
            ],
            hard: [
                {
                    question: "What is the molar mass of Ca(OH)₂?",
                    options: ["56.08 g/mol", "74.09 g/mol", "82.09 g/mol", "90.08 g/mol"],
                    correct: 1
                },
                {
                    question: "Which element has the highest first ionization energy in period 3?",
                    options: ["Sodium", "Magnesium", "Aluminum", "Argon"],
                    correct: 3
                },
                {
                    question: "What is the hybridization of carbon in methane (CH₄)?",
                    options: ["sp", "sp²", "sp³", "sp³d"],
                    correct: 2
                },
                {
                    question: "Which lanthanide has atomic number 64?",
                    options: ["Europium", "Gadolinium", "Terbium", "Dysprosium"],
                    correct: 1
                },
                {
                    question: "What is the oxidation state of Cr in K₂Cr₂O₇?",
                    options: ["+3", "+4", "+5", "+6"],
                    correct: 3
                },
                {
                    question: "Which element has the electron configuration [Xe] 4f¹⁴ 5d¹⁰ 6s¹?",
                    options: ["Mercury", "Gold", "Platinum", "Silver"],
                    correct: 1
                },
                {
                    question: "What is the mass percent of nitrogen in NH₄NO₃?",
                    options: ["17.5%", "35.0%", "52.5%", "70.0%"],
                    correct: 1
                },
                {
                    question: "Which transition metal has the highest melting point?",
                    options: ["Iron", "Tungsten", "Platinum", "Gold"],
                    correct: 1
                },
                {
                    question: "What is the molecular geometry of SF₆?",
                    options: ["Tetrahedral", "Square planar", "Octahedral", "Trigonal bipyramidal"],
                    correct: 2
                },
                {
                    question: "Which element forms the most stable +7 oxidation state?",
                    options: ["Chlorine", "Manganese", "Rhenium", "Technetium"],
                    correct: 2
                }
            ],
            extreme: [
                {
                    question: "What is the exact molar mass of C₆H₁₂O₆ using atomic masses to 4 decimal places?",
                    options: ["180.1559 g/mol", "180.1588 g/mol", "180.1568 g/mol", "180.1578 g/mol"],
                    correct: 0
                },
                {
                    question: "Which actinide has the electron configuration [Rn] 5f⁷ 6d¹ 7s²?",
                    options: ["Americium", "Curium", "Berkelium", "Californium"],
                    correct: 1
                },
                {
                    question: "What is the bond order in the molecular ion O₂⁺?",
                    options: ["1.5", "2.0", "2.5", "3.0"],
                    correct: 2
                },
                {
                    question: "Which element has the highest density at room temperature?",
                    options: ["Osmium", "Iridium", "Platinum", "Gold"],
                    correct: 0
                },
                {
                    question: "What is the crystal field stabilization energy for [Fe(CN)₆]³⁻ in terms of Δₒ?",
                    options: ["-2.0Δₒ", "-2.4Δₒ", "-1.8Δₒ", "-2.2Δₒ"],
                    correct: 1
                },
                {
                    question: "Which superheavy element has the longest known half-life?",
                    options: ["Dubnium-268", "Seaborgium-271", "Bohrium-272", "Hassium-277"],
                    correct: 0
                },
                {
                    question: "What is the exact mass percent of chromium in K₂Cr₂O₇?",
                    options: ["35.35%", "35.36%", "35.37%", "35.38%"],
                    correct: 0
                },
                {
                    question: "Which element has the most complex electron configuration anomaly?",
                    options: ["Chromium", "Copper", "Palladium", "Lawrencium"],
                    correct: 2
                },
                {
                    question: "What is the magnetic moment of [Mn(H₂O)₆]²⁺ in Bohr magnetons?",
                    options: ["5.92 μB", "5.96 μB", "6.00 μB", "5.88 μB"],
                    correct: 0
                },
                {
                    question: "Which isotope is used as the standard for atomic mass units?",
                    options: ["¹²C", "¹³C", "¹⁴C", "¹⁶O"],
                    correct: 0
                }
            ]
        };

        let currentQuiz = [];
        let currentQuestionIndex = 0;
        let score = 0;
        let temperatureMode = false;
        let currentTemp = 25;
        let arrowsVisible = false;
        let currentTrend = null;

        // Initialize the periodic table
        function initializeTable() {
            const table = document.getElementById('periodicTable');
            table.innerHTML = '';

            // Define the layout positions for each element
            const positions = {
                1: {row: 1, col: 1}, 2: {row: 1, col: 18},
                3: {row: 2, col: 1}, 4: {row: 2, col: 2}, 5: {row: 2, col: 13}, 6: {row: 2, col: 14}, 7: {row: 2, col: 15}, 8: {row: 2, col: 16}, 9: {row: 2, col: 17}, 10: {row: 2, col: 18},
                11: {row: 3, col: 1}, 12: {row: 3, col: 2}, 13: {row: 3, col: 13}, 14: {row: 3, col: 14}, 15: {row: 3, col: 15}, 16: {row: 3, col: 16}, 17: {row: 3, col: 17}, 18: {row: 3, col: 18},
                19: {row: 4, col: 1}, 20: {row: 4, col: 2}, 21: {row: 4, col: 3}, 22: {row: 4, col: 4}, 23: {row: 4, col: 5}, 24: {row: 4, col: 6}, 25: {row: 4, col: 7}, 26: {row: 4, col: 8}, 27: {row: 4, col: 9}, 28: {row: 4, col: 10}, 29: {row: 4, col: 11}, 30: {row: 4, col: 12}, 31: {row: 4, col: 13}, 32: {row: 4, col: 14}, 33: {row: 4, col: 15}, 34: {row: 4, col: 16}, 35: {row: 4, col: 17}, 36: {row: 4, col: 18},
                37: {row: 5, col: 1}, 38: {row: 5, col: 2}, 39: {row: 5, col: 3}, 40: {row: 5, col: 4}, 41: {row: 5, col: 5}, 42: {row: 5, col: 6}, 43: {row: 5, col: 7}, 44: {row: 5, col: 8}, 45: {row: 5, col: 9}, 46: {row: 5, col: 10}, 47: {row: 5, col: 11}, 48: {row: 5, col: 12}, 49: {row: 5, col: 13}, 50: {row: 5, col: 14}, 51: {row: 5, col: 15}, 52: {row: 5, col: 16}, 53: {row: 5, col: 17}, 54: {row: 5, col: 18},
                55: {row: 6, col: 1}, 56: {row: 6, col: 2}, 57: {row: 8, col: 3}, 72: {row: 6, col: 4}, 73: {row: 6, col: 5}, 74: {row: 6, col: 6}, 75: {row: 6, col: 7}, 76: {row: 6, col: 8}, 77: {row: 6, col: 9}, 78: {row: 6, col: 10}, 79: {row: 6, col: 11}, 80: {row: 6, col: 12}, 81: {row: 6, col: 13}, 82: {row: 6, col: 14}, 83: {row: 6, col: 15}, 84: {row: 6, col: 16}, 85: {row: 6, col: 17}, 86: {row: 6, col: 18},
                87: {row: 7, col: 1}, 88: {row: 7, col: 2}, 89: {row: 9, col: 3}, 104: {row: 7, col: 4}, 105: {row: 7, col: 5}, 106: {row: 7, col: 6}, 107: {row: 7, col: 7}, 108: {row: 7, col: 8}, 109: {row: 7, col: 9}, 110: {row: 7, col: 10}, 111: {row: 7, col: 11}, 112: {row: 7, col: 12}, 113: {row: 7, col: 13}, 114: {row: 7, col: 14}, 115: {row: 7, col: 15}, 116: {row: 7, col: 16}, 117: {row: 7, col: 17}, 118: {row: 7, col: 18}
            };

            // Add lanthanides
            for (let i = 58; i <= 71; i++) {
                positions[i] = {row: 8, col: i - 54};
            }

            // Add actinides
            for (let i = 90; i <= 103; i++) {
                positions[i] = {row: 9, col: i - 86};
            }

            // Track which columns have elements in the first row to add group numbers
            const topRowElements = [1, 2]; // H and He are in row 1
            
            // Create all elements
            for (let atomicNumber = 1; atomicNumber <= 118; atomicNumber++) {
                const element = elements[atomicNumber];
                const position = positions[atomicNumber];
                
                if (element && position) {
                    const elementDiv = document.createElement('div');
                    elementDiv.className = 'element';
                    elementDiv.style.gridRow = position.row;
                    elementDiv.style.gridColumn = position.col;
                    elementDiv.dataset.atomicNumber = atomicNumber;
                    elementDiv.dataset.category = element.category;
                    
                    // Add group number above the topmost element in each column
                    let groupNumberHtml = '';
                    if ((position.row === 1 && topRowElements.includes(atomicNumber)) || 
                        (position.row === 2 && ![1, 2].some(num => positions[num] && positions[num].col === position.col)) ||
                        (position.row === 4 && position.col >= 3 && position.col <= 12)) {
                        groupNumberHtml = `<div class="group-number">${element.group}</div>`;
                    }
                    
                    elementDiv.innerHTML = `
                        ${groupNumberHtml}
                        <div class="atomic-number">${atomicNumber}</div>
                        <div class="symbol">${element.symbol}</div>
                        <div class="mass">${element.mass}</div>
                    `;
                    
                    elementDiv.onclick = () => showElementDetails(atomicNumber);
                    table.appendChild(elementDiv);
                }
            }
        }

        // Category highlighting functions
        // Special periodic-table classifications
        const specialClassifications = {
            'coinage-metals': [29, 47, 79],
            'platinum-group': [44, 45, 46, 76, 77, 78],
            'chalcogens': [8, 16, 34, 52, 84, 116],
            'pnictogens': [7, 15, 33, 51, 83, 115],
            'carbon-group': [6, 14, 32, 50, 82, 114],
            'boron-group': [5, 13, 31, 49, 81, 113]
        };

        function highlightClassification(classification) {
            clearAll();
            const atomicNumbers = specialClassifications[classification] || [];
            atomicNumbers.forEach(atomicNumber => {
                const element = document.querySelector(`.element[data-atomic-number="${atomicNumber}"]`);
                if (element) element.classList.add(classification);
            });
        }

        function highlightCategory(category) {
            clearAll();
            
            if (category === 'metals') {
                // Highlight all metal categories
                const metalCategories = ['alkali-metals', 'alkaline-earth', 'transition-metals', 'poor-metals', 'lanthanides', 'actinides'];
                metalCategories.forEach(metalCat => {
                    const elementsToHighlight = document.querySelectorAll(`[data-category="${metalCat}"]`);
                    elementsToHighlight.forEach(el => el.classList.add('metals'));
                });
            } else if (category === 'nonmetals') {
                // Highlight all nonmetal categories
                const nonmetalCategories = ['nonmetals', 'halogens', 'noble-gases'];
                nonmetalCategories.forEach(nonmetalCat => {
                    const elementsToHighlight = document.querySelectorAll(`[data-category="${nonmetalCat}"]`);
                    elementsToHighlight.forEach(el => el.classList.add('nonmetals'));
                });
            } else {
                // Regular category highlighting
                const elementsToHighlight = document.querySelectorAll(`[data-category="${category}"]`);
                elementsToHighlight.forEach(el => el.classList.add(category));
            }
        }

        function clearAll() {
            const allElements = document.querySelectorAll('.element');
            allElements.forEach(el => {
                [...el.classList].forEach(cls => {
                    if (
                        cls !== 'element' &&
                        cls !== 'temperature-state' &&
                        !cls.startsWith('state-')
                    ) {
                        el.classList.remove(cls);
                    }
                });

                el.style.backgroundColor = '';
                el.style.color = '';

                if (temperatureMode) {
                    updateElementState(el);
                } else {
                    const symbol = el.querySelector('.symbol');
                    el.classList.remove('temperature-state', 'state-solid', 'state-liquid', 'state-gas');
                    el.removeAttribute('data-state-label');
                    if (symbol) symbol.classList.remove('solid', 'liquid', 'gas');
                }
            });

            currentTrend = null;
            if (arrowsVisible) {
                arrowsVisible = false;
                const trendArrows = document.getElementById('trendArrows');
                const arrowToggle = document.getElementById('arrowToggle');
                if (trendArrows) {
                    trendArrows.classList.remove('is-visible');
                    trendArrows.style.display = 'none';
                }
                if (arrowToggle) arrowToggle.textContent = '↗ Show Trend Arrows';
            }
        }

        function toggleTrendArrows() {
            arrowsVisible = !arrowsVisible;
            const arrowToggle = document.getElementById('arrowToggle');
            const trendArrows = document.getElementById('trendArrows');

            if (arrowsVisible) {
                arrowToggle.textContent = '↙ Hide Trend Arrows';
                trendArrows.classList.add('is-visible');
                trendArrows.style.display = 'block';
                updateTrendArrows();
            } else {
                arrowToggle.textContent = '↗ Show Trend Arrows';
                trendArrows.classList.remove('is-visible');
                trendArrows.style.display = 'none';
            }
        }

        function updateTrendArrows() {
            if (!arrowsVisible || !currentTrend) return;

            const horizontalArrow = document.getElementById('horizontalArrow');
            const verticalArrow = document.getElementById('verticalArrow');
            const horizontalLabel = document.getElementById('horizontalLabel');
            const verticalLabel = document.getElementById('verticalLabel');
            if (!horizontalArrow || !verticalArrow) return;

            // The arrows are now determined automatically from the selected
            // property. There is deliberately no manual Increasing/Decreasing
            // switch because that could display a scientifically misleading
            // direction for a given periodic property.
            const trendProperties = {
                'electronegativity': {
                    color: '#e74c3c',
                    horizontal: '→ generally increases',
                    vertical: '↑ generally increases',
                    horizontalDir: 'right', verticalDir: 'up', simple: true
                },
                'atomic-radius': {
                    color: '#9b59b6',
                    horizontal: '← generally increases',
                    vertical: '↓ generally increases',
                    horizontalDir: 'left', verticalDir: 'down', simple: true
                },
                'ionization': {
                    color: '#3498db',
                    horizontal: '→ generally increases',
                    vertical: '↑ generally increases',
                    horizontalDir: 'right', verticalDir: 'up', simple: true
                },
                'electron-affinity': {
                    color: '#16a085',
                    horizontal: '→ generally more negative',
                    vertical: '↑ generally more negative',
                    horizontalDir: 'right', verticalDir: 'up', simple: true
                },
                'metallicity': {
                    color: '#8e44ad',
                    horizontal: '← generally increases',
                    vertical: '↓ generally increases',
                    horizontalDir: 'left', verticalDir: 'down', simple: true
                },
                'boiling-point': {
                    color: '#e67e22',
                    horizontal: 'varies across periods',
                    vertical: 'varies down groups',
                    horizontalDir: 'none', verticalDir: 'none', simple: false
                },
                'density': {
                    color: '#27ae60',
                    horizontal: 'varies across periods',
                    vertical: 'varies down groups',
                    horizontalDir: 'none', verticalDir: 'none', simple: false
                },
                'melting-point': {
                    color: '#f39c12',
                    horizontal: 'varies across periods',
                    vertical: 'varies down groups',
                    horizontalDir: 'none', verticalDir: 'none', simple: false
                }
            };

            const trend = trendProperties[currentTrend];
            if (!trend) return;

            horizontalLabel.textContent = trend.horizontal;
            verticalLabel.textContent = trend.vertical;
            horizontalLabel.classList.toggle('no-simple-trend', !trend.simple);
            verticalLabel.classList.toggle('no-simple-trend', !trend.simple);

            const horizontalHead = horizontalArrow.querySelector('.arrow-head');
            const verticalHead = verticalArrow.querySelector('.arrow-head');
            const horizontalLine = horizontalArrow.querySelector('.arrow-line');
            const verticalLine = verticalArrow.querySelector('.arrow-line');

            horizontalLine.style.backgroundColor = trend.color;
            verticalLine.style.backgroundColor = trend.color;

            // Reset triangle styles before applying the selected direction.
            horizontalHead.style.cssText = '';
            verticalHead.style.cssText = '';
            horizontalHead.className = 'arrow-head';
            verticalHead.className = 'arrow-head';

            if (trend.horizontalDir === 'right') horizontalHead.classList.add('points-right');
            if (trend.horizontalDir === 'left') horizontalHead.classList.add('points-left');
            if (trend.verticalDir === 'up') verticalHead.classList.add('points-up');
            if (trend.verticalDir === 'down') verticalHead.classList.add('points-down');

            horizontalArrow.classList.toggle('no-simple-trend', !trend.simple);
            verticalArrow.classList.toggle('no-simple-trend', !trend.simple);
        }

        // Trend visualization
        function showTrend(trendType) {
            clearAll();
            currentTrend = trendType;
            updateTrendArrows();
            const allElements = document.querySelectorAll('.element');
            
            allElements.forEach(el => {
                const atomicNumber = parseInt(el.dataset.atomicNumber);
                const element = elements[atomicNumber];
                let value, maxValue, minValue;
                
                switch(trendType) {
                    case 'electronegativity':
                        value = element.electronegativity || 0;
                        maxValue = 4.0;
                        minValue = 0;
                        break;
                    case 'atomic-radius':
                        value = element.atomicRadius || 0;
                        maxValue = 350;
                        minValue = 30;
                        break;
                    case 'ionization':
                        value = element.ionization || 0;
                        maxValue = 2500;
                        minValue = 300;
                        break;
                    case 'boiling-point':
                        value = element.boiling || -273;
                        maxValue = 6000;
                        minValue = -273;
                        break;
                    case 'density':
                        value = element.density || 0;
                        maxValue = 25;
                        minValue = 0;
                        break;
                    case 'melting-point':
                        value = element.melting || -273;
                        maxValue = 4000;
                        minValue = -273;
                        break;
                    case 'electron-affinity':
                        value = element.electronAffinity || 0;
                        maxValue = 350;
                        minValue = 0;
                        break;
                    case 'metallicity':
                        value = element.metallicity || 0;
                        maxValue = 4.0;
                        minValue = 0;
                        break;
                }
                
                const intensity = (value - minValue) / (maxValue - minValue);
                const opacity = Math.max(0.1, Math.min(1, intensity));
                
                const colors = {
                    'electronegativity': `rgba(231, 76, 60, ${opacity})`,
                    'atomic-radius': `rgba(155, 89, 182, ${opacity})`,
                    'ionization': `rgba(52, 152, 219, ${opacity})`,
                    'boiling-point': `rgba(230, 126, 34, ${opacity})`,
                    'density': `rgba(39, 174, 96, ${opacity})`,
                    'melting-point': `rgba(243, 156, 18, ${opacity})`,
                    'electron-affinity': `rgba(22, 160, 133, ${opacity})`,
                    'metallicity': `rgba(142, 68, 173, ${opacity})`
                };
                
                el.style.backgroundColor = colors[trendType];
            });
        }

        // Temperature control
        function getElementState(element) {
            if (currentTemp < element.melting) return 'solid';
            if (currentTemp < element.boiling) return 'liquid';
            return 'gas';
        }

        function getTemperatureMood() {
            if (currentTemp <= -100) return 'ABSOLUTE FREEZE 🥶';
            if (currentTemp < 0) return 'Brrr... chemistry is chilly ❄️';
            if (currentTemp < 25) return 'Cool chemistry 😎';
            if (currentTemp < 100) return 'Getting toasty 🌤️';
            if (currentTemp < 1000) return 'WHO TURNED UP THE HEAT?! 🔥';
            return 'THE ATOMS ARE PANICKING 💀🔥';
        }

        function mascotTemperatureSpeak() {
            const mascot = document.getElementById('goofyMascot');
            const bubble = document.getElementById('mascotBubble');
            if (!mascot || !bubble) return;

            bubble.textContent = getTemperatureMood();
            mascot.classList.add('speaking');

            clearTimeout(window.__temperatureMascotTimer);
            window.__temperatureMascotTimer = setTimeout(() => {
                mascot.classList.remove('speaking');
            }, 2800);
        }

        function updateThermalAtmosphere() {
            const slider = document.getElementById('tempSlider');
            const display = document.getElementById('tempDisplay');

            const min = Number(slider?.min ?? -273);
            const max = Number(slider?.max ?? 3000);
            const warmAmount = Math.max(0, Math.min(1, (currentTemp - 25) / (max - 25)));
            const coldAmount = Math.max(0, Math.min(1, (25 - currentTemp) / (25 - min)));

            const hue = currentTemp <= 25
                ? 210 - (coldAmount * 5)
                : 210 - (warmAmount * 202);
            const alpha = Math.min(.24, .025 + Math.max(coldAmount, warmAmount) * .19);

            document.body.style.setProperty('--thermal-color', `hsl(${hue} 72% 60%)`);
            document.body.style.setProperty('--thermal-alpha', alpha.toFixed(3));

            // The temperature effect belongs to the APP BACKGROUND, not the
            // individual element tiles. Keep the cards themselves unchanged.
            const coldT = Math.max(0, Math.min(1, (25 - currentTemp) / (25 - min)));
            const hotT = Math.max(0, Math.min(1, (currentTemp - 25) / (max - 25)));

            let bgColor, tableColor;
            if (currentTemp < 25) {
                // White -> icy blue as temperature drops.
                const t = coldT;
                bgColor = `rgb(${Math.round(255 - 42*t)}, ${Math.round(255 - 8*t)}, ${Math.round(255 - 2*t)})`;
                tableColor = `rgb(${Math.round(255 - 22*t)}, ${Math.round(255 - 3*t)}, ${Math.round(255 + 0*t)})`;
            } else {
                // White -> warm cream -> soft peach as temperature rises.
                const t = hotT;
                const warmT = Math.min(1, t * 1.8);
                bgColor = `rgb(255, ${Math.round(255 - 35*warmT)}, ${Math.round(255 - 48*warmT)})`;
                tableColor = `rgb(255, ${Math.round(255 - 18*warmT)}, ${Math.round(255 - 25*warmT)})`;
            }

            document.body.style.setProperty('--app-temp-bg', bgColor);
            document.body.style.setProperty('--table-temp-bg', tableColor);
            document.body.classList.toggle('temperature-hot', currentTemp > 25);
            document.body.classList.toggle('temperature-cold', currentTemp < 25);
            document.body.classList.toggle('temperature-extreme-hot', currentTemp >= 1000);
            document.body.classList.toggle('temperature-extreme-cold', currentTemp <= -100);

            if (display) {
                const emoji = currentTemp >= 1000 ? '🔥🔥' :
                              currentTemp > 100 ? '🔥' :
                              currentTemp < -100 ? '🥶' :
                              currentTemp < 0 ? '❄️' : '🌡️';
                display.textContent = `${emoji} ${currentTemp}°C`;
            }

        }

        function updateTemperature(temp) {
            const parsed = Number(temp);
            currentTemp = Number.isFinite(parsed) ? parsed : 25;
            updateThermalAtmosphere();
            mascotTemperatureSpeak();
            if (temperatureMode) {
                document.querySelectorAll('.element').forEach(updateElementState);
            }
        }

        function toggleTemperatureMode() {
            temperatureMode = !temperatureMode;
            const button = document.getElementById('tempToggle');

            if (temperatureMode) {
                button.textContent = 'Hide States';
                button.setAttribute('aria-pressed', 'true');
                document.querySelectorAll('.element').forEach(updateElementState);
            } else {
                button.textContent = 'Show States';
                button.setAttribute('aria-pressed', 'false');
                document.querySelectorAll('.element').forEach(el => {
                    const symbol = el.querySelector('.symbol');
                    el.classList.remove('temperature-state', 'state-solid', 'state-liquid', 'state-gas');
                    el.removeAttribute('data-state-label');
                    if (symbol) symbol.classList.remove('solid', 'liquid', 'gas');
                });
            }

            updateThermalAtmosphere();
        }

        function updateElementState(elementDiv) {
            const atomicNumber = Number(elementDiv.dataset.atomicNumber);
            const element = elements[atomicNumber];
            const symbol = elementDiv.querySelector('.symbol');

            if (!element || !symbol) return;

            const state = getElementState(element);

            symbol.classList.remove('solid', 'liquid', 'gas');
            elementDiv.classList.remove(
                'temperature-state',
                'state-solid',
                'state-liquid',
                'state-gas'
            );

            symbol.classList.add(state);
            elementDiv.classList.add('temperature-state', `state-${state}`);
            elementDiv.dataset.stateLabel = state.toUpperCase();
            elementDiv.title = `${element.name} • ${state.toUpperCase()} at ${currentTemp}°C`;
        }

        // Function to generate Lewis dots directly on element symbols
        function generateElementLewisDots(atomicNumber) {
            const element = elements[atomicNumber];
            let valenceElectrons = 0;
            
            // Determine valence electrons
            if (element.category === 'transition-metals' || element.category === 'lanthanides' || element.category === 'actinides') {
                if (atomicNumber >= 21 && atomicNumber <= 30) valenceElectrons = Math.min(8, atomicNumber - 18);
                else if (atomicNumber >= 39 && atomicNumber <= 48) valenceElectrons = Math.min(8, atomicNumber - 36);
                else if (atomicNumber >= 57 && atomicNumber <= 80) valenceElectrons = Math.min(8, (atomicNumber - 54) % 32);
                else if (atomicNumber >= 89 && atomicNumber <= 112) valenceElectrons = Math.min(8, (atomicNumber - 86) % 32);
                else valenceElectrons = element.group <= 12 ? element.group : 8;
            } else {
                if (element.group <= 2) {
                    valenceElectrons = element.group;
                } else if (element.group >= 13) {
                    valenceElectrons = element.group - 10;
                } else {
                    valenceElectrons = 8; // Noble gases
                }
            }
            
            valenceElectrons = Math.min(valenceElectrons, 8);
            
            // Create dots positioned around the symbol with better spacing
            const dotPositions = [
                {top: '-8px', left: '50%', transform: 'translateX(-50%)'},     // top
                {top: '50%', right: '-8px', transform: 'translateY(-50%)'},    // right
                {bottom: '-8px', left: '50%', transform: 'translateX(-50%)'},  // bottom
                {top: '50%', left: '-8px', transform: 'translateY(-50%)'}      // left
            ];
            
            let dotsHtml = '';
            const singleElectrons = Math.min(valenceElectrons, 4);
            const pairedElectrons = Math.max(0, valenceElectrons - 4);
            
            // Add single electrons first
            for (let i = 0; i < singleElectrons; i++) {
                const pos = dotPositions[i];
                dotsHtml += `<div class="lewis-dot" style="position: absolute; width: 6px; height: 6px; background: #e74c3c; border-radius: 50%; ${Object.entries(pos).map(([key, value]) => `${key}: ${value}`).join('; ')};"></div>`;
            }
            
            // Add paired electrons (second dot with proper offset)
            for (let i = 0; i < pairedElectrons; i++) {
                const pos = dotPositions[i];
                let secondDotStyle = '';
                
                if (i === 0) { // top pair
                    secondDotStyle = `position: absolute; width: 6px; height: 6px; background: #e74c3c; border-radius: 50%; top: -8px; left: calc(50% + 8px); transform: translateX(-50%);`;
                } else if (i === 1) { // right pair
                    secondDotStyle = `position: absolute; width: 6px; height: 6px; background: #e74c3c; border-radius: 50%; top: calc(50% + 8px); right: -8px; transform: translateY(-50%);`;
                } else if (i === 2) { // bottom pair
                    secondDotStyle = `position: absolute; width: 6px; height: 6px; background: #e74c3c; border-radius: 50%; bottom: -8px; left: calc(50% + 8px); transform: translateX(-50%);`;
                } else if (i === 3) { // left pair
                    secondDotStyle = `position: absolute; width: 6px; height: 6px; background: #e74c3c; border-radius: 50%; top: calc(50% + 8px); left: -8px; transform: translateY(-50%);`;
                }
                
                dotsHtml += `<div class="lewis-dot" style="${secondDotStyle}"></div>`;
            }
            
            return dotsHtml;
        }

        // Element details popup — organized Element Lab panel.
        let activeElementAtomicNumber = null;

        function dppteCategoryName(category) {
            return String(category || 'Unknown')
                .replace(/-/g, ' ')
                .replace(/\b\w/g, c => c.toUpperCase());
        }

        function dppteSafeValue(value, suffix = '') {
            return (value === undefined || value === null || value === '' ? 'N/A' : `${value}${suffix}`);
        }

        function dppteElectronShells(config) {
            const text = String(config || '').replace(/<[^>]*>/g, '').trim();
            if (!text) return [];
            const parts = [];
            const re = /(\d+)[spdf](?:\d*)[¹²³⁴⁵⁶⁷⁸⁹0-9]+/g;
            let m;
            while ((m = re.exec(text))) parts.push(Number(m[1]));
            return [...new Set(parts)].sort((a,b) => a-b);
        }

        function dppteBlock(element) {
            if (element.block) return element.block;
            const category = String(element.category || '');
            if (category === 'transition-metals') return 'd';
            if (category === 'lanthanides' || category === 'actinides') return 'f';
            if (category === 'alkali-metals' || category === 'alkaline-earth') return 's';
            if (category === 'noble-gases' || category === 'halogens' || category === 'nonmetals' || category === 'metalloids' || category === 'poor-metals') return 'p';
            return 'N/A';
        }

        function dppteValenceElectrons(atomicNumber, element) {
            if (element.category === 'noble-gases') return atomicNumber === 2 ? 2 : 8;
            if (element.category === 'transition-metals') {
                if (atomicNumber >= 21 && atomicNumber <= 30) return Math.min(8, atomicNumber - 18);
                return 'Variable';
            }
            if (element.category === 'lanthanides' || element.category === 'actinides') return 'Variable';
            const group = Number(element.group);
            if (group === 1) return 1;
            if (group === 2) return 2;
            if (group >= 13 && group <= 18) return group - 10;
            return 'Variable';
        }

        function dppteStateLabel(element) {
            if (typeof getElementState === 'function') return getElementState(element).toUpperCase();
            const t = Number(typeof currentTemp !== 'undefined' ? currentTemp : 25);
            if (t < Number(element.melting)) return 'SOLID';
            if (t < Number(element.boiling)) return 'LIQUID';
            return 'GAS';
        }

        function dppteProperty(label, value) {
            return `<div class="dppte-info-card"><span class="dppte-info-label">${label}</span><span class="dppte-info-value">${value}</span></div>`;
        }

        function dppteTrendCard(name, value, max, hint, suffix = '') {
            const numeric = Number(value);
            const pct = Number.isFinite(numeric) && Number(max) > 0 ? Math.max(4, Math.min(100, (numeric / Number(max)) * 100)) : 8;
            return `<div class="dppte-trend">
                <div class="dppte-trend-top"><span class="dppte-trend-name">${name}</span><span class="dppte-trend-value">${dppteSafeValue(value, suffix)}</span></div>
                <div class="dppte-trend-bar"><div class="dppte-trend-fill" style="width:${pct}%"></div></div>
                <div class="dppte-trend-hint">${hint}</div>
            </div>`;
        }

        function showElementDetails(atomicNumber) {
            const element = elements[atomicNumber];
            if (!element) return;
            activeElementAtomicNumber = atomicNumber;

            const popup = document.getElementById('popup');
            const content = document.getElementById('elementDetails');
            const symbol = document.getElementById('elementPanelSymbol');
            const name = document.getElementById('elementPanelName');
            const meta = document.getElementById('elementPanelMeta');
            const symbolWrap = document.getElementById('elementPanelSymbolWrap');
            if (!popup || !content || !symbol || !name || !meta) return;

            const panel = document.getElementById('popupContent');
            if (panel) panel.classList.remove('is-about');
            const aboutFace = document.getElementById('elementAboutFace');
            const frontFace = document.getElementById('elementFrontFace');
            if (aboutFace) aboutFace.setAttribute('aria-hidden','true');
            if (frontFace) frontFace.setAttribute('aria-hidden','false');

            symbol.innerHTML = `${element.symbol}${generateElementLewisDots(atomicNumber)}`;
            name.textContent = element.name;
            meta.textContent = `Atomic Number ${atomicNumber} • ${dppteCategoryName(element.category)} • ${dppteStateLabel(element)}`;
            symbolWrap.setAttribute('data-state', dppteStateLabel(element).toLowerCase());

            const shells = dppteElectronShells(element.config);
            const valence = dppteValenceElectrons(atomicNumber, element);
            const oxidation = Array.isArray(element.oxidation) ? element.oxidation.join(', ') : dppteSafeValue(element.oxidation);

            content.innerHTML = `
                <section class="dppte-element-section">
                    <h3 class="dppte-section-title">Overview</h3>
                    <div class="dppte-info-grid">
                        ${dppteProperty('Atomic Mass', dppteSafeValue(element.mass, ' u'))}
                        ${dppteProperty('Group', dppteSafeValue(element.group))}
                        ${dppteProperty('Period', dppteSafeValue(element.period))}
                        ${dppteProperty('Block', dppteSafeValue(dppteBlock(element)))}
                        ${dppteProperty('State', dppteStateLabel(element))}
                        ${dppteProperty('Metallic Character', dppteSafeValue(element.metallicity))}
                    </div>
                </section>

                <section class="dppte-element-section">
                    <h3 class="dppte-section-title">Atomic Structure</h3>
                    <div class="dppte-structure-box">
                        <div class="dppte-info-label">Electron Configuration</div>
                        <div class="dppte-config">${dppteSafeValue(element.config)}</div>
                        <div class="dppte-shells">
                            ${shells.length ? shells.map(shell => `<span class="dppte-shell-chip">Shell ${shell}</span>`).join('') : '<span class="dppte-shell-chip">Shell data unavailable</span>'}
                        </div>
                    </div>
                    <div class="dppte-info-grid" style="margin-top:9px;">
                        ${dppteProperty('Valence Electrons', valence)}
                        ${dppteProperty('Oxidation States', oxidation)}
                    </div>
                    <div class="dppte-atom-view" id="dppteAtomView" hidden></div>
                </section>

                <section class="dppte-element-section">
                    <h3 class="dppte-section-title">Physical Properties</h3>
                    <div class="dppte-property-grid">
                        ${dppteProperty('Density', dppteSafeValue(element.density, ' g/cm³'))}
                        ${dppteProperty('Melting Point', dppteSafeValue(element.melting, ' °C'))}
                        ${dppteProperty('Boiling Point', dppteSafeValue(element.boiling, ' °C'))}
                        ${dppteProperty('Atomic Radius', dppteSafeValue(element.atomicRadius, ' pm'))}
                        ${dppteProperty('Appearance', dppteSafeValue(element.appearance))}
                    </div>
                </section>

                <section class="dppte-element-section">
                    <h3 class="dppte-section-title">Chemical Properties</h3>
                    <div class="dppte-property-grid">
                        ${dppteProperty('Electronegativity', dppteSafeValue(element.electronegativity))}
                        ${dppteProperty('Ionization Energy', dppteSafeValue(element.ionization, ' kJ/mol'))}
                        ${dppteProperty('Electron Affinity', dppteSafeValue(element.electronAffinity, ' kJ/mol'))}
                        ${dppteProperty('Oxidation States', oxidation)}
                        ${dppteProperty('Reactivity', dppteSafeValue(element.reactivity))}
                    </div>
                </section>

                <section class="dppte-element-section">
                    <h3 class="dppte-section-title">Periodic Trends</h3>
                    <div class="dppte-trends">
                        ${dppteTrendCard('Atomic Radius', element.atomicRadius, 250, 'Generally increases ↓ down groups and decreases → across periods.', ' pm')}
                        ${dppteTrendCard('Electronegativity', element.electronegativity, 4, 'Generally increases → across periods and ↑ toward the top-right.', '')}
                        ${dppteTrendCard('Ionization Energy', element.ionization, 2500, 'Generally increases → across periods and ↑ toward the top-right.', ' kJ/mol')}
                        ${dppteTrendCard('Electron Affinity', element.electronAffinity, 350, 'Magnitude generally strengthens toward the upper-right, with exceptions.', ' kJ/mol')}
                        ${dppteTrendCard('Metallic Character', element.metallicity, 4, 'Metallic character generally increases ← and ↓ across the table.', '')}
                    </div>
                    <p class="dppte-note" style="margin-top:9px;">The indicators above use the element data already stored in DPPTE. Trend arrows describe the general periodic pattern rather than replacing the app's existing trend controls.</p>
                </section>
            `;

            popup.style.display = 'flex';
            popup.classList.add('dppte-element-popup-open');
            document.body.classList.add('dppte-modal-lock');
            setTimeout(() => popup.classList.add('show'), 10);
        }

        // Element About content is a separate presentation layer; existing element properties remain unchanged.
        const dppteElementAbout = {
            1:{year:'1766',discoverer:'Henry Cavendish',history:'Hydrogen was identified as a distinct substance by Henry Cavendish in the 18th century. Antoine Lavoisier later gave it the name hydrogen, meaning “water-former.”',trivia:['Hydrogen is the lightest element.','It is the most abundant element in the universe.']},
            2:{year:'1868',discoverer:'Pierre Janssen and Norman Lockyer',history:'Helium was first detected in the spectrum of sunlight during a solar eclipse before it was found on Earth. Its name comes from Helios, the Greek Sun god.',trivia:['Helium was discovered in the Sun before it was isolated on Earth.','It is a noble gas and is extremely unreactive.']},
            3:{year:'1817',discoverer:'Johan August Arfwedson',history:'Arfwedson identified a new element while analysing minerals from a Swedish laboratory. William Thomas Brande later isolated lithium metal.',trivia:['Lithium is the lightest metal.','It is widely used in rechargeable batteries.']},
            4:{year:'1798',discoverer:'Louis-Nicolas Vauquelin',history:'Vauquelin identified beryllium in beryl and emerald. The element was initially associated with a sweet-tasting compound, which influenced early naming.',trivia:['Beryllium is very light and stiff.','Emerald is a variety of beryl containing trace elements that give it its color.']},
            5:{year:'1808',discoverer:'Louis Gay-Lussac and Louis Jacques Thénard',history:'Boron was isolated in 1808 by French chemists working independently of Humphry Davy, who also obtained a form of the element.',trivia:['Boron is a metalloid.','Boron compounds are important in glass, ceramics and detergents.']},
            6:{year:'Ancient',discoverer:'Known since antiquity',history:'Carbon has been known since prehistoric times in forms such as charcoal and soot. Its elemental nature was clarified during the development of modern chemistry.',trivia:['Diamond and graphite are both forms of carbon.','Carbon is the chemical backbone of known life.']},
            7:{year:'1772',discoverer:'Daniel Rutherford',history:'Rutherford isolated a component of air that did not support combustion and called it “noxious air.” It was later recognised as nitrogen.',trivia:['Nitrogen makes up about 78% of Earth’s atmosphere.','It is essential to proteins and nucleic acids.']},
            8:{year:'1774',discoverer:'Joseph Priestley and Carl Wilhelm Scheele',history:'Oxygen was independently obtained by Priestley and Scheele. Antoine Lavoisier later explained its role in combustion and helped establish its modern name and importance.',trivia:['Oxygen supports combustion but is not itself a fuel.','It is the most abundant element by mass in Earth’s crust.']},
            9:{year:'1886',discoverer:'Henri Moissan',history:'Moissan isolated fluorine in 1886 after years of difficult experiments. Fluorine’s extreme reactivity made its isolation particularly challenging.',trivia:['Fluorine is the most electronegative element.','Fluoride compounds are used in many dental products.']},
            10:{year:'1898',discoverer:'William Ramsay and Morris Travers',history:'Neon was discovered during the study of liquefied air. Ramsay and Travers separated a previously unknown gas whose bright spectral lines revealed its identity.',trivia:['Neon gives a famous red-orange glow in discharge tubes.','Its name comes from the Greek word for “new.”']},
            11:{year:'1807',discoverer:'Humphry Davy',history:'Davy isolated sodium by electrolysing molten sodium hydroxide. The discovery demonstrated the power of electrochemistry for isolating reactive metals.',trivia:['Sodium reacts vigorously with water.','Sodium ions are essential for nerve and muscle function.']},
            12:{year:'1755',discoverer:'Joseph Black',history:'Joseph Black recognised magnesia as distinct from lime. Humphry Davy later isolated magnesium metal in 1808.',trivia:['Magnesium burns with an intense white light.','It is important in chlorophyll and many biological enzymes.']},
            13:{year:'1825',discoverer:'Hans Christian Ørsted',history:'Ørsted produced an impure form of aluminium in 1825. Friedrich Wöhler later improved its isolation and characterisation.',trivia:['Aluminium is the most abundant metal in Earth’s crust.','Its oxide layer helps protect the metal from corrosion.']},
            14:{year:'1824',discoverer:'Jöns Jacob Berzelius',history:'Berzelius isolated silicon while studying silicon compounds and demonstrated that it was a distinct element.',trivia:['Silicon is central to modern semiconductor technology.','It is the second-most abundant element in Earth’s crust by mass.']},
            15:{year:'1669',discoverer:'Hennig Brand',history:'Brand discovered phosphorus while experimenting with urine. His preparation made it the first element with a clearly recorded discovery date and discoverer.',trivia:['The name phosphorus refers to its light-producing properties.','Phosphorus is essential in DNA, ATP and cell membranes.']},
            16:{year:'Ancient',discoverer:'Known since antiquity',history:'Sulfur was known to ancient civilisations and appears in early medical and metallurgical records. Antoine Lavoisier later recognised it as an element.',trivia:['Sulfur is responsible for the smell of many sulfur-containing compounds.','It is important in proteins through sulfur-containing amino acids.']},
            17:{year:'1774',discoverer:'Carl Wilhelm Scheele',history:'Scheele produced chlorine while studying manganese dioxide and hydrochloric acid. Humphry Davy later established that it was an element.',trivia:['Chlorine is a greenish-yellow reactive gas.','Chlorine compounds are widely used for water disinfection.']},
            18:{year:'1894',discoverer:'John William Strutt (Lord Rayleigh) and William Ramsay',history:'Argon was identified as a new component of air after measurements showed that nitrogen obtained from air behaved differently from chemically prepared nitrogen.',trivia:['Argon is the most abundant noble gas in Earth’s atmosphere.','It is commonly used as an inert shielding gas.']},
            19:{year:'1807',discoverer:'Humphry Davy',history:'Davy isolated potassium by electrolysis of molten potash, demonstrating that alkali compounds contained previously unknown metals.',trivia:['Potassium reacts violently with water.','Potassium ions are essential for nerve and muscle function.']},
            20:{year:'1808',discoverer:'Humphry Davy',history:'Davy isolated calcium using electrochemical methods. Calcium compounds had been known long before the elemental metal was isolated.',trivia:['Calcium is important for bones and teeth.','Calcium is the most abundant mineral element in the human body.']},
            21:{year:'1879',discoverer:'Lars Fredrik Nilson',history:'Scandium was predicted by Mendeleev and discovered by Nilson in 1879. Its properties closely matched Mendeleev’s prediction.',trivia:['Scandium was one of the elements that helped validate the periodic table.','It is used in some specialised aluminium alloys.']},
            22:{year:'1791',discoverer:'William Gregor',history:'Gregor identified a new metal in the mineral ilmenite. Martin Heinrich Klaproth later named it titanium.',trivia:['Titanium is strong, light and corrosion resistant.','Its compounds are widely used in pigments.']},
            23:{year:'1801',discoverer:'Andrés Manuel del Río',history:'Del Río identified a new element in lead ores from Mexico. The discovery was initially rejected and later rediscovered and confirmed.',trivia:['Vanadium has several colorful oxidation states.','It is used to strengthen steel.']},
            24:{year:'1797',discoverer:'Louis-Nicolas Vauquelin',history:'Vauquelin discovered chromium while analysing the mineral crocoite. The element’s compounds displayed striking colors.',trivia:['Chromium compounds can produce vivid colors.','Chromium plating is valued for hardness and appearance.']},
            25:{year:'1774',discoverer:'Johan Gottlieb Gahn',history:'Gahn isolated manganese from manganese dioxide by reduction with carbon.',trivia:['Manganese is important in steelmaking.','Manganese dioxide is used in some batteries.']},
            26:{year:'Ancient',discoverer:'Known since antiquity',history:'Iron has been used by humans for thousands of years, including meteoritic iron. Modern chemical recognition came much later with the development of atomic theory.',trivia:['Iron is the most common element by mass on Earth.','It is central to hemoglobin and oxygen transport in blood.']},
            27:{year:'1735',discoverer:'Georg Brandt',history:'Brandt demonstrated that a blue ore contained a previously unknown metal rather than the arsenic compounds some miners suspected.',trivia:['Cobalt compounds have long been used to create blue pigments.','Cobalt is important in some rechargeable battery chemistries.']},
            28:{year:'1751',discoverer:'Axel Fredrik Cronstedt',history:'Cronstedt identified nickel while studying a mineral he expected to contain copper. The mineral resisted his attempts to produce copper.',trivia:['Nickel is used in corrosion-resistant alloys.','Some people develop contact dermatitis from nickel exposure.']},
            29:{year:'Ancient',discoverer:'Known since antiquity',history:'Copper was used by ancient peoples as a native metal and later extracted from ores. Its long history predates modern chemistry.',trivia:['Copper is an excellent conductor of electricity.','It is one of the few metals commonly found naturally in a metallic state.']},
            30:{year:'1746',discoverer:'Andreas Sigismund Marggraf',history:'Marggraf described the isolation of zinc metal in Europe. Zinc had already been used in brass and other materials for centuries.',trivia:['Zinc protects steel through galvanisation.','Zinc is an essential trace nutrient.']},
            31:{year:'1875',discoverer:'Paul-Émile Lecoq de Boisbaudran',history:'Lecoq de Boisbaudran discovered gallium spectroscopically and then isolated the metal. Mendeleev had predicted its existence as eka-aluminium.',trivia:['Gallium melts near body temperature.','Its discovery strongly supported Mendeleev’s predictions.']},
            32:{year:'1886',discoverer:'Clemens Winkler',history:'Winkler discovered germanium while analysing the mineral argyrodite. Its properties matched Mendeleev’s prediction for eka-silicon.',trivia:['Germanium helped confirm the predictive power of the periodic table.','It has applications in semiconductors and infrared optics.']},
            33:{year:'c. 1250',discoverer:'Albertus Magnus (commonly credited)',history:'Metallic arsenic was known in medieval chemistry, although its early history is complex. Albertus Magnus is commonly credited with describing the metal in the West.',trivia:['Arsenic compounds have been used as pigments and poisons.','Arsenic is a metalloid rather than a typical metal.']},
            34:{year:'1817',discoverer:'Jöns Jacob Berzelius',history:'Berzelius identified selenium while studying residues associated with sulfuric acid production.',trivia:['Selenium is important in small amounts for human nutrition.','It has useful photoconductive properties.']},
            35:{year:'1826',discoverer:'Antoine Jérôme Balard',history:'Balard discovered bromine in salt-water residues from Mediterranean brine.',trivia:['Bromine is one of the few elements that is liquid near room temperature.','Its name comes from a Greek word associated with bad smell.']},
            36:{year:'1898',discoverer:'William Ramsay and Morris Travers',history:'Krypton was isolated from liquefied air by Ramsay and Travers.',trivia:['Krypton is a noble gas.','Krypton flash lamps have been used in photography and specialised lighting.']}
        };        function dppteAboutRecord(atomicNumber, element) {
            if (dppteElementAbout[atomicNumber]) return dppteElementAbout[atomicNumber];
            const category = dppteCategoryName(element.category);
            const synthetic = atomicNumber >= 95 || /radioactive/i.test(category) || atomicNumber >= 84;
            return {
                year: synthetic ? '20th–21st century' : 'Discovery date varies by historical source',
                discoverer: synthetic ? 'Scientific research teams' : 'Multiple scientists / historical attribution',
                history: `${element.name} is a ${category.toLowerCase()} element. Its modern chemical identity was established as scientists developed methods for isolating, analysing, and classifying the elements. The exact discovery story can involve observation, isolation, synthesis, or later confirmation rather than one single event.`,
                trivia: [
                    `${element.name} has atomic number ${atomicNumber}.`,
                    `Its position in the periodic table helps explain its recurring chemical behaviour.`,
                    `For a detailed historical record, consult the Royal Society of Chemistry element history.`
                ]
            };
        }

        function flipElementAbout(show = true) {
            const panel = document.getElementById('popupContent');
            const back = document.getElementById('elementAboutFace');
            const front = document.getElementById('elementFrontFace');
            const element = activeElementAtomicNumber ? elements[activeElementAtomicNumber] : null;
            if (!panel || !back || !front || !element) return;
            const about = dppteAboutRecord(activeElementAtomicNumber, element);
            if (show) {
                const title = document.getElementById('elementAboutTitle');
                const meta = document.getElementById('elementAboutMeta');
                const content = document.getElementById('elementAboutContent');
                if (!content) return;
                if (title) title.textContent = `About ${element.name}`;
                if (meta) meta.textContent = `History • Discovery • Trivia`;
                content.innerHTML = `
                    <div class="dppte-about-hero">
                        <div class="dppte-about-symbol">${element.symbol}</div>
                        <div><div class="dppte-about-eyebrow">THE ELEMENT STORY</div><p class="dppte-about-lead">A quick look at how ${element.name} entered the story of chemistry.</p></div>
                    </div>
                    <div class="dppte-about-card"><h3>Discovery</h3><div class="dppte-about-facts"><div class="dppte-about-fact"><strong>Discoverer / attribution</strong><span>${about.discoverer}</span></div><div class="dppte-about-fact"><strong>Year / period</strong><span>${about.year}</span></div></div></div>
                    <div class="dppte-about-card"><h3>History</h3><p>${about.history}</p></div>
                    <div class="dppte-about-card"><h3>Did You Know?</h3><ul class="dppte-about-trivia">${about.trivia.map(t => `<li>${t}</li>`).join('')}</ul></div>
                    <div class="dppte-about-card"><p class="dppte-about-source">Historical attribution can differ when an element was known in antiquity, isolated later, or discovered independently. DPPTE presents this as a concise educational summary.</p></div>
                `;
                panel.classList.add('is-about');
                back.setAttribute('aria-hidden','false');
                front.setAttribute('aria-hidden','true');
                content.scrollTop = 0;
            } else {
                panel.classList.remove('is-about');
                back.setAttribute('aria-hidden','true');
                front.setAttribute('aria-hidden','false');
                const frontScroll = document.getElementById('elementDetails');
                if (frontScroll) frontScroll.scrollTop = 0;
            }
        }

        function viewElementAtom() {
            const element = activeElementAtomicNumber ? elements[activeElementAtomicNumber] : null;
            const target = document.getElementById('dppteAtomView');
            if (!element || !target) return;
            const z = activeElementAtomicNumber;
            const electronCount = Math.min(18, Math.max(1, Number(z)));
            const positions = [];
            const rings = [24, 48, 67];
            for (let i = 0; i < electronCount; i++) {
                const ringIndex = i < 2 ? 0 : (i < 10 ? 1 : 2);
                const ringCount = ringIndex === 0 ? 2 : (ringIndex === 1 ? 8 : 8);
                const inRing = ringIndex === 0 ? i : (ringIndex === 1 ? i - 2 : i - 10);
                const angle = (inRing / ringCount) * Math.PI * 2 - Math.PI / 2;
                positions.push(`<span class="dppte-atom-electron" style="left:calc(50% + ${Math.cos(angle)*rings[ringIndex]}px - 4px);top:calc(50% + ${Math.sin(angle)*rings[ringIndex]}px - 4px)"></span>`);
            }
            target.hidden = false;
            target.innerHTML = `<div class="dppte-atom-orbit"><div class="dppte-atom-nucleus">${element.symbol}<br>${z}</div>${positions.join('')}</div><div class="dppte-atom-copy"><h4>${element.name} atom</h4><p>Interactive atom preview using the existing element identity and atomic number. The dots are a visual shell guide for learning, while the full electron configuration remains listed above.</p></div>`;
            target.scrollIntoView({behavior:'smooth', block:'nearest'});
        }

        function quizThisElement() {
            closePopup();
            setTimeout(() => {
                if (typeof showQuiz === 'function') showQuiz();
            }, 320);
        }

        function learnElement() {
            closePopup();
            setTimeout(() => {
                if (typeof toggleManual === 'function') toggleManual();
            }, 320);
        }

        function closePopup() {
            const popup = document.getElementById('popup');
            if (!popup) return;
            popup.classList.remove('show');
            popup.classList.remove('dppte-element-popup-open');
            document.body.classList.remove('dppte-modal-lock');
            setTimeout(() => popup.style.display = 'none', 300);
        }

        document.addEventListener('click', function(event) {
            const popup = document.getElementById('popup');
            const panel = document.getElementById('popupContent');
            if (popup && popup.style.display !== 'none' && event.target === popup && panel) closePopup();
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const about = document.getElementById('dppteAboutOverlay');
                if (about && about.classList.contains('is-open')) { closeDppteAbout(); return; }
                const manual = document.getElementById('manual');
                if (manual && manual.classList.contains('open')) { toggleManual(false); return; }
                const popup = document.getElementById('popup');
                if (popup && popup.style.display !== 'none') closePopup();
            }
        });

        // How-to guide toggle
        function toggleManual(force) {
            const manual = document.getElementById('manual');
            const trigger = document.getElementById('manualToggle');
            if (!manual || !trigger) return;
            const shouldOpen = typeof force === 'boolean' ? force : !manual.classList.contains('open');
            manual.classList.toggle('open', shouldOpen);
            trigger.classList.toggle('is-open', shouldOpen);
            trigger.setAttribute('aria-expanded', String(shouldOpen));
            if (shouldOpen) {
                const firstClose = manual.querySelector('.manual-close');
                if (firstClose) setTimeout(() => firstClose.focus(), 80);
            } else {
                trigger.focus();
            }
        }





        // =========================================================
        // DPPTE ABOUT / OWNER PANEL
        // =========================================================
        let dppteAboutPreviousOverflow = '';
        let dppteAboutReturnFocus = null;

        function openDppteAbout() {
            const overlay = document.getElementById('dppteAboutOverlay');
            const trigger = document.getElementById('dppteAboutTrigger');
            if (!overlay) return;
            if (dppteMenuOpen) closeDppteMenu();
            dppteAboutReturnFocus = document.activeElement;
            dppteAboutPreviousOverflow = document.body.style.overflow;
            overlay.classList.add('is-open');
            overlay.setAttribute('aria-hidden','false');
            if (trigger) trigger.setAttribute('aria-expanded','true');
            document.body.style.overflow='hidden';
            requestAnimationFrame(() => {
                const close = overlay.querySelector('.dppte-about-close');
                if (close) close.focus({preventScroll:true});
            });
        }

        function closeDppteAbout() {
            const overlay = document.getElementById('dppteAboutOverlay');
            const trigger = document.getElementById('dppteAboutTrigger');
            if (!overlay || !overlay.classList.contains('is-open')) return;
            overlay.classList.remove('is-open');
            overlay.setAttribute('aria-hidden','true');
            if (trigger) trigger.setAttribute('aria-expanded','false');
            document.body.style.overflow=dppteAboutPreviousOverflow;
            if (dppteAboutReturnFocus && typeof dppteAboutReturnFocus.focus === 'function') {
                dppteAboutReturnFocus.focus({preventScroll:true});
            }
            dppteAboutReturnFocus=null;
        }

        // =========================================================
        // DPPTE LEFT NAVIGATION
        // =========================================================
        let dppteMenuOpen = false;
        let dppteMenuNoteTimer = null;
        let dppteMenuPreviousOverflow = '';

        function setDppteMenuState(open) {
            const drawer = document.getElementById('dppteMenuDrawer');
            const backdrop = document.getElementById('dppteMenuBackdrop');
            const trigger = document.getElementById('dppteMenuTrigger');
            if (!drawer || !backdrop || !trigger) return;

            dppteMenuOpen = Boolean(open);
            drawer.classList.toggle('is-open', dppteMenuOpen);
            backdrop.classList.toggle('is-open', dppteMenuOpen);
            trigger.classList.toggle('is-open', dppteMenuOpen);
            trigger.setAttribute('aria-expanded', String(dppteMenuOpen));
            trigger.setAttribute('aria-label', dppteMenuOpen ? 'Close DPPTE menu' : 'Open DPPTE menu');
            drawer.setAttribute('aria-hidden', String(!dppteMenuOpen));
            backdrop.setAttribute('aria-hidden', String(!dppteMenuOpen));

            if (dppteMenuOpen) {
                dppteMenuPreviousOverflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
                requestAnimationFrame(() => {
                    const firstItem = drawer.querySelector('.dppte-menu-item');
                    if (firstItem) firstItem.focus({preventScroll:true});
                });
            } else {
                document.body.style.overflow = dppteMenuPreviousOverflow;
                trigger.focus({preventScroll:true});
            }
        }

        function openDppteMenu() { setDppteMenuState(true); }
        function closeDppteMenu() { if (dppteMenuOpen) setDppteMenuState(false); }
        function toggleDppteMenu() { setDppteMenuState(!dppteMenuOpen); }

        function dppteSetActiveNav(key) {
            document.querySelectorAll('.dppte-nav-action').forEach(item => {
                item.classList.toggle('is-active', item.dataset.nav === key);
            });
        }

        function dppteShowNote(message) {
            const note = document.getElementById('dppteMenuNote');
            if (!note) return;
            note.textContent = message;
            note.classList.add('is-visible');
            clearTimeout(dppteMenuNoteTimer);
            dppteMenuNoteTimer = setTimeout(() => note.classList.remove('is-visible'), 2400);
        }

        function dppteScrollTo(selector, focusSelector) {
            const target = document.querySelector(selector);
            if (!target) return false;
            target.scrollIntoView({behavior:'smooth', block:'center'});
            if (focusSelector) {
                const focusTarget = document.querySelector(focusSelector);
                if (focusTarget) setTimeout(() => focusTarget.focus({preventScroll:true}), 350);
            }
            return true;
        }

        function dppteNavigate(destination) {
            closeDppteMenu();
            dppteSetActiveNav(destination);

            switch(destination) {
                case 'home':
                case 'periodic':
                    showMain();
                    if (destination === 'periodic') dppteScrollTo('.table-container');
                    else window.scrollTo({top:0, behavior:'smooth'});
                    break;
                case 'categories':
                    showMain();
                    if (!dppteScrollTo('.category-group')) dppteShowNote('Categories are available in the Periodic Table controls.');
                    break;
                case 'finder':
                    window.openDppteTool('finder');
                    break;
                case 'molecule':
                    if (typeof openMoleculeSimulation === 'function') openMoleculeSimulation();
                    else dppteShowNote('Molecule Lab is unavailable in this version.');
                    break;
                case 'quiz':
                    showQuiz();
                    break;
                case 'guide':
                    showMain();
                    if (typeof toggleManual === 'function') toggleManual();
                    else dppteShowNote('Chemistry Guide is available from the guide button.');
                    break;
                case 'trends':
                    showMain();
                    if (!dppteScrollTo('.trend-arrow-controls')) dppteShowNote('Periodic Trends are available in the table controls.');
                    break;
                case 'compound':
                    if (typeof openCompoundBuilder === 'function') openCompoundBuilder();
                    else dppteShowNote('Build a Compound is unavailable in this version.');
                    break;
                case 'bohr':
                    if (typeof openBohrModel === 'function') openBohrModel();
                    else dppteShowNote('Bohr Model is unavailable in this version.');
                    break;
                case 'reaction':
                    window.openDppteTool('reaction');
                    break;
                case 'challenge':
                    window.openDppteTool('challenge');
                    break;
                case 'reference':
                    window.openDppteTool('reference');
                    break;
                case 'settings':
                    window.openDppteTool('settings');
                    break;
                default:
                    dppteShowNote('This section is not available yet.');
            }
        }

        function dppteMenuQuiz() { dppteNavigate('quiz'); }
        function dppteMenuTemperature() {
            closeDppteMenu();
            dppteSetActiveNav('periodic');
            const temperatureControl = document.querySelector('.temperature-control');
            if (!temperatureControl) return;
            showMain();
            temperatureControl.scrollIntoView({behavior:'smooth', block:'center'});
            temperatureControl.classList.remove('dppte-temp-focus');
            void temperatureControl.offsetWidth;
            temperatureControl.classList.add('dppte-temp-focus');
            const slider = document.getElementById('tempSlider');
            if (slider) setTimeout(() => slider.focus({preventScroll:true}), 350);
        }
        function dppteMenuPlaceholder(featureName) { dppteShowNote(featureName + ' is available from the main menu.'); }

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && dppteMenuOpen) closeDppteMenu();
        });

        // Quiz functions
        function showQuiz() {
            closeDppteMenu();
            document.getElementById('mainPage').style.display = 'none';
            document.getElementById('quizPage').style.display = 'block';
        }

        function showMain() {
            closeDppteMenu();
            document.getElementById('mainPage').style.display = 'block';
            document.getElementById('quizPage').style.display = 'none';
        }

        function startQuiz() {
            const difficulty = document.getElementById('difficulty').value;
            const questionCount = parseInt(document.getElementById('questionCount').value);
            
            // Get all questions for the difficulty level
            const availableQuestions = [...quizQuestions[difficulty]];
            currentQuiz = [];
            
            // If we need more questions than available, repeat the pool
            while (currentQuiz.length < questionCount) {
                // Shuffle the available questions
                const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
                
                // Add questions until we reach the desired count
                for (let i = 0; i < shuffled.length && currentQuiz.length < questionCount; i++) {
                    currentQuiz.push(shuffled[i]);
                }
            }
            
            // Final shuffle of selected questions
            currentQuiz = currentQuiz.sort(() => Math.random() - 0.5);
            
            currentQuestionIndex = 0;
            score = 0;
            showQuestion();
        }

        function showQuestion() {
            if (currentQuestionIndex >= currentQuiz.length) {
                showResults();
                return;
            }
            
            const question = currentQuiz[currentQuestionIndex];
            const content = document.getElementById('quizContent');
            
            content.innerHTML = `
                <div class="question-card">
                    <h3>Question ${currentQuestionIndex + 1} of ${currentQuiz.length}</h3>
                    <p style="font-size: 1.2rem; margin: 15px 0;">${question.question}</p>
                    <div class="options">
                        ${question.options.map((option, index) => 
                            `<div class="option" onclick="selectAnswer(${index})">${option}</div>`
                        ).join('')}
                    </div>
                    <div style="margin-top: 20px;">
                        <strong>Score: ${score}/${currentQuestionIndex}</strong>
                    </div>
                </div>
            `;
        }

        function selectAnswer(selectedIndex) {
            const question = currentQuiz[currentQuestionIndex];
            const options = document.querySelectorAll('.option');
            
            // Disable all options
            options.forEach(option => option.style.pointerEvents = 'none');
            
            // Show correct/incorrect
            options[selectedIndex].classList.add(selectedIndex === question.correct ? 'correct' : 'incorrect');
            if (selectedIndex !== question.correct) {
                options[question.correct].classList.add('correct');
            }
            
            if (selectedIndex === question.correct) {
                score++;
            }
            
            // Move to next question after delay
            setTimeout(() => {
                currentQuestionIndex++;
                showQuestion();
            }, 2000);
        }

        function showResults() {
            const percentage = Math.round((score / currentQuiz.length) * 100);
            let compliment;
            
            if (score >= 7) {
                const highCompliments = ["You're a Chemist!", "Wow, are you a chemist?", "Chemistry Expert!", "Very good chemist!"];
                compliment = highCompliments[Math.floor(Math.random() * highCompliments.length)];
            } else if (score >= 4) {
                compliment = "Better Luck Next Time!";
            } else {
                const lowCompliments = ["Try again", "You can do it!"];
                compliment = lowCompliments[Math.floor(Math.random() * lowCompliments.length)];
            }
            
            const content = document.getElementById('quizContent');
            content.innerHTML = `
                <div class="question-card" style="text-align: center;">
                    <h2>🎉 Quiz Complete!</h2>
                    <div style="font-size: 3rem; margin: 20px 0;">${score}/${currentQuiz.length}</div>
                    <div style="font-size: 1.5rem; margin: 10px 0;">${percentage}%</div>
                    <div style="font-size: 1.3rem; color: #e74c3c; font-weight: bold; margin: 20px 0;">${compliment}</div>
                    <button onclick="startQuiz()" style="margin: 10px; padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 10px; cursor: pointer;">Try Again</button>
                    <button onclick="showMain()" style="margin: 10px; padding: 10px 20px; background: #27ae60; color: white; border: none; border-radius: 10px; cursor: pointer;">Back to Table</button>
                </div>
            `;
        }

        // Particle system
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (12 + Math.random() * 6) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Add sparkle effect to elements on hover
        function addSparkleEffect() {
            const elements = document.querySelectorAll('.element');
            elements.forEach(element => {
                element.addEventListener('mouseenter', function() {
                    createSparkles(this);
                });
            });
        }

        function createSparkles(element) {
            const sparkleCount = 5;
            const rect = element.getBoundingClientRect();
            
            for (let i = 0; i < sparkleCount; i++) {
                const sparkle = document.createElement('div');
                sparkle.style.position = 'absolute';
                sparkle.style.width = '4px';
                sparkle.style.height = '4px';
                sparkle.style.background = '#fff';
                sparkle.style.borderRadius = '50%';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.zIndex = '1000';
                sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
                sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
                sparkle.style.animation = 'sparkle 0.8s ease-out forwards';
                
                document.body.appendChild(sparkle);
                
                setTimeout(() => {
                    if (sparkle.parentNode) {
                        sparkle.parentNode.removeChild(sparkle);
                    }
                }, 800);
            }
        }

        // Add sparkle animation
        const sparkleStyle = document.createElement('style');
        sparkleStyle.textContent = `
            @keyframes sparkle {
                0% {
                    transform: scale(0) rotate(0deg);
                    opacity: 1;
                }
                50% {
                    transform: scale(1) rotate(180deg);
                    opacity: 1;
                }
                100% {
                    transform: scale(0) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(sparkleStyle);


        /* Goofy UI helper: visual feedback only; it does not alter quiz/table logic. */
        (function initGoofyUI(){
            const mascot = document.getElementById('goofyMascot');
            const bubble = document.getElementById('mascotBubble');
            if(!mascot || !bubble) return;
            const messages = [
                'Pick an element! I promise the atoms won\'t bite. 🧪',
                'Science looks better with giant buttons. ✨',
                'Click a colorful tile. Go on. ⚛️',
                'Need a challenge? The quiz is waiting. 🧠',
                'Periodic trends? Follow the arrows, little scientist! ➡️',
                'Adjust the temperature and watch chemistry get dramatic. 🌡️'
            ];
            let i=0;
            function mascotSpeak(){
                i=(i+1)%messages.length;
                bubble.textContent=messages[i];
                mascot.classList.add('speaking');
                clearTimeout(mascot._speechTimer);
                mascot._speechTimer=setTimeout(()=>mascot.classList.remove('speaking'),4200);
            }
            mascot.addEventListener('click',mascotSpeak);
            mascot.addEventListener('keydown',(e)=>{
                if(e.key==='Enter' || e.key===' '){e.preventDefault();mascotSpeak();}
            });

            document.addEventListener('click',(e)=>{
                const btn=e.target.closest('.category-btn,#tempToggle,.quiz-controls button,.option');
                if(!btn) return;
                const old=bubble.textContent;
                if(btn.classList.contains('option')) bubble.textContent='Ooooh... dramatic chemistry! 👀';
                else if(btn.textContent.includes('QUIZ')) bubble.textContent='QUIZ TIME! Activate your brain cells! 🧠';
                else if(btn.textContent.includes('Clear')) bubble.textContent='Fresh table! Clean slate, scientist! ✨';
                else bubble.textContent='BOOP! Science button activated! 🧪';
                clearTimeout(window.__goofyBubbleTimer);
                window.__goofyBubbleTimer=setTimeout(()=>bubble.textContent=old,1600);
            });
        })();


        // App startup/loading screen
        (function initAppLoading(){
            const screen = document.getElementById('appLoadingScreen');
            const status = document.getElementById('loadingStatus');
            if(!screen) return;

            const messages = [
                'INITIALIZING...',
                'LOADING ELEMENTS...',
                'CALIBRATING ATOMS...',
                'PREPARING CHEMISTRY...',
                'READY!'
            ];

            let i = 0;
            const statusTimer = setInterval(() => {
                i++;
                if(status && messages[i]) status.textContent = messages[i];
                if(i >= messages.length - 1) clearInterval(statusTimer);
            }, 560);

            const hideLoading = () => {
                setTimeout(() => {
                    if(status) status.textContent = 'READY!';
                    setTimeout(() => screen.classList.add('loading-hidden'), 250);
                }, 2750);
            };

            if(document.readyState === 'loading'){
                document.addEventListener('DOMContentLoaded', hideLoading, {once:true});
            } else {
                hideLoading();
            }
        })();

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            initializeTable();
            createParticles();
            addSparkleEffect();

            // Sync the tiles with the starting temperature (25°C).
            const tempSlider = document.getElementById('tempSlider');
            if (tempSlider) currentTemp = Number(tempSlider.value) || 25;
            updateThermalAtmosphere();
        });

        // Close popup when clicking outside
        document.getElementById('popup').addEventListener('click', function(e) {
            if (e.target === this) {
                closePopup();
            }
        });

        // =========================================================
        // DPPTE MOLECULE SIMULATION
        // =========================================================
        let dppteMoleculeRAF = 0;
        let dppteMoleculeParticles = [];
        let dppteMoleculeTemp = 25;
        let dppteMoleculeModel = 'gas';
        let dppteMoleculeLastTime = 0;
        let dppteMoleculeCanvasSize = {w:0,h:0};

        function openMoleculeSimulation(){
            closeDppteMenu();
            const overlay=document.getElementById('dppteMoleculeOverlay');
            if(!overlay) return;
            overlay.classList.add('is-open'); overlay.setAttribute('aria-hidden','false');
            document.body.classList.add('dppte-modal-lock');
            initializeMoleculeParticles();
            requestAnimationFrame(()=>{resizeMoleculeCanvas(); drawMoleculeFrame();});
            if(!dppteMoleculeRAF) dppteMoleculeRAF=requestAnimationFrame(animateMoleculeSimulation);
            const close=document.querySelector('.dppte-molecule-close'); if(close) close.focus({preventScroll:true});
        }
        function closeMoleculeSimulation(){
            const overlay=document.getElementById('dppteMoleculeOverlay'); if(!overlay)return;
            overlay.classList.remove('is-open'); overlay.setAttribute('aria-hidden','true');
            document.body.classList.remove('dppte-modal-lock');
            if(dppteMoleculeRAF){cancelAnimationFrame(dppteMoleculeRAF);dppteMoleculeRAF=0;}
            const trigger=document.getElementById('dppteMenuTrigger'); if(trigger) trigger.focus({preventScroll:true});
        }
        function changeMoleculeModel(model){
            dppteMoleculeModel=model==='water'?'water':'gas';
            initializeMoleculeParticles(); updateMoleculeReadout(); drawMoleculeFrame();
        }
        function updateMoleculeSimulation(value){
            const previousPhase=dppteMoleculeModel==='water'?(dppteMoleculeTemp<=0?'solid':(dppteMoleculeTemp>=100?'gas':'liquid')):'';
            dppteMoleculeTemp=Math.max(-50,Math.min(200,Number(value)||0));
            const label=document.getElementById('dppteMoleculeTempValue'); if(label)label.textContent=dppteMoleculeTemp+'°C';
            const nextPhase=dppteMoleculeModel==='water'?(dppteMoleculeTemp<=0?'solid':(dppteMoleculeTemp>=100?'gas':'liquid')):'';
            if(previousPhase && previousPhase!==nextPhase) initializeMoleculeParticles();
            updateMoleculeReadout();
        }
        function updateMoleculeReadout(){
            const state=document.getElementById('dppteMoleculeState'),desc=document.getElementById('dppteMoleculeDescription'),dot=document.querySelector('.dppte-molecule-dot');
            if(!state||!desc)return;
            if(dppteMoleculeModel==='gas'){
                state.textContent=dppteMoleculeTemp<0?'Very slow particle motion':dppteMoleculeTemp<25?'Slow particle motion':dppteMoleculeTemp<100?'Active particle motion':'Rapid particle motion';
                desc.textContent='Gas particles stay far apart and move randomly. Heating increases their speed; cooling slows them down.';
                if(dot)dot.style.background='#4a9dce';
            }else if(dppteMoleculeTemp<=0){
                state.textContent='Solid — frozen water'; desc.textContent='Molecules stay close in an orderly arrangement and mainly vibrate in place.'; if(dot)dot.style.background='#78b8e8';
            }else if(dppteMoleculeTemp>=100){
                state.textContent='Gas — water vapor'; desc.textContent='Water molecules move freely, spread apart, and fill the container.'; if(dot)dot.style.background='#e58b43';
            }else{
                state.textContent='Liquid — flowing water'; desc.textContent='Molecules remain close together but continually move, slide, and rearrange.'; if(dot)dot.style.background='#3b9cc5';
            }
        }
        function resetMoleculeSimulation(){
            dppteMoleculeTemp=25; const slider=document.getElementById('dppteMoleculeTemp'); if(slider)slider.value='25';
            const type=document.getElementById('dppteMoleculeType'); dppteMoleculeModel=type?type.value:'gas';
            const label=document.getElementById('dppteMoleculeTempValue'); if(label)label.textContent='25°C';
            initializeMoleculeParticles();updateMoleculeReadout();drawMoleculeFrame();
        }
        function resizeMoleculeCanvas(){
            const canvas=document.getElementById('dppteMoleculeCanvas');if(!canvas)return;
            const rect=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,2);
            canvas.width=Math.max(1,Math.round(rect.width*dpr));canvas.height=Math.max(1,Math.round(rect.height*dpr));
            const ctx=canvas.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);
            dppteMoleculeCanvasSize={w:rect.width,h:rect.height};
            if(!dppteMoleculeParticles.length)initializeMoleculeParticles();
        }
        function initializeMoleculeParticles(){
            const canvas=document.getElementById('dppteMoleculeCanvas');if(!canvas)return;
            if(!dppteMoleculeCanvasSize.w)resizeMoleculeCanvas();
            const {w,h}=dppteMoleculeCanvasSize;if(!w||!h)return;
            const count=dppteMoleculeModel==='water'?25:42;
            dppteMoleculeParticles=[];
            const frozen=dppteMoleculeModel==='water'&&dppteMoleculeTemp<=0;
            const vapor=dppteMoleculeModel==='water'&&dppteMoleculeTemp>=100;
            for(let i=0;i<count;i++){
                let x,y;
                if(frozen){const cols=6,spacing=Math.min(34,(w-50)/cols);x=25+(i%cols)*spacing+(Math.floor(i/cols)%2)*5;y=h-28-Math.floor(i/cols)*28;}
                else if(dppteMoleculeModel==='water'&&!vapor){x=18+Math.random()*(w-36);y=h*.48+Math.random()*Math.max(20,h*.42);}
                else{x=16+Math.random()*(w-32);y=16+Math.random()*(h-32);}
                const angle=Math.random()*Math.PI*2,speed=0.35+Math.random()*1.4;
                dppteMoleculeParticles.push({x,y,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,angle:Math.random()*Math.PI*2,spin:(Math.random()-.5)*.035});
            }
            const countLabel=document.getElementById('dppteMoleculeCount');if(countLabel)countLabel.textContent=count+(dppteMoleculeModel==='water'?' H₂O molecules':' particles');
            updateMoleculeReadout();
        }
        function animateMoleculeSimulation(time){
            if(!document.getElementById('dppteMoleculeOverlay')?.classList.contains('is-open')){dppteMoleculeRAF=0;return;}
            const dt=Math.min(2,(time-dppteMoleculeLastTime)/16.67||1);dppteMoleculeLastTime=time;
            stepMoleculeParticles(dt);drawMoleculeFrame();dppteMoleculeRAF=requestAnimationFrame(animateMoleculeSimulation);
        }
        function stepMoleculeParticles(dt){
            const {w,h}=dppteMoleculeCanvasSize;if(!w||!h)return;
            const frozen=dppteMoleculeModel==='water'&&dppteMoleculeTemp<=0;
            const liquid=dppteMoleculeModel==='water'&&dppteMoleculeTemp>0&&dppteMoleculeTemp<100;
            const vapor=dppteMoleculeModel==='water'&&dppteMoleculeTemp>=100;
            const tempFactor=Math.max(.12,Math.sqrt((dppteMoleculeTemp+60)/85));
            dppteMoleculeParticles.forEach((p,i)=>{
                if(frozen){const cols=6,spacing=Math.min(34,(w-50)/cols),tx=25+(i%cols)*spacing+(Math.floor(i/cols)%2)*5,ty=h-28-Math.floor(i/cols)*28;p.x+=(tx-p.x)*.08;p.y+=(ty-p.y)*.08;p.vx*=.94;p.vy*=.94;p.angle+=.003*dt;return;}
                let factor=dppteMoleculeModel==='gas'?tempFactor:(liquid?(.32+tempFactor*.38):(.9+tempFactor*.8));
                if(liquid){p.vx+= (Math.random()-.5)*.11*dt;p.vy+=(Math.random()-.5)*.11*dt;p.vx*=.985;p.vy*=.985;}
                else{const desired=Math.hypot(p.vx,p.vy)||1;p.vx=p.vx/desired*factor*(.65+Math.random()*.25);p.vy=p.vy/desired*factor*(.65+Math.random()*.25);}
                p.x+=p.vx*dt*1.35;p.y+=p.vy*dt*1.35;p.angle+=p.spin*dt;
                if(liquid){const floor=h-23;if(p.y>floor){p.y=floor;p.vy=-Math.abs(p.vy)*.35;}if(p.y< h*.43){p.y=h*.43;p.vy=Math.abs(p.vy)*.4;}}
                if(vapor||dppteMoleculeModel==='gas'){if(p.y<12||p.y>h-12)p.vy*=-1;}
                if(p.x<12||p.x>w-12)p.vx*=-1;
                p.x=Math.max(12,Math.min(w-12,p.x));p.y=Math.max(12,Math.min(h-12,p.y));
            });
        }
        function drawMoleculeFrame(){
            const canvas=document.getElementById('dppteMoleculeCanvas');if(!canvas)return;
            const ctx=canvas.getContext('2d'),{w,h}=dppteMoleculeCanvasSize;if(!w||!h)return;
            ctx.clearRect(0,0,w,h);
            // subtle chamber guides
            ctx.strokeStyle='rgba(70,139,174,.12)';ctx.lineWidth=1;for(let y=28;y<h;y+=42){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
            const frozen=dppteMoleculeModel==='water'&&dppteMoleculeTemp<=0;
            const liquid=dppteMoleculeModel==='water'&&dppteMoleculeTemp>0&&dppteMoleculeTemp<100;
            const vapor=dppteMoleculeModel==='water'&&dppteMoleculeTemp>=100;
            if(liquid){const grad=ctx.createLinearGradient(0,h*.58,0,h);grad.addColorStop(0,'rgba(74,166,213,.04)');grad.addColorStop(1,'rgba(74,166,213,.18)');ctx.fillStyle=grad;ctx.fillRect(0,h*.58,w,h*.42);}
            dppteMoleculeParticles.forEach(p=>{
                if(dppteMoleculeModel==='water'){
                    const spread=(vapor?10:(frozen?7:8));const ax=p.x+Math.cos(p.angle)*spread,ay=p.y+Math.sin(p.angle)*spread,bx=p.x+Math.cos(p.angle+2.15)*spread,by=p.y+Math.sin(p.angle+2.15)*spread;
                    ctx.strokeStyle='rgba(89,142,177,.75)';ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(ax,ay);ctx.moveTo(p.x,p.y);ctx.lineTo(bx,by);ctx.stroke();
                    ctx.fillStyle='#e66e66';ctx.beginPath();ctx.arc(p.x,p.y,5.5,0,Math.PI*2);ctx.fill();ctx.fillStyle='#69acd5';ctx.beginPath();ctx.arc(ax,ay,3.8,0,Math.PI*2);ctx.arc(bx,by,3.8,0,Math.PI*2);ctx.fill();
                }else{
                    const g=ctx.createRadialGradient(p.x-2,p.y-2,1,p.x,p.y,7);g.addColorStop(0,'#b8e8ff');g.addColorStop(1,'#368fca');ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,6,0,Math.PI*2);ctx.fill();ctx.strokeStyle='rgba(255,255,255,.75)';ctx.lineWidth=1;ctx.stroke();
                }
            });
            if(frozen){ctx.fillStyle='rgba(65,129,170,.7)';ctx.font='700 11px system-ui';ctx.fillText('ORDERED SOLID STRUCTURE',12,18);}else if(liquid){ctx.fillStyle='rgba(65,129,170,.7)';ctx.font='700 11px system-ui';ctx.fillText('LIQUID • MOLECULES STAY CLOSE',12,18);}else if(vapor){ctx.fillStyle='rgba(179,112,65,.8)';ctx.font='700 11px system-ui';ctx.fillText('WATER VAPOR • GAS',12,18);}
        }
        window.addEventListener('resize',()=>{if(document.getElementById('dppteMoleculeOverlay')?.classList.contains('is-open')){resizeMoleculeCanvas();drawMoleculeFrame();}});
        document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.getElementById('dppteMoleculeOverlay')?.classList.contains('is-open'))closeMoleculeSimulation();});
        document.getElementById('dppteMoleculeOverlay')?.addEventListener('click',event=>{if(event.target===event.currentTarget)closeMoleculeSimulation();});

// Molecule Simulation: independent from DPPTE's page-wide temperature control.
(function(){
 const overlay=document.getElementById('dppteMoleculeOverlay');
 const canvas=document.getElementById('dppteMoleculeCanvas');
 if(!overlay||!canvas)return;
 const ctx=canvas.getContext('2d');
 let kind='gas',temp=25,particles=[],raf=0,lastW=0,lastH=0,active=false;
 const $=id=>document.getElementById(id);
 const rand=(a,b)=>a+Math.random()*(b-a);
 function waterPhase(){return temp<=0?'Solid':temp>=100?'Gas':'Liquid';}
 function currentPhase(){return kind==='water'?waterPhase():'Gas';}
 function particleCount(){return kind==='water'?18:48;}
 function makeParticles(){
   const w=canvas.clientWidth||600,h=canvas.clientHeight||300,n=particleCount();particles=[];
   for(let i=0;i<n;i++){
     let x=rand(24,w-24),y=rand(24,h-24),vx=rand(-1,1),vy=rand(-1,1);
     if(kind==='water'&&waterPhase()==='Liquid')y=rand(h*.48,h-24);
     if(kind==='water'&&waterPhase()==='Solid'){const cols=6,rows=3;x=w*.18+(i%cols)*(w*.64/(cols-1));y=h*.22+Math.floor(i/cols)*(h*.52/(rows-1));vx=rand(-.12,.12);vy=rand(-.12,.12)}
     particles.push({x,y,vx,vy,angle:rand(0,Math.PI*2),phase:rand(0,Math.PI*2),seed:Math.random()});
   }
 }
 function resize(){const rect=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,2);if(!rect.width||!rect.height)return;canvas.width=Math.round(rect.width*dpr);canvas.height=Math.round(rect.height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);lastW=rect.width;lastH=rect.height;makeParticles();}
 function setMoleculeType(value){kind=value==='water'?'water':'gas';makeParticles();updateMoleculeSimulation();}
 window.setMoleculeType=setMoleculeType;
 function updateMoleculeSimulation(){
   const slider=$('dppteMoleculeTemp');if(slider)temp=Number(slider.value);
   $('dppteMoleculeTempValue').textContent=temp+'°C';
   const phase=currentPhase();$('dppteMoleculeState').textContent=kind==='gas'?'Gas particles':phase;
   const icon=$('dppteMoleculeInsightIcon'),title=$('dppteMoleculeInsightTitle'),copy=$('dppteMoleculeInsightText'),motion=$('dppteMoleculeMotion'),caption=$('dppteMoleculeCaption');
   if(kind==='gas'){
     const level=temp<=0?'slow':temp<35?'moderate':temp<90?'fast':'very fast';
     icon.textContent=temp<0?'❄️':temp>80?'🔥':'💨';title.textContent='Gas particles: '+level+' motion';copy.textContent=temp<0?'At lower temperatures, the particles move more slowly.':temp>80?'At higher temperatures, particles move much faster and collide more often.':'As temperature rises, the particles gain kinetic energy and move faster.';motion.textContent=level+' random motion';caption.textContent='Gas particles spread throughout the available container.';
   }else if(phase==='Solid'){
     icon.textContent='🧊';title.textContent='Water is frozen (solid)';copy.textContent='At or below 0°C, the molecules are arranged closely in an orderly structure and mainly vibrate in place.';motion.textContent='Vibrating in fixed positions';caption.textContent='Solid model · molecules stay close in an ordered arrangement.';
   }else if(phase==='Liquid'){
     icon.textContent='💧';title.textContent='Water is liquid';copy.textContent='Between 0°C and 100°C, molecules stay close together but can move and slide past one another.';motion.textContent='Sliding and flowing';caption.textContent='Liquid model · molecules remain close while changing neighbors.';
   }else{
     icon.textContent='☁️';title.textContent='Water becomes water vapor';copy.textContent='At or above 100°C, the model shows molecules moving farther apart and spreading through the container.';motion.textContent='Fast, widely spaced motion';caption.textContent='Gas model · water molecules spread through the container.';
   }
   if(particles.length!==particleCount())makeParticles();
 }
 window.updateMoleculeSimulation=updateMoleculeSimulation;
 function speedFactor(){if(kind==='gas'){return Math.max(.18,Math.sqrt(Math.max(1,temp+273)/298))*1.8}if(waterPhase()==='Solid')return .18+Math.max(0,temp+50)*.002;if(waterPhase()==='Liquid')return .65+Math.max(0,temp)*.006;return 1.7+Math.max(0,temp-100)*.012;}
 function drawWater(x,y,a,scale){const ox=x,oy=y;const hx1=x+Math.cos(a+2.25)*10*scale,hy1=y+Math.sin(a+2.25)*10*scale,hx2=x+Math.cos(a-2.25)*10*scale,hy2=y+Math.sin(a-2.25)*10*scale;ctx.strokeStyle='rgba(91,125,150,.8)';ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(ox,oy);ctx.lineTo(hx1,hy1);ctx.moveTo(ox,oy);ctx.lineTo(hx2,hy2);ctx.stroke();ctx.fillStyle='#e75e57';ctx.beginPath();ctx.arc(ox,oy,6.2*scale,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';[ [hx1,hy1],[hx2,hy2] ].forEach(([x1,y1])=>{ctx.beginPath();ctx.arc(x1,y1,3.5*scale,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#9db7c8';ctx.lineWidth=1;ctx.stroke()});}
 function animate(){if(!active)return;const w=lastW||canvas.clientWidth,h=lastH||canvas.clientHeight;if(!w||!h){raf=requestAnimationFrame(animate);return;}ctx.clearRect(0,0,w,h);const phase=kind==='water'?waterPhase():'Gas',speed=speedFactor();
   if(kind==='water'&&phase==='Solid'){
     const cols=6,rows=3,cellW=w*.64/(cols-1),cellH=h*.52/(rows-1);
     particles.forEach((p,i)=>{const tx=w*.18+(i%cols)*cellW,ty=h*.22+Math.floor(i/cols)*cellH;p.x+=(tx+Math.sin(performance.now()*.0015+p.phase)*2-p.x)*.08;p.y+=(ty+Math.cos(performance.now()*.0015+p.phase)*2-p.y)*.08;drawWater(p.x,p.y,p.angle+Math.sin(performance.now()*.001+p.phase)*.12,1)});
   }else{
     particles.forEach(p=>{
       if(kind==='water'&&phase==='Liquid'){
         p.vx+=rand(-.035,.035)*speed;p.vy+=rand(-.035,.035)*speed;
         const targetY=h*.67;if(p.y>targetY){p.vy-=.025*speed}else p.vy+=.012*speed;
         const max=1.1*speed,mag=Math.hypot(p.vx,p.vy)||1;if(mag>max){p.vx=p.vx/mag*max;p.vy=p.vy/mag*max}
       }else{p.vx+=rand(-.04,.04)*speed;p.vy+=rand(-.04,.04)*speed;const max=(kind==='gas'?1.3:1.7)*speed,mag=Math.hypot(p.vx,p.vy)||1;if(mag>max){p.vx=p.vx/mag*max;p.vy=p.vy/mag*max}}
       p.x+=p.vx;p.y+=p.vy;if(p.x<13||p.x>w-13){p.vx*=-1;p.x=Math.max(13,Math.min(w-13,p.x))}if(p.y<13||p.y>h-13){p.vy*=-1;p.y=Math.max(13,Math.min(h-13,p.y))}p.angle+=rand(-.025,.025)*speed;
       if(kind==='water')drawWater(p.x,p.y,p.angle,1);else{ctx.fillStyle='rgba(48,145,201,.16)';ctx.beginPath();ctx.arc(p.x,p.y,9,0,Math.PI*2);ctx.fill();ctx.fillStyle='#3498c9';ctx.beginPath();ctx.arc(p.x,p.y,4.2,0,Math.PI*2);ctx.fill();}
     });
   }
   raf=requestAnimationFrame(animate);
 }
 function openMoleculeSimulation(){if(typeof closeDppteMenu==='function')closeDppteMenu();overlay.classList.add('is-open');overlay.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';active=true;requestAnimationFrame(()=>{resize();updateMoleculeSimulation();cancelAnimationFrame(raf);animate();$('dppteMoleculeTemp').focus({preventScroll:true})});}
 function closeMoleculeSimulation(){overlay.classList.remove('is-open');overlay.setAttribute('aria-hidden','true');active=false;cancelAnimationFrame(raf);document.body.style.overflow='';}
 window.openMoleculeSimulation=openMoleculeSimulation;window.closeMoleculeSimulation=closeMoleculeSimulation;
 window.addEventListener('resize',()=>{if(active)resize()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay.classList.contains('is-open'))closeMoleculeSimulation()});
})();

// =========================================================
// DPPTE FEATURE WORKSPACE: Finder, Reactions, Challenges,
// Reference, and Settings.
// =========================================================
(function () {
    const elementList = () => Object.entries(window.DPPTE_ELEMENTS || {}).map(([number, element]) => ({ number: Number(number), ...element })).sort((first, second) => first.number - second.number);
    const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
    const reactions = [
        { name: 'Water formation', equation: '2H₂ + O₂ → 2H₂O', coefficients: [2, 1, 2], atoms: { H: [2, 0, 2], O: [2, 2, 2] }, note: 'Hydrogen and oxygen combine to form water.' },
        { name: 'Ammonia synthesis', equation: 'N₂ + 3H₂ → 2NH₃', coefficients: [1, 3, 2], atoms: { N: [2, 0, 2], H: [6, 0, 6] }, note: 'Nitrogen and hydrogen form ammonia in the Haber process.' },
        { name: 'Methane combustion', equation: 'CH₄ + 2O₂ → CO₂ + 2H₂O', coefficients: [1, 2, 1, 2], atoms: { C: [1, 0, 1, 0], H: [4, 0, 0, 4], O: [0, 4, 2, 2] }, note: 'A hydrocarbon reacts with oxygen to produce carbon dioxide and water.' }
    ];
    let challengeState = { score: 0, question: 0, total: 5, current: null };

    function ensureToolModal() {
        let modal = document.getElementById('dppteToolOverlay');
        if (modal) return modal;
        modal = document.createElement('div');
        modal.id = 'dppteToolOverlay';
        modal.className = 'dppte-tool-overlay';
        modal.setAttribute('aria-hidden', 'true');
        modal.innerHTML = '<section class="dppte-tool-modal" role="dialog" aria-modal="true" aria-labelledby="dppteToolTitle"><header class="dppte-tool-head"><div><p id="dppteToolKicker">DPPTE TOOLKIT</p><h2 id="dppteToolTitle"></h2></div><button type="button" class="dppte-tool-close" aria-label="Close tool">×</button></header><div class="dppte-tool-body" id="dppteToolBody"></div></section>';
        modal.addEventListener('click', event => { if (event.target === modal) closeDppteTool(); });
        modal.querySelector('.dppte-tool-close').addEventListener('click', closeDppteTool);
        document.body.appendChild(modal);
        return modal;
    }

    function toolHeader(title, kicker) {
        document.getElementById('dppteToolTitle').textContent = title;
        document.getElementById('dppteToolKicker').textContent = kicker;
    }

    function openDppteTool(name) {
        if (typeof closeDppteMenu === 'function') closeDppteMenu();
        const modal = ensureToolModal();
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (name === 'finder') renderFinder();
        if (name === 'reaction') renderReaction();
        if (name === 'challenge') renderChallenge();
        if (name === 'reference') renderReference();
        if (name === 'settings') renderSettings();
        setTimeout(() => modal.querySelector('input, button, select')?.focus({ preventScroll: true }), 80);
    }

    function closeDppteTool() {
        const modal = document.getElementById('dppteToolOverlay');
        if (!modal) return;
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function renderFinder() {
        toolHeader('Element Finder', 'EXPLORE');
        const body = document.getElementById('dppteToolBody');
        body.innerHTML = '<div class="dppte-tool-intro"><p>Search the complete periodic table by name, symbol, atomic number, or category.</p></div><label class="dppte-tool-search">⌕<input id="dppteFinderInput" type="search" placeholder="Try oxygen, O, or 8" autocomplete="off"></label><div class="dppte-finder-results" id="dppteFinderResults"></div><div class="dppte-tool-detail" id="dppteFinderDetail" aria-live="polite"></div>';
        const input = document.getElementById('dppteFinderInput');
        const render = () => {
            const query = input.value.trim().toLowerCase();
            const matches = elementList().filter(element => !query || element.name.toLowerCase().includes(query) || element.symbol.toLowerCase() === query || String(element.number) === query || String(element.category).replace(/-/g, ' ').includes(query)).slice(0, 24);
            document.getElementById('dppteFinderResults').innerHTML = matches.map(element => `<button type="button" class="dppte-element-result" data-element="${element.number}"><span class="dppte-result-number">${element.number}</span><strong>${escapeHtml(element.symbol)}</strong><span>${escapeHtml(element.name)}</span><small>${escapeHtml(String(element.category).replace(/-/g, ' '))}</small></button>`).join('') || '<p class="dppte-empty-state">No matching elements. Try a symbol, name, or atomic number.</p>';
        };
        input.addEventListener('input', render);
        document.getElementById('dppteFinderResults').addEventListener('click', event => {
            const button = event.target.closest('[data-element]');
            if (button) showElementDetail(Number(button.dataset.element));
        });
        render();
    }

    function showElementDetail(number) {
        const element = window.DPPTE_ELEMENTS?.[number];
        if (!element) return;
        document.getElementById('dppteFinderDetail').innerHTML = `<div class="dppte-detail-symbol">${escapeHtml(element.symbol)}</div><div><h3>${escapeHtml(element.name)} <span>#${number}</span></h3><p>${escapeHtml(String(element.category).replace(/-/g, ' '))} · atomic mass ${escapeHtml(element.mass)}</p><dl><div><dt>Group</dt><dd>${element.group || '—'}</dd></div><div><dt>Period</dt><dd>${element.period || '—'}</dd></div><div><dt>Melting</dt><dd>${element.melting ?? '—'} °C</dd></div><div><dt>Boiling</dt><dd>${element.boiling ?? '—'} °C</dd></div></dl><button type="button" class="dppte-tool-button" id="dppteFinderOpenElement">View in periodic table</button></div>`;
        document.getElementById('dppteFinderOpenElement').addEventListener('click', () => { closeDppteTool(); showMain(); setTimeout(() => document.querySelector(`.element[data-number="${number}"]`)?.click(), 100); });
    }

    // =========================================================
    // REACTION BUILDER — Construct the reaction first, then balance it.
    // =========================================================
    const reactionBuilderChallenges = [
        {
            name: 'Water formation',
            note: 'Hydrogen combines with oxygen to form water.',
            reactants: [{formula:{1:2}}],
            products: [{formula:{1:2,8:1}}],
            coefficients: [2,1,2]
        },
        {
            name: 'Ammonia synthesis',
            note: 'Nitrogen combines with hydrogen to form ammonia.',
            reactants: [{formula:{7:2}}, {formula:{1:2}}],
            products: [{formula:{7:1,1:3}}],
            coefficients: [1,3,2]
        },
        {
            name: 'Methane combustion',
            note: 'Methane reacts with oxygen to form carbon dioxide and water.',
            reactants: [{formula:{6:1,1:4}}, {formula:{8:2}}],
            products: [{formula:{6:1,8:2}}, {formula:{1:2,8:1}}],
            coefficients: [1,2,1,2]
        },
        {
            name: 'Sodium chloride formation',
            note: 'Sodium reacts with chlorine to form sodium chloride.',
            reactants: [{formula:{11:2}}, {formula:{17:2}}],
            products: [{formula:{11:1,17:1}}],
            coefficients: [2,1,2]
        },
        {
            name: 'Magnesium oxide formation',
            note: 'Magnesium reacts with oxygen to form magnesium oxide.',
            reactants: [{formula:{12:1}}, {formula:{8:2}}],
            products: [{formula:{12:1,8:1}}],
            coefficients: [2,1,2]
        }
    ];

    let reactionBuilderState = {
        challenge: 0,
        reactants: [],
        products: [],
        unlockedBalance: false,
        checkedBuild: false
    };

    function formulaKeyFromItems(items) {
        return items.slice().sort((a,b) => Number(a.z)-Number(b.z))
            .map(x => `${x.z}:${x.qty}`).join('|');
    }

    function formulaDisplay(items) {
        return items.map(x => `${escapeHtml(x.symbol)}${x.qty > 1 ? `<sub>${x.qty}</sub>` : ''}`).join('');
    }

    function formulaPlain(items) {
        return items.map(x => `${x.symbol}${x.qty > 1 ? x.qty : ''}`).join('');
    }

    function challengeFormulaKey(compound) {
        return Object.entries(compound.formula).sort((a,b)=>Number(a[0])-Number(b[0]))
            .map(([z,qty])=>`${z}:${qty}`).join('|');
    }

    function renderReaction() {
        toolHeader('Reaction Builder', 'BUILD → CHECK → BALANCE');
        const body = document.getElementById('dppteToolBody');
        body.innerHTML = `
            <div class="dppte-reaction-builder-intro">
                <div class="dppte-rb-step active"><b>1</b><span>Build the reaction</span></div>
                <div class="dppte-rb-line"></div>
                <div class="dppte-rb-step" id="dppteRbStep2"><b>2</b><span>Balance equation</span></div>
            </div>
            <div class="dppte-tool-intro">
                <p>Choose a challenge, build each compound yourself, then check whether your chemical formulas and reaction are correct. Balancing unlocks only after the reaction is correct.</p>
            </div>
            <label class="dppte-select-label">Reaction challenge
                <select id="dppteReactionSelect">
                    ${reactionBuilderChallenges.map((r,i)=>`<option value="${i}">${escapeHtml(r.name)}</option>`).join('')}
                </select>
            </label>
            <div id="dppteReactionWorkspace"></div>`;
        const select = document.getElementById('dppteReactionSelect');
        select.addEventListener('change', () => {
            reactionBuilderState.challenge = Number(select.value);
            resetReactionBuild();
        });
        resetReactionBuild();
    }

    function resetReactionBuild() {
        reactionBuilderState.reactants = [];
        reactionBuilderState.products = [];
        reactionBuilderState.unlockedBalance = false;
        reactionBuilderState.checkedBuild = false;
        renderReactionWorkspace();
    }

    function renderReactionWorkspace() {
        const workspace = document.getElementById('dppteReactionWorkspace');
        if (!workspace) return;
        const challenge = reactionBuilderChallenges[reactionBuilderState.challenge];

        workspace.innerHTML = `
            <div class="dppte-reaction-builder-grid">
                ${renderReactionSide('reactants', 'Reactants', 'Elements or compounds that react', reactionBuilderState.reactants)}
                <div class="dppte-reaction-arrow">→</div>
                ${renderReactionSide('products', 'Products', 'What is formed', reactionBuilderState.products)}
            </div>
            <div class="dppte-rb-check-panel">
                <div class="dppte-rb-target"><strong>Challenge:</strong> ${escapeHtml(challenge.note)}</div>
                <div class="dppte-action-row">
                    <button type="button" class="dppte-tool-button" id="dppteCheckBuild">✓ Check chemical reaction</button>
                    <button type="button" class="dppte-tool-button secondary" id="dppteResetBuild">↺ Start over</button>
                </div>
                <div id="dppteBuildFeedback" class="dppte-feedback" aria-live="polite"></div>
            </div>
            <div id="dppteBalanceStage" class="dppte-balance-stage ${reactionBuilderState.unlockedBalance ? 'is-unlocked' : ''}">
                ${reactionBuilderState.unlockedBalance ? renderBalanceStage(challenge) : `
                    <div class="dppte-lock-card">
                        <div class="dppte-lock-icon">🔒</div>
                        <div><strong>Balance Equation</strong><p>Build and verify the correct chemical reaction first.</p></div>
                    </div>`}
            </div>`;

        document.getElementById('dppteCheckBuild').addEventListener('click', checkBuiltReaction);
        document.getElementById('dppteResetBuild').addEventListener('click', resetReactionBuild);

        workspace.querySelectorAll('[data-rb-add]').forEach(btn => {
            btn.addEventListener('click', () => addReactionCompound(btn.dataset.rbAdd));
        });
        workspace.querySelectorAll('[data-rb-remove]').forEach(btn => {
            btn.addEventListener('click', () => removeReactionCompound(btn.dataset.rbRemove, Number(btn.dataset.rbIndex)));
        });
        workspace.querySelectorAll('[data-rb-qty]').forEach(input => {
            input.addEventListener('change', () => {
                const side = input.dataset.rbQty;
                const index = Number(input.dataset.rbIndex);
                const item = reactionBuilderState[side][index];
                if (item) item.qty = Math.max(1, Math.min(8, parseInt(input.value) || 1));
                renderReactionWorkspace();
            });
        });
        workspace.querySelectorAll('[data-rb-element]').forEach(btn => {
            btn.addEventListener('click', () => {
                const side = btn.dataset.rbElement;
                const index = Number(btn.dataset.rbIndex);
                openReactionCompoundEditor(side, index);
            });
        });

        if (reactionBuilderState.unlockedBalance) bindBalanceStage(challenge);
    }

    function renderReactionSide(side, title, subtitle, compounds) {
        return `<section class="dppte-rb-side">
            <div class="dppte-rb-side-head"><div><h3>${title}</h3><small>${subtitle}</small></div><button type="button" class="dppte-rb-add" data-rb-add="${side}">＋ Add compound</button></div>
            <div class="dppte-rb-compounds">
                ${compounds.length ? compounds.map((compound,i)=>`
                    <div class="dppte-rb-compound">
                        <button type="button" class="dppte-rb-compound-main" data-rb-element="${side}" data-rb-index="${i}">
                            <span class="dppte-rb-compound-formula">${formulaDisplay(compound.elements)}</span>
                            <small>${formulaPlain(compound.elements) || 'Empty compound'}</small>
                        </button>
                        <input type="number" min="1" max="8" value="${compound.qty}" data-rb-qty="${side}" data-rb-index="${i}" aria-label="Coefficient">
                        <button type="button" class="dppte-rb-remove" data-rb-remove="${side}" data-rb-index="${i}" aria-label="Remove compound">×</button>
                    </div>`).join('') :
                    `<div class="dppte-rb-empty">No compounds yet.<br><span>Click “Add compound” to choose elements.</span></div>`}
            </div>
        </section>`;
    }

    function addReactionCompound(side) {
        if (reactionBuilderState[side].length >= 3) {
            dppteShowNote?.('You can use up to 3 compounds on each side.');
            return;
        }
        reactionBuilderState[side].push({qty:1, elements:[]});
        renderReactionWorkspace();
        openReactionCompoundEditor(side, reactionBuilderState[side].length - 1);
    }

    function removeReactionCompound(side,index) {
        reactionBuilderState[side].splice(index,1);
        reactionBuilderState.unlockedBalance = false;
        renderReactionWorkspace();
    }

    function openReactionCompoundEditor(side,index) {
        const compound = reactionBuilderState[side][index];
        if (!compound) return;
        const existing = document.getElementById('dppteRbElementPicker');
        existing?.remove();

        const overlay = document.createElement('div');
        overlay.id = 'dppteRbElementPicker';
        overlay.className = 'dppte-rb-picker-overlay';
        overlay.innerHTML = `
            <section class="dppte-rb-picker" role="dialog" aria-modal="true">
                <header><div><span>COMPOUND BUILDER</span><h3>Choose elements and quantities</h3></div><button type="button" id="dppteRbPickerClose">×</button></header>
                <div class="dppte-rb-selected" id="dppteRbSelected"></div>
                <label class="dppte-tool-search">⌕<input id="dppteRbElementSearch" type="search" placeholder="Search element, symbol, or atomic number" autocomplete="off"></label>
                <div class="dppte-rb-element-grid" id="dppteRbElementGrid"></div>
                <footer><button type="button" class="dppte-tool-button" id="dppteRbUseCompound">Use this compound</button></footer>
            </section>`;
        document.body.appendChild(overlay);

        const renderPicker = (filter='') => {
            const f=filter.trim().toLowerCase();
            const list=elementList().filter(e=>!f || e.name.toLowerCase().includes(f) || e.symbol.toLowerCase()===f || String(e.number)===f).slice(0,40);
            document.getElementById('dppteRbElementGrid').innerHTML=list.map(e=>{
                const selected=compound.elements.some(x=>x.z===e.number);
                return `<button type="button" class="dppte-rb-element ${selected?'is-selected':''}" data-z="${e.number}">
                    <b>${e.symbol}</b><span>${e.name}</span><small>#${e.number}</small></button>`;
            }).join('');
            document.getElementById('dppteRbSelected').innerHTML=compound.elements.length ?
                compound.elements.map(x=>`<div class="dppte-rb-chip"><b>${x.symbol}</b><span>${x.name}</span><input type="number" min="1" max="8" value="${x.qty}" data-chip-z="${x.z}"><button type="button" data-chip-remove="${x.z}">×</button></div>`).join('') :
                '<span class="dppte-rb-no-selection">No elements selected. Select at least one.</span>';

            document.querySelectorAll('#dppteRbElementGrid [data-z]').forEach(btn=>btn.addEventListener('click',()=>{
                const z=Number(btn.dataset.z), e=getEl(z);
                const found=compound.elements.find(x=>x.z===z);
                if(found) compound.elements=compound.elements.filter(x=>x.z!==z);
                else if(compound.elements.length<4) compound.elements.push({z,symbol:e.symbol,name:e.name,qty:1});
                else dppteShowNote?.('A compound can contain up to 4 different elements.');
                renderPicker(document.getElementById('dppteRbElementSearch').value);
            }));
            document.querySelectorAll('#dppteRbSelected [data-chip-z]').forEach(input=>input.addEventListener('change',()=>{
                const x=compound.elements.find(x=>x.z===Number(input.dataset.chipZ));
                if(x)x.qty=Math.max(1,Math.min(8,parseInt(input.value)||1));
                renderPicker(document.getElementById('dppteRbElementSearch').value);
            }));
            document.querySelectorAll('#dppteRbSelected [data-chip-remove]').forEach(btn=>btn.addEventListener('click',()=>{
                compound.elements=compound.elements.filter(x=>x.z!==Number(btn.dataset.chipRemove));
                renderPicker(document.getElementById('dppteRbElementSearch').value);
            }));
        };

        document.getElementById('dppteRbPickerClose').addEventListener('click',()=>overlay.remove());
        document.getElementById('dppteRbUseCompound').addEventListener('click',()=>{
            if(!compound.elements.length){ dppteShowNote?.('Select at least one element first.'); return; }
            overlay.remove();
            reactionBuilderState.unlockedBalance=false;
            renderReactionWorkspace();
        });
        document.getElementById('dppteRbElementSearch').addEventListener('input',e=>renderPicker(e.target.value));
        renderPicker();
    }

    function sortedCompoundKeys(side) {
        return reactionBuilderState[side].map(c=>formulaKeyFromItems(c.elements)).sort();
    }

    function checkBuiltReaction() {
        const challenge = reactionBuilderChallenges[reactionBuilderState.challenge];
        const expectedReactants = challenge.reactants.map(challengeFormulaKey).sort();
        const expectedProducts = challenge.products.map(challengeFormulaKey).sort();
        const actualReactants = sortedCompoundKeys('reactants');
        const actualProducts = sortedCompoundKeys('products');
        const valid = actualReactants.length===expectedReactants.length &&
            actualProducts.length===expectedProducts.length &&
            actualReactants.every((v,i)=>v===expectedReactants[i]) &&
            actualProducts.every((v,i)=>v===expectedProducts[i]);

        const feedback=document.getElementById('dppteBuildFeedback');
        if(!feedback)return;
        if(valid){
            reactionBuilderState.unlockedBalance=true;
            reactionBuilderState.checkedBuild=true;
            feedback.className='dppte-feedback is-success';
            feedback.innerHTML='<strong>✓ Correct reaction!</strong> Your compounds and chemical formulas are correct. The balancing stage is now unlocked.';
            renderReactionWorkspace();
            const f=document.getElementById('dppteBuildFeedback');
            if(f){f.className='dppte-feedback is-success';f.innerHTML='<strong>✓ Correct reaction!</strong> Your compounds and chemical formulas are correct. The balancing stage is now unlocked.';}
            document.getElementById('dppteRbStep2')?.classList.add('active');
            document.getElementById('dppteBalanceStage')?.scrollIntoView({behavior:'smooth',block:'nearest'});
        } else {
            feedback.className='dppte-feedback';
            const missingReactants=expectedReactants.filter(x=>!actualReactants.includes(x));
            const missingProducts=expectedProducts.filter(x=>!actualProducts.includes(x));
            let hint='Check the elements and subscripts in each compound.';
            if(missingReactants.length && !actualReactants.length) hint='Start by building the reactants described in the challenge.';
            else if(missingProducts.length) hint='Your product side does not match the required product compound(s).';
            else if(missingReactants.length) hint='One or more reactant formulas are not correct yet.';
            feedback.innerHTML=`<strong>Not quite.</strong> ${hint}`;
            reactionBuilderState.unlockedBalance=false;
        }
    }

    function renderBalanceStage(challenge) {
        const formulas = [...challenge.reactants,...challenge.products].map(c=>{
            return Object.entries(c.formula).map(([z,q])=>{const e=getEl(Number(z));return {z:Number(z),symbol:e?.symbol||'',qty:q};});
        });
        const equation = formulas.map((items,i)=>`${i===0?'':(i===challenge.reactants.length?' → ':' + ')}<span class="dppte-rb-balance-part"><input class="dppte-rb-coeff" type="number" min="1" max="12" value="1" data-balance-index="${i}"><span>${formulaDisplay(items)}</span></span>`).join('');
        return `<div class="dppte-rb-balance-content">
            <div class="dppte-balance-title"><span>STEP 2</span><h3>Balance the chemical equation</h3><p>Change only the coefficients. Do not change the subscripts inside formulas.</p></div>
            <div class="dppte-rb-equation">${equation}</div>
            <div class="dppte-action-row">
                <button type="button" class="dppte-tool-button" id="dppteCheckBalance">✓ Check balance</button>
                <button type="button" class="dppte-tool-button secondary" id="dppteRevealBalance">Show solution</button>
            </div>
            <div id="dppteBalanceFeedback" class="dppte-feedback" aria-live="polite"></div>
        </div>`;
    }

    function bindBalanceStage(challenge) {
        document.getElementById('dppteCheckBalance')?.addEventListener('click',()=>{
            const entered=[...document.querySelectorAll('.dppte-rb-coeff')].map(x=>Number(x.value));
            const correct=challenge.coefficients.every((v,i)=>v===entered[i]);
            const fb=document.getElementById('dppteBalanceFeedback');
            if(correct){
                fb.className='dppte-feedback is-success';
                fb.innerHTML='<strong>✓ Equation balanced!</strong> Every element has the same number of atoms on both sides.';
            }else{
                fb.className='dppte-feedback';
                fb.innerHTML='<strong>Not balanced yet.</strong> Adjust the coefficients while keeping the compound formulas unchanged.';
            }
        });
        document.getElementById('dppteRevealBalance')?.addEventListener('click',()=>{
            challenge.coefficients.forEach((v,i)=>{const input=document.querySelector(`.dppte-rb-coeff[data-balance-index="${i}"]`);if(input)input.value=v;});
            document.getElementById('dppteCheckBalance')?.click();
        });
    }

    function renderChallenge() {
        toolHeader('Challenge Mode', 'PRACTICE');
        challengeState = { score: 0, question: 0, total: 5, current: null };
        renderChallengeQuestion();
    }

    function makeChallengeQuestion() {
        const choices = elementList().filter(element => element.number <= 54);
        const element = choices[Math.floor(Math.random() * choices.length)];
        const type = Math.floor(Math.random() * 3);
        if (type === 0) return { prompt: `Which symbol belongs to ${element.name}?`, answer: element.symbol, options: makeOptions(choices, element, item => item.symbol) };
        if (type === 1) return { prompt: `What is the atomic number of ${element.name}?`, answer: String(element.number), options: makeOptions(choices, element, item => String(item.number)) };
        return { prompt: `Which element uses the symbol ${element.symbol}?`, answer: element.name, options: makeOptions(choices, element, item => item.name) };
    }

    function makeOptions(items, answerElement, getValue) {
        const set = new Set([getValue(answerElement)]);
        while (set.size < 4) set.add(getValue(items[Math.floor(Math.random() * items.length)]));
        return [...set].sort(() => Math.random() - 0.5);
    }

    function renderChallengeQuestion() {
        const body = document.getElementById('dppteToolBody');
        if (challengeState.question >= challengeState.total) {
            body.innerHTML = `<div class="dppte-challenge-finish"><span>★</span><h3>Challenge complete</h3><p>You scored <strong>${challengeState.score} / ${challengeState.total}</strong>.</p><button type="button" class="dppte-tool-button" id="dppteRestartChallenge">Play again</button></div>`;
            document.getElementById('dppteRestartChallenge').addEventListener('click', renderChallenge);
            return;
        }
        challengeState.current = makeChallengeQuestion();
        const question = challengeState.current;
        body.innerHTML = `<div class="dppte-challenge-progress">Question ${challengeState.question + 1} of ${challengeState.total}<span>Score: ${challengeState.score}</span></div><h3 class="dppte-challenge-question">${question.prompt}</h3><div class="dppte-challenge-options">${question.options.map(option => `<button type="button" data-answer="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join('')}</div><div class="dppte-feedback" id="dppteChallengeFeedback" aria-live="polite"></div>`;
        body.querySelector('.dppte-challenge-options').addEventListener('click', event => {
            const choice = event.target.closest('[data-answer]');
            if (!choice || choice.disabled) return;
            const correct = choice.dataset.answer === question.answer;
            body.querySelectorAll('[data-answer]').forEach(button => { button.disabled = true; if (button.dataset.answer === question.answer) button.classList.add('is-correct'); });
            if (correct) { challengeState.score++; choice.classList.add('is-correct'); }
            else choice.classList.add('is-wrong');
            document.getElementById('dppteChallengeFeedback').innerHTML = `${correct ? '<strong>Correct!</strong>' : '<strong>Almost.</strong>'} The answer is ${escapeHtml(question.answer)}. <button type="button" class="dppte-text-button" id="dppteNextChallenge">Next question</button>`;
            document.getElementById('dppteNextChallenge').addEventListener('click', () => { challengeState.question++; renderChallengeQuestion(); });
        });
    }

    function renderReference() {
        toolHeader('Chemistry Reference', 'LEARN');
        const categoryCounts = elementList().reduce((counts, element) => { counts[element.category] = (counts[element.category] || 0) + 1; return counts; }, {});
        document.getElementById('dppteToolBody').innerHTML = `<div class="dppte-reference-grid"><section><h3>Quick facts</h3><dl class="dppte-reference-list"><div><dt>Atomic number</dt><dd>Number of protons</dd></div><div><dt>Atomic mass</dt><dd>Average mass in atomic units</dd></div><div><dt>Group</dt><dd>Vertical column with related properties</dd></div><div><dt>Period</dt><dd>Horizontal row showing electron shells</dd></div></dl></section><section><h3>Element families</h3><div class="dppte-family-list">${Object.entries(categoryCounts).map(([category, count]) => `<button type="button" data-category="${escapeHtml(category)}"><span>${escapeHtml(category.replace(/-/g, ' '))}</span><strong>${count}</strong></button>`).join('')}</div></section><section class="dppte-reference-wide"><h3>Common conversions</h3><p><strong>K = °C + 273.15</strong> &nbsp; · &nbsp; <strong>°F = (°C × 9/5) + 32</strong></p></section></div>`;
        document.querySelector('.dppte-family-list').addEventListener('click', event => { const button = event.target.closest('[data-category]'); if (button) { closeDppteTool(); showMain(); setTimeout(() => highlightCategory(button.dataset.category), 100); } });
    }

    function renderSettings() {
        toolHeader('Settings', 'PREFERENCES');
        const preferences = JSON.parse(localStorage.getItem('dppte-preferences') || '{}');
        document.getElementById('dppteToolBody').innerHTML = `<div class="dppte-settings"><label><span><strong>Reduced motion</strong><small>Stops decorative animations.</small></span><input id="dppteReducedMotion" type="checkbox" ${preferences.reducedMotion ? 'checked' : ''}></label><label><span><strong>High contrast</strong><small>Strengthens borders and text contrast.</small></span><input id="dppteHighContrast" type="checkbox" ${preferences.highContrast ? 'checked' : ''}></label><button type="button" class="dppte-tool-button secondary" id="dppteResetSettings">Reset preferences</button></div>`;
        const save = () => { const value = { reducedMotion: document.getElementById('dppteReducedMotion').checked, highContrast: document.getElementById('dppteHighContrast').checked }; localStorage.setItem('dppte-preferences', JSON.stringify(value)); applyPreferences(value); };
        document.getElementById('dppteReducedMotion').addEventListener('change', save);
        document.getElementById('dppteHighContrast').addEventListener('change', save);
        document.getElementById('dppteResetSettings').addEventListener('click', () => { localStorage.removeItem('dppte-preferences'); applyPreferences({}); renderSettings(); });
    }

    function applyPreferences(preferences) {
        document.body.classList.toggle('dppte-reduced-motion', Boolean(preferences.reducedMotion));
        document.body.classList.toggle('dppte-high-contrast', Boolean(preferences.highContrast));
    }

    window.openDppteTool = openDppteTool;
    window.closeDppteTool = closeDppteTool;
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && document.getElementById('dppteToolOverlay')?.classList.contains('is-open')) closeDppteTool(); });
    document.addEventListener('DOMContentLoaded', () => applyPreferences(JSON.parse(localStorage.getItem('dppte-preferences') || '{}')));
})();

(function(){
    const compoundState={selected:[],category:'all'};
    const commonCompounds={'1:1|8:1':'Water','6:1|8:2':'Carbon dioxide','11:1|17:1':'Sodium chloride','1:3|7:1':'Ammonia','1:4|6:1':'Methane','6:1|8:3|20:1':'Calcium carbonate','1:1|17:1':'Hydrogen chloride','8:1|12:1':'Magnesium oxide','8:3|13:2':'Aluminum oxide','1:1|8:1|11:1':'Sodium hydroxide','17:1|19:1':'Potassium chloride','8:2|16:1':'Sulfur dioxide','8:3|16:1':'Sulfur trioxide','1:2|8:4|16:1':'Sulfuric acid','8:1|20:1':'Calcium oxide','8:3|26:2':'Iron(III) oxide','8:1|29:1':'Copper(II) oxide','1:1|8:1|19:1':'Potassium hydroxide'};
    const commonOrder=Object.keys(window.DPPTE_ELEMENTS||{}).map(Number).sort((a,b)=>a-b);
    const searchOrder=commonOrder;
    function getEl(z){return window.DPPTE_ELEMENTS&&window.DPPTE_ELEMENTS[z]?window.DPPTE_ELEMENTS[z]:null}
    function categoryMatch(e,c){if(c==='all')return true;const cat=String(e.category||'').toLowerCase();if(c==='nonmetals')return /nonmetal|halogen/.test(cat)||cat==='noble-gases';if(c==='metals')return !/nonmetal/.test(cat)&&/metal|alkali|alkaline|lanthan|actin/.test(cat);if(c==='metalloids')return cat==='metalloids'||cat==='metalloid';return cat===c}
    function openCompoundBuilder(){if(typeof closeDppteMenu==='function')closeDppteMenu();const o=document.getElementById('dppteCompoundOverlay');if(!o)return;o.classList.add('is-open');o.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';compoundState.selected=[];compoundState.category='all';setActiveFilter('all');renderCompoundElements();renderCompoundSlots();renderCompoundResult('ready');const q=document.getElementById('dppteCompoundSearch');if(q){q.value='';setTimeout(()=>q.focus({preventScroll:true}),100)}}
    function closeCompoundBuilder(){const o=document.getElementById('dppteCompoundOverlay');if(!o)return;o.classList.remove('is-open');o.setAttribute('aria-hidden','true');document.body.style.overflow=''}
    function setActiveFilter(cat){document.querySelectorAll('.dppte-compound-filters button').forEach(b=>b.classList.toggle('is-active',b.dataset.filter===cat))}
    function setCompoundCategory(cat,btn){compoundState.category=cat;setActiveFilter(cat);renderCompoundElements(document.getElementById('dppteCompoundSearch')?.value||'')}
    function renderCompoundElements(filter=''){const grid=document.getElementById('dppteCompoundElementGrid');if(!grid)return;const f=String(filter).trim().toLowerCase();let ids=f?searchOrder:commonOrder;const list=ids.map(z=>({z,e:getEl(z)})).filter(x=>x.e).filter(x=>categoryMatch(x.e,compoundState.category)).filter(x=>!f||x.e.name.toLowerCase().includes(f)||x.e.symbol.toLowerCase().includes(f)||String(x.z)===f);grid.innerHTML=list.map(({z,e})=>{const sel=compoundState.selected.some(x=>x.z===z);return `<button type="button" class="dppte-compound-element ${sel?'is-selected':''}" onclick="toggleCompoundElement(${z})" aria-pressed="${sel}"><div class="z">${z}</div><div class="sym">${e.symbol}</div><div class="nm">${e.name}</div></button>`}).join('')||'<div style="grid-column:1/-1;padding:24px;text-align:center;color:#718797;font-size:10px">No matching elements.</div>'}
    function filterCompoundElements(v){renderCompoundElements(v)}
    function clearCompoundSearch(){const q=document.getElementById('dppteCompoundSearch');if(q){q.value='';renderCompoundElements('');q.focus()}}
    function toggleCompoundElement(z){const i=compoundState.selected.findIndex(x=>x.z===z);if(i>=0){compoundState.selected.splice(i,1)}else{if(compoundState.selected.length>=4){if(typeof dppteShowNote==='function')dppteShowNote('You can select up to 4 elements.');return}const e=getEl(z);if(!e)return;compoundState.selected.push({z,symbol:e.symbol,name:e.name,qty:1})}renderCompoundElements(document.getElementById('dppteCompoundSearch')?.value||'');renderCompoundSlots();renderCompoundResult('ready')}
    function changeCompoundQty(z,v){const item=compoundState.selected.find(x=>x.z===z);if(!item)return;item.qty=Math.max(1,Math.min(8,parseInt(v)||1));renderCompoundSlots();renderCompoundResult('ready')}
    function removeCompoundElement(z){compoundState.selected=compoundState.selected.filter(x=>x.z!==z);renderCompoundElements(document.getElementById('dppteCompoundSearch')?.value||'');renderCompoundSlots();renderCompoundResult('ready')}
    function clearCompoundBuilder(){compoundState.selected=[];renderCompoundElements(document.getElementById('dppteCompoundSearch')?.value||'');renderCompoundSlots();renderCompoundResult('ready')}
    function formulaFromSelection(){return compoundState.selected.map(x=>x.symbol+(x.qty>1?`<sub>${x.qty}</sub>`:'')).join('')}
    function plainFormula(){return compoundState.selected.map(x=>x.symbol+(x.qty>1?x.qty:'')).join('')}
    function normalizedFormula(){return compoundState.selected.map(x=>({z:x.z,qty:x.qty})).sort((a,b)=>a.z-b.z).map(x=>x.z+':'+x.qty).join('|')}
    function updateCompoundFormula(){const box=document.getElementById('dppteCompoundFormula'),empty=document.getElementById('dppteCompoundEmpty');if(!box)return;if(!compoundState.selected.length){box.innerHTML='<span>—</span>';if(empty)empty.style.display='flex';return}if(empty)empty.style.display='none';box.innerHTML=`<div class="formula-text">${formulaFromSelection()}</div>`}
    function renderCompoundSlots(){const slots=document.getElementById('dppteCompoundSlots'),count=document.getElementById('dppteCompoundCount');if(!slots)return;if(count)count.textContent=compoundState.selected.length+' / 4';slots.innerHTML=compoundState.selected.map(x=>`<div class="dppte-compound-slot"><div class="dppte-compound-slot-symbol">${x.symbol}</div><div class="dppte-compound-slot-info"><strong>${x.name}</strong><small>#${x.z}</small></div><input class="dppte-compound-qty" type="number" min="1" max="8" value="${x.qty}" onchange="changeCompoundQty(${x.z},this.value)" aria-label="Quantity of ${x.name}"><button class="dppte-compound-remove" type="button" onclick="removeCompoundElement(${x.z})" aria-label="Remove ${x.name}">×</button></div>`).join('');updateCompoundFormula()}
    function renderCompoundResult(mode){const r=document.getElementById('dppteCompoundResult'),rf=document.getElementById('dppteResultFormula'),rn=document.getElementById('dppteResultName');if(!r)return;if(rf)rf.textContent='—';if(rn)rn.textContent='—';if(mode==='ready'){r.innerHTML='<span>ⓘ</span><p>Select elements and adjust quantities<br>to see the compound result here.</p>';return}}
    function buildCompound(){if(compoundState.selected.length<2){const r=document.getElementById('dppteCompoundResult');if(r)r.innerHTML='<span>⚠</span><p>Select at least two different elements to build a compound.</p>';return}const formula=normalizedFormula(),name=commonCompounds[formula],display=plainFormula();const rf=document.getElementById('dppteResultFormula'),rn=document.getElementById('dppteResultName'),r=document.getElementById('dppteCompoundResult');if(rf)rf.innerHTML=formulaFromSelection();if(rn)rn.textContent=name||'Candidate compound';if(r)r.innerHTML=name?`<span>✓</span><p><strong>${name}</strong> matches the selected element ratio.</p>`:'<span>🧪</span><p>This is a candidate formula for exploration; it is not in the app quick-reference set.</p>'}
    function loadCompoundExample(ids,qtys){compoundState.selected=ids.map((z,i)=>{const e=getEl(z);return e?{z,symbol:e.symbol,name:e.name,qty:qtys[i]||1}:null}).filter(Boolean);renderCompoundElements(document.getElementById('dppteCompoundSearch')?.value||'');renderCompoundSlots();buildCompound()}
    window.openCompoundBuilder=openCompoundBuilder;window.closeCompoundBuilder=closeCompoundBuilder;window.filterCompoundElements=filterCompoundElements;window.clearCompoundSearch=clearCompoundSearch;window.setCompoundCategory=setCompoundCategory;window.toggleCompoundElement=toggleCompoundElement;window.changeCompoundQty=changeCompoundQty;window.removeCompoundElement=removeCompoundElement;window.clearCompoundBuilder=clearCompoundBuilder;window.buildCompound=buildCompound;window.loadCompoundExample=loadCompoundExample;
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.getElementById('dppteCompoundOverlay')?.classList.contains('is-open'))closeCompoundBuilder()});
})();

(function(){
  const shellNames=['K','L','M','N','O','P','Q'];
  const shellMax=[2,8,18,32,32,18,8];
  const orbitalOrder=[[1,0],[2,0],[2,1],[3,0],[3,1],[4,0],[3,2],[4,1],[5,0],[4,2],[5,1],[6,0],[4,3],[5,2],[6,1],[7,0],[5,3],[6,2],[7,1]];
  const exceptions={24:[2,8,13,1],29:[2,8,18,1],41:[2,8,18,12,1],42:[2,8,18,13,1],44:[2,8,18,15,1],45:[2,8,18,16,1],46:[2,8,18,18],47:[2,8,18,18,1],57:[2,8,18,18,9,2],58:[2,8,18,19,9,2],64:[2,8,18,25,8,2],78:[2,8,18,32,17,1],79:[2,8,18,32,18,1],89:[2,8,18,32,18,8,3],90:[2,8,18,32,18,10,2],91:[2,8,18,32,20,9,2],92:[2,8,18,32,21,9,2]};
  let selectedZ=11;
  const $=id=>document.getElementById(id);
  function shellDistribution(z){
    if(exceptions[z]) return exceptions[z].slice();
    const shells=Array(7).fill(0); let left=z;
    const subCap={0:2,1:6,2:10,3:14};
    for(const [n,l] of orbitalOrder){ if(!left) break; const take=Math.min(left,subCap[l]); shells[n-1]+=take; left-=take; }
    return shells.map((x,i)=>Math.min(x,shellMax[i])).filter((x,i)=>x||i===0);
  }
  function escapeHtml(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
  function getElement(z){return window.DPPTE_ELEMENTS&&window.DPPTE_ELEMENTS[z] ? window.DPPTE_ELEMENTS[z] : null;}
  function renderElementButtons(filter=''){
    const grid=$('dppteBohrElements'); if(!grid)return;
    const f=filter.trim().toLowerCase();
    const ids=Object.keys(window.DPPTE_ELEMENTS||{}).map(Number).sort((a,b)=>a-b).filter(z=>{const e=getElement(z);return e&&(!f||e.name.toLowerCase().includes(f)||e.symbol.toLowerCase().includes(f)||String(z)===f)});
    grid.innerHTML=ids.length?ids.map(z=>{const e=getElement(z);return `<button type="button" class="dppte-bohr-el ${z===selectedZ?'is-selected':''}" onclick="selectBohrElement(${z})" aria-pressed="${z===selectedZ}"><div class="z">${z}</div><div class="s">${escapeHtml(e.symbol)}</div><div class="n">${escapeHtml(e.name)}</div></button>`}).join(''):'<div class="dppte-bohr-empty">No elements found.</div>';
  }
  function renderAtom(){
    const atom=$('dppteBohrAtom'); const e=getElement(selectedZ); if(!atom||!e)return;
    const shells=shellDistribution(selectedZ); const showLabels=$('dppteBohrLabels')?.checked!==false; const highlight=$('dppteBohrValence')?.checked!==false; const animate=$('dppteBohrAnimate')?.checked===true;
    const visibleShells=shells.length;
    let html='';
    for(let i=0;i<visibleShells;i++) html+=`<div class="dppte-bohr-shell s${i+1}" aria-hidden="true"></div>`;
    html+=`<div class="dppte-bohr-nucleus"><div class="sym">${escapeHtml(e.symbol)}</div><div class="name">${escapeHtml(e.name)}</div><div class="pn">${selectedZ} p · ${Math.max(0,Math.round(Number(e.mass||selectedZ))-selectedZ)} n</div></div>`;
    for(let i=0;i<visibleShells;i++){
      const count=shells[i]||0; const r=62.5+i*30;
      if(showLabels) html+=`<div class="dppte-bohr-shell-label" style="--r:${r}px">${shellNames[i]} shell · ${count}</div>`;
      for(let j=0;j<count;j++){
        const angle=(360/count)*j-90; const speed=(Math.max(2.8,9-i*0.8)).toFixed(2)+'s';
        html+=`<span class="dppte-bohr-electron ${i===visibleShells-1&&highlight?'valence':''} ${animate?'animate':''}" style="--angle:${angle}deg;--radius:${r}px;--speed:${speed}" aria-label="${shellNames[i]} shell electron"></span>`;
      }
    }
    atom.innerHTML=html;
    $('dppteBohrInfo').innerHTML=`<h3>${escapeHtml(e.name)} (${escapeHtml(e.symbol)})</h3><div class="bohr-meta">Atomic number ${selectedZ} · ${escapeHtml(e.category||'Element')}</div><div class="dppte-bohr-stats"><div class="dppte-bohr-stat"><small>Protons</small><strong>${selectedZ}</strong></div><div class="dppte-bohr-stat"><small>Electrons</small><strong>${selectedZ}</strong></div><div class="dppte-bohr-stat"><small>Neutrons*</small><strong>${Math.max(0,Math.round(Number(e.mass||selectedZ))-selectedZ)}</strong></div><div class="dppte-bohr-stat"><small>Valence</small><strong>${shells[shells.length-1]||0}</strong></div></div><div class="dppte-bohr-config"><strong>Shell configuration</strong><br>${shells.join(' · ')}</div><div class="dppte-bohr-config"><strong>Electron configuration</strong><br>${e.config||'Not available'}</div>`;
  }
  window.selectBohrElement=function(z){if(!getElement(z))return;selectedZ=Number(z);renderElementButtons($('dppteBohrSearch')?.value||'');renderAtom()};
  window.openBohrModel=function(){
    if(typeof closeDppteMenu==='function')closeDppteMenu();
    const o=$('dppteBohrOverlay'); if(!o)return; o.classList.add('is-open');o.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
    renderElementButtons();renderAtom();setTimeout(()=>{$('dppteBohrSearch')?.focus({preventScroll:true})},120);
  };
  window.closeBohrModel=function(){const o=$('dppteBohrOverlay');if(!o)return;o.classList.remove('is-open');o.setAttribute('aria-hidden','true');document.body.style.overflow=''};
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('dppteBohrOverlay')?.classList.contains('is-open'))closeBohrModel()});
  document.addEventListener('DOMContentLoaded',()=>{
    $('dppteBohrSearch')?.addEventListener('input',e=>renderElementButtons(e.target.value));
    $('dppteBohrLabels')?.addEventListener('change',renderAtom);
    $('dppteBohrAnimate')?.addEventListener('change',renderAtom);
    $('dppteBohrValence')?.addEventListener('change',renderAtom);
  });
})();
