import '../styles/DashboardUI.scss';

const DashboardUI = ({ username }) => {
  // Example static data; replace with real data from your backend
  const watchlist = [
    { id: 1, title: "Inception", thumbnail: "/images/inception.jpg" },
    { id: 2, title: "Interstellar", thumbnail: "/images/interstellar.jpg" },
      { id: 1, title: "Inception", thumbnail: "/images/inception.jpg" },
    { id: 2, title: "Interstellar", thumbnail: "/images/interstellar.jpg" },
      { id: 1, title: "Inception", thumbnail: "/images/inception.jpg" },
    { id: 2, title: "Interstellar", thumbnail: "/images/interstellar.jpg" },
  ];
  const recentlyWatched = [
    { id: 3, title: "The Matrix", thumbnail: "/images/matrix.jpg" },
    { id: 4, title: "Avatar", thumbnail: "/images/avatar.jpg" },
    { id: 1, title: "Inception", thumbnail: "/images/inception.jpg" },
    { id: 2, title: "Interstellar", thumbnail: "/images/interstellar.jpg" },
  ];
  const recommended = [
    { id: 5, title: "Tenet", thumbnail: "/images/tenet.jpg" },
    { id: 6, title: "Arrival", thumbnail: "/images/arrival.jpg" },
      { id: 1, title: "Inception", thumbnail: "/images/inception.jpg" },
    { id: 2, title: "Interstellar", thumbnail: "/images/interstellar.jpg" },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {username}!</h1>
        <p>Enjoy the best Cameroonian movies.</p>
      </div>

      <div className="dashboard-widgets">
        <div className="dashboard-widget">
          <h2>My Watchlist</h2>
          <div className="dashboard-movie-list">
            {watchlist.map(movie => (
              <div className="dashboard-movie-card" key={movie.id}>
                <img src={movie.thumbnail} alt={movie.title} />
                <span>{movie.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-widget">
          <h2>Recently Watched</h2>
          <div className="dashboard-movie-list">
            {recentlyWatched.map(movie => (
              <div className="dashboard-movie-card" key={movie.id}>
                <img src={movie.thumbnail} alt={movie.title} />
                <span>{movie.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-widget">
          <h2>Recommended for You</h2>
          <div className="dashboard-movie-list">
            {recommended.map(movie => (
              <div className="dashboard-movie-card" key={movie.id}>
                <img src={movie.thumbnail} alt={movie.title} />
                <span>{movie.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUI;