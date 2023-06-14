import { Route, Routes, useParams } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Homepage from './Homepage';
import ScrollToTop from './ScrollToTop';
import Dialog from './Dialog';
import LevelPage from './LevelPage';
import FinishPopUp from './FinishPopUp';
import Leaderboard from './Leaderboard';

function App() {
  const [dialogOpen, setDialogOpen] = useState([]);
  const [listToFind, setListToFind] = useState([]);
  const [gameFinished, setGameFinished] = useState(false);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [leaderboardData, setLeaderboardData] = useState({
    level1: [],
    level2: [],
    level3: [],
    level4: [],
  });

  return (
    <>
      <div
        className={
          dialogOpen.length > 0 || gameFinished || leaderboardOpen
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
                <Homepage
                  setDialogOpen={setDialogOpen}
                  setLeaderboardOpen={setLeaderboardOpen}
                />
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
      {leaderboardOpen ? (
        <Leaderboard
          leaderboardData={leaderboardData}
          setLeaderboardData={setLeaderboardData}
        />
      ) : null}
      {dialogOpen.length > 0 ? (
        <Dialog
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
        />
      ) : null}
      {gameFinished ? (
        <FinishPopUp
          setGameFinished={setGameFinished}
          score={score}
        />
      ) : null}
    </>
  );
}

export default App;
