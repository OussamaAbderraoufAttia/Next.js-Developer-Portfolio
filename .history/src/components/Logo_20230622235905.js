import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Link href="/" className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full font-bold text-2xl">
        OA
      </Link>
    </div>
  );
};

export default Logo;
