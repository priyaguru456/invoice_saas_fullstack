import ClientForm from "../../components/ClientForm";
import Sidebar from "../../components/Sidebar";

function AddClient() {
  const handleAdd = (client) => {
    console.log("Client added:", client);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f6f9" }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Main Card */}
        <div
          style={{
            width: "100%",
            maxWidth: "720px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            overflow: "hidden",
          }}
        >
          
          {/* Gradient Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #4f46e5, #6366f1)",
              color: "white",
              padding: "30px",
              textAlign: "center",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "28px", fontWeight: 700 }}>
              ➕ Add New Client
            </h1>

            <p style={{ marginTop: "8px", opacity: 0.9 }}>
              Save client details for invoices & billing
            </p>
          </div>

          {/* Content */}
          <div style={{ padding: "40px" }}>
            
            {/* Client Form */}
            <ClientForm onSubmit={handleAdd} />

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: "#eee",
                margin: "30px 0",
              }}
            />

            {/* Footer Note */}
            <p
              style={{
                textAlign: "center",
                color: "#888",
                fontSize: "14px",
              }}
            >
              Clients will be available when creating invoices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddClient;