// Cards
import Card from "components/Card";
import CardTitle from "components/CardTitle";

// Componentes
import InputSearch from "components/UI/inputs/InputSearch";
import IconButton from "components/UI/Buttons/IconButton";
import Table from "components/Table";

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
      <Table></Table>
    </Card>
  );
}

export default Clients;
