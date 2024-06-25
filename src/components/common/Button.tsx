import Link from "next/link";
import React from "react";

interface ButtonProps {
  btnType?: "button" | "submit" | "reset";
  btnText: string;
  variant?: "gradient" | "white" | "purple";
  href?: string;
  className?: string;
  onClick?: () => void;
  ariaLabel: string;
}

const Button: React.FC<ButtonProps> = ({
  btnType = "button",
  btnText,
  variant = "gradient",
  className,
  href = "/",
  onClick,
  ariaLabel,
}) => {
  const baseClasses = `py-2 px-6 w-[200px] text-center`;

  const variantClasses =
    variant === "gradient"
      ? `rounded-full bg-gradient-to-t from-tertiary via-tertiary to-quartary text-white border border-3 border-secondary whitespace-nowrap text-[20px] font-black leading-[24.38px]`
      : variant === "white"
      ? `bg-white rounded-xl text-[#564A8D] text-[16px] font-semibold leading-[26px] rounded-full whitespace-nowrap`
      : variant === "purple"
      ? `bg-[#564A8D] text-[#c4caf0] rounded-[20px] text-[16px] font-semibold border border-[#564A8D] hover:bg-[#463573] transition duration-300 whitespace-nowrap text-lg font-bold`
      : "";

  return href ? (
    <Link href={href} passHref>
      <span
        className={`${baseClasses} ${variantClasses}`}
        aria-label={ariaLabel}
      >
        {btnText}
      </span>
    </Link>
  ) : (
    <button
      type={btnType}
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {btnText}
    </button>
  );
};

export default Button;
