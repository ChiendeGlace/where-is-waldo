import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { level } from './Header';

const FinishPopUp = ({ setGameFinished, score }) => {
  const navigate = useNavigate();

  const userName = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = userName.current.value.trim();
    if (!name) {
      alert('Please enter your nickname');
      return;
    }

    const firebaseApp = getFirestore();
    const leaderboardRef = collection(firebaseApp, `leaderboard-level${level}`);
    await addDoc(leaderboardRef, { name, score });

    // Update the specific level's data in the leaderboardData stat

    userName.current.value = '';
    setGameFinished(false);
    navigate('/');
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center border border-gray-100 w-4/6 h-max bg-white px-4 py-8 gap-8">
      <h2 className="text-2xl">
        Congrats on finishing the game in {score} seconds!
      </h2>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <label>Save your score to the leaderboard</label>
          <input
            className="border border-solid-black px-4 py-2"
            placeholder="Enter your nickname"
            type="text"
            required
            minLength={3}
            ref={userName}
          />
        </div>
        <div className="flex gap-8">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          >
            SAVE
          </button>
          <Link to="/">
            <button
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
              onClick={() => setGameFinished(false)}
            >
              CANCEL
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FinishPopUp;
