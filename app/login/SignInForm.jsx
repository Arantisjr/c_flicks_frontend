'use client'

import React, { useState } from 'react';
import '../styles/SignInForm.scss';
import Link from 'next/link';

const SignInForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
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
             if (res.ok) {
                 const data = await res.json(); // assuming your API returns user info
                 localStorage.setItem('username', data.username || name); // fallback to input if needed
                 window.location.href = '/dashboard';
}
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
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>Don't have an account? <Link href="/signup">Sign up</Link></p>
    </div>
  );
};

export default SignInForm;