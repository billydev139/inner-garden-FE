import Link from "next/link";
import React from "react";
interface ListProps {
  toLink: string;
  label: string;
  linkStyle?: string;
  className?:string;
}
const List: React.FC<ListProps> = ({ toLink, label, className }) => {
  return (
    <li>
      <Link href={toLink}>
        <span className={`${className} text-[20px] font-medium ${label==="/contact"?"rounded-full bg-white":""}`}>{label}</span>
      </Link>
    </li>
  );
};

export default List;
