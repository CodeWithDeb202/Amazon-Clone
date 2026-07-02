import {Link} from "react-router-dom";

function Back() {
    return(
        <>
            <Link className="backToTop" to="/">
                Back to Top
            </Link> 
        </>
    )
}

export default Back;