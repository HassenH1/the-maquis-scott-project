import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="grid grid-cols-1	md:grid-cols-4">
      <div className="md:text-center md:mx-auto mx-12"></div>
      <div className="text-center col-span-2">
        <span className="text-xs">
          <span className="font-medium">
            &copy; {currentYear} COPYRIGHTS by
          </span>{" "}
          <strong>STUDIO EXIT LLC</strong>
        </span>
      </div>
    </footer>
  );
}

export default Footer;

// <footer className="grid grid-cols-1	md:grid-cols-4">
// <div className="md:text-center md:mx-auto mx-12"></div>
// <div className="text-center col-span-2">
//   <span className="text-xs">
//     <span className="font-medium">
//       &copy; {currentYear} COPYRIGHTS by
//     </span>{" "}
//     <strong>STUDIO EXIT LLC</strong>
//   </span>
// </div>
// </footer>
