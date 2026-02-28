import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function Card({ title, value }) {
  return (
    <div
      style={{
        flex: 1,
        background: "#fff",
        padding: 25,
        borderRadius: 12,
        boxShadow: "0 6px 15px rgba(0,0,0,0.06)",
      }}
    >
      <p style={{ color: "#64748b" }}>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}

function Dashboard() {
  // Here you could check if the user has clients or invoices
  const hasClients = false; // Example: replace with actual data check

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f1f5f9" }}>
      <Sidebar />

      {/* Content area */}
      <div
        style={{
          marginLeft: 285, // offset for sidebar
          display: "flex",
          flexDirection: "column",
          flex: 1,
          position: "relative", // needed for absolute footer
        }}
      >
        <Navbar />

        {/* Scrollable content */}
        <div
          style={{
            padding: 30,
            overflowY: "auto",
            paddingBottom: "120px", // leave space for footer
            flex: 1,
          }}
        >
          <h1 style={{ marginBottom: 25 }}>Overview</h1>

          {/* ===== Guidance Banner ===== */}
          {!hasClients && (
            <div
              style={{
                background: "#fef3c7",
                color: "#78350f",
                padding: "15px 20px",
                borderRadius: 10,
                marginBottom: 25,
                borderLeft: "5px solid #f59e0b",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <div>
                ⚠ You have no clients yet. Please create a client before
                creating invoices.
                <br />✅ Once you add clients, you can now go to Invoices and
                create an invoice.
              </div>
              <a
                href="/clients"
                style={{
                  background: "#f59e0b",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Create Client
              </a>
            </div>
          )}

          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <Card title="Total Invoices" value="24" />
            <Card title="Clients" value="12" />
            <Card title="Revenue" value="₹45,000" />
            <Card title="Pending" value="₹8,500" />
          </div>

          {/* Extra space to test scroll */}
          <div style={{ height: 800 }}></div>
        </div>

        {/* Fixed Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "80px", // fixed footer height
            background: "#1e293b",
            color: "#f1f5f9",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 30px",
            borderTop: "1px solid #334155",
            boxSizing: "border-box",
          }}
        >
          <span>© 2026 Invoice SaaS. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
