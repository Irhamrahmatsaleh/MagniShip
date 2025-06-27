
import { Navigate } from "react-router-dom"; // WAJIB import ini!
import type { JSX } from "react";
const SupplierProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isSupplierLoggedIn = localStorage.getItem("supplier_logged_in") === "true";
  if (!isSupplierLoggedIn) {
    return <Navigate to="/login/supplier" replace />;
  }
  return children;
};

export default SupplierProtectedRoute;
