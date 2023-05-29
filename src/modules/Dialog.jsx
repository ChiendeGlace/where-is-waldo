import Waldo from './waldo-char.webp';
import Wenda from './wilma-char.webp';
import Wizzard from './magician-char.webp';
import Odlaw from './odlaw-char.webp';
import Waldo1 from './waldo1.jpg';
import Waldo2 from './waldo2.jpg';
import Waldo3 from './waldo3.jpg';
import Waldo4 from './waldo4.jpg';
import { Link } from 'react-router-dom';
export const levelData = [
  [
    [
      { name: 'Waldo', src: Waldo },
      { name: 'Wizzard', src: Wizzard },
      { name: 'Wenda', src: Wenda },
    ],
    Waldo1,
  ],
  [
    [
      { name: 'Waldo', src: Waldo },
      { name: 'Wizzard', src: Wizzard },
      { name: 'Odlaw', src: Odlaw },
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
    ],
    Waldo4,
  ],
];

const Dialog = ({ dialogOpen, setDialogOpen }) => {
  const levelName = dialogOpen[0].name;
  const index = levelName.split(' ')[1] - 1;
  const path = 'level' + '/' + (index + 1);
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center border border-gray-100 w-4/6 bg-white px-4 py-4">
      <img className="w-3/5" src={dialogOpen[0].src} alt="Where's waldo game" />
      <div className="w-2/5 flex flex-col px-16 gap-8 ">
        <h2 className="text-2xl">{dialogOpen[0].name}</h2>
        <div>
          {levelData[index][0].map((dataItem, i) => {
            return (
              <div className="flex items-center gap-8" key={i}>
                <p>{dataItem.name}</p>
                <img
                  className="h-20 w-auto"
                  src={dataItem.src}
                  alt={dataItem.name}
                />
              </div>
            );
          })}
        </div>
        <div className="flex gap-4">
          <Link to={path}>
            <button
              onClick={() => setDialogOpen([])}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            >
              START
            </button>
          </Link>
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            onClick={() => setDialogOpen([])}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
