import { useState } from "react";
import Sidebar from "../../components/Sidebar";

function PaymentPage() {
  const [paid, setPaid] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const invoice = {
    invoiceNumber: "INV-1024",
    clientName: "Rahul Sharma",
    amount: 2500,
    tax: 250,
  };

  const total = invoice.amount + invoice.tax;

  const handlePayment = () => {
    setPaid(true);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f6f9" }}>
      
      {/* 🔹 Sidebar */}
      <Sidebar />

      {/* 🔹 Main Content */}
      <div style={{ flex: 1, padding: "40px", marginLeft: 280 }}>
        
        {/* Page Title */}
        <h1 style={{ marginBottom: "25px" }}>Payments</h1>

        {/* Card Container */}
        <div
          style={{
            width: "100%",
            maxWidth: "750px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
            padding: "35px",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: "25px", textAlign: "center" }}>
            <h2 style={{ margin: 0, fontSize: "26px", fontWeight: "700" }}>
              💳 Payment Portal
            </h2>
            <p style={{ color: "#6b7280", marginTop: "6px" }}>
              Complete your invoice payment securely
            </p>
          </div>

          {/* Invoice Summary */}
          <div
            style={{
              background: "#f9fafb",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "25px",
              border: "1px solid #e5e7eb",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>Invoice Summary</h3>

            <p><strong>Invoice No:</strong> {invoice.invoiceNumber}</p>
            <p><strong>Client:</strong> {invoice.clientName}</p>
            <p><strong>Amount:</strong> ₹{invoice.amount}</p>
            <p><strong>Tax:</strong> ₹{invoice.tax}</p>

            <hr />

            <h3 style={{ marginTop: "10px" }}>
              Total: ₹{total}
            </h3>
          </div>

          {!paid ? (
            <>
              {/* Payment Method */}
              <div style={{ marginBottom: "20px" }}>
                <label style={{ fontWeight: "600" }}>
                  Select Payment Method
                </label>

                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "8px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                >
                  <option>UPI</option>
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                  <option>Net Banking</option>
                </select>
              </div>

              {/* Pay Button */}
              <button
                onClick={handlePayment}
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "#4f46e5",
                  color: "#fff",
                  fontSize: "16px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Pay ₹{total}
              </button>
            </>
          ) : (
            /* Payment Success & Bill */
            <div
              style={{
                background: "#ecfdf5",
                padding: "25px",
                borderRadius: "12px",
                border: "1px solid #10b981",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#065f46" }}>✅ Payment Successful!</h3>

              <p style={{ marginTop: "10px" }}>
                Your payment of <strong>₹{total}</strong> via{" "}
                <strong>{paymentMethod}</strong> has been completed.
              </p>

              <div
                style={{
                  marginTop: "20px",
                  padding: "15px",
                  background: "#fff",
                  borderRadius: "10px",
                  border: "1px solid #d1d5db",
                  textAlign: "left",
                }}
              >
                <h4>🧾 Payment Receipt</h4>
                <p><strong>Receipt No:</strong> RCPT-56789</p>
                <p><strong>Invoice:</strong> {invoice.invoiceNumber}</p>
                <p><strong>Paid To:</strong> Invoice SaaS Pvt Ltd</p>
                <p><strong>Client:</strong> {invoice.clientName}</p>
                <p><strong>Amount Paid:</strong> ₹{total}</p>
                <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
              </div>

              <button
                onClick={() => window.print()}
                style={{
                  marginTop: "20px",
                  padding: "12px 20px",
                  background: "#111827",
                  color: "#fff",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                🖨 Download / Print Bill
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;