'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import '../styles/LoginForm.scss';

const LoginForm = () => {
  const [UserName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://c-flicks.onrender.com/users/sign_up', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username:UserName, email, password }),
      });
      if (res.ok) {
        alert('Signup successful!');
        window.location.href = '/homepage'; 
      } else {
        const errorData = await res.json();
        console.error('Signup error:', errorData);
        alert(errorData);
      }
    } catch (error) {
      // Handle network error
      console.error('Network error:', error); 
    }
  };

  return (
    <div className="form_container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} method="post">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
          value={UserName}
          onChange={e => setUserName(e.target.value)}
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
       
        <button type="submit">Create an account</button>
        
      </form>
      <p>Already have an account? <Link href="/login">Sign in</Link></p>
    </div>
  );
};

export default LoginForm;