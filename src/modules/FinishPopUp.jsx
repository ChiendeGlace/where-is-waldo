import { Link } from 'react-router-dom';

const FinishPopUp = ({ setGameFinished }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center border border-gray-100 w-4/6 h-max bg-white px-4 py-4">
      <label>Save your score to the leaderboard</label>
      <input type="text" />
      <div>
        <button>SAVE</button>
        <Link to="/">
          <button onClick={() => setGameFinished(false)}>CANCEL</button>
        </Link>
      </div>
    </div>
  );
};

export default FinishPopUp;
