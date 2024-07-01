import { useRef, useEffect, useState } from 'react';
import '../styles/carousel.css'; // Ensure this imports your CSS

export function Carousel() {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const arrowLeftRef = useRef(null);
  const arrowRightRef = useRef(null);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;
    const arrowBtns = [arrowLeftRef.current, arrowRightRef.current];
    const firstCardWidth = carousel.querySelector('.carousel--card').offsetWidth;
    const carouselChildren = Array.from(carousel.children);

    let isDragging = false,
      isAutoPlay = true,
      startX,
      startScrollLeft,
      timeoutId;

    const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Insert copies of the last few cards to the beginning of the carousel for infinite scrolling
    carouselChildren.slice(-cardPerView).reverse().forEach((card) => {
      carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
    });

    // Insert copies of the first few cards to the end of the carousel for infinite scrolling
    carouselChildren.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML('beforeend', card.outerHTML);
    });

    // Scroll the carousel to the appropriate position to hide first few duplicate cards
    carousel.classList.add('no-transition');
    carousel.scrollLeft = firstCardWidth * cardPerView;
    carousel.classList.remove('no-transition');

    const handleScroll = (increment, isAuto = true) => {
      if (isAuto) {
        // Apply transition for auto scroll
        carousel.classList.remove('no-transition');
      } else {
        // Disable transition for manual scroll
        carousel.classList.add('no-transition');
      }
      carousel.scrollLeft += increment;
      infiniteScroll();
    };

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        setDirection(btn.id === 'left' ? -1 : 1);
        handleScroll(btn.id === 'left' ? -firstCardWidth : firstCardWidth, false);
      });
    });

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add('dragging');
      startX = e.pageX || e.touches[0].pageX; // For touch events
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      const x = e.pageX || e.touches[0].pageX; // For touch events
      carousel.scrollLeft = startScrollLeft - (x - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove('dragging');
      infiniteScroll();
    };

    const infiniteScroll = () => {
      const isAtStart = carousel.scrollLeft <= 0;
      const isAtEnd = Math.ceil(carousel.scrollLeft) >= carousel.scrollWidth - carousel.offsetWidth;

      if (isAtStart || isAtEnd) {
        carousel.classList.add('no-transition');

        // If at the start, snap to the corresponding position at the end
        if (isAtStart) {
          carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth * 2;
        }

        // If at the end, snap to the corresponding position at the start
        if (isAtEnd) {
          carousel.scrollLeft = carousel.offsetWidth;
        }

        carousel.classList.remove('no-transition');
      }

      // Restart autoplay if not in manual interaction
      clearTimeout(timeoutId);
      if (!isDragging && !wrapperRef.current.matches(':hover')) autoPlay();
    };

    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return;
      timeoutId = setTimeout(() => {
        handleScroll(firstCardWidth * direction); // Adjust scroll direction based on state
      }, 2500);
    };

    autoPlay();
    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('touchstart', dragStart); // For touch start
    carousel.addEventListener('mousemove', dragging);
    carousel.addEventListener('touchmove', dragging); // For touch move
    document.addEventListener('mouseup', dragStop);
    document.addEventListener('touchend', dragStop); // For touch end
    carousel.addEventListener('scroll', infiniteScroll);
    wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
    wrapper.addEventListener('mouseleave', autoPlay);

    return () => {
      carousel.removeEventListener('mousedown', dragStart);
      carousel.removeEventListener('touchstart', dragStart);
      carousel.removeEventListener('mousemove', dragging);
      carousel.removeEventListener('touchmove', dragging);
      document.removeEventListener('mouseup', dragStop);
      document.removeEventListener('touchend', dragStop);
      carousel.removeEventListener('scroll', infiniteScroll);
      wrapper.removeEventListener('mouseenter', () => clearTimeout(timeoutId));
      wrapper.removeEventListener('mouseleave', autoPlay);
    };
  }, [direction]);


  // let setScroll = () => {
  //   document.body.scrollTop = 3500; // For Safari
  //   document.documentElement.scrollTop = 3500; // For Chrome, Firefox, IE and Opera}


  return (
    <>
      <div ref={wrapperRef} className="carousel--wrapper">
        <i ref={arrowLeftRef} id="left" className="fa-solid fa-angle-left"></i>
        <ul ref={carouselRef} className="carousel">
          <li className="carousel--card">
            <div className="img">
              <img src={require(`../images/carousel/1.png`)} className="carousel--img" alt="img" draggable="false" />
            </div>
          </li>
          <li className="carousel--card">
            <div className="img">
              <img src={require(`../images/carousel/2.png`)} className="carousel--img" alt="img" draggable="false" />
            </div>
          </li>
          <li className="carousel--card">
            <div className="img">
              <img src={require(`../images/carousel/3.png`)} className="carousel--img" alt="img" draggable="false" />
            </div>
          </li>
          <li className="carousel--card">
            <div className="img">
              <img src={require(`../images/carousel/4.png`)} className="carousel--img" alt="img" draggable="false" />
            </div>
          </li>
          <li className="carousel--card">
            <div className="img">
              <img src={require(`../images/carousel/7.png`)} className="carousel--img" alt="img" draggable="false" />
            </div>
          </li>
          <li className="carousel--card">
            <div className="img">
              <img src={require(`../images/carousel/5.png`)} className="carousel--img" alt="img" draggable="false" />
            </div>
          </li>
          <li className="carousel--card">
            <div className="img">
              <img src={require(`../images/carousel/8.jpg`)} className="carousel--img" alt="img" draggable="false" />
            </div>
          </li>
        </ul>
        <i ref={arrowRightRef} id="right" className="fa-solid fa-angle-right"></i>
      </div>
      <div className="under--carousel--button--wrapper">
      </div>
    </>
  )
}