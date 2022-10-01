import s from "./styles.module.scss";

interface InputTextProps {
  label?: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  icon?: string;
  helpers?: string;
}

function InputText({
  label,
  type,
  name,
  id,
  placeholder,
  icon,
  helpers,
}: InputTextProps) {
  return (
    <div className={`${s.inputTextWrapper} ${helpers}`}>
      {label && (
        <label htmlFor="loginCardEmail" className="body-i">
          {label}
        </label>
      )}
      <div className={icon ? s.inputTextData : ""}>
        {icon && (
          <img src={`/assets/svg/${icon}.svg`} alt={`ícone de ${name}`} />
        )}
        <input
          className={s.inputText}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default InputText;
