import React, { ReactNode, useState, useContext } from "react";

interface ClientsDataProps {
  children: ReactNode;
}

interface ClientsBankTypes {
  bankName: string | null;
  code: string | null;
  agency: string | null;
  account: string | null;
}

interface ClientsDataTypes {
  id: string | null;
  name: string | null;
  document: string | null;
  bank: ClientsBankTypes | null;
}

interface ClientsDataContext {
  clientsData: Array<ClientsDataTypes>;
  setClientsData: React.Dispatch<React.SetStateAction<Array<ClientsDataTypes>>>;
}

export const ClientsDataContext =
  React.createContext<ClientsDataContext | null>(null);

export const ClientsDataProvider = ({ children }: ClientsDataProps) => {
  const [clientsData, setClientsData] = useState<Array<ClientsDataTypes>>([]);
  return (
    <ClientsDataContext.Provider value={{ clientsData, setClientsData }}>
      {children}
    </ClientsDataContext.Provider>
  );
};

export const useClientsData = () => {
  const context = useContext(ClientsDataContext);
  if (!context) {
    throw new Error("Precisa estar dentro de um ClientsDataContext.Provider");
  }
  return context;
};
