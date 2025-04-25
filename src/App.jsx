import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/Routes/AppRoutes";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getUser } from "./redux/auth/authActions";
import { ToastContainer } from "react-toastify";
import { fetchProducts } from "./redux/products/productsOperation";
import Loading from "./components/Loading/Loading";
function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getUser(accessToken));
        await dispatch(fetchProducts());
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="App">
      {!isLoading ? (
        <>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
          <ToastContainer />
        </>
      ) : (
        <div style={{ height: "100vh" }}>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default App;
