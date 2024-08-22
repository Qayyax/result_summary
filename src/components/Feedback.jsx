import Result from "./Result";

export default function Feedback({ data }) {
  const totalScore = data.map(item => item.score)
  const average = Math.floor(totalScore.reduce((acc, curr) => acc + curr, 0) / totalScore.length)

  return (
    <div
      className="text-white flex flex-col items-center bg-purple-700 rounded-b-3xl
      px-14 pt-6 pb-10 bg-gradient-to-b from-[#7755FF] via-[#6943FF] to-[#2F2CE9]
      gap-y-6 lg:rounded-3xl lg:px-20 lg:justify-center"
    >
      <h3>
        Your Result
      </h3>
      <Result average={average} />
      <div
        className="flex flex-col item-center gap-y-2 justify-center text-center"
      >
        <h2 className="font-bold text-[1.5em]">Great</h2>
        <p
          className="text-[#CAC9FF]"
        >Your performace exceed 65% of the people conducting the test here!</p>
      </div>
    </div>
  )
}
