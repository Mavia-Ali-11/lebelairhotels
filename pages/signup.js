// Components
import Head from '../components/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Signup() {
    return (
        <>
            <Head title="Signup - Lebel AirHotels" />
            <div className="page-wrapper">
                <div className="page-loader">
                    <div className="page-loader-inner">
                        <div className="inner"></div>
                    </div>
                </div>

                <Navbar />

                <div className="breadcumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcumb-wrap">
                                    <h2>Sign Up</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="login-wrap contact-area">
                                    <h2>Create An Account</h2>
                                    <form method="post">
                                        <div className="col-12">
                                            <label htmlFor="name">Full Name</label>
                                            <input type="text" name="name" id="name" className="form-control"
                                                placeholder="Enter Your Full Name" required />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" name="email" id="email" className="form-control"
                                                placeholder="your@email.com" required />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" name="password" id="password" className="form-control"
                                                placeholder="Minimum 6 character" minLength="6" required />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="cpassword">Confirm Password</label>
                                            <input type="password" name="cpassword" id="cpassword" className="form-control"
                                                placeholder="Minimum 6 character" minLength="6" required />
                                        </div>
                                        <div className="submit-btn col-12">
                                            <button type="submit" className="custom-btn">SIGN UP</button>
                                        </div>
                                        <div className="col-12 sign-b">
                                            <p>Already have an account? <a href="/login">Return to Sign In</a></p>
                                        </div>
                                    </form>
                                    <div className="option-txt">
                                        <hr />
                                        <p>or you can just</p>
                                        <hr />
                                    </div>
                                    <div className="options">
                                        <button className="btn-google"><i className="fa fa-google"></i> Continue with Google</button>
                                        <button className="btn-twitter"><i className="fa fa-twitter"></i> Continue with Twitter</button>
                                        <button className="btn-facebook"><i className="fa fa-facebook"></i> Continue with
                                            Facebook</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}