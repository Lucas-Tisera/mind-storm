"use client";
import React, { useState } from "react";
import { supabase } from "./supabaseClient";
import { GoogleButton } from "../components/GoogleButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log("data LOGIN");
    console.log(data);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Login successful!");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
      <GoogleButton />
    </div>
  );
};

export default Login;
