import Link from "next/link";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-4 mb-md-0">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link href="/">
                                        <a>
                                            <img src="/assets/images/logo/logo.png" />
                                            <span>Lebel AirHotels</span>
                                        </a>
                                    </Link>
                                </div>
                                <p>On the other hand, lorem ipsum dolor sit amet consectetur adipisicing elit. Error, et
                                    dignissimos quas soluta atque distinctio mollitia sequi excepturi officia molestias
                                    facilis magni repellendus quidem reiciendis facere cum dolor ipsum neque!</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 col-12 mb-4 mb-md-5 mb-lg-0">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Company</h3>
                                </div>
                                <ul>
                                    <li><Link href="/"><a>Home</a></Link></li>
                                    <li><Link href="/about"><a>About</a></Link></li>
                                    <li><Link href="/listing"><a>Hotels</a></Link></li>
                                    <li><Link href="/login"><a>Login</a></Link></li>
                                    <li><Link href="/profile"><a>Profile</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 col-12 mb-4 mb-md-0">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Destinations</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Paris</a></li>
                                    <li><a href="#">New York</a></li>
                                    <li><a href="#">Miami</a></li>
                                    <li><a href="#">Italy</a></li>
                                    <li><a href="#">Murich</a></li>
                                    <li><a href="#">Shanghai</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-lg-offset-1 col-md-6 col-sm-12 col-12 pl-lg-4 mb-4 mb-md-0">
                            <div className="widget market-widget service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li>75th Queensland, London, UK</li>
                                        <li>info@lebelairhotels.com</li>
                                        <li>+020 078 767 462</li>
                                    </ul>
                                </div>
                                <ul className="socilal-link">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-12">
                            <p className="copyright"> Copyright &copy; 2022 | Lebel AirHotels | All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}