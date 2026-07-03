import './Navbar.css';
function Navbar() {
    return(
        <>
            <div className="navBar">
                <div className="logo_location">
                    <div className="logo">logo</div>
                    <div className="location">location</div>
                </div>
                <div className="searchBar">SearchBar</div>
                <div className="others_Btn">
                    <div className="language">language</div>
                    <div className="signin_AccList">acclist</div>
                    <div className="return_order">Order</div>
                    <div className="cart">cart</div>
                </div>
            </div>
        </>
    )
}

export default Navbar;