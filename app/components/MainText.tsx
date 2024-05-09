import React from "react";

function MainText({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) {
  return <span className={` text-main ${style}`}>{children}</span>;
}

export default MainText;
