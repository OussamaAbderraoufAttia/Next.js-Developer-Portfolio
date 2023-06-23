import Link from "next/link";
import React from "react";
import Logo from "./Logo";


const CustomLink = ({ href, title, className="" }) => {
    return (
        <Link href={href} className= {`${className} relative`}>
            {title }
            <span className="h-1 inline-block w-full bg-dark absolute left-0 bottom-0"> &nbsp; </span>
        </Link>
    )
}


const NavBar = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <nav>
                <CustomLink href="/"  title="Home" className="mr-4"/> 
                <CustomLink href="/about" title="about" className="mx-4"/> 
                <CustomLink href="/contact"  title="contact" className="mx-4"/> 
                <CustomLink href="/Articles"  title="Articles" className="ml-4"/> 
            </nav>
            
            <nav>
                <Link href="/" target={"_blank"}> T </Link>  
                <Link href="/" target={"_blank"}> T </Link>  
                <Link href="/" target={"_blank"}> T </Link>
                <Link href="/" target={"_blank"}> T </Link>  
                <Link href="/" target={"_blank"}> T </Link>  
                <Link href="/" target={"_blank"}> T </Link>  

            </nav>
            <div className="absolute left-[50%] top-2    translate-x-[50%]">
                 <Logo /> 
            </div>    
        </header>
    )
}

export default NavBar;
