import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/Routes/AppRoutes";
import { useEffect, useState } from "react";
import { getUser } from "./redux/auth/authActions";
import { useDispatch } from "react-redux";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const initAuth = async () => {
      try {
        if (token) {
          await dispatch(getUser(token));
        }
      } catch (e) {
        console.error("Kimlik doğrulama hatası:", e);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, [dispatch, token]);

  return (
    <div className="App">
      {!isLoading && (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;