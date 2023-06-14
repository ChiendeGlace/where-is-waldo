import Waldo from './waldo.svg';
import { Link } from 'react-router-dom';
import { levelData } from './data';
import { useParams } from 'react-router-dom';
import Timer from './Timer';
import { useState, useEffect, useRef } from 'react';

export let level;

const Header = ({ listToFind, gameFinished, setScore }) => {
  const [isRunning, setIsRunning] = useState(false);
  const index = useParams();

  useEffect(() => {
    if (index.id !== undefined) {
      setIsRunning(true);
      level = index.id;
    }
  }, [index]);

  useEffect(() => {
    if (gameFinished) {
      setIsRunning(false);
    }
  }, [gameFinished]);

  return (
    <header className="py-8 px-20p flex justify-center items-center w-full">
      {index.id != undefined ? (
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-8">
            {levelData[index.id - 1][0].map((dataItem, i) => {
              return (
                <div key={i}>
                  {listToFind.includes(dataItem.name) ? (
                    <div className="relative">
                      <img
                        className="h-20 w-auto"
                        src={dataItem.src}
                        alt={dataItem.name}
                      />
                      <div className="absolute bottom-0 left-0 bg-white ">
                        <p>{dataItem.name}</p>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <Timer isRunning={isRunning} setScore={setScore} />
          <Link to="/">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
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
