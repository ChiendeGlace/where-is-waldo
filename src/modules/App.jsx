import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Homepage from './Homepage';
import ScrollToTop from './ScrollToTop';
import Dialog from './Dialog';
import LevelPage from './LevelPage';

function App() {
  const [dialogOpen, setDialogOpen] = useState([]);
  return (
    <>
      {dialogOpen.length > 0 ? (
        <>
          <div className="opacity-20 pointer-events-none">
            <ScrollToTop />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Homepage setDialogOpen={setDialogOpen} />
                  </>
                }
              />
              <Route
                path="/level/:id"
                element={
                  <>
                    <Header />
                    <LevelPage />
                  </>
                }
              />
            </Routes>
          </div>
          <Dialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
        </>
      ) : (
        <div>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Homepage setDialogOpen={setDialogOpen} />
                </>
              }
            />
            <Route
              path="/level/:id"
              element={
                <>
                  <Header />
                  <LevelPage />
                </>
              }
            />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;