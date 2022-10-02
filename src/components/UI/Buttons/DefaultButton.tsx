import s from "./styles.module.scss";

import { ReactNode } from "react";

interface DefaultButtonProps {
  children: ReactNode;
  helpers?: string;
  role?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  style?:
    | "button-primary"
    | "button-primary-gradient"
    | "button-success"
    | "button-warning"
    | "button-error"
    | undefined;
  textButton?: boolean;
}

function DefaultButton({
  children,
  helpers,
  role,
  type,
  style,
  textButton,
}: DefaultButtonProps) {
  return (
    <button
      onClick={role}
      type={type || "button"}
      className={`${textButton ? s.buttonText : s.button} ${helpers || ""} ${
        style || ""
      }`}
    >
      <span className={`${textButton ? "" : "body-b"}`}>{children}</span>
    </button>
  );
}

export default DefaultButton;
