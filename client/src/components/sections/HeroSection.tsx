import { Button } from "../ui/button"
import Image from "next/image"
import TopicFade from "@/app/transitions/TopicFade"
import FadeIn from "@/app/transitions/FadeIn"
import Link from "next/link"

const HeroSection = () => {
    return (
        <section className='h-full md:py-48 pt-48 flex items-center w-full bg-background border-b' id="top">
            <div className='container'>
                <div className="md:flex hidden flex-col justify-between gap-6 h-full xl:px-24">
                    <div>
                        <TopicFade>
                            <div className='px-32 flex flex-col justify-center items-center'>
                                <h1 className='text-6xl text-center font-bold bg-gradient-to-r from-white via-gray-100 to-zinc-500 inline-block text-transparent bg-clip-text'>Build Your Dream Store <br /> With Us!</h1>
                                <p className="text-textGray text-center py-5 xl:px-32">Lorem ipsum dolor sit amet consectetur. Blandit elementum proin sit egestas euismod. Cras amet nibh tempus <br /> pellentesque.</p>
                            </div>
                        </TopicFade>
                        <FadeIn>

                            <div className='flex justify-center gap-6 items-center '>
                                <Link scroll={true} href="/#pricing">
                                    <Button>View Pricing</Button>
                                </Link>
                                <Link href="#about">
                                    <Button className="bg-white hover:bg-white/5 bg-opacity-10 text-white px-8 ">About Us</Button>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                    <FadeIn>
                        <div className="py-5">
                            <Image src={"/mockups/heromockup.png"} alt="mockup" height={1080} width={1920}></Image>
                        </div>
                    </FadeIn>
                </div>

                {/* mobile */}
                <div className="md:hidden flex flex-col justify-between gap-6 h-full">
                    <div className="pb-5">
                        <Image src={"/mockups/heromockup.png"} alt="mockup" height={1080} width={1920}></Image>
                    </div>
                    <div>
                        <div className=''>

                            <h1 className='text-4xl text-center font-bold bg-gradient-to-r from-white via-gray-100 to-zinc-500 inline-block text-transparent bg-clip-text'>Build Your Dream Store, With Us!</h1>
                            <h1 className='text-4xl text-center font-bold mt-2'></h1>
                            <p className="text-textGray text-center py-5">lorem ipsum dolor sit amet consectetur. Blandit elementum proin sit egestas euismod. Cras amet nibh tempus pellentesque.</p>
                        </div>
                        <div className='flex flex-col justify-center gap-6 items-center pb-10'>
                            <Link scroll={true} href="/#pricing" className="w-full">
                                <Button className="w-full">View Pricing</Button>
                            </Link>
                            <Link href="#about" className="w-full">
                                <Button className="bg-white hover:bg-white/5 bg-opacity-10 text-white px-8 w-full">About Us</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default HeroSection