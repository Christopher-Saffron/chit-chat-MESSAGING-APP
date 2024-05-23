import React from "react";

interface NavbarButtonProps {
  filled?: boolean;
  onClick?: () => void;
  link?: string;
  children: React.ReactNode;
  style?: string;
}

function NavbarButton({
  filled,
  onClick,
  link,
  children,
  style,
}: NavbarButtonProps) {
  return (
    <li>
      <button
        onClick={onClick}
        className={` px-6 py-5 ${style} cursor-pointer transition duration-100 hover:scale-105 border-b-2 hover:border-b-main `}
      >
        {children}
      </button>
    </li>
  );
}

export default NavbarButton;
