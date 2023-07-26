import Image from "next/image";
import logo from '../../../public/logo.svg';

export const Footer = () => {
  return (
    <footer className="bg-white pb-4">
      <div className="sm:px-4 max-w-[1000px] mx-auto">
        <div className="md:flex md:justify-between md:items-center py-10">
          <div className="w-[100px] mb-4"><Image src={logo} alt='logo image' /></div>
          <ul className="text-sm">
            <li>Web Entertainment Design Inc.</li>
            <li>West Building 3F</li>
            <li>9-99 Sakuragaokacho Shibuya-ku</li>
            <li>Tokyo, Japan 150-0031</li>
            <li>T/99-9999-9999</li>
          </ul>
        </div>
        <p className="text-[10px]">&copy; Web Entertainment Design Inc.</p>
      </div>
    </footer>
  )
}