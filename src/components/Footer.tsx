import Image from "next/image"

const Footer = () => {
    return (
        <footer className='flex items-center justify-center bg-black w-full border-t border-textGray'>
            <div className="container">
                <div className='flex flex-col md:flex-row justify-between items-center md:px-24 py-10'>
                    <div className="flex flex-col justify-center items-center md:items-start gap-6">
                        <div className="flex flex-col justify-center items-center md:items-start gap-3">
                            <a href="/">
                                <Image src={"/logo.png"} alt="logo" width={50} height={50}></Image>
                            </a>
                            <p className="text-white">Copyright © 2024. Opulences.shop.</p>
                        </div>
                        <ul className="flex flex-col md:flex-row md:space-x-8 text-center">

                            <li>
                                <div className="flex justify-between w-full gap-6">
                                    <a href="/" className="text-textGray hover:text-white transition-all">Home</a><a href="/#about" className="text-textGray hover:text-white transition-all">Who We Are?</a>
                                </div>
                            </li>
                            <li>
                                <div className="flex justify-between w-full gap-6">
                                    <a href="/#pricing" className="text-textGray hover:text-white transition-all">Pricing</a>
                                    <a href="/contact" className="text-textGray hover:text-white transition-all">Contact</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className=" flex md:flex-col flex-row w-full md:justify-end md:items-end justify-between items-center md:gap-6 gap-12 md:py-0 py-5">
                            <li className="text-textGray hover:text-white transition-all">Back To Top</li>
                            <li className="text-textGray hover:text-white transition-all">Terms Of Service</li>
                        </ul>
                    </div>
                </div>
            </div >
        </footer >
    )
}

export default Footer