// src/components/Card.jsx
import React from "react";

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

export default Card;