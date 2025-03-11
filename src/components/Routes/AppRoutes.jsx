import { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));


export default function AppRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Suspense>
    );
}