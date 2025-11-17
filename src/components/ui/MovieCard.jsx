

const MovieCard = ({ moviePoster, movieName }) => {
  return (
    <div className="w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
      <div className="h-48 bg-gray-700 rounded-xl">
        <img
          className="h-full w-full object-cover"
          src={moviePoster}
          alt={movieName}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold">{movieName}</span>
          </div>
        </div>
        <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">
          View movie
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
