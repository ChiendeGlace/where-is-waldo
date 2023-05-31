import { levelData } from './Dialog';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const LevelPage = ({ listToFind, setListToFind }) => {
  const [listOpen, setListOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const eventRef = useRef(null);
  const imageRef = useRef(null);
  const cordsClickX = useRef(null);
  const cordsClickY = useRef(null);
  const [scrollOffset, setScrollOffset] = useState({ x: 0, y: 0 });

  const index = useParams();
  const array = [];
  levelData[index.id - 1][0].forEach((x) => {
    array.push(x.name);
  });

  const handleDialogClick = (name) => {
    let correct = false;
    for (let i = 0; i < cordsCollection[index.id - 1].length; i++) {
      const x =
        cordsCollection[index.id - 1][i].position.x * imageRef.current.width;
      const y =
        cordsCollection[index.id - 1][i].position.y * imageRef.current.height;
      if (
        Math.abs(x - cordsClickX.current) <= 10 &&
        Math.abs(y - cordsClickY.current) <= 10 &&
        name == cordsCollection[index.id - 1][i].characterId
      ) {
        correct = true;
      }
    }
    alert(correct);
    if (correct) {
      const updatedArray = listToFind.filter((element) => element !== name);
      setListToFind(updatedArray);
    }
    setListOpen(false);
  };

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
      const imageRect = imageRef.current.getBoundingClientRect();
      cordsClickX.current = e.clientX - imageRect.left + scrollOffset.x;
      cordsClickY.current = e.clientY - imageRect.top + scrollOffset.y;
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

  const handleContainerScroll = () => {
    const container = document.getElementById('container');
    if (container) {
      setScrollOffset({ x: container.scrollLeft, y: container.scrollTop });
    }
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
    <div
      id="container"
      className="cursor-none relative"
      onScroll={handleContainerScroll}
    >
      <img
        ref={imageRef}
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
            className="bg-black bg-opacity-20 border-4 border-dashed border-black rounded-full w-20 h-20 fixed left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none cursor-none z-10"
          ></div>
          <div
            id="dot-cursor"
            className="bg-black bg-opacity-20 border-4 border-dashed border-black rounded-full w-1 h-1 fixed left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none cursor-none z-10"
          ></div>
        </>
      ) : null}
      {listOpen ? (
        <div
          id="dialog"
          className="bg-white bg-opacity-80 border-collapse rounded-sm w-min h-min fixed left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 z-1"
        >
          {listToFind.map((dataItem, i) => {
            return (
              <p
                onClick={() => handleDialogClick(dataItem)}
                className="text-black py-2 px-4 cursor-pointer"
                key={i}
              >
                {dataItem}
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

const cordsCollection = [
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

export default LevelPage;
