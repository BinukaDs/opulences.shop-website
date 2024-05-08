import NicheTag from "../ui/NicheTag"

const NichesSection = () => {
    return (
        <section className='py-24 bg-foreground flex flex-col items-center h-full w-full bg-fixed'>
            <div className="container ">
                <div className=' rounded-3xl w-full flex flex-col justify-between items-center gap-12 p-10'>
                    <div className='text-center'>
                        <p className='text-sm mb-3 text-textGray'> YOU&apos;VE GOT A LOT</p>
                        <h1 className='md:text-6xl text-4xl font-bold'> Niches We Offer</h1>
                    </div>
                    <div className='grid grid-cols-3 grid-rows-3 justify-center gap-6'>
                       
                            <NicheTag href="https://img.icons8.com/material-rounded/24/000000/multiple-devices.png" text="Electronics" />
                            <NicheTag href="https://img.icons8.com/ios/50/000000/cat-footprint.png" text="Pets" className="basis-1/2"/>
                            <NicheTag href="https://img.icons8.com/pastel-glyph/64/000000/christmas-decoration-light.png" text="Home Decor/ Home Goods" className="w-full" />

                            <NicheTag href="https://img.icons8.com/fluency-systems-regular/48/000000/strength.png" text="Fitness" />
                            <NicheTag href="https://img.icons8.com/external-outline-andi-nur-abdillah/64/000000/external-Toys-baby-(outline)-outline-andi-nur-abdillah.png" text="Toys"  />
                            <NicheTag href="https://img.icons8.com/ios/50/000000/women-shoe-side-view.png" text="Fashion" />
                    
                            <NicheTag href="https://img.icons8.com/ios/50/000000/mascara.png" text="Cosmetics" />
                            <NicheTag href="https://img.icons8.com/external-line512-zulfa-mahendra/64/000000/external-jewellery-fine-arts-line512-zulfa-mahendra.png" text="Jewellery" className="basis-1/2" />
                            <NicheTag href="https://img.icons8.com/ios/50/000000/babys-room.png" text="Baby" className="w-full" />
                     


                    </div>
                </div>
            </div>
        </section>
    )
}

export default NichesSection