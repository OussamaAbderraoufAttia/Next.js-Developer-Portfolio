import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <nav>
                <Link href="/"> Home </Link>
                <Link href="/about"> About </Link>
                <Link href="/contact"> Projects </Link>
                <Link href="/contact"> Articles </Link>
            </nav>
            
            <nav>
                <Link href="/" target={"_blank"}> T </Link>  
                <Link href="/" target={"_blank"}> T </Link>  
                <Link href="/" target={"_blank"}> T </Link>
                <Link href="/" target={"_blank"}> T </Link>  
                <Link href="/" target={"_blank"}> T </Link>  
                <Link href="/" target={"_blank"}> T </Link>  

            </nav>
            <div className="absolute lef-[50%] top-2    translate-x-[50%]">
                 <Logo /> 
            </div>    
        </header>
    )
}

export default NavBar;
