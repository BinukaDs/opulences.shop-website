import Image from "next/image"

const NicheTag = ({href, text}:any) => {
  return (
    <div className='bg-white text-black flex items-center gap-3 rounded-xl p-3'>
        <div>
        <Image src={href} alt="web icon" width={30} height={30} />
        </div>
        <div>
            <p className='text-xl font-bold'>{text}</p>
        </div>
    </div>
  )
}

export default NicheTag