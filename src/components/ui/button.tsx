import * as React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
  asChild?: boolean;
}

export function Button({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}