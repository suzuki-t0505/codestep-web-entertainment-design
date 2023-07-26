import Image from "next/image";
import logo from '../../../public/logo.svg';

export const Header = () => {
  return (
    <header className="flex justify-between h-[80px] text-sm">
      <div className="flex flex-wrap mx-auto max-w-[1032px] w-full gap-x-10 items-center px-4">
        <h1 className="w-[100px]"><a href="#"><Image src={logo} alt='logo image' /></a></h1>
        <nav>
          <ul className="flex items-center gap-x-6">
            <li><a href="#news">NEWS</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#business">BUSINESS</a></li>
            <li><a href="#company">COMPANY</a></li>
          </ul>
        </nav>
      </div>
      <a href="#" className="inner-block h-hull bg-black text-white w-[200px] text-center align-bottom leading-[80px] sm:hidden">お問い合わせ</a>
    </header>
  )
}