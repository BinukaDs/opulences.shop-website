'use client'
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from "../ui/card"
import { Button } from "../ui/button"
import Image from "next/image"
import TopicFade from "@/app/transitions/TopicFade"
import FadeIn from "@/app/transitions/FadeIn"
import { useState } from "react"
import "./slider.css"
import { PuffLoader } from 'react-spinners'
import { useRouter } from 'next/navigation'

const PricingSection = () => {

    const router = useRouter()
    const [loadingStates, setLoadingStates] = useState({
        button1: false,
        button2: false,
    });
    const BASEURL = process.env.NEXT_PUBLIC_BASE_URL

    const purchase = (e: any) => {

        let item: { id: number; price: number; name: string }[] = []
        const id = e.target.id
        setLoadingStates((prevState) => ({
            ...prevState,
            [id]: true,
        }));
        if (id === "button1") {
            item = [{ id: 1, price: 70, name: 'Regular Bundle' }]
            console.log(item)
        } else if (id === "button2") {
            item = [{ id: 1, price: 140, name: 'Advanced Bundle' }]
            console.log(item)
        }

        console.log("BaseURL: ", BASEURL)

        fetch(`${BASEURL}/create-checkout-session/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
            body: JSON.stringify({
                item
            })
        }).then(res => {
            setLoadingStates((prevState) => ({
                ...prevState,
                [id]: false,
            }));
            if (res.ok){
                console.log(res)
                return res.json()
            }
            return res.json().then(json => Promise.reject(json))
        }).then(({ url }) => {
            router.push(url)
            console.log(url)
        }).catch(error => {
            console.error(error)
            setLoadingStates((prevState) => ({
                ...prevState,
                [id]: false,
            }));
        })
    }


    const Feature = ({ text, type }: any) => {
        return (
            <div className="">
                <div className="flex justify-start items-center gap-6 ">
                    {type === "regular" ? (
                        <div className="rounded-full border border-textGray p-2 ">

                            <Image src={"https://img.icons8.com/ios-glyphs/30/d0d0d0/checkmark--v1.png"} alt="web icon" width={24} height={24} />
                        </div>

                    ) : (
                        <div className="rounded-full flex justify-center items-center bg-slate-400 bg-opacity-20 p-2 ">
                            <Image src={"https://img.icons8.com/ios-glyphs/30/000000/checkmark--v1.png"} alt="web icon" width={24} height={24} />
                        </div>
                    )}
                    <div>
                        <h1 className={` ${type === "regular" ? "text-textGray" : "text-textMuted"} md:text-lg text-sm`}>{text}</h1>
                    </div>

                </div>
            </div>
        )
    }

    return (
        <section className='py-24 bg-background flex flex-col items-center h-full w-full px-0 xl:px-48' id="pricing">
            <div className="container">
                <div className="flex flex-col gap-12 justify-between items-center">
                    <TopicFade>
                        <div className='text-center'>
                            <p className='text-sm mb-3 text-textGray'>CHOOSE WHAT YOU FIT</p>
                            <h1 className='md:text-6xl text-4xl font-bold'> Pricing</h1>
                        </div>
                    </TopicFade>
                    <div className="flex flex-col md:flex-row justify-center items-start w-full gap-24">
                        <div className="w-full h-full">
                            <FadeIn>
                                <Card className="card-bg border border-border flex flex-col  p-2 h-full">
                                    <CardHeader className="flex justify-start items-start">
                                        <div className="rounded-full border border-textGray p-2">
                                            <Image src={"https://img.icons8.com/ios-filled/50/d0d0d0/quick-mode-on--v1.png"} alt="web icon" width={30} height={30} />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="items-center">

                                        <CardDescription className="text-textGray">One Time Payment</CardDescription>
                                        <CardTitle><h1 className="md:text-5xl text-4xl font-bold mt-1">70€</h1></CardTitle>
                                        <div>
                                            <h1 className="mt-5 font-bold text-white md:text-3xl">Regular Bundle</h1>
                                            <p className="text-textGray mt-2">
                                                Ideal for small businesses and individual projects.
                                            </p>
                                        </div>
                                        <div className="flex justify-between gap-2 items-center">
                                            <div className="flex flex-col justify-start py-10 gap-6">
                                                <Feature type={"regular"} text={"Human-made Professional Website"} />
                                                <Feature type={"regular"} text={"30 Winning Products"} />
                                                <Feature type={"regular"} text={"9 Niches to Select"} />
                                                <Feature type={"regular"} text={"$50k+ Courses to help in your journey"} />
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="w-full flex flex-col justify-between items-center">
                                        <Button className="w-full text-lg" onClick={purchase} id="button1" disabled={loadingStates.button1}>{loadingStates.button1 ?
                                            <PuffLoader size={40} /> : "Purchase"
                                        }</Button>
                                        <div className="flex justify-center items-center gap-1 ">
                                            <p className="text-textMuted  text-xs">Powered By</p>
                                            <Image src={"/stripe.svg"} alt="web icon" width={30} height={30} />
                                        </div>
                                    </CardFooter>
                                </Card>

                            </FadeIn>
                        </div>

                        <div className="w-full h-full">
                            <FadeIn>
                                <Card className="bg-linen flex flex-col p-2 border border-border">
                                    <CardHeader className="flex justify-start items-start">
                                        <div className="rounded-full bg-slate-400 bg-opacity-20 p-2">
                                            <Image src={"https://img.icons8.com/ios-filled/50/000000/quick-mode-on--v1.png"} alt="web icon" width={30} height={30} />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="items-center">

                                        <CardDescription className="text-textMuted">One Time Payment</CardDescription>
                                        <CardTitle><h1 className="md:text-5xl text-4xl text-black font-bold mt-1">140€</h1></CardTitle>
                                        <div>
                                            <h1 className="mt-5 font-bold  md:text-3xl text-black">Advanced Bundle</h1>
                                            <p className="text-textMuted mt-2">
                                                Perfect for growing businesses.
                                            </p>
                                        </div>
                                        <div className="flex flex-col justify-start py-10 gap-6">
                                            <Feature type={"advanced"} text={"Everything in the regular bundle"} />
                                            <Feature type={"advanced"} text={"40 Extra winning products"} />
                                            <Feature type={"advanced"} text={"The real world E-com Course"} />

                                        </div>
                                    </CardContent>
                                    <CardFooter className="w-full flex flex-col justify-between items-center">
                                        <Button className="w-full bg-black hover:bg-black/80 text-white text-lg" onClick={purchase} id="button2" disabled={loadingStates.button2}>
                                            {loadingStates.button2 ?
                                                <PuffLoader size={40} color="#FFF" /> : "Purchase"
                                            }</Button>
                                        <div className="flex justify-center items-center gap-1">
                                            <p className="text-textMuted  text-xs">Powered By</p>
                                            <Image src={"/stripe-black.svg"} alt="web icon" width={30} height={30} />
                                        </div>
                                    </CardFooter>
                                </Card>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection