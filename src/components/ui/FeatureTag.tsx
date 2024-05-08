import Image from "next/image"

const FeatureTag = ({title, description, src}:any) => {
    return (
        <div>
            <div className='flex flex-col items-center justify-between h-full'>
                    <Image src={src} alt="web icon" width={50} height={50} />
                <div className="flex flex-col items-center justify-between h-full">
                    <h1 className='text-3xl font-bold py-4 text-center'>{title}</h1>
                    <p className='text-textGray text-center'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureTag