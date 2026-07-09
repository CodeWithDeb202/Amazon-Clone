import { Link } from "react-router-dom";
import './Card.css';

import { useRef } from "react";

function RectCard({card}) {
    const scrollRef = useRef(null);

    const scrollLeft = () => {

        scrollRef.current.scrollBy({
            left: -500,
            behavior: 'smooth',
        });
    }

    const scrollRight = () => {

        scrollRef.current.scrollBy({
            left: 500,
            behavior: 'smooth',
        });
    }

    const stopWheelScroll = (e) => {
        e.preventDefault();
    };





    return (
        <>
            <div className="rectCard">
                <div className="heading_link">
                    <h1 style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '0' }}>{card.title}</h1>
                    <Link to={'/'} style={{ textDecoration: 'none', fontSize: '1rem' }}>{card.linkText}</Link>
                </div>


                <div className="rectImgWrapper">
                    <button className="rectScrollBtn right_border_radius leftBtn" onClick={scrollLeft}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    <div
                        className='img_cont'
                        ref={scrollRef}
                        onWheel={stopWheelScroll}
                    >
                        {card.products.map((product) => (
                            <img key={product._id} src={`http://localhost:3000${product.image}`} alt={product._id} />
                        ))}
                    </div>

                    <button className="rectScrollBtn left_border_radius rightBtn" onClick={scrollRight}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default RectCard;