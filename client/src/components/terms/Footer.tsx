import Image from "next/image"
import { Button } from "@/components/ui/button";
import { Cinzel_Decorative } from "next/font/google";
const Cinzel = Cinzel_Decorative({ subsets: ["latin"], weight: ["400", "700", "900"], variable: '--font-Cinzel' });

const TermsFooter = () => {
    return (
        <footer className='flex items-center justify-center md:p-20 bg-foreground w-full border-t border-border '>
            <div className="md:container">
                <div className='flex flex-col md:flex-row justify-between items-center  py-10 border-b'>
                    <div className="flex flex-col justify-center items-center md:items-start gap-6 ">
                        <div className="flex flex-col justify-center items-center md:items-start gap-3 ">
                            <a href="/">
                                <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                                    <Image src={"/logo.png"} alt="logo" width={50} height={50}></Image>
                                    <h1 className={`${Cinzel.variable} font-Cinzel`}>Opulence</h1>
                                </div>
                            </a>
                        </div>
                        <ul className="flex flex-col md:flex-row md:space-x-8 text-center">

                            <li>
                                <div className="flex justify-between w-full gap-6">
                                    <a href="/" className="text-textGray hover:text-white transition-all">Home</a>
                                    <a href="/#about" className="text-textGray hover:text-white transition-all">Who We Are?</a>
                                    <a href="/#pricing" className="text-textGray hover:text-white transition-all">Pricing</a>
                                    <a href="/#contact" className="text-textGray hover:text-white transition-all">Contact</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex md:flex-col flex-row w-full md:justify-end md:items-center justify-between items-center gap-6 md:py-0 py-5">
                            <li className="text-textGray hover:text-white transition-all"><a href="/"><Button>Back To Top</Button></a></li>
                            <li className="text-textGray hover:text-white transition-all"><a href="/terms"> Terms Of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between flex-col md:flex-row items-center py-5">
                    <p className="text-textGray text-sm">Developed By <a href="https://www.binukads.me" className="underline hover:text-white transition-all" target="_blank">Binuka Senadheera</a>.</p>
                    <p className="text-white text-sm mt-3 md:mt-0">© 2024 Opulences.shop. All rights reserved.</p>

                </div>
            </div >
        </footer >
    )
}

export default TermsFooter