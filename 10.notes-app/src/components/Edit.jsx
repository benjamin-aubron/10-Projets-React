import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { nanoid } from "nanoid"
import {addNotesFromUser, editNote} from "../features/notes"
import { useParams } from "react-router-dom"

export default function Edit() {
  const notes = useSelector(state => state.notes)
  const dispatch = useDispatch()
  const [inputState, setInputState] = useState({
    title:"",
    subtitle:"",
    bodyText:""
  })
  const [showValidation, setShowValidation] = useState({
    title:false,
    subtitle:false,
    bodyText:false
  })

  const {id} = useParams()

  useEffect(() => {
    if(id && notes.list){
      setInputState({
        title: notes.list.find(note => note.id === id).title,
        subtitle: notes.list.find(note => note.id === id).subtitle,
        bodyText: notes.list.find(note => note.id === id).bodyText,
      })
    }
    else {
      setInputState({
        title:"",
        subtitle:"",
        bodyText:""
      })
    }
  }, [id])

  function handleSubmit(e){
    e.preventDefault()

    if(Object.values(inputState).every(value => value)){
      setShowValidation({
        title: false,
        subtitle: false,
        bodyText: false
      })

      if(id && notes.list){
        dispatch(editNote({...inputState, id}))
      }
      else {
        dispatch(addNotesFromUser({...inputState, id: nanoid(8)}))
        setInputState({
          title: "",
          subtitle: "",
          bodyText: ""
        })
      }
    }
    else {
      for(const[key, value] of Object.entries(inputState)){
        if(value.length === 0) {
          setShowValidation(state => ({...state, [key]: true}))
        }
        else {
          setShowValidation(state => ({...state, [key]: false}))
        }
      }
    }
  }

  return (
    <div className="w-full p-10">
      <p className="text-slate-100 text-xl mb-4">Ajouter une noter</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="mt-4 mb-2 block text-slate-100">Le titre</label>
        <input 
        onChange={e => setInputState({...inputState, title: e.target.value})}
        value={inputState.title}
        type="text" 
        className="p-2 text-md block w-full rounded bg-slate-200"
        id="title"
        autoComplete="off" 
        />
        {showValidation.title && (
          <p className="text-red-400 mb-2">Veuillez écrire un titre.</p>
        )}

        <label htmlFor="subtitle" className="mt-4 mb-2 block text-slate-100">Le sous-titre</label>
        <input 
        onChange={e => setInputState({...inputState, subtitle: e.target.value})}
        value={inputState.subtitle}
        type="text" 
        className="p-2 text-md block w-full rounded bg-slate-200"
        id="subtitle" 
        autoComplete="off" 
        />
        {showValidation.subtitle && (
          <p className="text-red-400 mb-2">Veuillez écrire un sous-titre.</p>
        )}

        <label htmlFor="bodyText" className="mt-4 mb-2 block text-slate-100">Le contenu de la note</label>
        <textarea 
        spellCheck="false"
        id="bodyText"
        value={inputState.bodyText}
        onChange={e => setInputState({...inputState, bodyText: e.target.value})}
        className="w-full min-h-[300px] p-2 rounded bg-slate-200"
        ></textarea>
        {showValidation.bodyText && (
          <p className="text-red-400 mb-2">Veuillez écrire du contenu.</p>
        )}

        <button className="mt-4 px-3 py-1 bg-slate-100 rounded">Enregister</button>
      </form>
    </div>
  )
}
