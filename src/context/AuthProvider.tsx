import React, { useContext, useState } from "react";
import { createContext } from "react";
import type { User } from "../types/userTypes";
import { Logout, UserLogin } from "../controller/authController.controller";
import type { LoginData } from "../types/authType";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (
    loginData: LoginData,
  ) => Promise<Awaited<ReturnType<typeof UserLogin>>>;
  logout: () => void;
  user: User | null;
}

const authContext = createContext<AuthContextType | undefined>({
  isAuthenticated: false,
  login: () =>
    Promise.resolve({ data: null, error: null } as unknown as Awaited<
      ReturnType<typeof UserLogin>
    >),
  logout: () => {},
  user: null,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (loginData: LoginData) => {
    const result = await UserLogin(loginData);

    // 1. Check if there's no error AND we actually have session/user data
    if (!result.error && result.data?.session?.user) {
      const userData = result.data.session.user;

      setIsAuthenticated(true);

      // 2. Map the data safely.
      // If your 'User' type needs ID/Email, combine them with the metadata:
      setUser({
        id: userData.id,
        email: userData.email,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(userData.user_metadata as Record<string, any>),
      } as User);
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }

    return result;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    Logout();
  };

  return (
    <authContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </authContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
