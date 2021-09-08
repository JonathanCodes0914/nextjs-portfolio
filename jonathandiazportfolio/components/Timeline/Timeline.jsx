import React, { useState, useRef, useEffect } from 'react';
import style from './TimelineStyles.module.css';
import { TimeLineData } from '../../constants/constants';


const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
    const [activeItem, setActiveItem] = useState(0);
    const carouselRef = useRef();

    const scroll = (node, left) => {
        return node.scrollTo({ left, behavior: 'smooth' });
    }

    const handleClick = (e, i) => {
        e.preventDefault();

        if (carouselRef.current) {
            const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

            scroll(carouselRef.current, scrollLeft);
        }
    }

    const handleScroll = () => {
        if (carouselRef.current) {
            const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

            setActiveItem(index);
        }
    }

    // snap back to beginning of scroll when window is resized
    // avoids a bug where content is covered up if coming from smaller screen
    useEffect(() => {
        const handleResize = () => {
            scroll(carouselRef.current, 0);
        }

        window.addEventListener('resize', handleResize);
    }, []);


    return (
      <div className={style.timelineWrapper}>
            <div className={style.carouselContainer} ref={carouselRef} onScroll={handleScroll}>
                {TimeLineData.map((item, index) => (
                    <div key={index} className={style.carouselItem} id={`carousel__item-${index}`}
                        active={activeItem}
                        onClick={(e) => handleClick(e, index)}>
                        <p>{item.year}</p>
                        <h5>{item.text}</h5>
                    </div>
                ))}
       
        </div>

     
      </div>
    )
}

export default Timeline
