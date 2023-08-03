import { FC } from "react";

interface props {
  type?: "primary" | "default";
  style?: any;
  disabled?: boolean;
  children: React.ReactNode | string;
  onClick: () => any;
}

const Button: FC<props> = ({
  onClick,
  type = "primary",
  children,
  style,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      style={style}
      className={`btn-${type}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
