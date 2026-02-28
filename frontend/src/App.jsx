import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Auth Pages
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// Dashboard Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Analytics from "./pages/Dashboard/Analytics";

// Invoice Pages
import InvoiceList from "./pages/Invoices/InvoiceList";
import CreateInvoice from "./pages/Invoices/CreateInvoice";
import EditInvoice from "./pages/Invoices/EditInvoice";
import InvoiceView from "./pages/Invoices/InvoiceView";

// Client Pages
import ClientList from "./pages/Clients/ClientList";
import AddClient from "./pages/Clients/AddClient";

// Payment & Settings
import PaymentPage from "./pages/Payments/PaymentPage";
import Settings from "./pages/Settings/Settings";

// Protected Route Wrapper
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/analytics" 
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          } 
        />

        {/* Invoice Routes */}
        <Route 
          path="/invoices" 
          element={
            <ProtectedRoute>
              <InvoiceList />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/create-invoice" 
          element={
            <ProtectedRoute>
              <CreateInvoice />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/edit-invoice/:id" 
          element={
            <ProtectedRoute>
              <EditInvoice />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/invoice/:id" 
          element={
            <ProtectedRoute>
              <InvoiceView />
            </ProtectedRoute>
          } 
        />

        {/* Client Routes */}
        <Route 
          path="/clients" 
          element={
            <ProtectedRoute>
              <ClientList />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/add-client" 
          element={
            <ProtectedRoute>
              <AddClient />
            </ProtectedRoute>
          } 
        />

        {/* Payments & Settings */}
        <Route 
          path="/payments" 
          element={
            <ProtectedRoute>
              <PaymentPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/settings" 
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;