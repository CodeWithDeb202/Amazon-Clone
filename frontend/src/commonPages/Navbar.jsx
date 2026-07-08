import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar({ userLocation }) {

    return (
        <>
            <div className="navBar">
                <div className="logo_location">
                    <div className="logo">
                        <Link to={'/'} style={{ textDecoration: 'none', color: '#fff' }}>
                            <img style={{ marginBottom: '-0.4rem' }} src="\logo\Logo.png" alt="Logo" />
                            <span>.in</span>
                        </Link>
                    </div>
                    <div className="location" >
                        <Link to={'/location'} style={{ textDecoration: 'none', color: '#fff' }}>
                            <p className='text-muted' style={{ margin: '0', padding: '0', marginLeft: '1.5rem', fontSize: '0.8rem' }}>Delivering to</p>
                            <p style={{ margin: '0', padding: '0', marginTop: '-7px' }}><i style={{ fontSize: '1rem' }} class="fa-solid fa-location-dot"></i>
                                <b>
                                    {userLocation.district
                                        ? `${userLocation.district} ${userLocation.pincode}`
                                        : 'Update location'}
                                </b>
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="searchBar">
                    <div className='allDropdown' tabIndex={0}>
                        <p style={{ margin: '0', marginLeft: '0.5rem', marginRight: '0.5rem' }}>All</p> <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <input className='searchInput' type="text" placeholder='Search Amazon.in' />
                    <div className='searchIcon' tabIndex={0}>
                        <img style={{ width: '32.2px' }} src="\logo\searchIcon.png" alt="Search icon" />
                    </div>
                </div>

                <div className="others_Btn">
                    <Link to={'/language'} style={{ textDecoration: 'none', color: '#fff' }}>
                        <div className="language">
                            <img style={{ width: '1.5vw' }} src="\logo\Flag_of_India.png" alt="India flag" />
                            <span style={{ fontSize: '0.9rem', margin: '0 0.4rem' }}>EN</span>
                            <i style={{ fontSize: '0.5rem', opacity: '0.5', padding: '0', margin: '0' }} class="fa-solid fa-caret-down"></i>
                        </div>
                    </Link>

                    <Link to={'/signin'} style={{ textDecoration: 'none', color: '#fff' }}>
                        <div className="signin_AccList">
                            <p style={{ margin: '0 0 -0.5rem 0', fontSize: '0.7rem' }}>Hello, sign in </p>
                            <span style={{ fontSize: '0.9rem', margin: '0 0.3rem 0 0' }}> <b>Account & Lists</b></span>
                            <i style={{ fontSize: '0.5rem', opacity: '0.5', padding: '0', margin: '0' }} class="fa-solid fa-caret-down"></i>
                        </div>
                    </Link>

                    <Link to={'/return_order'} style={{ textDecoration: 'none', color: '#fff' }}>
                        <div className="return_order">
                            <p style={{ margin: '0 0 -0.5rem 0', fontSize: '0.8rem' }}>Returns</p>
                            <p style={{ margin: '0', fontSize: '1rem' }}> <b>& Orders</b></p>
                        </div>
                    </Link>

                    <Link to={'/cart'} style={{ textDecoration: 'none', color: '#fff' }}>
                        <div className="cart">
                            <p className='cart_count' style={{ margin: '0 0 -0.5rem 0', fontSize: '1rem' }}>0</p>
                            <img style={{ width: '2.5vw' }} src="\logo\Cart.png" alt="Cart" />
                            <p style={{ margin: '0', fontSize: '1rem' }}><b>Cart</b></p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;