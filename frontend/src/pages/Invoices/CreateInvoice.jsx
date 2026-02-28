import { useState } from "react";
import { createInvoice } from "../../services/invoiceService";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function CreateInvoice() {
  const navigate = useNavigate();

  const [clientName, setClientName] = useState("");
  const [items, setItems] = useState([{ description: "", quantity: 1, price: 0 }]);
  const [loading, setLoading] = useState(false);

  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, price: 0 }]);
  };

  const handleItemChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const handleSubmit = async () => {
    if (!clientName.trim()) {
      alert("Please enter client name");
      return;
    }

    setLoading(true);

    const invoiceData = {
      clientName: clientName.trim(), // backend expects clientName
      items: items.map(item => ({
        description: item.description.trim(),
        quantity: Number(item.quantity),
        price: Number(item.price),
      })),
      amount: total,
      status: "Pending",
    };

    try {
      await createInvoice(invoiceData);
      alert("Invoice Created Successfully!");
      navigate("/invoices");
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Server error while saving invoice");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f6f9" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px", marginLeft: 280 }}>
        <h1 style={{ marginBottom: 25 }}>Create Invoice</h1>

        <div
          style={{
            background: "#fff",
            padding: 30,
            borderRadius: 12,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            maxWidth: 900,
          }}
        >
          {/* Client Name */}
          <div style={{ marginBottom: 25 }}>
            <label style={{ fontWeight: 600 }}>Client Name</label>
            <input
              placeholder="Enter client name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              style={{ width: "100%", padding: 12, marginTop: 8, borderRadius: 8, border: "1px solid #ddd" }}
            />
          </div>

          {/* Items */}
          <h3 style={{ marginBottom: 15 }}>Invoice Items</h3>
          {items.map((item, index) => (
            <div key={index} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 12, marginBottom: 12 }}>
              <input
                placeholder="Description"
                value={item.description}
                onChange={(e) => handleItemChange(index, "description", e.target.value)}
                style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }}
              />
              <input
                type="number"
                placeholder="Qty"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, "quantity", Number(e.target.value))}
                style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }}
              />
              <input
                type="number"
                placeholder="Price"
                value={item.price}
                onChange={(e) => handleItemChange(index, "price", Number(e.target.value))}
                style={{ padding: 10, borderRadius: 8, border: "1px solid #ddd" }}
              />
            </div>
          ))}

          <button
            onClick={addItem}
            style={{ background: "#007bff", color: "white", border: "none", padding: "10px 18px", borderRadius: 8, cursor: "pointer", marginBottom: 25 }}
          >
            ➕ Add Item
          </button>

          <div style={{ fontSize: 20, fontWeight: "bold", marginBottom: 25, textAlign: "right" }}>
            Total: ₹{total}
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              background: "green",
              color: "white",
              border: "none",
              padding: "14px 28px",
              borderRadius: 10,
              fontSize: 16,
              cursor: "pointer",
              float: "right",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Saving..." : "Save Invoice"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateInvoice;