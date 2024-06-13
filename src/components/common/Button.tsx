import Link from "next/link";
import React from "react";

interface ButtonProps {
  btnType?: "button" | "submit" | "reset";
  btnText: string;
  variant?: "gradient" | "white" | "#564A8D";
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  btnType = "button",
  btnText,
  variant = "gradient",
  className,
  href = "/",
}) => {
  const baseClasses = `text-lg font-bold py-2 px-6 w-[200px] text-center`;

  const variantClasses =
    variant === "gradient"
      ? `rounded-full bg-gradient-to-r from-secondary to-tertiary text-white border border-3 border-secondary`
      : variant === "white"
      ? `bg-white rounded-xl text-[#564A8D] font-semibold border border-gray-300 rounded-full hover:bg-gray-100 hover:border-gray-400 transition duration-300`
      : variant === "#564A8D"
      ? `bg-[#564A8D] text-[#c4caf0] rounded-[20px] text-[16px] font-semibold border border-[#564A8D] hover:bg-[#463573] transition duration-300`
      : "";

  return href ? (
    <Link href={href} passHref>
      <span className={`${baseClasses} ${variantClasses}`}>{btnText}</span>
    </Link>
  ) : (
    <button type={btnType} className={`${baseClasses} ${variantClasses} ${className} whitespace-nowrap `}>
      {btnText}
    </button>
  );
};

export default Button;
