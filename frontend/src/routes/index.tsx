import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminInviteCodeGenerator from "../components/AdminInviteCodeGenerator";
import AdminRegisterForm from "../components/AdminRegisterForm";
import AdminOTPForm from "../components/AdminOTPForm";
import AdminDashboard from "../pages/AdminDashboard";
import AdminLogin from "../components/AdminLogin";
import ProtectedRoute from "../components/ProtectedRoute";
import SupplierRegisterForm from "../components/SupplierRegisterForm";
import SupplierOTPForm from "../components/SupplierOTPForm";
import SupplierDashboard from "../pages/SupplierDashboard";
import SupplierProtectedRoute from "../components/SupplierProtectedRoute";
import SupplierLogin from "../components/SupplierLogin";
import CustomerRegisterForm from "../components/CustomerRegisterForm";
import CustomerOTPForm from "../components/CustomerOTPForm";
import CustomerDashboard from "../pages/CustomerDashboard";
import CustomerLogin from "../components/CustomerLogin";
import CustomerProtectedRoute from "../components/CustomerProtectedRoute";
import About from "../pages/about";
import Fitur from "../pages/Fitur";

// Baris ini mengimpor komponen routing dari react-router-dom


// Baris ini mengimpor halaman utama (homepage)

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin-invite-generator" element={<AdminInviteCodeGenerator />} />
      <Route path="/register/admin" element={<AdminRegisterForm />} />
      <Route path="/admin/otp" element={<AdminOTPForm />} />
      <Route path="/supplier/otp" element={<SupplierOTPForm />} />
      <Route path="/customer/otp" element={<CustomerOTPForm />} />
      <Route path="/tentang" element={<About />} />
      <Route path="/fitur" element={<Fitur />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/supplier/dashboard"
        element={
          <SupplierProtectedRoute>
            <SupplierDashboard />
          </SupplierProtectedRoute>
        }
      />
      <Route
        path="/customer/dashboard"
        element={
          <CustomerProtectedRoute>
            <CustomerDashboard />
          </CustomerProtectedRoute>
        }
      />


      <Route path="/login/admin" element={<AdminLogin />} />
      <Route path="login/supplier" element={<SupplierLogin />} />
      <Route path="login/customer" element={<CustomerLogin />} />
      <Route path="/register/supplier" element={<SupplierRegisterForm />} />
      <Route path="/register/customer" element={<CustomerRegisterForm />} />
      {/* Tambahkan rute lain di sini, misal: */}
      {/* <Route path="/login" element={<LoginPage />} /> */}
    </Routes>
  </BrowserRouter>
);
// Komponen ini mendefinisikan semua rute aplikasi

export default AppRoutes;
// Mengekspor komponen routes utama
