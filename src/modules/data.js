import Waldo from './waldo-char.webp';
import Wenda from './wilma-char.webp';
import Wizzard from './magician-char.webp';
import Odlaw from './odlaw-char.webp';
import Waldo1 from './waldo1.jpg';
import Waldo2 from './waldo2.jpg';
import Waldo3 from './waldo3.jpg';
import Waldo4 from './waldo4.jpg';

export const levelData = [
  [
    [
      { name: 'Waldo', src: Waldo },
      { name: 'Odlaw', src: Odlaw },
      { name: 'Wenda', src: Wenda },
    ],
    Waldo1,
  ],
  [
    [
      { name: 'Waldo', src: Waldo },
      { name: 'Wizzard', src: Wizzard },
      { name: 'Odlaw', src: Odlaw },
      { name: 'Wenda', src: Wenda },
    ],
    Waldo2,
  ],
  [
    [
      { name: 'Waldo', src: Waldo },
      { name: 'Wizzard', src: Wizzard },
      { name: 'Odlaw', src: Odlaw },
    ],
    Waldo3,
  ],
  [
    [
      { name: 'Waldo', src: Waldo },
      { name: 'Wizzard', src: Wizzard },
      { name: 'Odlaw', src: Odlaw },
      { name: 'Wenda', src: Wenda },
    ],
    Waldo4,
  ],
];

export const cordsCollection = [
  [
    { characterId: 'Waldo', position: { x: 0.89, y: 0.665 } },
    { characterId: 'Odlaw', position: { x: 0.66, y: 0.56 } },
    { characterId: 'Wenda', position: { x: 0.13, y: 0.83 } },
  ],
  [
    { characterId: 'Waldo', position: { x: 0.405, y: 0.63 } },
    { characterId: 'Wizzard', position: { x: 0.78, y: 0.58 } },
    { characterId: 'Odlaw', position: { x: 0.07, y: 0.69 } },
    { characterId: 'Wenda', position: { x: 0.297, y: 0.525 } },
  ],
  [
    { characterId: 'Waldo', position: { x: 0.28, y: 0.349 } },
    { characterId: 'Wizzard', position: { x: 0.61, y: 0.87 } },
    { characterId: 'Odlaw', position: { x: 0.6, y: 0.665 } },
  ],
  [
    { characterId: 'Waldo', position: { x: 0.855, y: 0.74 } },
    { characterId: 'Wizzard', position: { x: 0.07, y: 0.76 } },
    { characterId: 'Odlaw', position: { x: 0.32, y: 0.64 } },
    { characterId: 'Wenda', position: { x: 0.49, y: 0.42 } },
  ],
];