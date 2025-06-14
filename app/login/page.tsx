"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.scss";
import { GoogleButton } from "../components/GoogleButton";

export default function LoginPage(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      // Simulate an API call
      console.log("Login attempt with:", { email, password });
      router.push("/dashboard"); // Redirect to dashboard after successful login
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  const handleRegister = () => {
    router.push("/register"); // Redirect to register page
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              className={styles.input}
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              className={styles.input}
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              required
              placeholder="Enter your password"
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button
            type="submit"
            className={`${styles.button} ${styles.loginButton}`}
          >
            Log in
          </button>
        </form>
        <div className={styles.inputGroupRow}>
          <GoogleButton />
          <button
            onClick={handleRegister}
            className={`${styles.button} ${styles.registerButton}`}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
