function InvoiceCard({ invoice }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h4>{invoice.clientName}</h4>
      <p>Amount: ₹{invoice.amount}</p>
      <p>Status: {invoice.status || "Pending"}</p>
    </div>
  );
}

export default InvoiceCard;