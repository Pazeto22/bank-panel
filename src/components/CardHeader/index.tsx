import s from "./styles.module.scss";

import MenuSvg from "../../../public/assets/svg/menu.svg";

function CardHeader() {
  return (
    <div className={s.cardHeaderWrapper}>
      <button className="menuButton">
        <MenuSvg />
      </button>
      <img
        className={s.cardHeaderLogo}
        src="/logo-grey.png"
        alt="logotipo banco digital"
      />
      <div className={s.cardHeaderUser}>
        <span className="body-t fc-g u-none">Scarlett Silva</span>
        <div className={s.cardHeaderUserImg}>
          <img src="/assets/images/scarlett.jpg" alt="imagem do usuário" />
        </div>
      </div>
    </div>
  );
}

export default CardHeader;
