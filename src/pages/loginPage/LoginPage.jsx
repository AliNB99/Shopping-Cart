import React, { useState } from "react";
import api from "../../services/config";

import styles from "./LoginPage.module.css";
import { useCookie } from "../../hooks/useCookie";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

function LoginPage() {
  const [form, setForm] = useState({
    username: "mor_2314",
    password: "83r5^_",
  });
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const postData = async () => {
      try {
        const res = await api.post("/auth/login", {
          username: "mor_2314",
          password: "83r5^_",
        });
        useCookie(res.token);
        navigate("/products")
        toast.success("Your login was successful");
      } catch (error) {
        toast.error(error.message);
      }
    };
    postData();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Enter User Name"
          value={form.username}
          onChange={(e) => setForm(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={(e) => setForm(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
