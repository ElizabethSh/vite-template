import * as React from "react";

import "./button.scss";

type ButtonVariant = "primary" | "confirm" | "danger";

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> & {
  type?: "button" | "submit" | "reset";
  label: string;
  variant?: ButtonVariant;
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  label,
  variant = "primary",
  className,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      type={type}
      className={`button button-${variant}${className ? ` ${className}` : ""}`}
    >
      {label}
    </button>
  );
};

export default Button;
