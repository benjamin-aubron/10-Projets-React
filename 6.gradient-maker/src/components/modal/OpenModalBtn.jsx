import { useState } from "react"
import { createPortal } from "react-dom"
import Modal from "./Modal"

export default function OpenModalBtn() {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button 
      onClick={() => setShowModal(!showModal)}
      className="bg-blue-700 py-2 px-6 rounded-md min-w- [125px] font-semibold">
        Get the code !
      </button>
      {showModal && createPortal(<Modal closeModal={() => setShowModal(!showModal)}/>, document.body)}
    </>
  )
}
