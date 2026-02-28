import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const [modal, setModal] = useState(""); // "privacy", "terms", "contact"
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("User not found. Please register first.");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  // Modal content based on clicked link
  const getModalContent = () => {
    switch (modal) {
      case "privacy":
        return (
          <>
            <h2>Privacy Policy</h2>
            <p>
              We respect your privacy. Your personal data is encrypted and securely stored. 
              We do not share your information without consent.
            </p>
          </>
        );
      case "terms":
        return (
          <>
            <h2>Terms & Conditions</h2>
            <p>
              By using Invoice SaaS, you agree to our terms. Unauthorized use is prohibited.
            </p>
          </>
        );
      case "contact":
        return (
          <>
            <h2>Contact Us</h2>
            <p>Email: support@invoicesaas.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: 123 Invoice Street, Bhubaneswar, India</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #3b82f6, #9333ea)",
        color: "#f9fafb",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          background: "#ffffff",
          color: "#111827",
          padding: "40px 30px",
          borderRadius: 16,
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: 20, color: "#3b82f6" }}>Invoice SaaS Login</h2>

        {error && (
          <p
            style={{
              color: "#ef4444",
              background: "#fee2e2",
              padding: "10px",
              borderRadius: 8,
            }}
          >
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} style={{ marginTop: 20 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              borderRadius: 10,
              border: "1px solid #d1d5db",
              outline: "none",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              borderRadius: 10,
              border: "1px solid #d1d5db",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: 10,
              borderRadius: 10,
              border: "none",
              background: "#3b82f6",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#2563eb")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#3b82f6")}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: 20, fontSize: 14 }}>
          Don't have an account? <Link to="/register" style={{ color: "#9333ea" }}>Register first</Link>
        </p>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "40px",
          width: "100%",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          textAlign: "center",
          color: "#f1f5f9",
        }}
      >
        <span style={{ fontWeight: 600 }}>Invoice SaaS</span>
        <p style={{ fontSize: 14, margin: 0 }}>
          Build and manage invoices effortlessly. Secure, fast, and easy to use.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          <span style={footerLink} onClick={() => setModal("privacy")}>Privacy</span>
          <span style={footerLink} onClick={() => setModal("terms")}>Terms</span>
          <span style={footerLink} onClick={() => setModal("contact")}>Contact</span>
        </div>
        <span style={{ fontSize: 12 }}>© {new Date().getFullYear()} Invoice SaaS. All rights reserved.</span>
      </footer>

      {/* Modal */}
      {modal && (
        <div
          onClick={() => setModal("")}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 50,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              color: "#111827",
              padding: 30,
              borderRadius: 12,
              maxWidth: 500,
              width: "90%",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            }}
          >
            <button
              onClick={() => setModal("")}
              style={{
                float: "right",
                background: "transparent",
                border: "none",
                fontSize: 18,
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              ✖
            </button>
            <div style={{ marginTop: 20 }}>{modal && getModalContent()}</div>
          </div>
        </div>
      )}
    </div>
  );
};

const footerLink = {
  color: "#3b82f6",
  textDecoration: "underline",
  fontSize: 14,
  cursor: "pointer",
};

export default Login;