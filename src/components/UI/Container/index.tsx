import { ReactNode } from "react";

import s from "./styles.module.scss";

interface ContainerProps {
  children: ReactNode;
  helpers?: string;
}

function Container({ children, helpers }: ContainerProps) {
  return (
    <div className={`${s.containerBase} ${helpers ? helpers : false}`}>
      {children}
    </div>
  );
}

export default Container;
