import Waldo from './waldo.svg';
import { Link } from 'react-router-dom';
import { levelData } from './Dialog';
import { useParams } from 'react-router-dom';

const Header = () => {
  const index = useParams();
  return (
    <header className="py-8 px-20p flex justify-center items-center w-full">
      {index.id != undefined ? (
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-8">
            {levelData[index.id - 1][0].map((dataItem, i) => {
              return (
                <img
                  key={i}
                  className="h-20 w-auto"
                  src={dataItem.src}
                  alt={dataItem.name}
                />
              );
            })}
          </div>
          <Link to="/">
            <button
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            >
              GO BACK
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-4">
          <img className="w-40 h-auto" src={Waldo} alt="Waldo" />
          <h1 className="text-3xl">Have you seen Waldo?</h1>
        </div>
      )}
    </header>
  );
};

export default Header;
