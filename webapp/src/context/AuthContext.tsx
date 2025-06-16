import React, {createContext, useContext} from "react";

import type { Role } from "../utils/auth";

const AuthContext = createContext<{role: Role}>({role:'user'})

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ role: Role; children: React.ReactNode }> = ({ role, children }) => {
  return <AuthContext.Provider value={{ role }}>{children}</AuthContext.Provider>;
};