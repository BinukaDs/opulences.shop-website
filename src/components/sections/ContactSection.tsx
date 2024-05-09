import { Button } from "../ui/button"
import Image from "next/image"
import FadeIn from "@/app/transitions/FadeIn"
import TopicFade from "@/app/transitions/TopicFade"
const ContactSection = () => {
    return (
        <section className='py-24 bg-background flex flex-col items-center h-full w-full xl:px-48'>
            <div className="container">
                <div className="flex flex-col gap-12 justify-between items-center">
                    <TopicFade>
                        <div className='text-center'>
                            <p className='text-sm mb-3 text-textGray'>REACH US FOR ANY INQUIRY!</p>
                            <h1 className='md:text-6xl text-4xl font-bold'> Contact Us</h1>
                        </div>
                    </TopicFade>
                    <FadeIn>
                        <div className="bg-foreground rounded-3xl w-full md:p-12 p-5">
                            <div className="md:flex justify-between items-center hidden">
                                <div className="flex flex-col  justify-between h-full items-center md:items-start gap-24">
                                    <h1 className='md:text-4xl text-4xl font-bold text-center md:text-start'>Join Our Discord Community to Discover Ideas!</h1>
                                    <Button className="bg-white hover:bg-white/5 bg-opacity-10 text-white text-md" size={"lg"}>Join the Community</Button>
                                </div>
                                <div>
                                    <Image src={"/discord.png"} alt="web icon" width={200} height={200} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between items-center md:hidden gap-12">
                                <div>
                                    <Image src={"/discord.png"} alt="web icon" width={100} height={100} />
                                </div>
                                <div className="flex flex-col  justify-between h-full items-center md:items-start gap-12">
                                    <h1 className='text-3xl font-bold text-center md:text-start'>Join Our Discord Community to Discover Ideas!</h1>
                                    <Button className="bg-white w-full hover:bg-white/5 bg-opacity-10 text-white text-md" size={"lg"}>Join the Community</Button>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

            </div>
        </section>
    )
}

export default ContactSection