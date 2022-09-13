import dynamic from 'next/dynamic';

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

export default function Testimonials() {
    return (
        <OwlCarousel
            loop={true}
            dots={false}
            margin={30}
            navSpeed={2500}
            smartSpeed={2500}
            navClass={['owl-prev', 'owl-next']}
            navText={['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']}
            responsive={
                {
                    0: { items: 1 },
                    480: { items: 1 },
                    600: { items: 2 },
                    1024: { items: 2 },
                    1200: { items: 2 },
                    1500: { items: 3 }
                }
            }
        >
            <div className="grid">
                <div className="ratting">
                    <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                    </ul>
                </div>
                <div className="quote">
                    <p>“ If you are going to use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of text. All the Lorem
                        Ipsum generators on the Internet tend to repeat predefined chunks as
                        necessary, mak”</p>
                </div>
                <div className="client-info">
                    <div className="client-img">
                        <img src="/assets/images/testimonial/img-1.jpg" />
                    </div>
                    <div className="client-text">
                        <h5>Wayne Weddle</h5>
                        <p>Police Officer</p>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="ratting">
                    <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                    </ul>
                </div>
                <div className="quote">
                    <p>“ If you are going to use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of text. All the Lorem
                        Ipsum generators on the Internet tend to repeat predefined chunks as
                        necessary, mak”</p>
                </div>
                <div className="client-info">
                    <div className="client-img">
                        <img src="/assets/images/testimonial/img-2.jpg" />
                    </div>
                    <div className="client-text">
                        <h5>Miguel Rodriguez</h5>
                        <p>Teacher</p>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="ratting">
                    <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                    </ul>
                </div>
                <div className="quote">
                    <p>“ If you are going to use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of text. All the Lorem
                        Ipsum generators on the Internet tend to repeat predefined chunks as
                        necessary, mak”</p>
                </div>
                <div className="client-info">
                    <div className="client-img">
                        <img src="/assets/images/testimonial/img-3.jpg" />
                    </div>
                    <div className="client-text">
                        <h5>Candy Wisneski</h5>
                        <p>Credit Manager</p>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="ratting">
                    <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                    </ul>
                </div>
                <div className="quote">
                    <p>“ If you are going to use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of text. All the Lorem
                        Ipsum generators on the Internet tend to repeat predefined chunks as
                        necessary, mak”</p>
                </div>
                <div className="client-info">
                    <div className="client-img">
                        <img src="/assets/images/testimonial/img-4.jpg" />
                    </div>
                    <div className="client-text">
                        <h5>Benjamin N. Nutter</h5>
                        <p>Law Clerk</p>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    )
}