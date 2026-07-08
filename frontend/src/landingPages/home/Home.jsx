import { Routes, Route } from "react-router-dom";
import Location from "../../usagePages/Location";
import './Home.css';

function Home() {
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

                
            </div>
        </>
    )
}

export default Home;