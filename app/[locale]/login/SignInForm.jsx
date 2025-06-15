'use client'

import React, { useState } from 'react'; 
import '../styles/SignInForm.scss';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useTranslations } from "next-intl";

const SignInForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const t = useTranslations("sign_in_form");

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
        // Store session info in localStorage
        localStorage.setItem('username', data.username || name);
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = '/dashboard';
      } else {
        setError(t("error1") || 'Invalid name or password');
      }
    } catch (err) {
      setError(t("error2") || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="sign_in_form">
      <h2>{t("login")}</h2>
      <form onSubmit={handleSubmit} method="post">
        <input
          type="text"
          name="username"
          placeholder={t("username")}
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder={t("password")}
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
        <button type="submit">{t("login")}</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>{t("no_account")} <Link className='sign_up' href="/signup">{t("sign_up")}</Link></p>
    </div>
  );
};

export default SignInForm;