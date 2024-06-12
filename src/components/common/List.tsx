import Link from "next/link";
import React from "react";

interface ListProps {
  toLink: string;
  label: string;
  linkStyle?: string;
}

const List: React.FC<ListProps> = ({ toLink, label }) => {
  return (
    <li>
      <Link href={toLink}>
        <span className={`text-[#B76EF9] text-[20px] font-medium ${label==="/contact"?"rounded-full bg-white":""}`}>{label}</span>
      </Link>
    </li>
  );
};

export default List;
