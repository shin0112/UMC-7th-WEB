import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export function LoginContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (getAccessToken()) {
      setIsLogin(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLogin(false);
  };

  const saveToken = (tokens) => {
    const { refreshToken, accessToken } = tokens;
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("accessToken", accessToken);
  };

  const getAccessToken = () => {
    return localStorage.getItem("accessToken");
  };

  return (
    <LoginContext.Provider
      value={{
        isLogin,
        setIsLogin,
        logout,
        saveToken,
        getAccessToken,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
