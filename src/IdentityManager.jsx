import React, { useState } from "react";
import { registerIdentity, getIdentity, updateIdentity, deleteIdentity } from "./identityApi";

const IdentityManager = () => {
  const [userId, setUserId] = useState("");
  const [identityData, setIdentityData] = useState("");
  const [response, setResponse] = useState("");

  const handleRegister = async () => {
    const res = await registerIdentity(userId, identityData);
    setResponse(res);
  };

  const handleGetIdentity = async () => {
    const res = await getIdentity(userId);
    setResponse(res ? res : "Identity not found");
  };

  const handleUpdate = async () => {
    const res = await updateIdentity(userId, identityData);
    setResponse(res);
  };

  const handleDelete = async () => {
    const res = await deleteIdentity(userId);
    setResponse(res);
  };

  return (
    <div>
      <h2>Identity Manager</h2>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Identity Data"
        value={identityData}
        onChange={(e) => setIdentityData(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleGetIdentity}>Get Identity</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>

      <div>{response}</div>
    </div>
  );
};

export default IdentityManager;
