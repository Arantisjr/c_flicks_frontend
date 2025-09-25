'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/LoginForm.scss';
import { useTranslations } from "next-intl";
import Cookies from 'js-cookie';

const LoginForm = () => {
  const [UserName, setUserName] = useState('');
  const searchParams = useSearchParams();
  const emailFromQuery = searchParams.get('email') || '';
  const [email, setEmail] = useState(emailFromQuery);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setEmail(emailFromQuery);
    // Redirect to homepage if already signed in (cookie exists)
    if (Cookies.get('isLoggedIn')) {
      window.location.href = '/homepage';
    }
  }, [emailFromQuery]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://c-flicks-backend.onrender.com/users/sign_up', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: UserName, email, password }),
      });
      if (res.ok) {
        // Set cookies to remember the user is signed in
        Cookies.set('isLoggedIn', 'true', { expires: 7 }); // expires in 7 days
        Cookies.set('username', UserName, { expires: 7 });
        alert('Signup successful!');
        window.location.href = '/homepage'; 
      } else {
        const errorData = await res.json();
        console.error('Signup error:', errorData);
        alert(errorData.message || JSON.stringify(errorData));
      }
    } catch (error) {
      console.error('Network error:', error); 
      alert('Network error');
    }
  };

  const t = useTranslations("sign_up_form");
  return (
    <div className="form_container">
      <h1>{t("sign_up")}</h1>
      <form onSubmit={handleSubmit} method="post">
        <input
          type="text"
          id="username"
          name="username"
          placeholder={t("username")}
          required
          value={UserName}
          onChange={e => setUserName(e.target.value)}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder={t("email")}
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <div className='password-field' style={{ position: 'relative' }}>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder={t("password")}
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ paddingRight: "2.5rem" }}
          />
          <span
            className='eye-icon'
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
        <button type="submit" >{t("create_account")}</button>
      </form>
      <p>{t("have_account")} <Link href="/login">{t("login")}</Link></p>
    </div>
  );
};

export default LoginForm;