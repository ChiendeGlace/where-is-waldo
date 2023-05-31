import { levelData } from './data';
import { cordsCollection } from './data';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const LevelPage = ({ listToFind, setListToFind, setGameFinished }) => {
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

  useEffect(() => {
    if (listToFind.length === 0) {
      setGameFinished(true);
    }
  }, [listToFind, setGameFinished]);

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

export default LevelPage;
