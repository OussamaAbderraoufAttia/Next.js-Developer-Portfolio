import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Logo from "./Logo";
import   { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className="" }) => {
    const router = useRouter();
    return (
        <Link href={href} className= {`${className} relative group `}>
            {title }
            <span className={`h-[1px] inline-block bg-dark absolute left-0 bottom-0.5 group-hover:w-full
            transiion-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0" }
            `}> &nbsp; </span>
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
            
            <nav className="flex item-center justify-center flex-wrap">
                <motion.a href="https://twitter.com/oussamaattia245" target={"_blank"}
                whileHover={{ y:-5  }} 
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3"
                > 
                    <TwitterIcon />
                 </motion.a>  
                <motion.a href="https://github.com/OussamaAbderraoufAttia" target={"_blank"}
                whileHover={{ y:-5  }} whileTap={{ scale: 0.9 }}
                className="w-6 mx-3"
                > <GithubIcon /> </motion.a>  
                <motion.a href="https://dribbble.com/JohnLoyd" target={"_blank"}
                whileHover={{ y:-5  }} whileTap={{ scale: 0.9 }}
                className="w-6 mx-3"
                > <DribbbleIcon /> </motion.a>
                <motion.a href="https://www.linkedin.com/in/oussama-abderraouf-attia-494b32225/" target={"_blank"}
                whileHover={{ y:-5  }} whileTap={{ scale: 0.9 }}
                className="w-6 ml-3"
                > <LinkedInIcon /> </motion.a> 

            </nav>
            <div className="absolute left-[50%] top-2    translate-x-[50%]">
                 <Logo /> 
            </div>    
        </header>
    )
}

export default NavBar;
