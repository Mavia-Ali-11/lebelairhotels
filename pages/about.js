import Link from 'next/link';
import Script from 'next/script';

// Components
import Head from '../components/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';

// Plugins
import CountUp from 'react-countup';


export default function About() {
    return (
        <>
            <Head title="About - Lebel AirHotels" />
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
                                    <h2>About</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-img">
                                    <img src="assets/images/about.jpg" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-text">
                                    <h2>How We Work</h2>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of
                                        a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                        more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                        here', making it look like readable English.</p>
                                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                        default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                                        their infancy. Various versions have evolved over the years, sometimes by accident,
                                        sometimes on purpose (injected humour and the like.</p>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                        suffered alteration in some form, by injected humour, or randomised words which don't
                                        look even slightly believable.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hx-counter-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hx-counter-grids">
                                    <div className="grid">
                                        <div className="hx-counter-icon">
                                            <i className="fi flaticon-key"></i>
                                        </div>
                                        <div>
                                            <h2><CountUp start="0" end="270" />+</h2>
                                        </div>
                                        <p>New Visitors</p>
                                    </div>
                                    <div className="grid">
                                        <div className="hx-counter-icon">
                                            <i className="fi flaticon-staff"></i>
                                        </div>
                                        <div>
                                            <h2><CountUp start="0" end="6831" /></h2>
                                        </div>
                                        <p>Happy Customers</p>
                                    </div>
                                    <div className="grid">
                                        <div className="hx-counter-icon">
                                            <i className="fi flaticon-bowling"></i>
                                        </div>
                                        <div>
                                        <h2><CountUp start="0" end="164" /></h2>
                                        </div>
                                        <p>Organized Tours</p>
                                    </div>
                                    <div className="grid">
                                        <div className="hx-counter-icon">
                                            <i className="fi flaticon-pool"></i>
                                        </div>
                                        <div>
                                            <h2><CountUp start="0" end="5047" />+</h2>
                                        </div>
                                        <p>Hotels Collection</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work-area-2 section-padding">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2>How It Works</h2>
                        </div>
                        <div className="work-wrap">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="work-sub">
                                        <div className="work-item">
                                            <div className="work-img">
                                                <i className="fa fa-map"></i>
                                                <div className="work-thumb">
                                                    <span>1</span>
                                                </div>
                                            </div>
                                            <div className="work-text">
                                                <h2>Find Interesting Place</h2>
                                                <p>Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus
                                                    tellus ut, convallis eros sollicitudin turpis.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="work-sub">
                                        <div className="work-item">
                                            <div className="work-img">
                                                <i className="fa fa-building"></i>
                                                <div className="work-thumb">
                                                    <span>2</span>
                                                </div>
                                            </div>
                                            <div className="work-text">
                                                <h2>Decide Your Hotel</h2>
                                                <p>Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus
                                                    lectus sollicitudin feugiat pharetra consectetur.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="work-sub">
                                        <div className="work-item">
                                            <div className="work-img">
                                                <i className="fa fa-plane"></i>
                                                <div className="work-thumb">
                                                    <span>3</span>
                                                </div>
                                            </div>
                                            <div className="work-text">
                                                <h2>Go For a Trip</h2>
                                                <p>Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla,
                                                    id vestibulum metus nullam viverra porta.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-area section-padding pt-0">
                    <div className="container">
                        <div className="section-title">
                            <h2>Testimonials</h2>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-lg-12 col-md-12 col-12">
                                <div className="test-wrap">
                                    <div className="testimonial-slider clearfix">
                                        <Testimonials />
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