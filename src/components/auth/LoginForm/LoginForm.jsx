import style from './LoginForm.module.css';
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

    return (
      <div className={style.container}>
          
          <h2 className={style.title}>    LOG IN    </h2>

          <form className={style.form}>
              <label className={style.label}>
                  <input 
                  type="text" 
                  name="email" 
                  placeholder="Email*"
                  className={style.input}
                  required
                  />
              </label>
              <label className={style.label}>
                  <input 
                  type="password" 
                  name="password" 
                  placeholder="Password*"
                  className={style.input}
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
  