import Stats from "./Stats"

export default function StatsDisplay({ data }) {
  return (
    <div
      className="p-2 flex flex-col items-start justify-center px-10 w-full lg:p-10"
    >
      <h1
        className="text-[#303B59] font-bold size-6 text-xl mb-7"
      >
        Summary</h1>
      <div
        className="flex flex-col gap-y-4 w-full mb-10"
      >
        {data.map((item, index) => {
          return (<Stats
            key={index}
            category={item.category}
            score={item.score}
            icon={item.icon}
          />)
        })}
      </div>
      <button
        className="bg-[#303B59] text-white rounded-3xl
        w-full py-4 hover:bg-gradient-to-b hover:from-[#4D21C9] hover:via-[#2521C9]/80 hover:to-[#2521C9]/80 
        cursor-pointer"
      >
        Continue
      </button>
    </div>
  )

}
