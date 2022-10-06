import React, { ReactNode, useState, useContext, useEffect } from "react";
import Router from "next/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AuthDataProps {
  children: ReactNode;
}

interface AuthDataContext {
  checkAuth: () => void;
}

export const AuthDataContext = React.createContext<AuthDataContext | null>(
  null
);

export const AuthDataProvider = ({ children }: AuthDataProps) => {
  const authFail = () => toast.warn("Ops! Seu login expirou");
  const authTip = () => toast.info("Faça login com qualquer usuário");

  useEffect(() => {
    checkAuth();
  }, []);

  function checkAuth() {
    const auth = {
      username: window.localStorage.getItem("authUser"),
      token: window.localStorage.getItem("authToken"),
      remember: window.localStorage.getItem("authRemember"),
    };
    if (auth.token) {
      if (Router.pathname === "/Login") {
        Router.push("/clientes");
      }
    } else {
      console.log("4");
      Router.push("/Login");
      authFail();
      authTip();
    }
  }

  return (
    <AuthDataContext.Provider value={{ checkAuth }}>
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AuthDataContext.Provider>
  );
};

export const useAuthData = () => {
  const context = useContext(AuthDataContext);
  if (!context) {
    throw new Error("Precisa estar dentro de um AuthDataContext.Provider");
  }
  return context;
};
