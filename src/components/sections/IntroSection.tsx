import CardComponent from "../ui/CardComponent"
import TopicFade from "@/app/transitions/TopicFade"

const IntroSection = () => {
    return (
        <section className='py-24 bg-background flex flex-col items-center  w-full xl:px-24'>
            <div className="container">
                <div className="flex flex-col justify-between gap-6">
                    <TopicFade>
                        <div className='text-center'>
                            <p className='text-sm mb-3 text-textGray'> WE&apos;VE GOT YOU COVERED</p>
                            <h1 className='md:text-6xl text-4xl font-bold'> Enough With the Time-Wasting</h1>
                        </div>
                    </TopicFade>
                    <div className='py-12'>
                        <h1 className='text-3xl font-bold'> Relax while we complete your store.</h1>
                        <div className='grid md:grid-cols-2 lg:grid-cols-2 grid-rows-2 xl:grid-cols-3 py-10 gap-6'>
                            <CardComponent title="Branding Essentials" description="Custom Yet Simple Logo and Name Designed For Your Store." href="https://img.icons8.com/ios/50/FFFFFF/design--v1.png" />
                            <CardComponent title="Sales Branding" description="Exceptionally Branded Store To Maximize Sales." href="https://img.icons8.com/ios/50/FFFFFF/commercial--v1.png" />
                            <CardComponent title="Product Launch" description="30+ Winning Products Added To Store to make Sales." href="https://img.icons8.com/ios/50/FFFFFF/launched-rocket.png" />
                            <CardComponent title="Policy Setup" description="Done For You Policy Pages (Privacy, TOS, Etc..)." href="https://img.icons8.com/material-outlined/24/FFFFFF/terms-and-conditions.png" />
                            <CardComponent title="Site Organization" description="Done For You Collections, Menus, Contact Pages, Etc.." href="https://img.icons8.com/material-outlined/48/FFFFFF/to-do.png" />
                            <CardComponent title="Product Detailing" description="Done For You Product Description and Product Page." href="https://img.icons8.com/ios/50/FFFFFF/edit--v1.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroSection