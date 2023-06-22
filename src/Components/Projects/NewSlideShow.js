import './slideShow.css'
import img1 from "../../Assets/images/bookappointment.png"
import img2 from "../../Assets/images/pharmacy.png"
import img3 from "../../Assets/images/employeemanage.png"
import img4 from "../../Assets/images/chugli.png"
import { useEffect, useState } from 'react'

const SlideShow = () => {
  const [slides, setSlides] = useState([img1, img2, img3, img4])

  const [prevSlide, setPrevSlide] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(1)
  const [nextSlide, setNextSlide] = useState(2)

  const next = () => {
    const nextS = document.getElementById('next-slide')
    const currentS = document.getElementById('current-slide')
    const prevS = document.getElementById('prev-slide')

    nextS.style.opacity = 0
    currentS.style.opacity = 0
    prevS.style.opacity = 0
    setTimeout(() => {

      if (currentSlide < slides.length - 1) {
        setPrevSlide(currentSlide)
        setCurrentSlide(prev => prev + 1)
        if (currentSlide + 1 === slides.length - 1)
          setNextSlide(0)
        else
          setNextSlide(prev => prev + 1)
      } else {
        setCurrentSlide(0)
        setPrevSlide(slides.length - 1)
        setNextSlide(prev => prev + 1)
      }

      nextS.style.opacity = 0.5
      currentS.style.opacity = 1
      prevS.style.opacity = 0.5
    }, 400)

  }
  const prev = () => {

    const nextS = document.getElementById('next-slide')
    const currentS = document.getElementById('current-slide')
    const prevS = document.getElementById('prev-slide')

    nextS.style.opacity = 0
    currentS.style.opacity = 0
    prevS.style.opacity = 0
    setTimeout(() => {


      if (currentSlide > 0) {
        setNextSlide(currentSlide)
        setCurrentSlide(prev => prev - 1)
        if (currentSlide - 1 === 0)
          setPrevSlide(slides.length - 1)
        else
          setPrevSlide(prev => prev - 1)
      } else {
        setCurrentSlide(slides.length - 1)
        setPrevSlide(prev => prev - 1)
        setNextSlide(prev => prev - 1)
      }


      nextS.style.opacity = 0.5
      currentS.style.opacity = 1
      prevS.style.opacity = 0.5
    }, 400)
  }


  useEffect(() => {
    console.log(prevSlide, currentSlide, nextSlide)
  }, [currentSlide])

  return (
    <div id='slideshow-container'>
      <div id='slide-img-container'>
        {
          slides[currentSlide] ?
            <>
              <img id='next-slide' src={slides[nextSlide]} />
              <img id='current-slide' src={slides[currentSlide]} />
              <img id='prev-slide' src={slides[prevSlide]} />
            </> :
            <></>
        }
      </div>
      <div onClick={prev} className='slide-btn slide-btn1'>&#10094;</div>
      <div onClick={next} className='slide-btn slide-btn2'>&#10095;</div>
    </div>
  );
}
export default SlideShow;