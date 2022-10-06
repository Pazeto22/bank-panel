import { ClientsDataProvider } from "context/ClientsData";

// Cards
import Card from "components/Card";
import CardTitle from "components/CardTitle";

// Componentes
import InputSearch from "components/UI/inputs/InputSearch";
import IconButton from "components/UI/Buttons/IconButton";
import ClientsTable from "components/ClientsTable";

// Ícones
import RefreshIcon from "../../public/assets/svg/refresh.svg";

function Clients() {
  return (
    <Card>
      <CardTitle card_title="Clientes">
        <InputSearch
          id="clientSearch"
          name="clientSearch"
          placeholder="Busca de clientes"
        />
        <IconButton>
          <RefreshIcon />
        </IconButton>
      </CardTitle>
      <ClientsDataProvider>
        <ClientsTable
          headers={[
            "ID",
            "Nome",
            "Documento",
            "Banco",
            "Agência",
            "Conta",
            "Código",
          ]}
        />
      </ClientsDataProvider>
    </Card>
  );
}

export default Clients;
