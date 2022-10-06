import s from "./styles.module.scss";

import SearchIcon from "../../../../../public/assets/svg/search.svg";

interface InputSearchProps {
  label?: string;
  name: string;
  id: string;
  placeholder?: string;
  helpers?: string;
  role?: () => void;
}

function InputSearch({
  label,
  name,
  id,
  placeholder,
  helpers,
  role,
}: InputSearchProps) {
  return (
    <div className={`${s.inputSearchWrapper} ${helpers || ""}`}>
      {label && (
        <label htmlFor={id} className="body-i">
          {label}
        </label>
      )}
      <div className={s.inputSearchData}>
        <input
          className={s.inputSearch}
          type="search"
          name={name}
          id={id}
          placeholder={placeholder}
        />
        <button onClick={role} className={s.inputSearchButton}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default InputSearch;
