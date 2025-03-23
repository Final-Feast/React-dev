import { logoutUser } from "../../redux/auth/authActions";
import style from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";

const UserMenu = () => {
  const userName = useSelector((state) => state.auth.user.name);
  const dispatch = useDispatch();
  return (
    <div className={style.userMenu}>
      <div className={style.userContainer}>
        <button className={style.button}>{userName}</button>
        <button onClick={() => dispatch(logoutUser)} className={style.button}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
