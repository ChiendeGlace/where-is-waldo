const LevelCard = ({ name, src, setDialogOpen }) => {
  return (
    <div className="flex flex-col cursor-pointer">
      <img src={src} alt="Waldo finding game" />
      <div className="flex justify-between py-4 border border-gray-100 border-t-0 px-4">
        <h3>{name}</h3>
        <button
          onClick={() => setDialogOpen([{ name, src }])}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
        >
          INSPECT
        </button>
      </div>
    </div>
  );
};

export default LevelCard;
