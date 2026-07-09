import { Routes, Route } from "react-router-dom";
import Location from "../../usagePages/Location";
import './Home.css';
import SqrCard from "../cards/SqrCrad";
import { useEffect, useState } from "react";
import axios from "axios";
import RectCard from "../cards/RectCard";

function Home() {
    const [sqCards, setSqCards] = useState([]);
    const [rectCards, setRectCards] = useState([]);

    useEffect(() => {
        const getSqCards = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/sqrcards');
                setSqCards(res.data);
            } catch (err) {
                console.log(err);
            }
        }

        getSqCards();

    }, []);

    useEffect(() => {
        const getRectCards = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/rectcards');
                setRectCards(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getRectCards();

    }, [])



    return (
        <>
            <Routes>
                <Route path="/location" element={<Location />} />
            </Routes>
            <div id="carouselExampleAutoplaying" className="carousel slide homeCarousel" style={{ margin: '0 0.7rem' }} data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="\crousel image\1st.jpg" class="d-block w-100" alt="1st.jpg" />
                    </div>
                    <div class="carousel-item">
                        <img src="\crousel image\2nd.jpg" class="d-block w-100" alt="2nd.jpg" />
                    </div>
                    <div class="carousel-item">
                        <img src="\crousel image\3rd.jpg" class="d-block w-100" alt="3rd.jpg" />
                    </div>
                    <div class="carousel-item">
                        <img src="\crousel image\4th.jpg" class="d-block w-100" alt="4th.jpg" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" style={{ backgroundImage: 'url(none)' }} aria-hidden="true"><i style={{ fontSize: '3rem', color: '#131921' }} class="fa-solid fa-chevron-left"></i></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" style={{ backgroundImage: 'url(none)' }} aria-hidden="true"><i style={{ fontSize: '3rem', color: '#131921' }} class="fa-solid fa-chevron-right"></i></span>
                    <span class="visually-hidden">Next</span>
                </button>


                <div className="sqr_rect_cards">
                    <div className="sqCardCont">
                        {sqCards.slice(0, 4).map((card) => (
                            <SqrCard key={card._id} card={card} />
                        ))}
                    </div>

                    <div className="rectCardCont">
                        {rectCards.slice(0, 1).map((card) => (
                            <RectCard key={card._id} card={card} />
                        ))}
                    </div>

                    <div className="sqCardCont">
                        {sqCards.slice(4, 8).map((card) => (
                            <SqrCard key={card._id} card={card} />
                        ))}
                    </div>
                    <div className="rectCardCont">
                        {rectCards.slice(1, 2).map((card) => (
                            <RectCard key={card._id} card={card} />
                        ))}
                    </div>
                    <div className="rectCardCont">
                        {rectCards.slice(2, 3).map((card) => (
                            <RectCard key={card._id} card={card} />
                        ))}
                    </div>

                    <div className="sqCardCont">
                        {sqCards.slice(8, 12).map((card) => (
                            <SqrCard key={card._id} card={card} />
                        ))}
                    </div>
                    <div className="rectCardCont">
                        {rectCards.slice(3, 4).map((card) => (
                            <RectCard key={card._id} card={card} />
                        ))}
                    </div>
                    <div className="rectCardCont">
                        {rectCards.slice(4, 5).map((card) => (
                            <RectCard key={card._id} card={card} />
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;