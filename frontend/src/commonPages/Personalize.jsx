import {Link} from "react-router-dom";

function Personalize() {
    return(
        <>
            <div className="personalize">
                <h2>See personalized recommendations</h2>
                <Link to="/signin"> <button className="signinBtn">Sign in</button></Link>
                <p style={{fontSize:'12px'}}>New customer? <Link to="/signin">Start here.</Link></p>
            </div>
        </>
    )
}

export default Personalize;