import { useEffect, useState } from "react"
import leftChevron from "../assets/left-arrow.svg"
import rightChevron from "../assets/right-arrow.svg"
import "./Slider.css"
import sliderData from "../data/sliderData"

export default function Slider() {

  const [imageNumber, setImageNumber]=useState(1)


  const clickLeftButton = () => {
    imageNumber == 1 ? setImageNumber(sliderData.length) : setImageNumber(imageNumber - 1)
  }

  const clickRightButton = () => {
    imageNumber == sliderData.length ? setImageNumber(1) : setImageNumber(imageNumber + 1)
  }

  useEffect(() => {
    const timer = setInterval(clickRightButton,5000)
    return () => clearInterval(timer);
  },[imageNumber])



  return (
    <>
      <p className="index-info">{imageNumber} / {sliderData.length} </p>
      <div className="slider">
        <p className="image-info">{sliderData[imageNumber-1].description}</p>
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