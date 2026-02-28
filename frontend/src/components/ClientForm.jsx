import { useState } from "react";

function ClientForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    onSubmit({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h3>Add Client</h3>

      <input
        placeholder="Client Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default ClientForm;