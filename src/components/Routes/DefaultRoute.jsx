import React from "react";
import { Outlet ,Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function DefaultRoute() {
  const {isAuthenticated, user} = useSelector((state) => state.auth);
  const location = useLocation();

  if(isAuthenticated && user.age && location.pathname === "/"){
    return <Navigate to="/diary" replace/>
  }

  return isAuthenticated ? <Navigate to="/diary" replace/> : <Outlet/>
}
