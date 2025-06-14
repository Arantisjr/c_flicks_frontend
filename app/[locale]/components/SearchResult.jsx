const SearchResult = ({ movie, error }) => {
  if (error) return <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>;
  if (!movie) return null;
  return (
    <div className="search-result">
      <h2>{movie.movie_name}</h2>
      <img src={movie.thumbnail} alt={movie.movie_name} style={{ width: "150px" }} />
      <p>{movie.description}</p>
    </div>
  );
};

export default SearchResult;