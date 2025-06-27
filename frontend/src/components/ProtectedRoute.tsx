
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = localStorage.getItem("admin_logged_in") === "true";
  if (!isLoggedIn) {
    return <Navigate to="/login/admin" replace />;
  }
  return children;
};

export default ProtectedRoute;
