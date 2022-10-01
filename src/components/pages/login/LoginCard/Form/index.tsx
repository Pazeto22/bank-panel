import s from "../styles.module.scss";

// Componentes
import FormData from "components/UI/FormData";
import InputText from "components/UI/inputs/InputText";

function LoginForm() {
  return (
    <div className={s.loginCardForm}>
      <FormData>
        <InputText
          type="email"
          name="emailLogin"
          id="emailLogin"
          label="Digite seu e-mail"
          placeholder="exemplo@email.com.br"
          icon="email"
          helpers="fc-d-w fc-m-g"
        />
        <InputText
          type="password"
          name="passwordLogin"
          id="passwordLogin"
          label="Digite sua senha"
          placeholder="******"
          icon="password"
          helpers="fc-d-w fc-m-g"
        />
      </FormData>
    </div>
  );
}

export default LoginForm;
