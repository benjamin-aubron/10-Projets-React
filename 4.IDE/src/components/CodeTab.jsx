import { useSelector } from "react-redux"

function CodeTab() {

  const tabsState = useSelector(state => state.tabs)

  return (
    <textarea
    spellCheck = "false"
    className="bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline-none resize-none"
    >
    </textarea>
  )
}

export default CodeTab