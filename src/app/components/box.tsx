import React from "react";

function Box({
  children,
  relative = true,
  border = false,
}: {
  children: React.ReactNode;
  relative?: boolean;
  border?: boolean;
}) {
  const isRelative = relative ? "relative" : "";
  const showBorder = border ? "border-2 border-red-500" : "";
  return (
    <div
      className={`md:h-[700px] md:w-[800px] h-[500px] w-[420px] ${isRelative} ${showBorder}`}
    >
      {/* <div
      className={`md:h-[600px] md:w-[700px] h-[400px] w-[320px] ${isRelative} ${showBorder}`}
    > */}
      {children}
    </div>
  );
}

export default Box;
