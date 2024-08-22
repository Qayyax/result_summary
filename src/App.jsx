import Feedback from "./components/Feedback"
import StatsDisplay from "./components/StatsDisplay"
import data from "./data.json"

function App() {

  return (
    <>
      <div className="lg:flex lg:justify-center lg:items-center lg:bg-[#ECF2FF] lg:h-screen">
        <div 
          className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg lg:max-h-[512px]
          lg:rounded-l-3xl"
        >
          <Feedback data={data} />
          <StatsDisplay data={data} />
        </div>
      </div>
    </>
  )
}

export default App
