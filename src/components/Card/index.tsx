import s from "./styles.module.scss";

import { ReactNode } from "react";

import Container from "components/UI/Container";
import CardHeader from "components/CardHeader";

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <Container>
      <div className={s.cardWrapper}>
        <CardHeader />
        {children}
      </div>
    </Container>
  );
}

export default Card;
