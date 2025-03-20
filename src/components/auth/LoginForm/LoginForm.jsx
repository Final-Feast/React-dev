import style from './LoginForm.module.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/auth/authActions";

export default function LoginForm() {
  const navigate = useNavigate();


  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

    return (
      <div className={style.container}>
          
          <h2 className={style.title}>    LOG IN    </h2>

          <form className={style.form} onSubmit={handleSubmit}>
              <label className={style.label}>
                  <input 
                  value={email} 
                  type="text" 
                  name="email" 
                  placeholder="Email*"
                  className={style.input}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  />
              </label>
              <label className={style.label}>
                  <input 
                  value={password}
                  type="password" 
                  name="password" 
                  placeholder="Password*"
                  className={style.input}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  />
              </label>
              <div className={style.buttonContainer}>
                <button type="submit" className={style.loginButton}>
                    Log in
                </button>
                <button type="button" className={style.registerButton} onClick={() => navigate("/register")}>
                    Register
                </button>
              </div>
              
          </form>
      </div>
    );
  }
  