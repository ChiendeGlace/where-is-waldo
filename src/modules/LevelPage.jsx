import { levelData } from './Dialog';
import { useParams } from 'react-router-dom';

const LevelPage = () => {
  const index = useParams();
  return <img src={levelData[index.id - 1][1]} alt="Waldo guessing game" />;
};

export default LevelPage;
