import LoginForm from "../../auth/LoginForm/LoginForm.jsx";
import Background from "../../Background/index.jsx";
import Nav from '../../Navigation/HomeNav.jsx';
import style from "./index.module.css";

export default function LoginPage() {
  return (
    <div  className={style.App}>
        <Background className={style.background}/>
        <Nav />
        <LoginForm />
    </div>
  );
}
