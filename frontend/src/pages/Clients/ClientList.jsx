import { useEffect, useState } from "react";
import ClientForm from "../../components/ClientForm";
import Sidebar from "../../components/Sidebar";
import { createClient, getClients } from "../../services/clientService";

function ClientList() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 LOAD CLIENTS FROM DATABASE
  useEffect(() => {
    const loadClients = async () => {
      try {
        const data = await getClients();
        setClients(data);
      } catch (err) {
        console.error("Error loading clients:", err);
      } finally {
        setLoading(false);
      }
    };

    loadClients();
  }, []);

  // 🔥 ADD CLIENT (SAVE TO DB)
  const addClient = async (client) => {
    try {
      const savedClient = await createClient(client);
      setClients([...clients, savedClient]);
    } catch (err) {
      alert("Failed to save client");
      console.error(err);
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f6f9" }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px", marginLeft: 280 }}>
        
        {/* Page Title */}
        <h1 style={{ marginBottom: 25 }}>Client Management</h1>

        {/* MAIN DASHBOARD CARD */}
        <div
          style={{
            background: "#fff",
            padding: 30,
            borderRadius: 12,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            maxWidth: 900,
          }}
        >
          
          {/* ======= UPDATED ADD CLIENT SECTION ======= */}
          <div
            style={{
              background: "linear-gradient(135deg, #f8fafc, #eef2ff)",
              padding: 25,
              borderRadius: 14,
              marginBottom: 20,
              border: "1px solid #e5e7eb",
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: 18 }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                ➕ Add New Client
              </h3>

              <p
                style={{
                  margin: "6px 0 0",
                  color: "#6b7280",
                  fontSize: 14,
                }}
              >
                Save client details to use in invoices
              </p>
            </div>

            {/* Form Inner Card */}
            <div
              style={{
                background: "#fff",
                padding: 22,
                borderRadius: 12,
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                border: "1px solid #eee",
              }}
            >
              <ClientForm onSubmit={addClient} />
            </div>
          </div>

          {/* Divider */}
          <hr style={{ margin: "30px 0", borderColor: "#eee" }} />

          {/* Client List */}
          <h3 style={{ marginBottom: 15 }}>Client List</h3>

          {loading ? (
            <p>Loading clients...</p>
          ) : clients.length === 0 ? (
            <div
              style={{
                padding: 20,
                textAlign: "center",
                color: "#888",
                background: "#fafafa",
                borderRadius: 8,
              }}
            >
              No clients added yet
            </div>
          ) : (
            <div style={{ display: "grid", gap: 12 }}>
              {clients.map((c) => (
                <div
                  key={c._id}
                  style={{
                    background: "#fafafa",
                    padding: 18,
                    borderRadius: 10,
                    border: "1px solid #eee",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <strong style={{ fontSize: 16 }}>{c.name}</strong>
                    <p style={{ margin: "4px 0", color: "#666" }}>
                      {c.email}
                    </p>
                  </div>

                  <span
                    style={{
                      background: "#e9f5ff",
                      color: "#007bff",
                      padding: "6px 14px",
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    Client
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClientList;