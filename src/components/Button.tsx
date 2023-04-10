import React from "react";

import styles from "@/styles/components/Button.module.scss";

type Props = {
  type?: 'button' | 'submit' | 'reset';
  children: string | number | boolean | React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

function Button({
  type = "button",
  children,
  variant = "primary",
  className = "",
}: Props) {
  return (
    <button className={`${styles[variant]} ${className}`} type={type}>
      {children}
    </button>
  );
}

export default Button;
