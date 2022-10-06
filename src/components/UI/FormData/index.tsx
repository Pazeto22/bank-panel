import s from "./styles.module.scss";

import { FormEventHandler, ReactNode } from "react";

interface FormDataProps {
  children: ReactNode;
  submit?: FormEventHandler<HTMLFormElement>;
}

function FormData({ children, submit }: FormDataProps) {
  return (
    <form onSubmit={submit} className={s.formDataWrapper}>
      {children}
    </form>
  );
}

export default FormData;
