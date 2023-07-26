import Image from "next/image";
import aboutImage from '../../../public/about.jpg';
import { SectionTitle } from "./SectionTitle";

export const About = () => {
  return (
    <section id="about" className="w-full flex flex-wrap mx-auto sm:mb-20 mb-32">
      <div className="w-[55%] sm:w-full">
        <Image src={aboutImage} alt='about image' className="h-[400px] object-cover w-full" />
      </div>
      <div className="w-[45%] sm:w-full px-[5%] pt-44 sm:pt-5 text-sm sm:px-4">
        <SectionTitle sectionTitle="ABOUT">私たちについて</SectionTitle>
        <p className="leading-7">テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト</p>
        <p className="leading-7">テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト</p>
        <p className="leading-7">テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト</p>
      </div>
    </section>
  )
}