export const SectionTitle = ({sectionTitle, children}) => {
  return (
    <h2 className="after:bg-black after:block after:w-[40px] after:h-[1px] mb-12">
      <span className="text-4xl block mb-2 tracking-[0.3em]">{ sectionTitle }</span>
      <span className="block text-sm mb-6">{ children }</span>
    </h2>
  )
}