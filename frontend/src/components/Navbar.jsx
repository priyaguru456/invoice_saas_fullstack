import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      style={{
        height: 70,
        background: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        flexShrink: 0,
      }}
    >
      <h3>Dashboard</h3>

      <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#3b82f6",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          P
        </div>

        <button
          onClick={logout}
          style={{
            padding: "8px 16px",
            background: "#ef4444",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;