import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";

function Settings() {
  const [editMode, setEditMode] = useState(false);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    company: "",
  });

  const [password, setPassword] = useState({
    newPass: "",
    confirm: "",
  });

  const [prefs, setPrefs] = useState({
    notifications: true,
    darkMode: false,
  });

  const [message, setMessage] = useState("");

  /* 🔥 Load profile */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("profile"));

    if (saved) setProfile(saved);
    else {
      const defaultData = {
        name: "Priya Guru",
        email: "priya@example.com",
        company: "Invoice SaaS",
      };

      setProfile(defaultData);
      localStorage.setItem("profile", JSON.stringify(defaultData));
    }
  }, []);

  const showMsg = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000);
  };

  const saveProfile = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    setEditMode(false);
    showMsg("✅ Profile updated successfully");
  };

  const changePassword = () => {
    if (password.newPass !== password.confirm) {
      showMsg("❌ Passwords do not match");
      return;
    }

    showMsg("✅ Password updated");
    setPassword({ newPass: "", confirm: "" });
  };

  const savePrefs = () => {
    localStorage.setItem("prefs", JSON.stringify(prefs));
    showMsg("✅ Preferences saved");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f6f9" }}>
      
      {/* 🔹 Sidebar */}
      <Sidebar />

      {/* 🔹 Main Content */}
      <div style={{ flex: 1, padding: "40px", marginLeft: 280 }}>
        
        <h1 style={{ marginBottom: 25 }}>Account Settings</h1>

        {message && (
          <div style={styles.message}>{message}</div>
        )}

        {/* ===== PROFILE HEADER ===== */}
        <div style={styles.profileHeader}>
          <div style={styles.avatar}>👤</div>

          <div>
            <h2 style={{ margin: 0 }}>{profile.name}</h2>
            <p style={{ margin: "4px 0", color: "#6b7280" }}>
              {profile.email}
            </p>
            <p style={{ margin: 0, fontSize: 14, color: "#9ca3af" }}>
              {profile.company}
            </p>
          </div>
        </div>

        {/* ================= PROFILE ================= */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2>👤 Profile</h2>

            {!editMode && (
              <button
                style={styles.secondaryBtn}
                onClick={() => setEditMode(true)}
              >
                Edit
              </button>
            )}
          </div>

          {!editMode ? (
            <>
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Company:</strong> {profile.company}</p>
            </>
          ) : (
            <>
              <input
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                style={styles.input}
                placeholder="Name"
              />

              <input
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                style={styles.input}
                placeholder="Email"
              />

              <input
                value={profile.company}
                onChange={(e) =>
                  setProfile({ ...profile, company: e.target.value })
                }
                style={styles.input}
                placeholder="Company"
              />

              <button style={styles.primaryBtn} onClick={saveProfile}>
                Save Changes
              </button>
            </>
          )}
        </div>

        {/* ================= SECURITY ================= */}
        <div style={styles.card}>
          <h2>🔒 Security</h2>

          <input
            type="password"
            placeholder="New Password"
            value={password.newPass}
            onChange={(e) =>
              setPassword({ ...password, newPass: e.target.value })
            }
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={password.confirm}
            onChange={(e) =>
              setPassword({ ...password, confirm: e.target.value })
            }
            style={styles.input}
          />

          <button style={styles.primaryBtn} onClick={changePassword}>
            Update Password
          </button>
        </div>

        {/* ================= PREFERENCES ================= */}
        <div style={styles.card}>
          <h2>🎨 Preferences</h2>

          <label style={styles.switchRow}>
            <input
              type="checkbox"
              checked={prefs.notifications}
              onChange={(e) =>
                setPrefs({ ...prefs, notifications: e.target.checked })
              }
            />
            Email Notifications
          </label>

          <label style={styles.switchRow}>
            <input
              type="checkbox"
              checked={prefs.darkMode}
              onChange={(e) =>
                setPrefs({ ...prefs, darkMode: e.target.checked })
              }
            />
            Dark Mode
          </label>

          <button style={styles.primaryBtn} onClick={savePrefs}>
            Save Preferences
          </button>
        </div>

        {/* ================= BILLING ================= */}
        <div style={styles.card}>
          <h2>💳 Billing</h2>
          <p>Current Plan: <strong>Pro Plan</strong></p>
          <p>Next Billing Date: 15 March 2026</p>

          <button style={styles.secondaryBtn}>
            Manage Billing
          </button>
        </div>

        {/* ================= PRIVACY ================= */}
        <div style={styles.card}>
          <h2>🛡 Privacy</h2>
          <p>Your data is encrypted and securely stored.</p>

          <button style={styles.secondaryBtn}>
            Download My Data
          </button>
        </div>

        {/* ================= DANGER ================= */}
        <div style={{ ...styles.card, border: "1px solid #f87171" }}>
          <h2 style={{ color: "#b91c1c" }}>⚠ Danger Zone</h2>

          <button style={styles.dangerBtn}>
            Delete Account
          </button>
        </div>

      </div>
    </div>
  );
}

/* ===== STYLES ===== */

const styles = {
  profileHeader: {
    background: "#fff",
    padding: 25,
    borderRadius: 14,
    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
    display: "flex",
    alignItems: "center",
    gap: 20,
    marginBottom: 25,
    maxWidth: 700,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    background: "#e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
  },

  card: {
    background: "#fff",
    padding: 25,
    borderRadius: 14,
    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
    marginBottom: 25,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    maxWidth: 700,
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    padding: 12,
    borderRadius: 8,
    border: "1px solid #ddd",
    fontSize: 14,
  },

  primaryBtn: {
    padding: 12,
    background: "#111827",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
  },

  secondaryBtn: {
    padding: "8px 16px",
    background: "#f3f4f6",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 500,
  },

  dangerBtn: {
    padding: 12,
    background: "#dc2626",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
  },

  switchRow: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },

  message: {
    background: "#e0f2fe",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    maxWidth: 700,
  },
};

export default Settings;