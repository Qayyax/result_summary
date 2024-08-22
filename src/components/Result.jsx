export default function Result({ average }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-white rounded-full 
  w-32 h-32 bg-gradient-to-b from-[#4D21C9] via-[#2521C9]-200 to-[#2521C9]-200"
    >
      <p className="text-5xl font-extrabold">{average}</p>
      <p className="text-[#CAC9FF]">of 100</p>
    </div>
  )
}
