import s from "./styles.module.scss";

import { useAuthData } from "context/AuthData";
import { hash } from "bcryptjs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Componentes
import FormData from "components/UI/FormData";
import InputDefault from "components/UI/inputs/InputDefault";
import InputCheckbox from "components/UI/inputs/InputCheckbox";
import DefaultButton from "components/UI/Buttons/DefaultButton";
import { ChangeEvent, FormEvent, useState } from "react";

interface AuthFormTypes {
  emailLogin: string;
  passwordLogin: string;
  rememberLogin: string;
}

function LoginForm() {
  const { checkAuth } = useAuthData();
  const [formAuth, setFormAuth] = useState<AuthFormTypes>({
    emailLogin: "",
    passwordLogin: "",
    rememberLogin: "",
  });

  const forgotPasswordNotify = () =>
    toast.warn("Ops! Tente novamente mais tarde", {
      position: "bottom-right",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
    });

  function handleForm(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormAuth({ ...formAuth, [name]: value });
  }

  async function generateHash(payload: string): Promise<string> {
    const hashed = await hash(payload, 10);
    return hashed;
  }

  function authLogin(event: FormEvent) {
    event.preventDefault();
    // const token = "232323";
    if (formAuth.emailLogin && formAuth.passwordLogin) {
      generateHash(formAuth.emailLogin).then((token) => {
        window.localStorage.setItem("authUser", formAuth.emailLogin);
        window.localStorage.setItem("authToken", token);
        if (formAuth.rememberLogin === "on") {
          window.localStorage.setItem("authRemember", "true");
        } else {
          window.localStorage.setItem("authRemember", "false");
        }
        checkAuth();
      });
    }
  }

  return (
    <div className={s.loginCardForm}>
      <FormData submit={authLogin}>
        <InputDefault
          type="email"
          name="emailLogin"
          id="emailLogin"
          label="Digite seu e-mail"
          placeholder="exemplo@email.com.br"
          icon="email"
          helpers="fc-d-w fc-m-g"
          change={handleForm}
        />
        <InputDefault
          type="password"
          name="passwordLogin"
          id="passwordLogin"
          label="Digite sua senha"
          placeholder="******"
          icon="password"
          helpers="fc-d-w fc-m-g"
          change={handleForm}
        />
        <div className={s.loginCardFormRow}>
          <InputCheckbox
            label="Lembrar-me"
            id="rememberLogin"
            name="rememberLogin"
            helpers="fc-d-w fc-m-g"
            change={handleForm}
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
