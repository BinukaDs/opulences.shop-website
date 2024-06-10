'use client'
import { Button } from "./ui/button"
import Image from "next/image"
import { Karla } from "next/font/google"
import { useState } from "react"
import Link from "next/link"
import "./sections/slider.css"

const karla = Karla({ weight: ["400", "700"], subsets: ["latin"] });

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    return (
        <nav className={`py-5 card-bg w-full fixed z-40 ${karla.className}`}>
            <div className="container">
                {/* desktop navbar */}
                <div className="justify-between hidden md:flex items-center xl:px-24">
                    <div>
                        <a href="/">
                            <Image src={"/logo.png"} alt="logo" width={50} height={50}></Image>
                        </a>
                    </div>
                    <div>
                        <ul className="flex space-x-8">
                            <li><Link scroll={true} href="/" className="text-textGray hover:text-white transition-all">Home</Link></li>
                            <li><Link scroll={true} href="/#about" className="text-textGray hover:text-white transition-all">Who We Are?</Link></li>
                            <li><Link scroll={true} href="/#pricing" className="text-textGray hover:text-white transition-all">Pricing</Link></li>
                            <li><Link scroll={true} href="/#contact" className="text-textGray hover:text-white transition-all">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Link scroll={true} href="/#pricing">
                            <Button>View Pricing</Button>
                        </Link>
                    </div>
                </div>

                {/* mobile nav */}
                <div className="flex justify-between items-center md:hidden ">
                    <div>
                        <a href="/" className="text-2xl font-bold">
                            <Image src={"/logo.png"} alt="logo" width={50} height={50}></Image>
                        </a>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                        <Link scroll={true} href="/#pricing">
                            <Button>View Pricing</Button>
                        </Link>
                        <button className=" rounded-lg p-1 border border-border transition-all" onClick={toggleNavbar}>
                            {isOpen ? <Image width="32" height="32" src="https://img.icons8.com/ios/50/FFFFFF/delete-sign--v1.png" alt="deleteSign" /> : <Image width="32" height="32" src="https://img.icons8.com/windows/32/FFFFFF/menu--v1.png" alt="menu--v1" />}
                        </button>
                    </div>
                </div>
                {isOpen ?
                    <div className="flex flex-col py-5">
                        <ul className="flex flex-col w-full h-full gap-6 bg-background border border-border rounded-3xl items-center p-5">
                            <li className="border-t-border w-full text-center"><a href="/" className="text-textGray hover:text-white transition-all">Home</a></li>
                            <li className="border-t-border w-full text-center"><a href="/#about" className="text-textGray hover:text-white transition-all">Who We Are?</a></li>
                            <li className="border-t-border w-full text-center"><a href="/#pricing" className="text-textGray hover:text-white transition-all">Pricing</a></li>
                            <li className="border-t-border w-full text-center"><a href="/#contact" className="text-textGray hover:text-white transition-all">Contact</a></li>
                        </ul>
                    </div>
                    :
                    <div className="hidden">

                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar