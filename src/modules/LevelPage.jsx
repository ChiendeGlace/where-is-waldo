import { levelData } from './Dialog';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const LevelPage = ({ listToFind, setListToFind }) => {
  const [listOpen, setListOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const eventRef = useRef(null);

  const index = useParams();
  const array = [];
  levelData[index.id - 1][0].forEach((x) => {
    array.push(x.name);
  });

  useEffect(() => {
    setListToFind(array);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleClick = (e) => {
    if (listOpen) {
      setListOpen(false);
    } else {
      eventRef.current = e;
      setListOpen(true);
    }
  };

  useEffect(() => {
    if (listOpen && eventRef.current) {
      const dialog = document.getElementById('dialog');
      dialog.style.top = eventRef.current.clientY + 60 + 'px';
      dialog.style.left = eventRef.current.clientX + 50 + 'px';
    }
  }, [listOpen]);

  const handleMouseMove = (e) => {
    const circle = document.getElementById('circle-cursor');
    const dot = document.getElementById('dot-cursor');
    circle.style.top = e.clientY + 'px';
    circle.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    dot.style.left = e.clientX + 'px';
  };
  {
    levelData[index.id - 1][0].map((dataItem, i) => {
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
    });
  }
  return (
    <div className="cursor-none relative">
      <img
        onClick={(e) => handleClick(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={levelData[index.id - 1][1]}
        alt="Waldo guessing game"
      />
      {isHovered ? (
        <>
          <div
            id="circle-cursor"
            className="bg-black bg-opacity-20 border-4 border-dashed border-black rounded-full w-20 h-20 fixed left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none cursor-none"
          ></div>
          <div
            id="dot-cursor"
            className="bg-black bg-opacity-20 border-4 border-dashed border-black rounded-full w-1 h-1 fixed left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none cursor-none"
          ></div>
        </>
      ) : null}
      {listOpen ? (
        <div
          id="dialog"
          className="bg-white bg-opacity-80 border-collapse rounded-sm w-min h-min fixed left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none cursor-none"
        >
          {listToFind.map((dataItem, i) => {
            return (
              <p className="text-black py-2 px-4" key={i}>
                {dataItem}
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default LevelPage;
