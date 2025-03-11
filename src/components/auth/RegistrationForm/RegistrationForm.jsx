import style from './RegistrationForm.module.css';
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const navigate = useNavigate();

    return (
      <div className={style.container}>
          
          <h2 className={style.title}>    REGISTER    </h2>

          <form className={style.form}>
            <label className={style.label}>
                <input
                type="text"
                name="name"
                placeholder="Name*"
                className={style.input}
                required
                />
            </label>
              <label className={style.label}>
                  <input 
                  type="text" 
                  name="email" 
                  placeholder="Email*"
                  className={style.input}
                  required
                  />
              </label>
              <label>
                  <input 
                  type="password" 
                  name="password" 
                  placeholder="Password*"
                  className={style.input}
                  required
                  />
              </label>
              <div className={style.buttonContainer}>
                <button type="submit" className={style.registerButton}>
                    Register
                </button>
                <button type="button" className={style.loginButton} onClick={() => navigate("/login")}>
                    Log in
                </button>
              </div>
              
          </form>
      </div>
    );
  }
  