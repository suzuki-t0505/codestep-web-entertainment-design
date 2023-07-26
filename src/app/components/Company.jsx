import Image from "next/image";
import companyImage from '../../../public/company.jpg';
import { SectionTitle } from "./SectionTitle";

export const Company = () => {
  return (
    <section id="company" className="sm:px-4 max-w-[1000px] mx-auto sm:mb-0 mb-32 text-sm md:relative md:h-[750px]">
      <div className="py-24 px-[6%] bg-white w-[55%] md:absolute sm:w-full sm:mb-5">
        <SectionTitle sectionTitle="COMPANY">会社情報</SectionTitle>
        <dl className="flex flex-wrap items-center gap-y-2">
          <dt className="w-[20%]">会社名</dt>
          <dd className="w-[80%]">ウェブエンターテイメントデザイン株式会社</dd>
          <dt className="w-[20%]">所在地</dt>
          <dd className="w-[80%]">東京都渋谷区桜丘町99-9 West Building 3F</dd>
          <dt className="w-[20%]">代表</dt>
          <dd className="w-[80%]">ＸＸＸＸＸＸ</dd>
          <dt className="w-[20%]">設立</dt>
          <dd className="w-[80%]">2021年1月1日</dd>
          <dt className="w-[20%]">資本金</dt>
          <dd className="w-[80%]">3,000,000円</dd>
          <dt className="w-[20%]">事業内容</dt>
          <dd className="w-[80%]">Web制作・マーケティング</dd>
          <dd className="w-[80%] ml-[20%]">インターネットメディア事業</dd>
          <dd className="w-[80%] ml-[20%]">プロモーション企画・制作</dd>
          <dd className="w-[80%] ml-[20%]">ソーシャル企画・運営</dd>
        </dl>
      </div>
      <div className="w-[53%] sm:w-full md:absolute md:right-0 md:top-28">
        <Image src={companyImage} alt='company image' className="w-full h-[400px] object-cover" />
      </div>
    </section>
  )
}