import s from "./styles.module.scss";

import { ReactNode } from "react";

interface InputCheckboxProps {
  label: string;
  name?: string;
  id: string;
  helpers?: string;
}

function InputCheckbox({ label, name, id, helpers }: InputCheckboxProps) {
  return (
    <div className={`${s.inputCheckboxWrapper} ${helpers || ""}`}>
      <label className={`${s.inputCheckboxLabel} body-i`} htmlFor={id}>
        <input
          className={s.inputCheckbox}
          type="checkbox"
          name={name}
          id={id}
        />
        <span className={s.inputCheckboxCheckmark}></span>
        {label}
      </label>
    </div>
  );
}

export default InputCheckbox;
