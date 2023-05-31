import { Link } from 'react-router-dom';
import { levelData } from './data';

const Dialog = ({ dialogOpen, setDialogOpen }) => {
  const levelName = dialogOpen[0].name;
  const index = levelName.split(' ')[1] - 1;
  const path = 'level' + '/' + (index + 1);
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center border border-gray-100 w-4/6 h-max bg-white px-4 py-4">
      <img className="w-3/5" src={dialogOpen[0].src} alt="Where's waldo game" />
      <div className="w-2/5 flex flex-col px-16 gap-16">
        <h2 className="text-2xl">{dialogOpen[0].name}</h2>
        <div className="flex gap-16">
          {levelData[index][0].map((dataItem, i) => {
            return (
              <div className="relative" key={i}>
                <img
                  className="h-20 w-auto"
                  src={dataItem.src}
                  alt={dataItem.name}
                />
                <div className="absolute bottom-0 left-0 bg-white ">
                  <p>{dataItem.name}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-4">
          <Link to={path}>
            <button
              onClick={() => {
                setDialogOpen([]);
              }}
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
