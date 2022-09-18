// Components
import Head from '../components/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Login() {

    return (
        <>
            <Head title="Login - Lebel AirHotels" />
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
                                    <h2>Sign In</h2>
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
                                    <h2>Log In To Your Account</h2>
                                    <form method="post">
                                        <div className="col-12">
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" name="email" id="email" className="form-control"
                                                placeholder="your@email.com" required />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" name="password" id="password" className="form-control"
                                                placeholder="Minimum 6 character" required />
                                        </div>
                                        <div className="submit-btn col-12">
                                            <button type="submit" className="custom-btn">LOGIN</button>
                                        </div>
                                        <div className="col-12 sign-b">
                                            <p>Not have an account? <a href="/signup">Signup Now</a></p>
                                        </div>
                                    </form>
                                    <div className="option-txt">
                                        <hr />
                                        <p>or</p>
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