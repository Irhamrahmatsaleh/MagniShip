
import { Navigate } from "react-router-dom";
import type { JSX } from "react";
const CustomerProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isCustomerLoggedIn = localStorage.getItem("customer_logged_in") === "true";
  if (!isCustomerLoggedIn) {
    return <Navigate to="/login/customer" replace />;
  }
  return children;
};

export default CustomerProtectedRoute;
