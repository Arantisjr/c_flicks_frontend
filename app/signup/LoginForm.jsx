'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/LoginForm.scss';

const LoginForm = () => {
  const [UserName, setUserName] = useState('');
  const searchParams = useSearchParams();
  const emailFromQuery = searchParams.get('email') || '';
  const [email, setEmail] = useState(emailFromQuery);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setEmail(emailFromQuery);
  }, [emailFromQuery]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://c-flicks.onrender.com/users/sign_up', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: UserName, email, password }),
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
        <div style={{ position: 'relative',  }}>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
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
              top: "60%",
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
        <button type="submit">Create an account</button>
      </form>
      <p>Already have an account? <Link href="/login">Sign in</Link></p>
    </div>
  );
};

export default LoginForm;