'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

const TermsNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    return (
        <nav className="py-5 bg-foreground border border-b">
            <div className="container">
                {/* desktop navbar */}
                <div className="justify-between hidden md:flex items-center xl:px-24">
                    <div>
                        <a href="/">
                            <Image src={"/logo.png"} alt="logo" width={50} height={50}></Image>
                        </a>
                    </div>
                   
                    <div>
                        <a href="/"><Button>Go Back</Button></a>
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
                        <Button>View Pricing</Button>
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
                            <ul className="flex flex-col w-full bg-background border border-border  space-x-8">
                                <li><a href="/" className="text-textGray hover:text-white transition-all">Home</a></li>
                                <li><a href="/#about" className="text-textGray hover:text-white transition-all">Who We Are?</a></li>
                                <li><a href="/#pricing" className="text-textGray hover:text-white transition-all">Pricing</a></li>
                                <li><a href="/contact" className="text-textGray hover:text-white transition-all">Contact</a></li>
                            </ul>
                        </div>}
            </div>
        </nav>
    )
}

export default TermsNavbar