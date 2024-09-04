import Gradient from "./components/Gradient"
import { useSelector } from "react-redux"
import ColorInput from "./components/inputs/ColorInput"
import AddRemoveColor from "./components/inputs/AddRemoveColor"
import RangeAngle from "./components/inputs/RangeAngle"
import SelectColor from "./components/inputs/SelectColor"
import RangeColorPosition from "./components/inputs/RangeColorPosition"
import OpenModalBtn from "./components/modal/OpenModalBtn"

function App() {

  const gradientValues = useSelector(state => state.gradient)

  return <div className="relative text-slate-100 max-w-4xl mx-auto mt-20 p-4 border border-slate-400 flex">
    <div className="w-1/2 p-4 pr-8">
      <h1 className="text-center text-xl">Gradient Generator</h1>
      <p className="text-center mb-6">Bring style to your apps.</p>

      <div className="flex mb-2">
        {gradientValues.colors.map(el => (<ColorInput id={el.id} color={el.value} key={el.id}/>))}
      </div>  

      <div className="mb-5">
        <AddRemoveColor action={"remove"} text={"-"}/>
        <AddRemoveColor action={"add"} text={"+"}/>
      </div>

      <p>Pick and change a color's position</p>
      <SelectColor/>

      <p>Color's position</p>
      <RangeColorPosition/>

      <p>Gradient global angle</p>
      <RangeAngle/>

      <OpenModalBtn/>
    </div>

  <Gradient/>

  </div>
}

export default App
