import React from "react";
import { Outlet ,Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DefaultRoute() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet/>
}
