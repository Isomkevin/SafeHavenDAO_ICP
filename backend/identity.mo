actor IdentityManager {

  // A map to store user identities
  stable var identities : Trie.Trie<Text, Text> = Trie.empty();

  // Register a new identity
  public shared func registerIdentity(userId: Text, identityData: Text) : async Text {
    if (Trie.contains(identities, userId)) {
      return "User already registered";
    } else {
      identities := Trie.put(identities, userId, identityData);
      return "Identity registered successfully";
    }
  };

  // Retrieve the identity of a user
  public query func getIdentity(userId: Text) : async ?Text {
    return Trie.get(identities, userId);
  };

  // Update existing identity
  public shared func updateIdentity(userId: Text, newIdentityData: Text) : async Text {
    if (Trie.contains(identities, userId)) {
      identities := Trie.put(identities, userId, newIdentityData);
      return "Identity updated";
    } else {
      return "User not registered";
    }
  };

  // Delete an identity
  public shared func deleteIdentity(userId: Text) : async Text {
    if (Trie.contains(identities, userId)) {
      identities := Trie.remove(identities, userId);
      return "Identity deleted";
    } else {
      return "User not registered";
    }
  };
}
