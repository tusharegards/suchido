import {createContext, ReactNode, useContext, useState} from 'react'
import { User } from "../types/index.js";


export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(false);

 const login = async (email: string, password: string) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
  } catch (error) {
    console.error(error);
  }
}

  const values = {
    user,
    isAuthenticated,
    isLoading,
    login: async () => {},
    logout: async () => {},
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}
