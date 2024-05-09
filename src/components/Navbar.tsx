import { Button } from "./ui/button"
import Image from "next/image"

const Navbar = () => {
    return (
        <nav className="py-5 bg-foreground ">
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
                            <li><a href="/" className="text-textGray hover:text-white transition-all">Home</a></li>
                            <li><a href="/#about" className="text-textGray hover:text-white transition-all">Who We Are?</a></li>
                            <li><a href="/#pricing" className="text-textGray hover:text-white transition-all">Pricing</a></li>
                            <li><a href="/contact" className="text-textGray hover:text-white transition-all">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <Button>View Pricing</Button>
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
                        <button className=" rounded-lg p-1 border border-border"><Image width="32" height="32" src="https://img.icons8.com/windows/32/FFFFFF/menu--v1.png" alt="menu--v1"/></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar