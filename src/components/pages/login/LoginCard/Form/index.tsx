import s from "./styles.module.scss";

// Componentes
import FormData from "components/UI/FormData";
import InputDefault from "components/UI/inputs/InputDefault";
import InputCheckbox from "components/UI/inputs/InputCheckbox";
import DefaultButton from "components/UI/Buttons/DefaultButton";

function LoginForm() {
  return (
    <div className={s.loginCardForm}>
      <FormData>
        <InputDefault
          type="email"
          name="emailLogin"
          id="emailLogin"
          label="Digite seu e-mail"
          placeholder="exemplo@email.com.br"
          icon="email"
          helpers="fc-d-w fc-m-g"
        />
        <InputDefault
          type="password"
          name="passwordLogin"
          id="passwordLogin"
          label="Digite sua senha"
          placeholder="******"
          icon="password"
          helpers="fc-d-w fc-m-g"
        />
        <div className={s.loginCardFormRow}>
          <InputCheckbox
            label="Lembrar-me"
            id="rememberLogin"
            name="rememberLogin"
            helpers="fc-d-w fc-m-g"
          />
          <DefaultButton textButton helpers="body-i fc-d-w fc-m-p">
            Esqueci minha senha
          </DefaultButton>
        </div>
        <DefaultButton style="button-success" type="submit">
          Acessar
        </DefaultButton>
      </FormData>
    </div>
  );
}

export default LoginForm;
