'use client'
import '../styles/DashboardUI.scss';
import Link from 'next/link';
import { useTranslations } from "next-intl";
import { useState, useEffect } from 'react';

const DashboardUI = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if user is logged in by looking for the session flag in localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');
    if (!isLoggedIn) {
      // If not logged in, redirect to login page
      window.location.href = '/login';
    } else {
      // If logged in, set the username for display
      setUsername(storedUsername || 'User');
    }
  }, []);

  // Example static data; replace with real data from your backend if needed
  const watchlist = [
    { id: 1, title: "Inception", thumbnail: "/images/inception.jpg" },
    { id: 2, title: "Interstellar", thumbnail: "/images/interstellar.jpg" },
    { id: 3, title: "Inception", thumbnail: "/images/inception.jpg" },
    { id: 4, title: "Interstellar", thumbnail: "/images/interstellar.jpg" },
    { id: 5, title: "Inception", thumbnail: "/images/inception.jpg" },
    { id: 6, title: "Interstellar", thumbnail: "/images/interstellar.jpg" },
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

  const t = useTranslations("Dashboard");
  const welcome_text = t.raw("welcome_text");
  const heading = t.raw("heading");

  // Logout function: clears session info and redirects to login
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = '/login';
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>{welcome_text[0]}, {username}!</h1>
        <p>{welcome_text[1]}</p>
        <button className="logout-btn" onClick={handleLogout}>
          {t("logout") || "Logout"}
        </button>
      </div>

      <div className="dashboard-widgets">
        <div className="dashboard-widget">
          <h2>{heading[0]}</h2>
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
          <h2>{heading[1]}</h2>
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
          <h2>{heading[2]}</h2>
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
      <Link href={"/homepage"} className='go_to_homepage_link'>
        <button className='go_to_homepage'>{heading[3]}</button>
      </Link>  
    </div>
  );
};

export default DashboardUI;