import { Link } from "react-router-dom";


function Contact() {
    return (
        <>
            <div className="contactContainer">
                <div className="container p-5">
                    <div className="row">
                        <div className="col-3">
                            <h2>Get to Know Us</h2>
                            <a href="/">About Amazon</a>
                            <a href="/">Careers</a>
                            <a href="/">Press Releases</a>
                            <a href="/">Amazon Science</a></div>
                        <div className="col-3">
                            <h2>Connect with Us</h2>
                            <a href="https://www.facebook.com/AmazonIN">Facebook</a>
                            <a href="https://twitter.com/AmazonIN">Twitter</a>
                            <a href="https://www.instagram.com/AmazonIN">Instagram</a>
                        </div>
                        <div className="col-3">
                            <h2>Make Money with Us</h2>
                            <a href="/">Sell on Amazon </a>
                            <a href="/">Sell under Amazon Accelerator</a>
                            <a href="/">Protect and Build Your Brand</a>
                            <a href="/">Amazon Global Selling</a>
                            <a href="/">Supply to Amazon</a>
                            <a href="/">Become an Affiliate</a>
                            <a href="/">Fulfilment by Amazon</a>
                            <a href="/">Advertise Your Products</a>
                            <a href="/">Amazon Pay on Merchants</a>
                        </div>
                        <div className="col-3">
                            <h2>Let Us Help You</h2>
                            <a href="/">Your Account</a>
                            <a href="/">Returns Centre</a>
                            <a href="/">Recalls and Product Safety Alerts</a>
                            <a href="/">100% Purchase Protection</a>
                            <a href="/">Amazon App Download</a>
                            <a href="/">Help</a>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="container pt-3 pb-5">
                    <div className="row">
                        <div className="col-4"></div>
                        
                        <div className="col-4">
                            <div className="row">
                                <div className="col-4">
                                    <img src="/logo/contactLogoo.png" alt="Contact Logo" />
                                </div>

                                <div className="col-4">
                                    <Link to="/language" style={{ textDecoration: 'none', margin: '0' }}>
                                        <div className="contactLangBtn">
                                            <i class="fa-solid fa-globe" style={{ opacity: '0.7' }}></i>
                                            <button>English</button>
                                            <div className="contactLangBtnIcon">
                                                <i class="fa-solid fa-caret-up"></i>
                                                <i class="fa-solid fa-caret-down"></i>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-1"></div>

                                <div className="col-3">
                                    <Link to='/country' style={{ textDecoration: 'none', margin: '0' }}>
                                        <div className="countryFlag">
                                            <img style={{width:'2vw'}} src="\logo\Flag_of_India.png" alt="India flag" />
                                            <button>India</button>
                                        </div>
                                    </Link>
                                </div>
                                    
                            </div>
                        </div>

                        <div className="col-4"></div>
                    </div>
                </div>
                {/* <div className="contactLang pb-5">
                    <img src="\logo\contactLogoo.png" style={{width:'8%'}} alt="Contact Logo" />
                    <Link to="/language" style={{textDecoration:'none', margin:'0'}}>
                        <div className="contactLangBtn">
                            <i class="fa-solid fa-globe" style={{opacity:'0.7'}}></i>
                            <button>English</button>
                            <div className="contactLangBtnIcon">
                                <i class="fa-solid fa-caret-up"></i>
                                <i class="fa-solid fa-caret-down"></i>
                            </div>
                        </div>
                    </Link>
                    <Link to='/country' style={{textDecoration:'none', margin:'0'}}>
                        <span className="countryFlag">
                            <img style={{width:'3%'}} src="\logo\Flag_of_India.png" alt="India flag" />
                            <button>India</button>
                        </span>
                    </Link>
                </div> */}
                {/* <div className="contactLang">
                    <img src="\logo\contactLogoo.png" style={{width:'8%'}} alt="Contact Logo" />
                    <div className="contactLangBtn">
                        <Link to="/" style={{textDecoration:'none', margin:'0'}}>
                            <i class="fa-solid fa-globe" style={{opacity:'0.7'}}></i>
                            <button>English</button>
                            <div className="contactLangBtnIcon">
                                <i class="fa-solid fa-caret-up"></i>
                                <i class="fa-solid fa-caret-down"></i>
                            </div>
                        </Link>
                    </div>
                    <div className="countryFlag">
                        <img style={{width:'3%'}} src="\logo\Flag_of_India.png" alt="India flag" />
                        <button>India</button>
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default Contact;