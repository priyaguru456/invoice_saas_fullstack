import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* NAVBAR */}
      <nav style={navStyle}>
        <h2 style={{ color: "#4f46e5", fontWeight: "700" }}>InvoicePro</h2>
        <div style={{ display: "flex", gap: 20 }}>
          <Link to="/login" style={navLink}>
            Login
          </Link>
          <Link to="/register" style={navBtn}>
            Get Started
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={heroSection}>
        <h1 style={heroTitle}>
          Smart Invoicing for <br /> Modern Businesses 🚀
        </h1>
        <p style={heroText}>
          Create professional invoices, manage clients, and track payments — all
          in one powerful platform.
        </p>

        <div style={{ marginTop: 30 }}>
          <Link to="/register" style={primaryBtn}>
            Start Free Trial
          </Link>
          <Link to="/login" style={secondaryBtn}>
            Login
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section style={statsSection}>
        <Stat number="10K+" label="Invoices Generated" />
        <Stat number="5K+" label="Active Users" />
        <Stat number="99.9%" label="Uptime" />
      </section>

      {/* FEATURES */}
      <section style={featureSection}>
        <h2 style={sectionTitle}>Powerful Features</h2>

        <div style={featureGrid}>
          <FeatureCard
            title="⚡ Instant Invoice Creation"
            text="Generate professional invoices in seconds with automated tax calculations."
          />
          <FeatureCard
            title="👥 Client Management"
            text="Store and manage unlimited clients with ease."
          />
          <FeatureCard
            title="📊 Smart Analytics"
            text="Track revenue, pending payments and business growth."
          />
          <FeatureCard
            title="🔒 Secure Authentication"
            text="Protected with JWT-based secure login system."
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={ctaSection}>
        <h2>Ready to Simplify Your Invoicing?</h2>
        <p>Join thousands of businesses already using InvoicePro.</p>
        <Link to="/register" style={primaryBtn}>
          Create Free Account
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={footerStyle}>
        <h3>InvoicePro</h3>
        <p>Professional invoicing made simple.</p>
        <div style={{ marginTop: 10 }}>
          <Link to="/login" style={footerLink}>
            Login
          </Link>{" "}
          |{" "}
          <Link to="/register" style={footerLink}>
            Register
          </Link>
        </div>
        <p style={{ marginTop: 10 }}>
          © {new Date().getFullYear()} InvoicePro. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

/* COMPONENTS */

const FeatureCard = ({ title, text }) => (
  <div style={cardStyle}>
    <h3>{title}</h3>
    <p style={{ marginTop: 10, color: "#6b7280" }}>{text}</p>
  </div>
);

const Stat = ({ number, label }) => (
  <div style={{ textAlign: "center" }}>
    <h2 style={{ color: "#4f46e5" }}>{number}</h2>
    <p style={{ color: "#6b7280" }}>{label}</p>
  </div>
);

/* STYLES */

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 60px",
  background: "#ffffff",
  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const navLink = {
  textDecoration: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  fontWeight: "600",
  border: "2px solid #4f46e5",
  color: "#4f46e5",
  transition: "all 0.3s ease",
};

const navBtn = {
  textDecoration: "none",
  padding: "10px 22px",
  borderRadius: "8px",
  fontWeight: "600",
  background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
  color: "#ffffff",
  boxShadow: "0 6px 18px rgba(79,70,229,0.3)",
  transition: "all 0.3s ease",
};

const heroSection = {
  padding: "120px 20px",
  textAlign: "center",
  background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
  color: "#fff",
};

const heroTitle = {
  fontSize: "48px",
  fontWeight: 700,
};

const heroText = {
  marginTop: 20,
  fontSize: 18,
  maxWidth: 600,
  marginLeft: "auto",
  marginRight: "auto",
  color: "#e5e7eb",
};

const primaryBtn = {
  textDecoration: "none",
  background: "#fff",
  color: "#4f46e5",
  padding: "12px 24px",
  borderRadius: 10,
  fontWeight: 600,
  marginRight: 15,
};

const secondaryBtn = {
  textDecoration: "none",
  border: "2px solid #fff",
  color: "#fff",
  padding: "12px 24px",
  borderRadius: 10,
  fontWeight: 600,
};

const statsSection = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "60px",
  padding: "90px 20px",
  background: "linear-gradient(to right, #f9fafb, #eef2ff)",
  flexWrap: "wrap",
};

const featureSection = {
  padding: "120px 20px",
  textAlign: "center",
  background: `
    radial-gradient(circle at top left, #e0e7ff 0%, transparent 40%),
    radial-gradient(circle at bottom right, #f3e8ff 0%, transparent 40%),
    linear-gradient(to bottom, #ffffff, #f3f4f6)
  `,
};

const sectionTitle = {
  fontSize: "38px",
  fontWeight: "700",
  marginBottom: "60px",
  color: "#111827",
};

const featureGrid = {
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
  gap: "40px",
  flexWrap: "wrap",
};

const cardStyle = {
  background: "#ffffff",
  padding: "40px 30px",
  borderRadius: "18px",
  width: "280px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
  transition: "all 0.35s ease, transform 0.35s ease",
  cursor: "pointer",
  border: "1px solid #f1f5f9",
};

const ctaSection = {
  padding: "100px 20px",
  textAlign: "center",
  background: `
    linear-gradient(135deg, #4f46e5, #9333ea),
    radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 70%),
    radial-gradient(circle at bottom right, rgba(255,255,255,0.05), transparent 70%)
  `,
  color: "#fff",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
};

const footerStyle = {
  background: "linear-gradient(135deg, #0f172a, #1e293b)",
  color: "#fff",
  textAlign: "center",
  padding: "50px 20px",
  borderTop: "1px solid #334155",
  boxShadow: "0 -5px 20px rgba(0,0,0,0.2)",
};

const footerLink = {
  color: "#6366f1",
  textDecoration: "none",
  margin: "0 10px",
  fontWeight: "500",
  transition: "color 0.2s, transform 0.2s",
  cursor: "pointer",
};

// Example hover effect (inline in JSX)
const footerLinkHover = {
  color: "#4f46e5",
  transform: "translateY(-2px)",
};
export default Home;
