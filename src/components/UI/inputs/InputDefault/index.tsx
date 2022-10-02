import s from "./styles.module.scss";

interface InputDefaultProps {
  label?: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  icon?: string;
  helpers?: string;
}

function InputDefault({
  label,
  type,
  name,
  id,
  placeholder,
  icon,
  helpers,
}: InputDefaultProps) {
  return (
    <div className={`${s.inputDefaultWrapper} ${helpers || ""}`}>
      {label && (
        <label htmlFor="loginCardEmail" className="body-i">
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
        />
      </div>
    </div>
  );
}

export default InputDefault;
