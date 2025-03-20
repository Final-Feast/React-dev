import { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/index'));
const RegisterPage = lazy(() => import('../pages/RegistrationPage/index'));
const DiaryPage = lazy(() => import('../pages/DiaryPage/DiaryPage'));
const ProductPage = lazy(() => import('../pages/ProductPage/ProductPage'));
const CalculatorPage = lazy(() => import('../pages/CalculatorPage/CalculatorPage'));



export default function AppRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/diary" element={<DiaryPage />} />
                <Route path="/add-product" element={<ProductPage />} />
                <Route path="/calculator" element={<CalculatorPage />} />

            </Routes>
        </Suspense>
    );
}



// import ProtectedRoute from "../components/ProtectedRoute"; // Yeni eklenen bileşen

// export default function AppRoutes() {
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="/register" element={<RegisterPage />} />
                
//                 {/* Korumalı sayfalar */}
//                 <Route path="/diary" element={<ProtectedRoute element={<DiaryPage />} />} />
//                 <Route path="/add-product" element={<ProtectedRoute element={<ProductPage />} />} />
//                 <Route path="/calculator" element={<ProtectedRoute element={<CalculatorPage />} />} />
//             </Routes>
//         </Suspense>
//     );
// }
