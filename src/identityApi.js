import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory as identity_idl, canisterId as identity_id } from "../../declarations/identity";

// Create an agent to communicate with the canister
const agent = new HttpAgent();
const identityCanister = Actor.createActor(identity_idl, { agent, canisterId: identity_id });

// Register a new identity
export const registerIdentity = async (userId, identityData) => {
  try {
    const response = await identityCanister.registerIdentity(userId, identityData);
    return response;
  } catch (err) {
    console.error("Error registering identity:", err);
    return "Error";
  }
};

// Get an identity
export const getIdentity = async (userId) => {
  try {
    const identity = await identityCanister.getIdentity(userId);
    return identity;
  } catch (err) {
    console.error("Error getting identity:", err);
    return null;
  }
};

// Update an identity
export const updateIdentity = async (userId, newIdentityData) => {
  try {
    const response = await identityCanister.updateIdentity(userId, newIdentityData);
    return response;
  } catch (err) {
    console.error("Error updating identity:", err);
    return "Error";
  }
};

// Delete an identity
export const deleteIdentity = async (userId) => {
  try {
    const response = await identityCanister.deleteIdentity(userId);
    return response;
  } catch (err) {
    console.error("Error deleting identity:", err);
    return "Error";
  }
};
