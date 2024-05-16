import Image from "next/image"
import FeatureTag from "../ui/FeatureTag"
import TopicFade from "@/app/transitions/TopicFade"
import FadeIn from "@/app/transitions/FadeIn"
const WhyUsSection = () => {
    return (
        <section className='py-24 bg-background flex flex-col items-center h-full w-full xl:px-12'>
            <div className='container'>
                <div className='flex flex-col justify-between h-full gap-12'>
                    <TopicFade>
                        <div className='text-center'>
                            <p className='text-sm mb-3 text-textGray'> YOU IMPRESSED WITH US?</p>
                            <h1 className='md:text-6xl text-4xl font-bold'> Why Choose Us?</h1>
                        </div>
                    </TopicFade>
                    <FadeIn>
                        <div className="flex items-center justify-center h-full bg-foreground border border-border rounded-3xl p-12 ">
                            <div className='lg:flex md:flex-row flex-col gap-12 grid md:grid-cols-2 '>
                                <FeatureTag src={"https://img.icons8.com/ios/50/FFFFFF/accuracy--v1.png"} title={"Focus On Results"} description={"We prioritize building a store that gets you sales."} />
                                <FeatureTag src={"https://img.icons8.com/ios/50/FFFFFF/time_2.png"} title={"Fast Turnarounds"} description={"Get your store up and running in a flash!"} />
                                <FeatureTag src={"https://img.icons8.com/ios/50/FFFFFF/trust--v1.png"} title={"Human Touch"} description={"Expect personalized service and attention to detail."} />
                                <FeatureTag src={"https://img.icons8.com/ios/50/FFFFFF/low-price.png"} title={"Affordable Price"} description={"Launch your business without breaking the bank!"} />
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    )
}

export default WhyUsSection