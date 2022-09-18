// Components
import Head from '../components/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Profile() {

    function filter() {
        var valThis = $('#txtSearchValue').val();
        $('.dropdown-select ul > li').each(function () {
            var text = $(this).text();
            (text.toLowerCase().indexOf(valThis.toLowerCase()) > -1) ? $(this).show() : $(this).hide();
        });
    };

    return (
        <>
            <Head title="Profile - Lebel AirHotels" />
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
                                    <h2>Profile</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-area section-padding">
                    <div className="container">
                        <div className="profile-wrap">
                            <div className="profile-sub">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="profile-text">
                                            <div className="pro-text-item">
                                                <h2>Adress</h2>
                                                <p>USA 5TH Green Lane, NY</p>
                                            </div>
                                            <div className="pro-text-item">
                                                <h2>Phone</h2>
                                                <p>+ 926-571-1205</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="profile-details">
                                            <h3>David Finch</h3>
                                            <div className="ratting-area">
                                                <ul>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                                <p><span>4.1</span> (92 Reviews)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="profile-text">
                                            <div className="pro-text-item">
                                                <h2>Mail</h2>
                                                <p>davidfin@email.com</p>
                                            </div>
                                            <div className="pro-text-item">
                                                <h2>Instagram</h2>
                                                <p>@davidfin</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recent-area">
                    <div className="container">
                        <div className="col-12 p-0">
                            <div className="recent-top">
                                <ul>
                                    <li>Your Wishlist</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row wishlist">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="product-item">
                                    <div className="product-img">
                                        <img src="assets/images/recently/7.jpg" />
                                    </div>
                                    <div className="product-content">
                                        <h5>Four Seasons Resort</h5>
                                        <span>Kailua Kona, HI</span>
                                        <p>Starting From $150</p>
                                        <div className="pro-bottom">
                                            <ul>
                                                <div className="ratting-area">
                                                    <ul>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <p><span>4</span> (838 Reviews)</p>
                                                </div>
                                                <li><a className="custom-btn open" href="#">Book Now</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="item">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/recently/8.jpg" />
                                        </div>
                                        <div className="product-content">
                                            <h5>Elevator Cafe & Commons</h5>
                                            <span>SE Main St, Pl</span>
                                            <p>Starting From $110</p>
                                            <div className="pro-bottom">
                                                <ul>
                                                    <div className="ratting-area">
                                                        <ul>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star-half-o"></i></li>
                                                        </ul>
                                                        <p><span>4.5</span> (838 Reviews)</p>
                                                    </div>
                                                    <li><a className="custom-btn open" href="#">Book Now</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="item">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/recently/9.jpg" />
                                        </div>
                                        <div className="product-content">
                                            <h5>Ala Moana Center</h5>
                                            <span>Honolulu, HIL</span>
                                            <p>Starting From $100</p>
                                            <div className="pro-bottom">
                                                <ul>
                                                    <div className="ratting-area">
                                                        <ul>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star-half-o"></i></li>
                                                            <li><i className="fa fa-star-o"></i></li>
                                                        </ul>
                                                        <p><span>3.5</span> (838 Reviews)</p>
                                                    </div>
                                                    <li><a className="custom-btn open" href="#">Book Now</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="item">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/recently/1.jpg" />
                                        </div>
                                        <div className="product-content">
                                            <h5>Javits Center</h5>
                                            <span>New York, NY</span>
                                            <p>Starting From $200</p>
                                            <div className="pro-bottom">
                                                <ul>
                                                    <div className="ratting-area">
                                                        <ul>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                        </ul>
                                                        <p><span>5</span> (838 Reviews)</p>
                                                    </div>
                                                    <li><a className="custom-btn open" href="#">Book Now</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="item">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/recently/2.jpg" />
                                        </div>
                                        <div className="product-content">
                                            <h5>Planet Fitness</h5>
                                            <span>Blue Springs, MO </span>
                                            <p>Starting From $160</p>
                                            <div className="pro-bottom">
                                                <ul>
                                                    <div className="ratting-area">
                                                        <ul>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                        </ul>
                                                        <p><span>5</span> (838 Reviews)</p>
                                                    </div>
                                                    <li><a className="custom-btn open" href="#">Book Now</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="item">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src="assets/images/recently/3.jpg" />
                                        </div>
                                        <div className="product-content">
                                            <h5>Blue Hill</h5>
                                            <span>Washington, Pl</span>
                                            <p>Starting From $140</p>
                                            <div className="pro-bottom">
                                                <ul>
                                                    <div className="ratting-area">
                                                        <ul>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star-o"></i></li>
                                                        </ul>
                                                        <p><span>4</span> (838 Reviews)</p>
                                                    </div>
                                                    <li><a className="custom-btn open" href="#">Book Now</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="your-review section-padding pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 p-0">
                                <div className="recent-top">
                                    <ul>
                                        <li>Your Reviews</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="list-review list-sub">
                                <div className="list-review-wrap">
                                    <div className="list-review-item">
                                        <div className="rev-top">
                                            <div className="rev-item">
                                                <div className="rev-img"><img src="assets/images/listing/review/3.png" /></div>
                                                <div className="rev-text">
                                                    <h4>David Finch</h4>
                                                    <span>Posted 1 day ago</span>
                                                </div>
                                            </div>
                                            <div className="hotel-rated">
                                                <p>Pearl Continental</p>
                                                <span>Karachi, SO</span>
                                                <ul className="list-rating">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                            suffered alteration in some form, by injected humour, or randomised words which
                                            don't look even slightly believable.
                                        </p>
                                    </div>
                                    <div className="list-review-item">
                                        <div className="rev-top">
                                            <div className="rev-item">
                                                <div className="rev-img"><img src="assets/images/listing/review/3.png" /></div>
                                                <div className="rev-text">
                                                    <h4>David Finch</h4>
                                                    <span>Posted 3 months ago</span>
                                                </div>
                                            </div>
                                            <div className="hotel-rated">
                                                <p>Blue Hill</p>
                                                <span>New York, NY</span>
                                                <ul className="list-rating">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>It is a long established fact that a reader will be distracted by the readable
                                            content of a page when looking at its layout. The point of using Lorem Ipsum is that
                                            it has a more-or-less normal distribution of letters, as opposed to using 'Content
                                            here, content here', making it look like readable English.
                                        </p>
                                    </div>
                                    <div className="list-review-item">
                                        <div className="rev-top">
                                            <div className="rev-item">
                                                <div className="rev-img"><img src="assets/images/listing/review/3.png" /></div>
                                                <div className="rev-text">
                                                    <h4>David Finch</h4>
                                                    <span>Posted 1 year ago</span>
                                                </div>
                                            </div>
                                            <div className="hotel-rated">
                                                <p>Pan Pacific</p>
                                                <span>Washington, PI</span>
                                                <ul className="list-rating">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus
                                            sollicitudin feugiat pharetra consectetur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comment-area section-padding" id="share-review">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="leave-comment">
                                    <h2>Post Your Reviews</h2>
                                    <form href="#" className="rating-form">
                                        <div className="input">
                                            <div className="dropdown-select wide search-hotel" tabIndex="0"><span
                                                className="current">Pan Pacific</span>
                                                <div className="list">
                                                    <div className="dd-search"><input id="txtSearchValue" autoComplete="off"
                                                        onKeyUp={() => filter()} className="dd-searchbox" type="text"
                                                        placeholder="Find hotel" /></div>
                                                    <ul>
                                                        <li className="option selected" data-value="Pan Pacific"
                                                            data-display-text="" tabIndex="0">Pan Pacific</li>
                                                        <li className="option" data-value="Javits Center" data-display-text=""
                                                            tabIndex="0">Javits Center</li>
                                                        <li className="option" data-value="Blue Hill" data-display-text=""
                                                            tabIndex="0">Blue Hill</li>
                                                        <li className="option" data-value="Elevator Cafe &amp; Commons"
                                                            data-display-text="" tabIndex="0">Elevator Cafe &amp; Commons</li>
                                                        <li className="option" data-value="Four Seasons Resort"
                                                            data-display-text="" tabIndex="0">Four Seasons Resort</li>
                                                        <li className="option" data-value="Ala Moana Center" data-display-text=""
                                                            tabIndex="0">Ala Moana Center</li>
                                                        <li className="option" data-value="Planet Fitness" data-display-text=""
                                                            tabIndex="0">Planet Fitness</li>
                                                        <li className="option" data-value="Sheraton" data-display-text=""
                                                            tabIndex="0">Sheraton</li>
                                                        <li className="option" data-value="Pearl Continental" data-display-text=""
                                                            tabIndex="0">Pearl Continental</li>
                                                        <li className="option" data-value="Regent Plaza" data-display-text=""
                                                            tabIndex="0">Regent Plaza</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <textarea className="form-control" name="comments" rows="4" id="note"
                                                placeholder="Share your review..." required></textarea>

                                            <div className="stars-ratting">
                                                <p>Rate this hotel</p>
                                                <fieldset className="rate">
                                                    <input type="radio" id="rating10" name="rating" required value="5" /><label
                                                        htmlFor="rating10" title="5"></label>
                                                    <input type="radio" id="rating9" name="rating" required value="4.5" /><label
                                                        className="half" htmlFor="rating9" title="4.5"></label>
                                                    <input type="radio" id="rating8" name="rating" required value="4" /><label
                                                        htmlFor="rating8" title="4"></label>
                                                    <input type="radio" id="rating7" name="rating" required value="3.5" /><label
                                                        className="half" htmlFor="rating7" title="3.5"></label>
                                                    <input type="radio" id="rating6" name="rating" required value="3" /><label
                                                        htmlFor="rating6" title="3"></label>
                                                    <input type="radio" id="rating5" name="rating" required value="2.5" /><label
                                                        className="half" htmlFor="rating5" title="2.5"></label>
                                                    <input type="radio" id="rating4" name="rating" required value="2" /><label
                                                        htmlFor="rating4" title="2"></label>
                                                    <input type="radio" id="rating3" name="rating" required value="1.5" /><label
                                                        className="half" htmlFor="rating3" title="1.5"></label>
                                                    <input type="radio" id="rating2" name="rating" required value="1" /><label
                                                        htmlFor="rating2" title="1"></label>
                                                    <input type="radio" id="rating1" name="rating" required value="0.5" /><label
                                                        className="half" htmlFor="rating1" title="0.5"></label>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className="submit clearfix">
                                            <button type="submit" className="custom-btn">Publish</button>
                                        </div>
                                    </form>
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