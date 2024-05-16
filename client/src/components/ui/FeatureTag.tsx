import Image from "next/image"

const FeatureTag = ({ title, description, src }: any) => {
    return (
        <div className="items-center">
            <div className='flex flex-col items-start justify-center h-full'>
                <Image src={src} alt="web icon" width={32} height={32} />
                <div className="flex flex-col items-start justify-center h-full pt-5">
                    <h1 className='text-2xl font-bold mb-1 text-start'>{title}</h1>
                    <p className='text-textGray text-start'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureTag