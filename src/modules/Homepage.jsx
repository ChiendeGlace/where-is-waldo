import Waldo1 from './waldo1.jpg';
import Waldo2 from './waldo2.jpg';
import Waldo3 from './waldo3.jpg';
import Waldo4 from './waldo4.jpg';
import LevelCard from './LevelCard';

const Homepage = ({setDialogOpen}) => {
  return (
    <section className="px-20p flex flex-col justify-center items-center gap-16 mb-8">
      <div className="grid grid-cols-2 gap-16 w-full mx-auto">
        <LevelCard name="Level 1" src={Waldo1} setDialogOpen={setDialogOpen} />
        <LevelCard name="Level 2" src={Waldo2} setDialogOpen={setDialogOpen} />
        <LevelCard name="Level 3" src={Waldo3} setDialogOpen={setDialogOpen} />
        <LevelCard name="Level 4" src={Waldo4} setDialogOpen={setDialogOpen} />
      </div>
      <div className="flex justify-between items-center bg-gray-100 w-full p-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">See if you can beat everyone</h2>
        </div>
        <button className="text-xl bg-blue-500 text-white font-semibold py-2 px-4 rounded">
          VIEW THE LEADERBOARD
        </button>
      </div>
    </section>
  );
};

export default Homepage;
