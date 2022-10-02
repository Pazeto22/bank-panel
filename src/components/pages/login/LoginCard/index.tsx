import s from "./styles.module.scss";

import Lottie from "react-lottie-player";
import LoginAnimation from "lottie/loginCard.json";

// Componentes
import Form from "./Form";

function LoginCard() {
  return (
    <div className={s.loginCardWrapper}>
      <div className={`${s.loginCardSection} ${s.loginCardFormWrapper}`}>
        <div className={s.loginCardTitle}>
          <h1 className="title-h1 fc-w">Bem-Vindo</h1>
        </div>
        <Form />
      </div>
      <div className={`${s.loginCardSection} ${s.loginCardLottie}`}>
        <Lottie
          animationData={LoginAnimation}
          play
          style={{ width: 384, height: 384 }}
        />
      </div>
    </div>
  );
}

export default LoginCard;
