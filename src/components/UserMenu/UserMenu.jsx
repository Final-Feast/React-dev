import { logoutUser } from "../../redux/auth/authActions";
import style from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const userName = useSelector((state) => state.auth.user.name);

  return (
    <div className={style.userMenu}>
      <div className={style.userContainer}>
        <button className={style.button}>{userName}</button>
        <button onClick={handleLogOut} className={style.button}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
