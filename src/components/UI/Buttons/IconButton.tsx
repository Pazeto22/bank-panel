import s from "./styles.module.scss";

import { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  helpers?: string;
  role?: () => void;
  type?: "submit" | "button" | undefined;
  style?:
    | "button-primary"
    | "button-primary-gradient"
    | "button-success"
    | "button-warning"
    | "button-error"
    | undefined;
}

function IconButton({ children, helpers, role, type, style }: IconButtonProps) {
  return (
    <button
      onClick={role}
      type={type || "button"}
      className={`${s.buttonIcon} ${helpers || ""} ${style || ""}`}
    >
      {children}
    </button>
  );
}

export default IconButton;
