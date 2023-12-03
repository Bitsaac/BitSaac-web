import React from "react"

interface ButtonProps {
  type?: "button" | "submit" | "reset"
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  className,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
