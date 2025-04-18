import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { user } from "../../constants/user";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../state/store";
import { useDispatch } from "react-redux";
import { setUser } from "../../state/auth/authSlice";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: user.username,
    password: user.password,
    error: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    setFormData({ ...formData, error: "" });

    e.preventDefault();

    const requestData = {
      client_id: user.client_id,
      client_secret: user.client_secret,
      username: formData.username,
      password: formData.password,
    };

    try {
      const response = await login(requestData);

      if(response.auth) {
        const { auth } = response; 

        dispatch(setUser({
          accessToken: auth.access_token,
          refreshToken: auth.refresh_token,
          expiresIn: auth.expires_in,
        }));
      }
     
      navigate("/");
    } catch (error: any) {
      setFormData({ ...formData, error: error.message as string });
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
      <form className={styles.form} onSubmit={onSubmit}>
        <h2 className={styles.title}>Sign In</h2>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={onChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={onChange}
            className={styles.input}
            required
          />
        </div>

        <p className={styles.error}>{formData.error}</p>

        <button type="submit" className={styles.button}>
          sign in
        </button>
      </form>
  );
};

export default LoginForm;
