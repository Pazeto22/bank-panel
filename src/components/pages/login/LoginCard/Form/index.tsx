import s from "./styles.module.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Componentes
import FormData from "components/UI/FormData";
import InputDefault from "components/UI/inputs/InputDefault";
import InputCheckbox from "components/UI/inputs/InputCheckbox";
import DefaultButton from "components/UI/Buttons/DefaultButton";

function LoginForm() {
  const forgotPasswordNotify = () =>
    toast.warn("Ops! Tente novamente mais tarde", {
      position: "bottom-right",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
    });

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
          <DefaultButton
            textButton
            helpers="body-i fc-d-w fc-m-p"
            role={forgotPasswordNotify}
          >
            Esqueci minha senha
          </DefaultButton>
        </div>
        <DefaultButton style="button-success" type="submit">
          Acessar
        </DefaultButton>
      </FormData>

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

export default LoginForm;
