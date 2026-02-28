import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaFileInvoice, FaUsers, FaCreditCard, FaCog } from "react-icons/fa";

function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
    { name: "Invoices", path: "/invoices", icon: <FaFileInvoice /> },
    { name: "Clients", path: "/clients", icon: <FaUsers /> },
    { name: "Payments", path: "/payments", icon: <FaCreditCard /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
  ];

  return (
    <div
      style={{
        width: 240,
        background: "#0f172a",
        color: "#fff",
        padding: 25,
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        overflowY: "auto",
      }}
    >
      <h2 style={{ marginBottom: 40 }}>Invoice SaaS</h2>

      {menu.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px 15px",
            borderRadius: 8,
            color: "#e2e8f0",
            textDecoration: "none",
            marginBottom: 8,
            background: location.pathname === item.path ? "#3b82f6" : "transparent",
          }}
        >
          <span style={{ marginRight: 10 }}>{item.icon}</span>
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;