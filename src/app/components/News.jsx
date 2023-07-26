import { SectionTitle } from "./SectionTitle"

export const News = () => {
  return (
    <section id="news" className="sm:px-4 max-w-[1000px] mx-auto sm:mb-20 mb-32">
      <SectionTitle sectionTitle="NEWS">ニュース</SectionTitle>
      <ul className="flex flex-wrap justify-between text-sm">
        <li className="py-2 md:pr-5 sm:w-full sm:mb-2">
          <div className="mb-4">
            <span>2021.01.01</span>
            <span className="ml-2 text-xs bg-black text-white px-2 py-1">NEWS</span>
          </div>
          <p>タイトルタイトルタイトルタイトル</p>
        </li>
        <li className="py-2 md:px-5 md:border-l md:border-black sm:w-full sm:mb-2">
          <div className="mb-4">
            <span>2021.01.01</span>
            <span className="ml-2 text-xs bg-black text-white px-2 py-1">PRESS</span>
          </div>
          <p>タイトルタイトルタイトルタイトル</p>
        </li>
        <li className="py-2 md:pl-5 md:border-l md:border-black sm:w-full sm:mb-2">
          <div className="mb-4">
            <span>2021.01.01</span>
            <span className="ml-2 text-xs bg-black text-white px-2 py-1">NEWS</span>
          </div>
          <p>タイトルタイトルタイトルタイトル</p>
        </li>
      </ul>

    </section>
  )
}