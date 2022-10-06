import api from "config/api";
import { useEffect, useState } from "react";

import { ClientsDataContext, useClientsData } from "context/ClientsData";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import s from "./styles.module.scss";

interface TableProps {
  headers: Array<string>;
}

function ClientsTable({ headers }: TableProps) {
  const { clientsData, setClientsData } = useClientsData();
  const [page, setPage] = useState<Number>(1);
  const [limit, setLimit] = useState<Number>(8);

  useEffect(() => {
    fetchClients();
  }, [page, limit]);

  async function fetchClients() {
    try {
      const { data } = await api.get(`/clients?_page=${page}&_limit=${limit}`);
      console.log(data);
      setClientsData(data);
    } catch (error) {
      console.log(history, error);
      fetchClientsFail();
    }
  }

  const fetchClientsFail = () =>
    toast.error("Ops! Não encontramos nenhum dado");

  return (
    <div className={s.tableWrapper}>
      <table className={`${s.table} body-i`}>
        <thead>
          <tr className={s.tableLine}>
            {headers.map((headerTitle, index) => (
              <th key={`${headerTitle}-${index}`} className={s.tableTh}>
                {headerTitle}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {clientsData.length ? (
            clientsData.map((client) => (
              <tr key={client.id} className={s.tableLine}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.document}</td>
                <td>{client.bank ? client.bank.bankName : ""}</td>
                <td>{client.bank ? client.bank.agency : ""}</td>
                <td>{client.bank ? client.bank.account : ""}</td>
                <td>{client.bank ? client.bank.code : ""}</td>
              </tr>
            ))
          ) : (
            <tr className={s.tableLineError}>
              <span>Nenhum dado encontrado</span>
            </tr>
          )}
        </tbody>
      </table>

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
    </div>
  );
}

export default ClientsTable;
