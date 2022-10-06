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
      setClientsData(data);
    } catch (error) {
      console.log(history, error);
      fetchClientsFail();
    }
  }

  const fetchClientsFail = () =>
    toast.error("Ops! Não encontramos nenhum dado");

  return (
    <>
      <div className={s.tableWrapper}>
        <table className={`${s.table} body-t`}>
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
                <td>Nenhum dado encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className={s.tableMobile}>
        {clientsData.length ? (
          clientsData.map((client) => (
            <div key={client.id} className={s.tableMobileCard}>
              <div className={s.tableMobileCardLine}>
                <span className="body-bb">ID:</span>
                <span className="fc-grey body-t">{client.id}</span>
              </div>
              <div className={s.tableMobileCardLine}>
                <span className="body-bb">Nome:</span>
                <span className="fc-grey body-t">{client.name}</span>
              </div>
              <div className={s.tableMobileCardLine}>
                <span className="body-bb">Documento:</span>
                <span className="fc-grey body-t">{client.document}</span>
              </div>
              {client.bank && (
                <>
                  <div className={s.tableMobileCardLine}>
                    <span className="body-bb">Banco:</span>
                    <span className="fc-grey body-t">
                      {client.bank.bankName}
                    </span>
                  </div>
                  <div className={s.tableMobileCardLine}>
                    <span className="body-bb">Agência:</span>
                    <span className="fc-grey body-t">{client.bank.agency}</span>
                  </div>
                  <div className={s.tableMobileCardLine}>
                    <span className="body-bb">Conta:</span>
                    <span className="fc-grey body-t">
                      {client.bank.account}
                    </span>
                  </div>
                  <div className={s.tableMobileCardLine}>
                    <span className="body-bb">Código:</span>
                    <span className="fc-grey body-t">{client.bank.code}</span>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <span className="body-bb">Nenhum dado encontrado</span>
        )}
      </div>
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
    </>
  );
}

export default ClientsTable;
