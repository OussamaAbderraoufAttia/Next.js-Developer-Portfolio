import Link from "next/link";
import React from "react";

const NavBar = () => {
    return (
        <Header className="w-full px-32 py-8 font-medium ">
            <nav>
                <Link href="/"> Home </Link>
                <Link href="/about"> About </Link>
                <Link href="/contact"> Projects </Link>
                <Link href="/contact"> Articles </Link>
            </nav>
            <h2> logo</h2>
            <nav>
                <Link href="/" target={"_blank"}> T </Link>  
                <Link href="/" target={"_blank"}> T </Link>  
                <Link href="/" target={"_blank"}> T </Link>
                <Link href="/" target={"_blank"}> T </Link>  
                <Link href="/" target={"_blank"}> T </Link>  
                <Link href="/" target={"_blank"}> T </Link>  

            </nav>    
        </Header>
    )
}

export default NavBar;
