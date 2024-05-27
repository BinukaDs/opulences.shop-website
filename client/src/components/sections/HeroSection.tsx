import { Button } from "../ui/button"
import Image from "next/image"
import TopicFade from "@/app/transitions/TopicFade"
import FadeIn from "@/app/transitions/FadeIn"
const HeroSection = () => {
    return (
        <section className='rounded-b-3xl h-full md:py-24 flex items-center w-full bg-foreground border-b'>
            <div className='container'>
                <div className="md:flex hidden flex-col justify-between gap-6 h-full xl:px-24">
                    <div>
                        <TopicFade>
                            <div className='px-32'>
                                <h1 className='text-6xl text-center font-bold'>Build Your Dream Store <br /> With Us!</h1>
                                <p className="text-textGray text-center py-5 xl:px-32">Lorem ipsum dolor sit amet consectetur. Blandit elementum proin sit egestas euismod. Cras amet nibh tempus <br /> pellentesque.</p>
                            </div>
                        </TopicFade>
                        <FadeIn>

                            <div className='flex justify-center gap-6 items-center '>
                                <Button>View Pricing</Button>
                                <Button className="bg-white hover:bg-white/5 bg-opacity-10 text-white px-8 ">About Us</Button>
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

                            <h1 className='text-4xl text-center font-bold'>Build Your Dream Store, With Us!</h1>
                            <h1 className='text-4xl text-center font-bold mt-2'></h1>
                            <p className="text-textGray text-center py-5">Lorem ipsum dolor sit amet consectetur. Blandit elementum proin sit egestas euismod. Cras amet nibh tempus pellentesque.</p>
                        </div>
                        <div className='flex flex-col justify-center gap-6 items-center pb-10'>
                            <Button className="w-full">View Pricing</Button>
                            <Button className="bg-white hover:bg-white/5 bg-opacity-10 text-white py-2 w-full">About Us</Button>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default HeroSection