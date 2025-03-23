import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function ProtectedRoute() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const auth = useSelector((state) => state.auth);

  const age = useSelector((state) => state.auth.user.age);
  const location = useLocation();
  useEffect(() => {
    console.log("Auth : ", auth);
    console.log("isAuth New : ", isAuthenticated);
  }, [auth, isAuthenticated]);
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (isAuthenticated && age && location.pathname === "/") {
    return <Navigate to="/diary" replace />;
  }

  return <Outlet />;
}
