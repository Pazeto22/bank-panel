import s from "./styles.module.scss";

import { ReactNode } from "react";

interface CardTitleProps {
  children?: ReactNode;
  card_title: string;
  title_style?: string;
}

function CardTitle({ children, card_title, title_style }: CardTitleProps) {
  return (
    <div
      className={`${s.cardTitleWrapper} ${children ? s.cardTitleChildren : ""}`}
    >
      {children && <div className={s.cardTitleChildrenContent}>{children}</div>}
      <span className={`${title_style || "title-h3 fc-g u-none"}`}>
        {card_title}
      </span>
    </div>
  );
}

export default CardTitle;
