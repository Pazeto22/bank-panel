import s from "./styles.module.scss";

import { ReactNode, ChangeEventHandler } from "react";

interface InputCheckboxProps {
  label: string;
  name?: string;
  id: string;
  helpers?: string;
  change?: ChangeEventHandler<HTMLInputElement>;
}

function InputCheckbox({
  label,
  name,
  id,
  helpers,
  change,
}: InputCheckboxProps) {
  return (
    <div className={`${s.inputCheckboxWrapper} ${helpers || ""}`}>
      <label className={`${s.inputCheckboxLabel} body-i`} htmlFor={id}>
        <input
          className={s.inputCheckbox}
          type="checkbox"
          name={name}
          id={id}
          onChange={change}
        />
        <span className={s.inputCheckboxCheckmark}></span>
        {label}
      </label>
    </div>
  );
}

export default InputCheckbox;
