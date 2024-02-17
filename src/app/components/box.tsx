import React from "react";

function Box({
  children,
  relative = true,
}: {
  children: React.ReactNode;
  relative?: boolean;
}) {
  const isRelative = relative ? "relative" : "";
  return (
    <div
      className={`md:h-[600px] md:w-[700px] h-[400px] w-[320px] ${isRelative}`}
    >
      {children}
    </div>
  );
}

export default Box;
