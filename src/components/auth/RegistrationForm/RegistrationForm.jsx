import style from "./RegistrationForm.module.css";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../../../redux/auth/authActions";

export default function RegistrationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData.name, formData.email, formData.password));
    navigate("/login");
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}> REGISTER </h2>

      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className={style.input}
            onChange={handleChange}
            required
          />
        </label>
        <label className={style.label}>
          <input
            type="text"
            name="email"
            placeholder="Email*"
            className={style.input}
            onChange={handleChange}
            required
          />
        </label>
        <label className={style.label}>
          <input
            type="password"
            name="password"
            placeholder="Password*"
            className={style.input}
            onChange={handleChange}
            required
          />
        </label>
        <div className={style.buttonContainer}>
          <button type="submit" className={style.registerButton}>
            Register
          </button>
          <button
            type="button"
            className={style.loginButton}
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
