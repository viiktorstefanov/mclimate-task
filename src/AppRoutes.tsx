import React from "react";
import { Routes, Route } from "react-router-dom";

import AuthRoute from "./guards/authGuard";
import GuestRoute from "./guards/guestGuard";

import LoginPage from "./pages/LoginPage/LoginPage";
import LogoutPage from "./pages/LogoutPage/LogoutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import BuildingsPage from "./pages/BuildingsPage/BuildingsPage";
import BuildingsDetailsPage from "./pages/BuildingsDetailsPage/BuildingsDetailsPage";
import FloorsDetailsPage from "./pages/FloorsDetailsPage/FloorsDetailsPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/buildings"
        element={
          <AuthRoute>
            <BuildingsPage />
          </AuthRoute>
        }
      />

      <Route
        path="/buildings/:buildingId"
        element={
          <AuthRoute>
            <BuildingsDetailsPage />
          </AuthRoute>
        }
      />

      <Route
        path="/buildings/floors/:buildingId"
        element={
          <AuthRoute>
            <FloorsDetailsPage />
          </AuthRoute>
        }
      />

      <Route
        path="/auth/logout"
        element={
          <AuthRoute>
            <LogoutPage />
          </AuthRoute>
        }
      />

      <Route
        path="/auth/login"
        element={
          <GuestRoute>
            <LoginPage />
          </GuestRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
