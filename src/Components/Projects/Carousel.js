import { useEffect, useState } from "react";
import img1 from "../../Assets/images/bookappointment.png"
import img2 from "../../Assets/images/pharmacy.png"
import img3 from "../../Assets/images/employeemanage.png"
import img4 from "../../Assets/images/chugli.png"
import './carousel.css'
const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(1)
  const [dots, setDots] = useState([{}])
  const [slides, setTotalSlides] = useState([{}])
  // Next/previous controls
  function plusSlides(n) {
    setSlideIndex(slideIndex + n)
    showSlides(slideIndex + n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    setSlideIndex(n)
    showSlides(n);
  }

  function showSlides(n) {
    let i;
    let slidIndex
    if (n > slides.length) { setSlideIndex(1) }
    if (n < 1) { setSlideIndex(slides.length) }
    for (i = 0; i < slides.length; i++) {
      if (slides[i].style)
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      if (dots[i].className)
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 1].style)
      slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  const func = () => {
    showSlides(slideIndex);
  }

  useEffect(() => {
    let slidess = document.getElementsByClassName("mySlides");
    let dotss = document.getElementsByClassName("dot");
    setTotalSlides(slidess)
    setDots(dotss)
  }, [])
  useEffect(() => {
    if (slides.length)
      func()
  }, [slides])

  return (
    <div>
      <div className="slideshow-container" style={{ backgroundColor: "black" }}>
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src={img1} style={{ height: "40%", width: "100%" }} />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src={img2} style={{ height: "40%", width: "100%" }} />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={img3} style={{ height: "40%", width: "100%" }} />
          <div className="text">Caption Three</div>
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
}
export default Carousel;