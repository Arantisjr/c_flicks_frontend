'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import '../styles/LoginForm.scss';

const LoginForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://c-flicks.onrender.com/users/sign_up', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
      if (res.ok) {
        // Handle successful sign up (e.g., redirect to dashboard)
      } else {
        // Handle error (e.g., show error message)
      }
    } catch (error) {
      // Handle network error
    }
  };

  return (
    <div className="form_container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} method="post">
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          type="text"
          id="lastName" 
          name="lastName"
          placeholder="Last Name"
          required
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Link href='/homepage'>
        <button type="submit">Create an account</button>
        </Link>
      </form>
      <p>Already have an account? <Link href="/signup">Sign in</Link></p>
    </div>
  );
};

export default LoginForm;