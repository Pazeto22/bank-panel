import s from "./styles.module.scss";

import { ReactNode } from "react";

import Container from "components/UI/Container";
import CardHeader from "components/CardHeader";
import CardTitle from "components/CardTitle";

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
