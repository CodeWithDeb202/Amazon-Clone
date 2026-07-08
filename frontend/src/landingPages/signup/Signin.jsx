import './Signin.css';

function Signin() {
    return (
        <>
            <div className="signin_page">
                <div className="logo">
                    <img style={{ width: '10vw', marginBottom: '0.4rem' }} src="\logo\blackLetterlogo.png" alt="Logo" />
                    <span style={{ marginLeft: '-1rem' }}><b>.in</b></span>
                </div>
                <div className="signin_form" style={{ width: '30vw' }}>
                    <form action="/" className='needs-validation' novalidate>
                        <h4>Sign in or create account</h4>
                        <div class="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <label for="inputPassword5" class="form-label">Password</label>
                        <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div id="passwordHelpBlock" class="form-text">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>
                        <button style={{ marginLeft: '4rem' }} className="signinBtn" type='submit'>Continue</button>
                    </form>
                    <h5 style={{ margin: '0', fontSize: '1rem' }}>By continuing, you agree to Amazon's <a href="#"> Conditions of Use</a> and <a href="#"> Privacy Notice</a>.</h5>
                    <hr />
                    <h5 style={{ fontSize: '1rem', margin: '0' }}>Buying for work?</h5>
                    <a style={{ fontSize: '0.8rem' }} href="#">Create a free business account</a>
                </div>
                <div className="Line"></div>

                <div className="signin_footer" >
                    <a href="#">Conditions of Use</a>
                    <a href="#">Privacy Notice</a>
                    <a href="#">Help</a>
                </div>
                <p style={{ marginBottom: '4rem', fontSize: '0.8rem' }} >© 1996-2026, Amazon.com, Inc. or its affiliates</p>

            </div>
        </>
    )
}

export default Signin;