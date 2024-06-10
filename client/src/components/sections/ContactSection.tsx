import { Button } from "../ui/button"
import Image from "next/image"
import FadeIn from "@/app/transitions/FadeIn"
import TopicFade from "@/app/transitions/TopicFade"
import "./slider.css"
const ContactSection = () => {
    return (
        <section className='py-24 bg-background flex flex-col items-center h-full w-full xl:px-12 ' id="contact">
            <div className="container">
                <div className="flex flex-col gap-12 justify-between items-center">
                    <TopicFade>
                        <div className='text-center'>
                            <p className='text-sm mb-3 text-textGray'>REACH US FOR ANY INQUIRY!</p>
                            <h1 className='md:text-6xl text-4xl font-bold'> Contact Us</h1>
                        </div>
                    </TopicFade>
                    <FadeIn>
                        <div className="card-bg border border-border rounded-3xl w-full md:px-24 md:py-12 p-5">
                            <div className="md:flex justify-between items-end hidden w-full">
                                <div className="flex flex-col w-2/3  justify-end h-full items-center md:items-start gap-12">
                                    <div className="flex flex-col gap-3">
                                        <div>
                                            <Image src={"/discord.png"} alt="web icon" width={60} height={60} />
                                        </div>
                                        <h1 className='md:text-4xl text-4xl font-bold text-center md:text-start'>Join Our Discord Community!</h1>
                                        <p>As you&apos;ll have gathered, we&apos;re open and honest and would love to have you join our discord server.</p>
                                    </div>
                                    <Button className="bg-white hover:bg-white/5 bg-opacity-10 text-white text-md" size={"lg"}>Join the Community</Button>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between items-center md:hidden gap-12">
                                <div>
                                    <Image src={"/discord.png"} alt="web icon" width={100} height={100} />
                                </div>
                                <div className="flex flex-col  justify-between h-full items-center md:items-start gap-12">
                                    <h1 className='text-3xl font-bold text-center md:text-start'>Join Our Discord Community to Discover Ideas!</h1>
                                    <a href="https://discord.gg/9cmZVr8KMf" target="_blank"><Button className="bg-white w-full hover:bg-white/5 bg-opacity-10 text-white text-md" size={"lg"}>Join the Community</Button></a>
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