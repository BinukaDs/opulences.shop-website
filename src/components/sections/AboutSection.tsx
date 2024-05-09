import { Card, CardContent, CardHeader } from "../ui/card"
import TopicFade from "@/app/transitions/TopicFade"
import FadeIn from "@/app/transitions/fadein"
const AboutSection = () => {
    return (
        <section className='bg-background flex flex-col items-center  w-full xl:px-24'>
            <div className='container'>
                <TopicFade>
                    <div className="flex flex-col justify-between gap-3">
                        <p className='text-sm text-textGray'>ABOUT US</p>
                        <h1 className='md:text-6xl text-4xl font-bold'>Who We Are?</h1>
                    </div>
                </TopicFade>
                <div className='py-12 grid md:grid-cols-3 w-full justify-between gap-12'>
                    <div>
                        <FadeIn>
                            <Card className="bg-linen border-none text-black rounded-3xl p-3 ">
                                <CardHeader>
                                    <h1 className="text-black text-3xl font-bold ">What We Do?</h1>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg text-black font-bold">We design branded Shopify stores optimized for maximum sales from day one These are the exact same stores people have used to scale to multiple 6 & 7 figures.</p>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    </div>
                    <div className="md:col-span-2">
                        <FadeIn>
                            <Card className="bg-white border-none text-black rounded-3xl p-3 ">
                                <CardHeader>
                                    <h1 className="text-black text-3xl font-bold ">How It Works?</h1>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg text-black font-bold">Grab your store from us, and let us handle the heavy lifting! We&apos;ll craft the entire store for you, from a sleek design and catchy logo to adding 30 hot products. And the cherry on top? You&apos;re looking at sweet profit margins of 70-80% per sale. It&apos;s selling made simple and profitable.</p>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection