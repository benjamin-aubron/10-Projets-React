import { useState } from "react"
import leftChevron from "../assets/left-arrow.svg"
import rightChevron from "../assets/right-arrow.svg"
import "./Slider.css"

export default function Slider() {

  const [imageNumber, setImageNumber]=useState("1")

  const imageInfo = ["Livingroom","Kitchen","Bedroom","Bathroom","Balcony"]

  const clickLeftButton = () => {
    imageNumber == 1 ? setImageNumber(imageInfo.length) : setImageNumber(imageNumber - 1)
  }

  const clickRightButton = () => {
    imageNumber == imageInfo.length ? setImageNumber(1) : setImageNumber(imageNumber + 1)
  }


  return (
    <>
      <p className="index-info">{imageNumber} / {imageInfo.length} </p>
      <div className="slider">
        <p className="image-info">{imageInfo[imageNumber-1]}</p>
        <img src={`/images/img-${imageNumber}.jpg`} alt="estate rooms" className="slider-img" />
        <button className="navigation-button prev-button" onClick={clickLeftButton}>
          <img src={leftChevron} alt="Previous image arrow button" />
        </button>
        <button className="navigation-button next-button" onClick={clickRightButton}>
          <img src={rightChevron} alt="Next image arrow button" />
        </button>
      </div>
    </>
  )
}