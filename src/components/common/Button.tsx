import Link from "next/link";
import React from "react";

interface ButtonProps {
  btnType?: "button" | "submit" | "reset";
  btnText: string;
  variant?: "gradient" | "white" | "purple";
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  btnType = "button",
  btnText,
  variant = "gradient",
  href = "/",
}) => {
  const baseClasses = `text-lg font-bold py-2 px-6 w-[200px] text-center`;

  const variantClasses =
    variant === "gradient"
      ? `rounded-full bg-gradient-to-r from-purple-light to-purple-dark text-white border border-3 border-[#B76EF9]`
      : variant === "white"
      ? `bg-white rounded-xl text-[#564A8D] font-semibold border border-gray-300 rounded-full hover:bg-gray-100 hover:border-gray-400 transition duration-300`
      : variant === "purple"
      ? `bg-[#564A8D] text-[#c4caf0] rounded-[20px] text-[16px] font-semibold border border-[#564A8D] hover:bg-[#463573] transition duration-300`
      : "";

  return href ? (
    <Link href={href} passHref>
      <span className={`${baseClasses} ${variantClasses}`}>{btnText}</span>
    </Link>
  ) : (
    <button type={btnType} className={`${baseClasses} ${variantClasses}`}>
      {btnText}
    </button>
  );
};

export default Button;
