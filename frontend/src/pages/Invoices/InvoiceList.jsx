import { useEffect, useState } from "react";
import { getInvoices } from "../../services/invoiceService";
import InvoiceCard from "../../components/InvoiceCard";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";

function InvoiceList() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getInvoices();
      setInvoices(data);
    };
    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", background: "#f1f5f9" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1, marginLeft: 280, display: "flex", flexDirection: "column" }}>
        <Navbar />

        <div style={{ padding: 30 }}>
          {/* Header */}
          <div style={headerStyle}>
            <h1>Invoices</h1>

            <Link to="/create-invoice" style={createBtn}>
              + Create Invoice
            </Link>
          </div>

          {/* Invoice List */}
          {invoices.length === 0 ? (
            <div style={emptyState}>
              <h3>No invoices yet</h3>
              <p>Create your first invoice to get started 🚀</p>
            </div>
          ) : (
            <div style={gridStyle}>
              {invoices.map((inv) => (
                <InvoiceCard key={inv._id} invoice={inv} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Styles ---------- */

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 25,
};

const createBtn = {
  background: "#3b82f6",
  color: "#fff",
  padding: "10px 18px",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: "500",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: 20,
};

const emptyState = {
  background: "#fff",
  padding: 40,
  borderRadius: 12,
  textAlign: "center",
  boxShadow: "0 6px 15px rgba(0,0,0,0.05)",
};

export default InvoiceList;