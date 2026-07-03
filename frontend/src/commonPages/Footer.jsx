function Footer() {
    return(
        <>
            <div className="footer pt-4 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-7">
                            <div className="row">
                                <div className="col-3 footer_links">
                                    <a href="/" style={{ fontSize:'0.8rem'}}>AbeBooks</a> <br />
                                    <a href="/" style={{fontSize:'0.8rem'}} className="text-muted">Books, art</a> <br />
                                    <a href="/" style={{fontSize:'0.8rem'}} className="text-muted">& collectibles</a>
                                </div>
                                <div className="col-3 footer_links">
                                    <a href="/" style={{ fontSize:'0.8rem'}}>Amazon Web Services</a> <br />
                                    <a href="/" style={{fontSize:'0.8rem'}} className="text-muted">Scalable Cloud</a> <br />
                                    <a href="/" style={{fontSize:'0.8rem'}} className="text-muted">Computing Services</a>
                                </div>
                                <div className="col-3 footer_links">
                                    <a href="/" style={{fontSize:'0.8rem'}}>Audible</a> <br />
                                    <a href="/" style={{fontSize:'0.8rem'}} className="text-muted">Download</a> <br />
                                    <a href="/" style={{fontSize:'0.8rem'}} className="text-muted">Audio Books</a>
                                </div>
                                <div className="col-3 footer_links">
                                    <a href="/" style={{fontSize:'0.8rem'}}>IMDb</a> <br />
                                    <a href="/" style={{fontSize:'0.8rem'}} className="text-muted">Movies, TV</a> <br />
                                    <a href="/" style={{fontSize:'0.8rem'}} className="text-muted">& Celebrities</a>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-3 footer_links">
                                    <a href="/" style={{fontSize:'0.8rem'}}>Shopbop</a> <br />
                                    <a href="/" style={{fontSize:'0.8rem'}} className="text-muted">Designer</a> <br />
                                    <a href="/" style={{fontSize:'0.8rem'}} className="text-muted">Fashion Brands</a>
                                </div>
                                <div className="col-3 footer_links">
                                    <a href="/" style={{fontSize:'0.8rem'}}>Amazon Business</a> <br />
                                    <a href="/" style={{fontSize:'0.8rem'}} className="text-muted">Everything For</a> <br />
                                    <a href="/" style={{fontSize:'0.8rem'}} className="text-muted">Your Business</a>
                                </div>
                                <div className="col-3 footer_links">
                                    <a href="/" style={{fontSize:'0.8rem'}}>Amazon Music</a> <br />
                                    <a href="/" style={{fontSize:'0.8rem'}} className="text-muted">Stream millions of <br /> songs</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6" style={{textAlign:'center'}}>
                            <a href="/" className="last_footer_link">Conditions of Use & Sale</a>
                            <a href="/" className="last_footer_link">Privacy Notice</a>
                            <a href="/" className="last_footer_link">Interest-Based Ads</a>
                            <h1 style={{fontSize:'0.8rem', color:'#fff', fontWeight:'100'}} className="pt-2">© 1996-2026, Amazon.com, Inc. or its affiliates </h1>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Footer;