import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Homepage from './Homepage';
import ScrollToTop from './ScrollToTop';
import Dialog from './Dialog';
import LevelPage from './LevelPage';
import FinishPopUp from './FinishPopUp';

function App() {
  const [dialogOpen, setDialogOpen] = useState([]);
  const [listToFind, setListToFind] = useState([]);
  const [gameFinished, setGameFinished] = useState(false);
  const [score, setScore] = useState(0);
  return (
    <>
      <div
        className={
          dialogOpen.length > 0 || gameFinished
            ? 'opacity-20 pointer-events-none'
            : ''
        }
      >
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  listToFind={listToFind}
                  setScore={setScore}
                  gameFinished={gameFinished}
                />
                <Homepage setDialogOpen={setDialogOpen}/>
              </>
            }
          />
          <Route
            path="/level/:id"
            element={
              <>
                <Header
                  listToFind={listToFind}
                  setScore={setScore}
                  gameFinished={gameFinished}
                />
                <LevelPage
                  listToFind={listToFind}
                  setListToFind={setListToFind}
                  setGameFinished={setGameFinished}
                />
              </>
            }
          />
        </Routes>
      </div>
      {dialogOpen.length > 0 ? (
        <Dialog
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
        />
      ) : null}
      {gameFinished ? <FinishPopUp setGameFinished={setGameFinished}/> : null}
    </>
  );
}

export default App;
