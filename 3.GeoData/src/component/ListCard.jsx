import { useState } from "react"
import{ createPortal } from "react-dom"
import ModalContent from "./ModalContent"

function ListCard({country}) {
  const [showModal, setShowModel] = useState(false)


  return (
    <>
      <li
      onClick={() => setShowModel(!showModal)}
      className='relative cursor-pointer rounded transition-transfrom duration-300 hover:-translate-y-1 will-change-transform'>
        <h2 className='absolute left-0 top-0 p-2 bg-gray-50 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] text-xl rounded'>{country.name.common}</h2>
        <img src={country.flags.svg} className='w-full h-full object-cover rounded' alt="Countries Flags" />
      </li>
      {showModal && createPortal(<ModalContent country={country} closeModal={() => setShowModel(!showModal)}/>, document.body)}
    </>
  )
}

export default ListCard