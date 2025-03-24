import { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import DefaultRoute from "./DefaultRoute";
import ProtectedRoute from "./ProtectedRoute";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/index"));
const RegisterPage = lazy(() => import("../pages/RegistrationPage/index"));
const DiaryPage = lazy(() => import("../pages/DiaryPage/DiaryPage"));
const CalculatorPage = lazy(() =>
  import("../pages/CalculatorPage/CalculatorPage")
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<DefaultRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
