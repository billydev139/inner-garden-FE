import Link from "next/link";
import React from "react";

interface ButtonProps {
  btnType?: "button" | "submit" | "reset";
  btnText: string;
  variant?: "gradient" | "white";
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
      ? `rounded-full bg-gradient-to-r from-secondary to-secondary text-white border border-3 border-secondary whitespace-nowrap`
      : `bg-white rounded-xl text-[#564A8D] font-semibold border border-gray-300 rounded-full hover:bg-gray-100 hover:border-gray-400 transition duration-300 whitespace-nowrap`;

  return href ? (
    <Link href={href} passHref>
      <span className={`${baseClasses} ${variantClasses} ${className} whitespace-nowrap `}>
        {btnText}
      </span>
    </Link>
  ) : (
    <button type={btnType} className={`${baseClasses} ${variantClasses} ${className} whitespace-nowrap `}>
      {btnText}
    </button>
  );
};

export default Button;
