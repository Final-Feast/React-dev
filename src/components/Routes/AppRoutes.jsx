import { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/index'));
const RegisterPage = lazy(() => import('../pages/RegistrationPage/index'));
const DiaryPage = lazy(() => import('../pages/DiaryPage/DiaryPage'));
const DiaryAddProductForm = lazy(() => import('../DiaryForm/DiaryForm'));


export default function AppRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/diary" element={<DiaryPage />} />
                <Route path="/diary/products" element={<DiaryAddProductForm />} />
            </Routes>
        </Suspense>
    );
}