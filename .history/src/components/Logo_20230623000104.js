import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MootionLink = motion(Link);
const Logo = () => {
  return (
    <div 
    className="flex items-center justify-center mt-2"
    whilehover={{ scale: 1.1 }}
    >
      <MootionLink href="/" className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full font-bold text-2xl">
        OA
      </MootionLink>
    </div>
  );
};

export default Logo;
