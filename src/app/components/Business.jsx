import Image from "next/image";
import business1 from '../../../public/business1.jpg';
import business2 from '../../../public/business2.jpg';
import business3 from '../../../public/business3.jpg';
import business4 from '../../../public/business4.jpg';
import { SectionTitle } from "./SectionTitle";

export const Business = () => {
  return (
    <section id="business" className="sm:px-4 max-w-[1000px] mx-auto sm:mb-20 mb-32 text-sm">
      <SectionTitle sectionTitle="BUSINESS">事業内容</SectionTitle>
      <div className="md:px-[10%] flex flex-wrap justify-between">
        <div className="w-[46%] sm:w-full md:mt-24">
          <div className="mb-12 sm:mb-7">
            <p className="before:content-['-'] before:mr-2 mb-2">Web制作・マーケティング</p>
            <Image src={business1} alt='business1 image' className="w-full" />
          </div>
          <div className="sm:mb-7">
            <p className="before:content-['-'] before:mr-2 mb-2">インターネットメディア事業</p>
            <Image src={business2} alt='business2 image' className="w-full" />
          </div>
        </div>
        <div className="w-[46%] sm:w-full">
          <div className="mb-12 sm:mb-7">
            <p className="before:content-['-'] before:mr-2 mb-2">プロモーション企画・制作</p>
            <Image src={business3} alt='business3 image' className="w-full" />
          </div>
          <div>
            <p className="before:content-['-'] before:mr-2 mb-2">ソーシャル企画・運営</p>
            <Image src={business4} alt='business4 image' className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
