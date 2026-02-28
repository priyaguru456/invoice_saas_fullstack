import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generatePDF = (invoice) => {
  const doc = new jsPDF();

  // ===== Title =====
  doc.setFontSize(18);
  doc.text("INVOICE", 14, 20);

  // ===== Client Info =====
  doc.setFontSize(12);
  doc.text(`Client: ${invoice.clientName}`, 14, 35);
  doc.text(`Status: ${invoice.status || "Pending"}`, 14, 42);

  const today = new Date().toLocaleDateString();
  doc.text(`Date: ${today}`, 140, 35);

  // ===== Items Table =====
  const tableData = invoice.items.map((item) => [
    item.description,
    item.quantity,
    `₹${item.price}`,
    `₹${item.quantity * item.price}`,
  ]);

  autoTable(doc, {
    startY: 55,
    head: [["Description", "Qty", "Price", "Total"]],
    body: tableData,
  });

  // ===== Total Amount =====
  const finalY = doc.lastAutoTable.finalY + 10;

  doc.setFontSize(14);
  doc.text(`Total: ₹${invoice.amount}`, 140, finalY);

  // ===== Save PDF =====
  doc.save(`invoice_${invoice.clientName}.pdf`);
};