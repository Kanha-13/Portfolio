import './slideShow.css';
import { useState } from 'react';

const SlideShow = ({ projects }) => {
  const [prevSlide, setPrevSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(projects.length > 1 ? 1 : 0);
  const [nextSlide, setNextSlide] = useState(projects.length - (projects.length - 2));

  const next = () => {
    if (projects.length > 1) {
      if (currentSlide < projects.length - 1) {
        setPrevSlide(currentSlide);
        setCurrentSlide((prev) => prev + 1);
        if (currentSlide + 1 === projects.length - 1) setNextSlide(0);
        else setNextSlide((prev) => prev + 1);
      } else {
        setCurrentSlide(0);
        setPrevSlide(projects.length - 1);
        setNextSlide(1);
      }
    }
  };

  const prev = () => {
    if (projects.length > 1) {
      if (currentSlide > 0) {
        setNextSlide(currentSlide);
        setCurrentSlide((prev) => prev - 1);
        if (currentSlide - 1 === 0) setPrevSlide(projects.length - 1);
        else setPrevSlide((prev) => prev - 1);
      } else {
        setCurrentSlide(projects.length - 1);
        setPrevSlide(projects.length - 2);
        setNextSlide(0);
      }
    }
  };

  return (
    <div id="slideshow-container">
      <div id="slide-img-container">
        {projects.length > 0 && (
          <>
            <img
              id="prev-slide"
              src={projects[prevSlide]?.image}
              alt={projects[prevSlide]?.name || ''}
              style={{ display: projects.length > 1 ? 'block' : 'none' }} // Hide if only 1 project
            />
            <img
              id="current-slide"
              src={projects[currentSlide]?.image}
              alt={projects[currentSlide]?.name || ''}
            />
            <img
              id="next-slide"
              src={projects[nextSlide]?.image}
              alt={projects[nextSlide]?.name || ''}
              style={{ display: projects.length > 1 ? 'block' : 'none' }} // Hide if only 1 project
            />
          </>
        )}
        <div id="slide-dots">
          {projects.map((_, index) => (
            <div
              key={index}
              style={{
                backgroundColor: index === currentSlide ? '#ffffff' : '#747474',
              }}
            ></div>
          ))}
        </div>
        {projects.length > 1 && (
          <>
            <div onClick={prev} className="slide-btn slide-btn1">
              &#10094;
            </div>
            <div onClick={next} className="slide-btn slide-btn2">
              &#10095;
            </div>
          </>
        )}
      </div>
      {projects.length > 0 && (
        <div id="code-detail">
          <h4>{projects[currentSlide]?.name}</h4>
          <div id="code-detail-content">
            <p>{projects[currentSlide]?.info}</p>
            <div id="code-detail-btns">
              <a target="_blank" rel="noopener noreferrer" href={projects[currentSlide]?.live}>
                <button>Live</button>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={projects[currentSlide]?.source_code}>
                <button>Source Code</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideShow;
