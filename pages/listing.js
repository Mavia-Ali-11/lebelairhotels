import Head from '../components/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import NextLink from 'next/link';

export default function Listing() {

    const toggleReviewsIcon = (i) => {
        let targetedIcon = document.getElementById("rev-icon" + i);
        if (targetedIcon.classList.contains("fa-chevron-down")) {
            targetedIcon.setAttribute("class", "fa fa-chevron-up");
        } else {
            targetedIcon.setAttribute("class", "fa fa-chevron-down");
        }
    }

    function goFullScreen(e) {
        let getClassList = e.target.classList.contains("full-scr");

        if (!getClassList && document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
            e.target.classList.add("full-scr");
        } else if (getClassList) {
            document.exitFullscreen();
            e.target.classList.remove("full-scr");
        }
    }

    function shutFullScreen() {
        document.getElementById("go-full").classList.remove("full-scr");
        if (document.exitFullscreen && document.fullscreenElement) {
            document?.exitFullscreen();
        }
    }

    return (
        <>
            <Head title="Hotels in Chicago - Lebel AirHotels" />
            <div className="page-wrapper">
                <div className="page-loader">
                    <div className="page-loader-inner">
                        <div className="inner"></div>
                    </div>
                </div>

                <Navbar />

                <div className="breadcumb-area listing-bc">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcumb-wrap">
                                    <h2>Chicago</h2>
                                    <p>We have created a list with the best luxury hotels in Chicago, IL, USA. Hope you will
                                        enjoy it.
                                        We think it might be the best of its kind around. Tip: Set your dates below to see room
                                        prices!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="select-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 m-auto">
                                <div className="select-wrap">
                                    <div className="select-area">
                                        <form className="clearfix">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="select-sub">
                                                        <span>Check in</span>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input type="date" className="form-control" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="select-sub">
                                                        <span>Check out</span>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input type="date" className="form-control" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="select-sub">
                                                        <span>Adults</span>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input type="number" className="form-control" placeholder="Adults"
                                                                    defaultValue="1" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="select-sub">
                                                        <span>Children</span>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input type="number" className="form-control" placeholder="Children"
                                                                    defaultValue="1" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 mt-3 mt-lg-0">
                                                    <div className="select-sub select-sub-2">
                                                        <button className="custom-btn-s2" type="submit">See Prices</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="key-takeaways section-padding pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content">
                                    <h3>Key Takeaways</h3>
                                    <ol>
                                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui esse delectus fugiat
                                            aliquid, ipsum quibusdam error nobis aliquam dicta nulla fuga temporibus. Id nulla
                                            necessitatibus cupiditate nesciunt! Saepe, incidunt unde.</li>
                                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, deserunt ex! Neque
                                            dolor, explicabo cupiditate ipsa laudantium aspernatur quod nemo eligendi ipsum
                                            placeat? Alias eveniet, asperiores totam numquam magnam temporibus?</li>
                                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corporis rem quod
                                            dolor neque non quae cumque, perspiciatis labore dolorum magnam tempore facere
                                            ratione, voluptatem reprehenderit vel corrupti quidem laudantium!</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="listing-area listing-aream section-padding pt-5 mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="listing-wrap">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="product-item">
                                                <div className="product-img">
                                                    <div className="img-col col1" data-toggle="modal" data-target="#imagesModal">
                                                        <img src="assets/images/listing/1.jpg" />
                                                    </div>
                                                    <div className="img-col col2" data-toggle="modal" data-target="#imagesModal">
                                                        <img src="assets/images/listing/2.jpg" />
                                                        <div className="more">
                                                            <span>20+</span>
                                                            <img src="assets/images/listing/3.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="pro-featured">
                                                        <NextLink href="/profile#share-review">
                                                            <a className="custom-btn">rate this hotel</a>
                                                        </NextLink>
                                                    </div>
                                                    <a href="#" className="add-cart thumb">
                                                        <i className="fa fa-heart"></i>
                                                    </a>
                                                </div>
                                                <div className="product-content">
                                                    <div className="basic-details">
                                                        <div>
                                                            <h5>Blue Hill</h5>
                                                        </div>
                                                        <div className="ratting-area">
                                                            <ul>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                            </ul>
                                                            <p><span>5</span> (92 Reviews)</p>
                                                        </div>
                                                    </div>
                                                    <div className="description">
                                                        <p>It is a long established fact that a reader will be distracted by
                                                            the
                                                            readable content of a page when looking at its layout. The point
                                                            of
                                                            using Lorem Ipsum is that it has a more-or-less normal
                                                            distribution
                                                            of
                                                            letters, as opposed to using 'Content here, content here',
                                                            making it
                                                            look like readable English.

                                                        </p>
                                                        <p>Many desktop publishing packages and web page editors now use
                                                            Lorem
                                                            Ipsum
                                                            as their default model text, and a search for 'lorem ipsum' will
                                                            uncover
                                                            many web sites still in their infancy.</p>
                                                    </div>
                                                    <div className="toggle-reviews" data-toggle="collapse" href="#reviewCollapse1"
                                                        role="button" aria-expanded="false" aria-controls="reviewCollapse"
                                                        onClick={() => toggleReviewsIcon('1')}>
                                                        <h6>Reviews</h6>
                                                        <i className="fa fa-chevron-down" id="rev-icon1"></i>
                                                    </div>
                                                    <div className="list-reviews">
                                                        <div className="collapse" id="reviewCollapse1">
                                                            <div className="list-review list-sub">
                                                                <div className="list-review-wrap">
                                                                    <div className="list-review-item">
                                                                        <div className="rev-top">
                                                                            <div className="rev-item">
                                                                                <div className="rev-img">
                                                                                    <img src="assets/images/listing/review/2.png"
                                                                                    />
                                                                                </div>
                                                                                <div className="rev-text">
                                                                                    <h4>James Frank</h4>
                                                                                    <span>Posted 1 day ago</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hotel-rated">
                                                                                <ul className="list-rating">
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>There are many variations of passages of Lorem
                                                                            Ipsum
                                                                            available, but the majority have
                                                                            suffered alteration in some form, by injected
                                                                            humour, or randomised words which
                                                                            don't look even slightly believable.
                                                                        </p>
                                                                    </div>
                                                                    <div className="list-review-item">
                                                                        <div className="rev-top">
                                                                            <div className="rev-item">
                                                                                <div className="rev-img"><img
                                                                                    src="assets/images/listing/review/3.png"
                                                                                /></div>
                                                                                <div className="rev-text">
                                                                                    <h4>David Finch</h4>
                                                                                    <span>Posted 3 months ago</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hotel-rated">
                                                                                <ul className="list-rating">
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>It is a long established fact that a reader will
                                                                            be
                                                                            distracted by the readable
                                                                            content of a page when looking at its layout.
                                                                            The
                                                                            point of using Lorem Ipsum is that
                                                                            it has a more-or-less normal distribution of
                                                                            letters, as opposed to using 'Content
                                                                            here, content here', making it look like
                                                                            readable
                                                                            English.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pro-bottom map-btn">
                                                        <ul>
                                                            <li className="set-dates"><span>Price: </span><a href="#">Set dates
                                                                to
                                                                show price</a></li>
                                                            <li>
                                                                <a className="show-map" href="#" data-toggle="modal"
                                                                    data-target="#mapModal">
                                                                    <img src="assets/images/vector.png" />Show On Map
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <div className="social-shares">
                                                                    <span>Share via</span>
                                                                    <i className="fa fa-pinterest"></i>
                                                                    <i className="fa fa-instagram"></i>
                                                                </div>
                                                            </li>
                                                            <li><a className="custom-btn open" href="#">Book Now</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="product-item">
                                                <div className="product-img">
                                                    <div className="img-col col1" data-toggle="modal" data-target="#imagesModal">
                                                        <img src="assets/images/listing/2.jpg" />
                                                    </div>
                                                    <div className="img-col col2" data-toggle="modal" data-target="#imagesModal">
                                                        <img src="assets/images/listing/3.jpg" />
                                                        <div className="more">
                                                            <span>20+</span>
                                                            <img src="assets/images/listing/4.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="pro-featured">
                                                        <NextLink href="/profile#share-review">
                                                            <a className="custom-btn">rate this hotel</a>
                                                        </NextLink>
                                                    </div>
                                                    <a href="#" className="add-cart thumb">
                                                        <i className="fa fa-heart"></i>
                                                    </a>
                                                </div>
                                                <div className="product-content">
                                                    <div className="basic-details">
                                                        <div>
                                                            <h5>The Peninsula Chicago</h5>
                                                        </div>
                                                        <div className="ratting-area">
                                                            <ul>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                            </ul>
                                                            <p><span>5</span> (92 Reviews)</p>
                                                        </div>
                                                    </div>
                                                    <div className="description">
                                                        <p>It is a long established fact that a reader will be distracted by
                                                            the
                                                            readable content of a page when looking at its layout. The point
                                                            of
                                                            using Lorem Ipsum is that it has a more-or-less normal
                                                            distribution
                                                            of
                                                            letters, as opposed to using 'Content here, content here',
                                                            making it
                                                            look like readable English.

                                                        </p>
                                                        <p>Many desktop publishing packages and web page editors now use
                                                            Lorem
                                                            Ipsum
                                                            as their default model text, and a search for 'lorem ipsum' will
                                                            uncover
                                                            many web sites still in their infancy.</p>
                                                    </div>
                                                    <div className="toggle-reviews" data-toggle="collapse" href="#reviewCollapse2"
                                                        role="button" aria-expanded="false" aria-controls="reviewCollapse"
                                                        onClick={() => toggleReviewsIcon('2')}>
                                                        <h6>Reviews</h6>
                                                        <i className="fa fa-chevron-down" id="rev-icon2"></i>
                                                    </div>
                                                    <div className="list-reviews">
                                                        <div className="collapse" id="reviewCollapse2">
                                                            <div className="list-review list-sub">
                                                                <div className="list-review-wrap">
                                                                    <div className="list-review-item">
                                                                        <div className="rev-top">
                                                                            <div className="rev-item">
                                                                                <div className="rev-img"><img
                                                                                    src="assets/images/listing/review/2.png"
                                                                                /></div>
                                                                                <div className="rev-text">
                                                                                    <h4>James Frank</h4>
                                                                                    <span>Posted 1 day ago</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hotel-rated">
                                                                                <ul className="list-rating">
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>There are many variations of passages of Lorem
                                                                            Ipsum
                                                                            available, but the majority have
                                                                            suffered alteration in some form, by injected
                                                                            humour, or randomised words which
                                                                            don't look even slightly believable.
                                                                        </p>
                                                                    </div>
                                                                    <div className="list-review-item">
                                                                        <div className="rev-top">
                                                                            <div className="rev-item">
                                                                                <div className="rev-img"><img
                                                                                    src="assets/images/listing/review/3.png"
                                                                                /></div>
                                                                                <div className="rev-text">
                                                                                    <h4>David Finch</h4>
                                                                                    <span>Posted 3 months ago</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hotel-rated">
                                                                                <ul className="list-rating">
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>It is a long established fact that a reader will
                                                                            be
                                                                            distracted by the readable
                                                                            content of a page when looking at its layout.
                                                                            The
                                                                            point of using Lorem Ipsum is that
                                                                            it has a more-or-less normal distribution of
                                                                            letters, as opposed to using 'Content
                                                                            here, content here', making it look like
                                                                            readable
                                                                            English.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pro-bottom map-btn">
                                                        <ul>
                                                            <li className="set-dates"><span>Price: </span><a href="#">Set dates
                                                                to
                                                                show price</a></li>
                                                            <li>
                                                                <a className="show-map" href="#" data-toggle="modal"
                                                                    data-target="#mapModal">
                                                                    <img src="assets/images/vector.png" />Show On Map
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <div className="social-shares">
                                                                    <span>Share via</span>
                                                                    <i className="fa fa-pinterest"></i>
                                                                    <i className="fa fa-instagram"></i>
                                                                </div>
                                                            </li>
                                                            <li><a className="custom-btn open" href="#">Book Now</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="product-item">
                                                <div className="product-img">
                                                    <div className="img-col col1" data-toggle="modal" data-target="#imagesModal">
                                                        <img src="assets/images/listing/3.jpg" />
                                                    </div>
                                                    <div className="img-col col2" data-toggle="modal" data-target="#imagesModal">
                                                        <img src="assets/images/listing/1.jpg" />
                                                        <div className="more">
                                                            <span>20+</span>
                                                            <img src="assets/images/listing/2.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="pro-featured">
                                                        <NextLink href="/profile#share-review">
                                                            <a className="custom-btn">rate this hotel</a>
                                                        </NextLink>
                                                    </div>
                                                    <a href="#" className="add-cart thumb">
                                                        <i className="fa fa-heart"></i>
                                                    </a>
                                                </div>
                                                <div className="product-content">
                                                    <div className="basic-details">
                                                        <div>
                                                            <h5>Four Seasons Resort</h5>
                                                        </div>
                                                        <div className="ratting-area">
                                                            <ul>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                            </ul>
                                                            <p><span>5</span> (92 Reviews)</p>
                                                        </div>
                                                    </div>
                                                    <div className="description">
                                                        <p>It is a long established fact that a reader will be distracted by
                                                            the
                                                            readable content of a page when looking at its layout. The point
                                                            of
                                                            using Lorem Ipsum is that it has a more-or-less normal
                                                            distribution
                                                            of
                                                            letters, as opposed to using 'Content here, content here',
                                                            making it
                                                            look like readable English.

                                                        </p>
                                                        <p>Many desktop publishing packages and web page editors now use
                                                            Lorem
                                                            Ipsum
                                                            as their default model text, and a search for 'lorem ipsum' will
                                                            uncover
                                                            many web sites still in their infancy.</p>
                                                    </div>
                                                    <div className="toggle-reviews" data-toggle="collapse" href="#reviewCollapse3"
                                                        role="button" aria-expanded="false" aria-controls="reviewCollapse"
                                                        onClick={() => toggleReviewsIcon('3')}>
                                                        <h6>Reviews</h6>
                                                        <i className="fa fa-chevron-down" id="rev-icon3"></i>
                                                    </div>
                                                    <div className="list-reviews">
                                                        <div className="collapse" id="reviewCollapse3">
                                                            <div className="list-review list-sub">
                                                                <div className="list-review-wrap">
                                                                    <div className="list-review-item">
                                                                        <div className="rev-top">
                                                                            <div className="rev-item">
                                                                                <div className="rev-img"><img
                                                                                    src="assets/images/listing/review/2.png"
                                                                                /></div>
                                                                                <div className="rev-text">
                                                                                    <h4>James Frank</h4>
                                                                                    <span>Posted 1 day ago</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hotel-rated">
                                                                                <ul className="list-rating">
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>There are many variations of passages of Lorem
                                                                            Ipsum
                                                                            available, but the majority have
                                                                            suffered alteration in some form, by injected
                                                                            humour, or randomised words which
                                                                            don't look even slightly believable.
                                                                        </p>
                                                                    </div>
                                                                    <div className="list-review-item">
                                                                        <div className="rev-top">
                                                                            <div className="rev-item">
                                                                                <div className="rev-img"><img
                                                                                    src="assets/images/listing/review/3.png"
                                                                                /></div>
                                                                                <div className="rev-text">
                                                                                    <h4>David Finch</h4>
                                                                                    <span>Posted 3 months ago</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hotel-rated">
                                                                                <ul className="list-rating">
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>It is a long established fact that a reader will
                                                                            be
                                                                            distracted by the readable
                                                                            content of a page when looking at its layout.
                                                                            The
                                                                            point of using Lorem Ipsum is that
                                                                            it has a more-or-less normal distribution of
                                                                            letters, as opposed to using 'Content
                                                                            here, content here', making it look like
                                                                            readable
                                                                            English.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pro-bottom map-btn">
                                                        <ul>
                                                            <li className="set-dates"><span>Price: </span><a href="#">Set dates
                                                                to
                                                                show price</a></li>
                                                            <li>
                                                                <a className="show-map" href="#" data-toggle="modal"
                                                                    data-target="#mapModal">
                                                                    <img src="assets/images/vector.png" />Show On Map
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <div className="social-shares">
                                                                    <span>Share via</span>
                                                                    <i className="fa fa-pinterest"></i>
                                                                    <i className="fa fa-instagram"></i>
                                                                </div>
                                                            </li>
                                                            <li><a className="custom-btn open" href="#">Book Now</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="product-item">
                                                <div className="product-img">
                                                    <div className="img-col col1" data-toggle="modal" data-target="#imagesModal">
                                                        <img src="assets/images/listing/4.jpg" />
                                                    </div>
                                                    <div className="img-col col2" data-toggle="modal" data-target="#imagesModal">
                                                        <img src="assets/images/listing/5.jpg" />
                                                        <div className="more">
                                                            <span>20+</span>
                                                            <img src="assets/images/listing/6.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="pro-featured">
                                                        <NextLink href="/profile#share-review">
                                                            <a className="custom-btn">rate this hotel</a>
                                                        </NextLink>
                                                    </div>
                                                    <a href="#" className="add-cart thumb">
                                                        <i className="fa fa-heart"></i>
                                                    </a>
                                                </div>
                                                <div className="product-content">
                                                    <div className="basic-details">
                                                        <div>
                                                            <h5>Elevator Cafe & Commons</h5>
                                                        </div>
                                                        <div className="ratting-area">
                                                            <ul>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                            </ul>
                                                            <p><span>5</span> (92 Reviews)</p>
                                                        </div>
                                                    </div>
                                                    <div className="description">
                                                        <p>It is a long established fact that a reader will be distracted by
                                                            the
                                                            readable content of a page when looking at its layout. The point
                                                            of
                                                            using Lorem Ipsum is that it has a more-or-less normal
                                                            distribution
                                                            of
                                                            letters, as opposed to using 'Content here, content here',
                                                            making it
                                                            look like readable English.

                                                        </p>
                                                        <p>Many desktop publishing packages and web page editors now use
                                                            Lorem
                                                            Ipsum
                                                            as their default model text, and a search for 'lorem ipsum' will
                                                            uncover
                                                            many web sites still in their infancy.</p>
                                                    </div>
                                                    <div className="toggle-reviews" data-toggle="collapse" href="#reviewCollapse4"
                                                        role="button" aria-expanded="false" aria-controls="reviewCollapse"
                                                        onClick={() => toggleReviewsIcon('4')}>
                                                        <h6>Reviews</h6>
                                                        <i className="fa fa-chevron-down" id="rev-icon4"></i>
                                                    </div>
                                                    <div className="list-reviews">
                                                        <div className="collapse" id="reviewCollapse4">
                                                            <div className="list-review list-sub">
                                                                <div className="list-review-wrap">
                                                                    <div className="list-review-item">
                                                                        <div className="rev-top">
                                                                            <div className="rev-item">
                                                                                <div className="rev-img"><img
                                                                                    src="assets/images/listing/review/2.png"
                                                                                /></div>
                                                                                <div className="rev-text">
                                                                                    <h4>James Frank</h4>
                                                                                    <span>Posted 1 day ago</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hotel-rated">
                                                                                <ul className="list-rating">
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>There are many variations of passages of Lorem
                                                                            Ipsum
                                                                            available, but the majority have
                                                                            suffered alteration in some form, by injected
                                                                            humour, or randomised words which
                                                                            don't look even slightly believable.
                                                                        </p>
                                                                    </div>
                                                                    <div className="list-review-item">
                                                                        <div className="rev-top">
                                                                            <div className="rev-item">
                                                                                <div className="rev-img"><img
                                                                                    src="assets/images/listing/review/3.png"
                                                                                /></div>
                                                                                <div className="rev-text">
                                                                                    <h4>David Finch</h4>
                                                                                    <span>Posted 3 months ago</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hotel-rated">
                                                                                <ul className="list-rating">
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>It is a long established fact that a reader will
                                                                            be
                                                                            distracted by the readable
                                                                            content of a page when looking at its layout.
                                                                            The
                                                                            point of using Lorem Ipsum is that
                                                                            it has a more-or-less normal distribution of
                                                                            letters, as opposed to using 'Content
                                                                            here, content here', making it look like
                                                                            readable
                                                                            English.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pro-bottom map-btn">
                                                        <ul>
                                                            <li className="set-dates"><span>Price: </span><a href="#">Set dates
                                                                to
                                                                show price</a></li>
                                                            <li>
                                                                <a className="show-map" href="#" data-toggle="modal"
                                                                    data-target="#mapModal">
                                                                    <img src="assets/images/vector.png" />Show On Map
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <div className="social-shares">
                                                                    <span>Share via</span>
                                                                    <i className="fa fa-pinterest"></i>
                                                                    <i className="fa fa-instagram"></i>
                                                                </div>
                                                            </li>
                                                            <li><a className="custom-btn open" href="#">Book Now</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mt-5 mb-4">
                                            <div className="product-item a-tip">
                                                <h6>Tip</h6>
                                                <p><b>Explore by neighbourhood:</b> You can find <a href="">small luxury hotel</a> within or
                                                    near different neighbourhoods of Chicago here.</p>
                                                <div className="links">
                                                    <a href="">Jakarta</a>
                                                    <a href="">Lisbon</a>
                                                    <a href="">Hamilton</a>
                                                    <a href="">Osaka</a>
                                                    <a href="">Washington</a>
                                                    <a href="">Kentucky</a>
                                                    <a href="">Brisbane</a>
                                                    <a href="">Jakarta</a>
                                                    <a href="">Hamilton</a>
                                                    <a href="">Kentucky</a>
                                                    <a href="">Brisbane</a>
                                                    <a href="">Osaka</a>
                                                    <a href="">Lisbon</a>
                                                    <a href="">Washington</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="product-item">
                                                <div className="product-img">
                                                    <div className="img-col col1" data-toggle="modal" data-target="#imagesModal">
                                                        <img src="assets/images/listing/5.jpg" />
                                                    </div>
                                                    <div className="img-col col2" data-toggle="modal" data-target="#imagesModal">
                                                        <img src="assets/images/listing/1.jpg" />
                                                        <div className="more">
                                                            <span>20+</span>
                                                            <img src="assets/images/listing/3.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="pro-featured">
                                                        <NextLink href="/profile#share-review">
                                                            <a className="custom-btn">rate this hotel</a>
                                                        </NextLink>
                                                    </div>
                                                    <a href="#" className="add-cart thumb">
                                                        <i className="fa fa-heart"></i>
                                                    </a>
                                                </div>
                                                <div className="product-content">
                                                    <div className="basic-details">
                                                        <div>
                                                            <h5>Wentworth Mansion</h5>
                                                        </div>
                                                        <div className="ratting-area">
                                                            <ul>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                            </ul>
                                                            <p><span>5</span> (92 Reviews)</p>
                                                        </div>
                                                    </div>
                                                    <div className="description">
                                                        <p>It is a long established fact that a reader will be distracted by
                                                            the
                                                            readable content of a page when looking at its layout. The point
                                                            of
                                                            using Lorem Ipsum is that it has a more-or-less normal
                                                            distribution
                                                            of
                                                            letters, as opposed to using 'Content here, content here',
                                                            making it
                                                            look like readable English.

                                                        </p>
                                                        <p>Many desktop publishing packages and web page editors now use
                                                            Lorem
                                                            Ipsum
                                                            as their default model text, and a search for 'lorem ipsum' will
                                                            uncover
                                                            many web sites still in their infancy.</p>
                                                    </div>
                                                    <div className="toggle-reviews" data-toggle="collapse" href="#reviewCollapse5"
                                                        role="button" aria-expanded="false" aria-controls="reviewCollapse"
                                                        onClick={() => toggleReviewsIcon('5')}>
                                                        <h6>Reviews</h6>
                                                        <i className="fa fa-chevron-down" id="rev-icon5"></i>
                                                    </div>
                                                    <div className="list-reviews">
                                                        <div className="collapse" id="reviewCollapse5">
                                                            <div className="list-review list-sub">
                                                                <div className="list-review-wrap">
                                                                    <div className="list-review-item">
                                                                        <div className="rev-top">
                                                                            <div className="rev-item">
                                                                                <div className="rev-img"><img
                                                                                    src="assets/images/listing/review/2.png"
                                                                                /></div>
                                                                                <div className="rev-text">
                                                                                    <h4>James Frank</h4>
                                                                                    <span>Posted 1 day ago</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hotel-rated">
                                                                                <ul className="list-rating">
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>There are many variations of passages of Lorem
                                                                            Ipsum
                                                                            available, but the majority have
                                                                            suffered alteration in some form, by injected
                                                                            humour, or randomised words which
                                                                            don't look even slightly believable.
                                                                        </p>
                                                                    </div>
                                                                    <div className="list-review-item">
                                                                        <div className="rev-top">
                                                                            <div className="rev-item">
                                                                                <div className="rev-img"><img
                                                                                    src="assets/images/listing/review/3.png"
                                                                                /></div>
                                                                                <div className="rev-text">
                                                                                    <h4>David Finch</h4>
                                                                                    <span>Posted 3 months ago</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hotel-rated">
                                                                                <ul className="list-rating">
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>It is a long established fact that a reader will
                                                                            be
                                                                            distracted by the readable
                                                                            content of a page when looking at its layout.
                                                                            The
                                                                            point of using Lorem Ipsum is that
                                                                            it has a more-or-less normal distribution of
                                                                            letters, as opposed to using 'Content
                                                                            here, content here', making it look like
                                                                            readable
                                                                            English.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pro-bottom map-btn">
                                                        <ul>
                                                            <li className="set-dates"><span>Price: </span><a href="#">Set dates
                                                                to
                                                                show price</a></li>
                                                            <li>
                                                                <a className="show-map" href="#" data-toggle="modal"
                                                                    data-target="#mapModal">
                                                                    <img src="assets/images/vector.png" />Show On Map
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <div className="social-shares">
                                                                    <span>Share via</span>
                                                                    <i className="fa fa-pinterest"></i>
                                                                    <i className="fa fa-instagram"></i>
                                                                </div>
                                                            </li>
                                                            <li><a className="custom-btn open" href="#">Book Now</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="product-item">
                                                <div className="product-img">
                                                    <div className="img-col col1" data-toggle="modal" data-target="#imagesModal">
                                                        <img src="assets/images/listing/6.jpg" />
                                                    </div>
                                                    <div className="img-col col2" data-toggle="modal" data-target="#imagesModal">
                                                        <img src="assets/images/listing/4.jpg" />
                                                        <div className="more">
                                                            <span>20+</span>
                                                            <img src="assets/images/listing/5.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="pro-featured">
                                                        <NextLink href="/profile#share-review">
                                                            <a className="custom-btn">rate this hotel</a>
                                                        </NextLink>
                                                    </div>
                                                    <a href="#" className="add-cart thumb">
                                                        <i className="fa fa-heart"></i>
                                                    </a>
                                                </div>
                                                <div className="product-content">
                                                    <div className="basic-details">
                                                        <div>
                                                            <h5>The Langham</h5>
                                                        </div>
                                                        <div className="ratting-area">
                                                            <ul>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                                <li><i className="fa fa-star"></i></li>
                                                            </ul>
                                                            <p><span>5</span> (92 Reviews)</p>
                                                        </div>
                                                    </div>
                                                    <div className="description">
                                                        <p>It is a long established fact that a reader will be distracted by
                                                            the
                                                            readable content of a page when looking at its layout. The point
                                                            of
                                                            using Lorem Ipsum is that it has a more-or-less normal
                                                            distribution
                                                            of
                                                            letters, as opposed to using 'Content here, content here',
                                                            making it
                                                            look like readable English.

                                                        </p>
                                                        <p>Many desktop publishing packages and web page editors now use
                                                            Lorem
                                                            Ipsum
                                                            as their default model text, and a search for 'lorem ipsum' will
                                                            uncover
                                                            many web sites still in their infancy.</p>
                                                    </div>
                                                    <div className="toggle-reviews" data-toggle="collapse" href="#reviewCollapse6"
                                                        role="button" aria-expanded="false" aria-controls="reviewCollapse"
                                                        onClick={() => toggleReviewsIcon('6')}>
                                                        <h6>Reviews</h6>
                                                        <i className="fa fa-chevron-down" id="rev-icon6"></i>
                                                    </div>
                                                    <div className="list-reviews">
                                                        <div className="collapse" id="reviewCollapse6">
                                                            <div className="list-review list-sub">
                                                                <div className="list-review-wrap">
                                                                    <div className="list-review-item">
                                                                        <div className="rev-top">
                                                                            <div className="rev-item">
                                                                                <div className="rev-img"><img
                                                                                    src="assets/images/listing/review/2.png"
                                                                                /></div>
                                                                                <div className="rev-text">
                                                                                    <h4>James Frank</h4>
                                                                                    <span>Posted 1 day ago</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hotel-rated">
                                                                                <ul className="list-rating">
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>There are many variations of passages of Lorem
                                                                            Ipsum
                                                                            available, but the majority have
                                                                            suffered alteration in some form, by injected
                                                                            humour, or randomised words which
                                                                            don't look even slightly believable.
                                                                        </p>
                                                                    </div>
                                                                    <div className="list-review-item">
                                                                        <div className="rev-top">
                                                                            <div className="rev-item">
                                                                                <div className="rev-img"><img
                                                                                    src="assets/images/listing/review/3.png"
                                                                                /></div>
                                                                                <div className="rev-text">
                                                                                    <h4>David Finch</h4>
                                                                                    <span>Posted 3 months ago</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hotel-rated">
                                                                                <ul className="list-rating">
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>It is a long established fact that a reader will
                                                                            be
                                                                            distracted by the readable
                                                                            content of a page when looking at its layout.
                                                                            The
                                                                            point of using Lorem Ipsum is that
                                                                            it has a more-or-less normal distribution of
                                                                            letters, as opposed to using 'Content
                                                                            here, content here', making it look like
                                                                            readable
                                                                            English.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pro-bottom map-btn">
                                                        <ul>
                                                            <li className="set-dates"><span>Price: </span><a href="#">Set dates
                                                                to
                                                                show price</a></li>
                                                            <li>
                                                                <a className="show-map" href="#" data-toggle="modal"
                                                                    data-target="#mapModal">
                                                                    <img src="assets/images/vector.png" />Show On Map
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <div className="social-shares">
                                                                    <span>Share via</span>
                                                                    <i className="fa fa-pinterest"></i>
                                                                    <i className="fa fa-instagram"></i>
                                                                </div>
                                                            </li>
                                                            <li><a className="custom-btn open" href="#">Book Now</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 show-more">
                                            <a className="custom-btn">Show More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="listing-sidebar">
                                    <div className="list-wiget search">
                                        <h5>Search</h5>
                                        <form>
                                            <div>
                                                <input type="text" placeholder="Type Keywords" required />
                                                <button type="submit"><i className="fa fa-search"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="widget list-wiget">
                                        <h5>Nearby Destinations</h5>
                                        <ul>
                                            <li><a href="#">Paris</a></li>
                                            <li><a href="#">New York</a></li>
                                            <li><a href="#">Miami</a></li>
                                            <li><a href="#">Italy</a></li>
                                            <li><a href="#">Murich</a></li>
                                            <li><a href="#">Shanghai</a></li>
                                        </ul>
                                    </div>
                                    <div className="widget list-wiget">
                                        <h5>Near Popular Landmarks</h5>
                                        <ul>
                                            <li><a href="#">Central Park</a></li>
                                            <li><a href="#">Statue of Liberty National Monument</a></li>
                                            <li><a href="#">Empire State Building</a></li>
                                            <li><a href="#">Brooklyn Bridge</a></li>
                                            <li><a href="#">The High Line</a></li>
                                            <li><a href="#">Rockefeller Center</a></li>
                                            <li><a href="#">The Metropolitan Museum of Art</a></li>
                                            <li><a href="#">Bryant Park</a></li>
                                            <li><a href="#">Top of the Rock</a></li>
                                            <li><a href="#">Grand Central Market</a></li>
                                        </ul>
                                    </div>
                                    <div className="widget list-wiget">
                                        <h5>Accommodation List</h5>
                                        <ul>
                                            <li><a href="#">Newly opened hotels</a></li>
                                            <li><a href="#">Boutique hotels</a></li>
                                            <li><a href="#">Small Luxury hotels</a></li>
                                            <li><a href="#">Five star hotels</a></li>
                                            <li><a href="#">Castle hotels</a></li>
                                            <li><a href="#">Amazing Luxury Suites</a></li>
                                            <li><a href="#">Best Hotel Suites</a></li>
                                            <li><a href="#">Central Luxury hotels</a></li>
                                            <li><a href="#">Pool hotels</a></li>
                                            <li><a href="#">Spa hotels</a></li>
                                            <li><a href="#">Unique hotels</a></li>
                                            <li><a href="#">Private villas</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>

            <div className="modal fade map-modal p-0" id="mapModal" tabIndex="-1" role="dialog" aria-labelledby="mapModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="map-area">
                            <div className="left">
                                <div id="map" className="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47513.88812958883!2d-87.6786526!3d41.9010716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cbaafde2b07%3A0xad72738f34685363!2sCambria%20Hotel%20Chicago%20Loop%20-%20Theatre%20District!5e0!3m2!1sen!2s!4v1663520744060!5m2!1sen!2s"
                                        width="100%" height="100%" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="close-map" data-dismiss="modal"><i className="fa fa-times"></i></button>
                    </div>
                </div>
            </div>

            <div className="modal fade images-modal" id="imagesModal" tabIndex="-1" role="dialog" aria-labelledby="basicModal"
                aria-hidden="true">
                <i className="fa fa-times" data-dismiss="modal" onClick={(e) => shutFullScreen(e)}></i>
                <i className="fa fa-arrows-alt" id="go-full" onClick={(e) => goFullScreen(e)}></i>
                <a className="carousel-control-prev" href="#imagesSlider" role="button" data-slide="prev">
                    <span className="fa fa-angle-left" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" href="#imagesSlider" role="button" data-slide="next">
                    <span className="fa fa-angle-right" aria-hidden="true"></span>
                </a>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div id="imagesSlider" className="carousel slide" data-ride="carousel" data-interval="false">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="img-size" src="assets/images/listing/1.jpg" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="img-size" src="assets/images/listing/2.jpg" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="img-size" src="assets/images/listing/3.jpg" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="img-size" src="assets/images/listing/5.jpg" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="img-size" src="assets/images/listing/6.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}