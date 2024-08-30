import { useDispatch } from "react-redux"
import { hidePreview } from "../features/preview"

function ButtonTabs({id , toggleTab, buttonContent, imgURL}) {

  const dispatch = useDispatch()

  return (
    <button 
    onClick={() => {
      toggleTab(id)
      dispatch(hidePreview())
    }}
    className='flex items-center px-5 py-3 hover:bg-slate-600 focus:bg-slate-600 outline-none'>
      <img src={imgURL} alt="" className="w-5"/>
      <span className="ml-3 text-100 text-md">{buttonContent}</span>
    </button>
  )
}

export default ButtonTabs