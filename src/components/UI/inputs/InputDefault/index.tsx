import { ChangeEventHandler } from "react";
import s from "./styles.module.scss";

interface InputDefaultProps {
  label?: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  icon?: string;
  helpers?: string;
  change?: ChangeEventHandler<HTMLInputElement>;
}

function InputDefault({
  label,
  type,
  name,
  id,
  placeholder,
  icon,
  helpers,
  change,
}: InputDefaultProps) {
  return (
    <div className={`${s.inputDefaultWrapper} ${helpers || ""}`}>
      {label && (
        <label htmlFor={id} className="body-i">
          {label}
        </label>
      )}
      <div className={icon ? s.inputDefaultData : ""}>
        {icon && (
          <img src={`/assets/svg/${icon}.svg`} alt={`ícone de ${name}`} />
        )}
        <input
          className={s.inputDefault}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={change}
        />
      </div>
    </div>
  );
}

export default InputDefault;
