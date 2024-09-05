import play from "../../assets/play-icon.svg"
import pause from "../../assets/pause-icon.svg"
import {useDispatch, useSelector} from "react-redux"
import { togglePlay } from "../../features/playlist"

export default function TogglePlayButton() {
  const playlist = useSelector(state => state.playlist)
  const dispatch = useDispatch()

  return (
    <button 
    onClick={() => dispatch(togglePlay())}
    className="w-14 h-14 bg-slate-50 rounded-full flex justify-center items-center shadow-md outline-none">
      <img src={playlist.play ? pause : play} className="w-20 h-20" alt="" />
    </button>
  )
}
