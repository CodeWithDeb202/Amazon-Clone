import {Link} from 'react-router-dom';
import './Subnav.css';


function SubNav() {

    return(
        <>
            <div className="subNavBar">
                <div className="sections">
                    <Link to={'/all_sidebar'} style={{textDecoration:'none', color:'#fff'}}>
                        <div className="all">
                            <i class="fa-solid fa-bars"></i>
                            <h6 style={{margin:'0'}}>All</h6>
                        </div>
                    </Link>

                    <Link to={'/prime_day'} style={{textDecoration:'none', color:'#fff'}}>
                        <div className="primeday">
                            <h6 style={{margin:'0', fontSize:'0.9rem'}}>Prime Day Deals</h6>
                        </div>
                    </Link>

                    <Link to={'/fresh'} style={{textDecoration:'none', color:'#fff'}}>
                        <div className="primeday">
                            <h6 style={{margin:'0', fontSize:'0.9rem'}}>Fresh</h6>
                        </div>
                    </Link>

                    <Link to={'/mx_player'} style={{textDecoration:'none', color:'#fff'}}>
                        <div className="primeday">
                            <h6 style={{margin:'0', fontSize:'0.9rem'}}>Mx Player</h6>
                        </div>
                    </Link>

                    <Link to={'/sell'} style={{textDecoration:'none', color:'#fff'}}>
                        <div className="primeday">
                            <h6 style={{margin:'0', fontSize:'0.9rem'}}>Sell</h6>
                        </div>
                    </Link>

                    <Link to={'/best_sellers'} style={{textDecoration:'none', color:'#fff'}}>
                        <div className="primeday">
                            <h6 style={{margin:'0', fontSize:'0.9rem'}}>Best Sellers</h6>
                        </div>
                    </Link>

                    <Link to={'/new_release'} style={{textDecoration:'none', color:'#fff'}}>
                        <div className="primeday">
                            <h6 style={{margin:'0', fontSize:'0.9rem'}}>New Release</h6>
                        </div>
                    </Link>

                    <Link to={'/mobiles'} style={{textDecoration:'none', color:'#fff'}}>
                        <div className="primeday">
                            <h6 style={{margin:'0', fontSize:'0.9rem'}}>Mobiles</h6>
                        </div>
                    </Link>

                    <Link to={'/prime'} style={{textDecoration:'none', color:'#fff'}}>
                        <div className="prime">
                            <h6 style={{margin:'0', fontSize:'0.9rem'}}>Prime</h6>
                            <i style={{fontSize:'0.5rem', opacity:'0.5', padding:'0', margin:'0'}} class="fa-solid fa-caret-down"></i>
                        </div>
                    </Link>

                    <Link to={'/amazon_pay'} style={{textDecoration:'none', color:'#fff'}}>
                        <div className="primeday">
                            <h6 style={{margin:'0', fontSize:'0.9rem'}}>Amazon Pay</h6>
                        </div>
                    </Link>

                    <Link to={'/costumer_service'} style={{textDecoration:'none', color:'#fff'}}>
                        <div className="primeday">
                            <h6 style={{margin:'0', fontSize:'0.9rem'}}>Costumer Services</h6>
                        </div>
                    </Link>

                    <Link to={'/electronics'} style={{textDecoration:'none', color:'#fff'}}>
                        <div className="primeday">
                            <h6 style={{margin:'0', fontSize:'0.9rem'}}>Electronics</h6>
                        </div>
                    </Link>

                </div>
                <Link to={'/prime_day'} style={{textDecoration:'none'}}>
                    <div className="only_for_deals">
                        <img style={{width:'25vw'}} src="\subnavbar\PrimeDayLivenow.jpg" alt="primeday" />
                    </div>
                </Link>
            </div>
        </>
    )
}

export default SubNav;