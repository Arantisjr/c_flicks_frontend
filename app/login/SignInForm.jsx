'use client'

import React, { useState } from 'react';
import '../styles/SignInForm.scss';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignInForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('https://c-flicks.onrender.com/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, password }),
      });
      if (res.ok) {
        const data = await res.json(); 
        localStorage.setItem('username', data.username || name);
        window.location.href = '/dashboard';
      } else {
        setError('Invalid name or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="sign_in_form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} method="post">
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ paddingRight: "2.5rem" }}
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            style={{
              position: "absolute",
              right: "0.75rem",
              top: "55%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#888"
            }}
            tabIndex={0}
            role="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>Don't have an account? <Link className='sign_up' href="/signup">Sign up</Link></p>
    </div>
  );
};

export default SignInForm;