import Image from "next/image";
import mainvisual from '../../../public/mainvisual.jpg';

export const Mainvisual = () => {
  return (
    <div className="w-full sm:mb-20 mb-32">
      <Image src={mainvisual} alt='mainvisual image' className="object-cover h-[calc(100vh-80px)]" />
    </div>
  )
}