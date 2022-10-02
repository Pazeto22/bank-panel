import s from "./styles.module.scss";

import { ReactNode } from "react";

interface FormDataProps {
  children: ReactNode;
  submit?: () => void;
}

function FormData({ children, submit }: FormDataProps) {
  return (
    <form onSubmit={submit} className={s.formDataWrapper}>
      {children}
    </form>
  );
}

export default FormData;
