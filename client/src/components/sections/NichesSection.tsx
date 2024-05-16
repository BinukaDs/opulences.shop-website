import NicheTag from "../ui/NicheTag"
import FadeIn from "@/app/transitions/FadeIn"
import TopicFade from "@/app/transitions/TopicFade"
import './slider.css'
const NichesSection = () => {
    return (
        <section className='py-24 bg-background flex flex-col items-center h-full w-full bg-fixed'>
            <div className="md:container ">
                <div className=' rounded-3xl w-full flex flex-col justify-between items-center gap-12 p-10'>
                    <TopicFade>
                        <div className='text-center'>
                            <p className='text-sm mb-3 text-textGray'> YOU&apos;VE GOT A LOT</p>
                            <h1 className='md:text-6xl text-4xl font-bold'> Niches We Offer</h1>
                        </div>
                    </TopicFade>
                    
                        <div className='container fade-sides'>
                            <div className="gallery overflow-hidden whitespace-nowrap transition-all" >
                                <div className="scrolling-wrapper-text text-textMuted flex justify-between gap-12 animate-scrollRight">
                                    <NicheTag text="Electronics" />
                                    <NicheTag text="Pets"/>
                                    <NicheTag text="Home Decor / Home Goods"/>
                                    <NicheTag text="Fitness" />
                                    <NicheTag text="Toys" />
                                    <NicheTag text="Fashion" />
                                    <NicheTag text="Cosmetics" />
                                    <NicheTag text="Jewellery"  />
                                    <NicheTag text="Baby"/>
                                    <NicheTag text="Electronics" />
                                    <NicheTag text="Pets"/>
                                    <NicheTag text="Home Decor/ Home Goods"/>
                                    <NicheTag text="Fitness" />
                                    <NicheTag text="Toys" />
                                    <NicheTag text="Fashion" />
                                    <NicheTag text="Cosmetics" />
                                    <NicheTag text="Jewellery"  />
                                    <NicheTag text="Baby"/>
                                </div>
                            </div>
                        </div>
                   
                </div>
            </div>
        </section >
    )
}

export default NichesSection