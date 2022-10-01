import s from "./styles.module.scss";

import { ReactNode } from "react";

interface FormDataProps {
  children: ReactNode;
}

function FormData({ children }: FormDataProps) {
  return <div className={s.formDataWrapper}>{children}</div>;
}

export default FormData;
