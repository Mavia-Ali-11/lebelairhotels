// Components
import Head from '../components/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';

import NextLink from 'next/link';

export default function Home() {

       return (
              <>
                     <Head title="Lebel AirHotels - Find best hotels to stay" />
                     <div className="page-wrapper">
                            <div className="page-loader">
                                   <div className="page-loader-inner">
                                          <div className="inner"></div>
                                   </div>
                            </div>

                            <Navbar />

                            <section className="hero hero-slider-wrapper hero-style-1">
                                   <div className="hero-slider">
                                          <div className="slide">
                                                 <img src="/assets/images/slider/london.png" className="slider-bg" />
                                                 <div className="container">
                                                        <div className="row">
                                                               <div className="col col-lg-8 offset-lg-2 slide-caption">
                                                                      <h2>Find Best Luxury Hotels in the World</h2>
                                                                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                                                             suffered alteration in some form, by injected humour, or randomised words </p>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="slide">
                                                 <img src="/assets/images/slider/2.png" className="slider-bg" />
                                                 <div className="container">
                                                        <div className="row">
                                                               <div className="col col-lg-8 offset-lg-2 slide-caption">
                                                                      <h2>Explore And Travel</h2>
                                                                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                                                             suffered alteration in some form, by injected humour, or randomised words </p>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="slide">
                                                 <img src="/assets/images/slider/moscow.png" className="slider-bg" />
                                                 <div className="container">
                                                        <div className="row">
                                                               <div className="col col-lg-8 offset-lg-2 slide-caption">
                                                                      <h2>Make Your Holidays Memorable</h2>
                                                                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                                                             suffered alteration in some form, by injected humour, or randomised words </p>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="slide">
                                                 <img src="/assets/images/slider/osaka.png" className="slider-bg" />
                                                 <div className="container">
                                                        <div className="row">
                                                               <div className="col col-lg-8 offset-lg-2 slide-caption">
                                                                      <h2>Planning Holidays? Let's Decide Stay First</h2>
                                                                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                                                             suffered alteration in some form, by injected humour, or randomised words </p>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="slide">
                                                 <img src="/assets/images/slider/paris.png" className="slider-bg" />
                                                 <div className="container">
                                                        <div className="row">
                                                               <div className="col col-lg-8 offset-lg-2 slide-caption">
                                                                      <h2>The Place Where You Stay, Matters!</h2>
                                                                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                                                             suffered alteration in some form, by injected humour, or randomised words </p>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </section>
                            <div className="select-section">
                                   <div className="container">
                                          <div className="row">
                                                 <div className="col-lg-10 m-auto">
                                                        <div className="select-wrap">
                                                               <div className="select-area">
                                                                      <form className="clearfix">
                                                                             <div className="row">
                                                                                    <div className="col-lg-9">
                                                                                           <div className="select-sub">
                                                                                                  <span>Search Destinations</span>
                                                                                                  <div className="form-group">
                                                                                                         <div id="filterDate2">
                                                                                                                <div className="input-group">
                                                                                                                       <input type="text" className="form-control"
                                                                                                                              placeholder="New York" />
                                                                                                                </div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div className="col-lg-3">
                                                                                           <div className="select-sub select-sub-2">
                                                                                                  <button className="custom-btn-s2" type="submit">Search</button>
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
                            <div className="popular-area section-padding">
                                   <div className="container">
                                          <div className="row">
                                                 <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                                        <div className="section-title">
                                                               <h2>Popular Destinations</h2>
                                                        </div>
                                                        <div className="country-r">
                                                               <div className="destinations">
                                                                      <div className="item">
                                                                             <div className="popular-item">
                                                                                    <a href="#">
                                                                                           <div className="popular-img">
                                                                                                  <img src="/assets/images/popular/1.jpg" />
                                                                                           </div>
                                                                                    </a>
                                                                                    <div className="popular-content">
                                                                                           <h5><a href="#">New York</a></h5>
                                                                                    </div>
                                                                                    <div className="thumb">
                                                                                           <span>65 Hotel</span>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                                      <div className="item">
                                                                             <div className="popular-item">
                                                                                    <a href="#">
                                                                                           <div className="popular-img">
                                                                                                  <img src="/assets/images/popular/2.jpg" />
                                                                                           </div>
                                                                                    </a>
                                                                                    <div className="popular-content">
                                                                                           <h5><a href="#">Paris</a></h5>
                                                                                    </div>
                                                                                    <div className="thumb">
                                                                                           <span>47 Hotel</span>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                                      <div className="item">
                                                                             <div className="popular-item">
                                                                                    <a href="#">
                                                                                           <div className="popular-img">
                                                                                                  <img src="/assets/images/popular/3.jpg" />
                                                                                           </div>
                                                                                    </a>
                                                                                    <div className="popular-content">
                                                                                           <h5><a href="#">Singapore</a></h5>
                                                                                    </div>
                                                                                    <div className="thumb">
                                                                                           <span>22 Hotel</span>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                                      <div className="item">
                                                                             <div className="popular-item">
                                                                                    <a href="#">
                                                                                           <div className="popular-img">
                                                                                                  <img src="/assets/images/popular/4.jpg" />
                                                                                           </div>
                                                                                    </a>
                                                                                    <div className="popular-content">
                                                                                           <h5><a href="#">Dubai</a></h5>
                                                                                    </div>
                                                                                    <div className="thumb">
                                                                                           <span>91 Hotel</span>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                                      <div className="item">
                                                                             <div className="popular-item">
                                                                                    <a href="#">
                                                                                           <div className="popular-img">
                                                                                                  <img src="/assets/images/popular/5.jpg" />
                                                                                           </div>
                                                                                    </a>
                                                                                    <div className="popular-content">
                                                                                           <h5><a href="#">London</a></h5>
                                                                                    </div>
                                                                                    <div className="thumb">
                                                                                           <span>138 Hotel</span>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                                      <div className="item">
                                                                             <div className="popular-item">
                                                                                    <a href="#">
                                                                                           <div className="popular-img">
                                                                                                  <img src="/assets/images/popular/6.jpg" />
                                                                                           </div>
                                                                                    </a>
                                                                                    <div className="popular-content">
                                                                                           <h5><a href="#">Moscow</a></h5>
                                                                                    </div>
                                                                                    <div className="thumb">
                                                                                           <span>51 Hotel</span>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                                      <div className="item">
                                                                             <div className="popular-item">
                                                                                    <a href="#">
                                                                                           <div className="popular-img">
                                                                                                  <img src="/assets/images/popular/7.jpg" />
                                                                                           </div>
                                                                                    </a>
                                                                                    <div className="popular-content">
                                                                                           <h5><a href="#">Thailand</a></h5>
                                                                                    </div>
                                                                                    <div className="thumb">
                                                                                           <span>185 Hotel</span>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                                      <div className="item">
                                                                             <div className="popular-item">
                                                                                    <a href="#">
                                                                                           <div className="popular-img">
                                                                                                  <img src="/assets/images/popular/8.jpg" />
                                                                                           </div>
                                                                                    </a>
                                                                                    <div className="popular-content">
                                                                                           <h5><a href="#">Venice</a></h5>
                                                                                    </div>
                                                                                    <div className="thumb">
                                                                                           <span>23 Hotel</span>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                                      <div className="item">
                                                                             <div className="popular-item">
                                                                                    <a href="#">
                                                                                           <div className="popular-img">
                                                                                                  <img src="/assets/images/popular/9.jpg" />
                                                                                           </div>
                                                                                    </a>
                                                                                    <div className="popular-content">
                                                                                           <h5><a href="#">Sydney</a></h5>
                                                                                    </div>
                                                                                    <div className="thumb">
                                                                                           <span>66 Hotel</span>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div className="btns text-center">
                                                               <a className="custom-btn" href="#">View All</a>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                            <div className="deals-area">
                                   <div className="container">
                                          <div className="row mb-5">
                                                 <div className="col-xs-12 col-lg-12 col-md-12 col-12">
                                                        <div className="section-title section-titlev2">
                                                               <h2>Other Recommended Destinations</h2>
                                                        </div>
                                                        <div className="row">
                                                               <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                                      <div className="product-item">
                                                                             <a href="#">
                                                                                    <div className="product-img">
                                                                                           <img src="/assets/images/others-rec/1.png" />
                                                                                    </div>
                                                                             </a>
                                                                             <div className="product-content">
                                                                                    <h5><a href="#">Maldives</a></h5>
                                                                                    <div className="ratting-area">
                                                                                           <ul>
                                                                                                  <li><i className="fa fa-star"></i></li>
                                                                                                  <li><i className="fa fa-star"></i></li>
                                                                                                  <li><i className="fa fa-star"></i></li>
                                                                                                  <li><i className="fa fa-star"></i></li>
                                                                                                  <li><i className="fa fa-star-half-o"></i></li>
                                                                                           </ul>
                                                                                    </div>
                                                                                    <p><span>4.5</span> (726 Reviews)</p>
                                                                             </div>
                                                                             <div className="thumb">
                                                                                    <span>4.5</span>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                               <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                                      <div className="item">
                                                                             <div className="product-item">
                                                                                    <a href="#">
                                                                                           <div className="product-img">
                                                                                                  <img src="/assets/images/others-rec/2.png" />
                                                                                           </div>
                                                                                    </a>
                                                                                    <div className="product-content">
                                                                                           <h5><a href="#">San Diego</a></h5>
                                                                                           <div className="ratting-area">
                                                                                                  <ul>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star-half-o"></i></li>
                                                                                                         <li><i className="fa fa-star-o"></i></li>
                                                                                                  </ul>
                                                                                           </div>
                                                                                           <p><span>3.5</span> (659 Reviews)</p>
                                                                                    </div>
                                                                                    <div className="thumb">
                                                                                           <span>3.5</span>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                               <div className="col-lg-6 col-md-12 col-sm-12 col-12 prod-img">
                                                                      <div className="item">
                                                                             <div className="product-item product-item2">
                                                                                    <div className="product-content">
                                                                                           <h5><a href="#">Turkey</a></h5>
                                                                                           <div className="ratting-area">
                                                                                                  <ul>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                  </ul>
                                                                                           </div>
                                                                                           <p><span>5</span> (838 Reviews)</p>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                                      <div className="thumb">
                                                                             <span>5</span>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div className="row row-no-2 mt-4">
                                                               <div className="col-lg-6 col-md-12 col-sm-12 col-12 prod-img">
                                                                      <div className="item">
                                                                             <div className="product-item product-item2">
                                                                                    <div className="product-content">
                                                                                           <h5><a href="#">Amsterdam</a></h5>
                                                                                           <div className="ratting-area">
                                                                                                  <ul>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                  </ul>
                                                                                           </div>
                                                                                           <p><span>5</span> (772 Reviews)</p>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                                      <div className="thumb">
                                                                             <span>4.5</span>
                                                                      </div>
                                                               </div>
                                                               <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                                      <div className="item">
                                                                             <div className="product-item">
                                                                                    <a href="#">
                                                                                           <div className="product-img">
                                                                                                  <img src="/assets/images/others-rec/6.jpg" />
                                                                                           </div>
                                                                                    </a>
                                                                                    <div className="product-content">
                                                                                           <h5><a href="#">Capetown</a></h5>
                                                                                           <div className="ratting-area">
                                                                                                  <ul>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star-half-o"></i></li>
                                                                                                  </ul>
                                                                                           </div>
                                                                                           <p><span>4.5</span> (502 Reviews)</p>
                                                                                    </div>
                                                                                    <div className="thumb">
                                                                                           <span>4.5</span>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                               <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                                      <div className="product-item">
                                                                             <a href="#">
                                                                                    <div className="product-img">
                                                                                           <img src="/assets/images/others-rec/7.jpg" />
                                                                                    </div>
                                                                             </a>
                                                                             <div className="product-content">
                                                                                    <h5><a href="#">Islamabad</a></h5>
                                                                                    <div className="ratting-area">
                                                                                           <ul>
                                                                                                  <li><i className="fa fa-star"></i></li>
                                                                                                  <li><i className="fa fa-star"></i></li>
                                                                                                  <li><i className="fa fa-star"></i></li>
                                                                                                  <li><i className="fa fa-star"></i></li>
                                                                                                  <li><i className="fa fa-star-half-o"></i></li>
                                                                                           </ul>
                                                                                    </div>
                                                                                    <p><span>4.5</span> (483 Reviews)</p>
                                                                             </div>
                                                                             <div className="thumb">
                                                                                    <span>4.5</span>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div className="row row-no-3 mt-4">
                                                               <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                                      <div className="product-item">
                                                                             <a href="#">
                                                                                    <div className="product-img">
                                                                                           <img src="/assets/images/others-rec/6.jpg" />
                                                                                    </div>
                                                                             </a>
                                                                             <div className="product-content">
                                                                                    <h5><a href="#">Toronto</a></h5>
                                                                                    <div className="ratting-area">
                                                                                           <ul>
                                                                                                  <li><i className="fa fa-star"></i></li>
                                                                                                  <li><i className="fa fa-star"></i></li>
                                                                                                  <li><i className="fa fa-star"></i></li>
                                                                                                  <li><i className="fa fa-star-half-o"></i></li>
                                                                                                  <li><i className="fa fa-star-o"></i></li>
                                                                                           </ul>
                                                                                    </div>
                                                                                    <p><span>3.5</span> (846 Reviews)</p>
                                                                             </div>
                                                                             <div className="thumb">
                                                                                    <span>3.5</span>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                               <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                                      <div className="item">
                                                                             <div className="product-item">
                                                                                    <a href="#">
                                                                                           <div className="product-img">
                                                                                                  <img src="/assets/images/others-rec/4.png" />
                                                                                           </div>
                                                                                    </a>
                                                                                    <div className="product-content">
                                                                                           <h5><a href="#">Miami</a></h5>
                                                                                           <div className="ratting-area">
                                                                                                  <ul>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star-half-o"></i></li>
                                                                                                  </ul>
                                                                                           </div>
                                                                                           <p><span>4.5</span> (612 Reviews)</p>
                                                                                    </div>
                                                                                    <div className="thumb">
                                                                                           <span>4.5</span>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                               <div className="col-lg-6 col-md-12 col-sm-12 col-12 prod-img">
                                                                      <div className="item">
                                                                             <div className="product-item product-item2">
                                                                                    <div className="product-content">
                                                                                           <h5><a href="#">Rome</a></h5>
                                                                                           <div className="ratting-area">
                                                                                                  <ul>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                         <li><i className="fa fa-star"></i></li>
                                                                                                  </ul>
                                                                                           </div>
                                                                                           <p><span>5</span> (780 Reviews)</p>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                                      <div className="thumb">
                                                                             <span>5</span>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="btns text-center mt-2">
                                                 <a className="custom-btn" href="#">View All</a>
                                          </div>
                                   </div>
                            </div>
                            <div className="trendings section-padding">
                                   <div className="container">
                                          <div className="row">
                                                 <div className="col-xs-12 col-lg-12 col-md-12 col-12">
                                                        <div className="section-title">
                                                               <h2>Trending Destinations</h2>
                                                        </div>
                                                        <div className="row trends">
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">Miami</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">Chicago</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">London</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">New York</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">Moscow</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">Vietnam</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">Capetown</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">Baku</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">Venice</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">Rome</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">Istanbul</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">Murich</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">Bristol</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">Sydney</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">Bangkok</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">Singapore</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">Tokyo</a>
                                                                      </div>
                                                               </div>
                                                               <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                                                      <div>
                                                                             <a href="#">Amsterdam</a>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                            <div className="recent-area">
                                   <div className="container">
                                          <div className="section-title text-center">
                                                 <h2>Explore Luxury Hotels around the Globe</h2>
                                          </div>
                                          <div className="row">
                                                 <div className="col-lg-4 col-md-6 col-12">
                                                        <div className="product-item">
                                                               <a href="#">
                                                                      <div className="product-img">
                                                                             <img src="/assets/images/recently/1.jpg" />
                                                                      </div>
                                                               </a>
                                                               <div className="product-content">
                                                                      <h5>Four Seasons Resort</h5>
                                                                      <span>Kailua Kona, HI</span>
                                                                      <p>Starting From $150</p>
                                                                      <div className="ratting-area">
                                                                             <ul>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star"></i></li>
                                                                                    <li><i className="fa fa-star-o"></i></li>
                                                                             </ul>
                                                                             <p><span>4</span> (92 Reviews)</p>
                                                                      </div>
                                                                      <hr />
                                                                      <p className="social-shares">
                                                                             <span>Share via</span>
                                                                             <i className="fa fa-pinterest"></i>
                                                                             <i className="fa fa-instagram"></i>
                                                                      </p>
                                                               </div>
                                                               <a href="#" className="add-cart">
                                                                      <i className="fa fa-heart"></i>
                                                               </a>
                                                        </div>
                                                 </div>
                                                 <div className="col-lg-4 col-md-6 col-12">
                                                        <div className="item">
                                                               <div className="product-item">
                                                                      <a href="#">
                                                                             <div className="product-img">
                                                                                    <img src="/assets/images/recently/2.jpg" />
                                                                             </div>
                                                                      </a>
                                                                      <div className="product-content">
                                                                             <h5>The Peninsula Chicago</h5>
                                                                             <span>Chicago, IL</span>
                                                                             <p>Starting From $110</p>
                                                                             <div className="ratting-area">
                                                                                    <ul>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star-half-o"></i></li>
                                                                                    </ul>
                                                                                    <p><span>4.5</span> (102 Reviews)</p>
                                                                             </div>
                                                                             <hr />
                                                                             <p className="social-shares">
                                                                                    <span>Share via</span>
                                                                                    <i className="fa fa-pinterest"></i>
                                                                                    <i className="fa fa-instagram"></i>
                                                                             </p>
                                                                      </div>
                                                                      <a href="#" className="add-cart">
                                                                             <i className="fa fa-heart"></i>
                                                                      </a>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <div className="col-lg-4 col-md-6 col-12">
                                                        <div className="item">
                                                               <div className="product-item">
                                                                      <a href="#">
                                                                             <div className="product-img">
                                                                                    <img src="/assets/images/recently/3.jpg" />
                                                                             </div>
                                                                      </a>
                                                                      <div className="product-content">
                                                                             <h5>The Langham</h5>
                                                                             <span>Chicago, IL</span>
                                                                             <p>Starting From $100</p>
                                                                             <div className="ratting-area">
                                                                                    <ul>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                    </ul>
                                                                                    <p><span>5</span> (78 Reviews)</p>
                                                                             </div>
                                                                             <hr />
                                                                             <p className="social-shares">
                                                                                    <span>Share via</span>
                                                                                    <i className="fa fa-pinterest"></i>
                                                                                    <i className="fa fa-instagram"></i>
                                                                             </p>
                                                                      </div>
                                                                      <a href="#" className="add-cart">
                                                                             <i className="fa fa-heart"></i>
                                                                      </a>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <div className="col-lg-4 col-md-6 col-12">
                                                        <div className="item">
                                                               <div className="product-item">
                                                                      <a href="#">
                                                                             <div className="product-img">
                                                                                    <img src="/assets/images/recently/7.jpg" />
                                                                             </div>
                                                                      </a>
                                                                      <div className="product-content">
                                                                             <h5>Montage Kapalua Bay</h5>
                                                                             <span>Kailua Kona, HI</span>
                                                                             <p>Starting From $130</p>
                                                                             <div className="ratting-area">
                                                                                    <ul>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star-half-o"></i></li>
                                                                                           <li><i className="fa fa-star-o"></i></li>
                                                                                    </ul>
                                                                                    <p><span>3.5</span> (95 Reviews)</p>
                                                                             </div>
                                                                             <hr />
                                                                             <p className="social-shares">
                                                                                    <span>Share via</span>
                                                                                    <i className="fa fa-pinterest"></i>
                                                                                    <i className="fa fa-instagram"></i>
                                                                             </p>
                                                                      </div>
                                                                      <a href="#" className="add-cart">
                                                                             <i className="fa fa-heart"></i>
                                                                      </a>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <div className="col-lg-4 col-md-6 col-12">
                                                        <div className="item">
                                                               <div className="product-item">
                                                                      <a href="#">
                                                                             <div className="product-img">
                                                                                    <img src="/assets/images/recently/5.jpg" />
                                                                             </div>
                                                                      </a>
                                                                      <div className="product-content">
                                                                             <h5>Waldorf Astoria Beverly Hills</h5>
                                                                             <span>Beverly Hills, CA</span>
                                                                             <p>Starting From $120</p>
                                                                             <div className="ratting-area">
                                                                                    <ul>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star-half-o"></i></li>
                                                                                    </ul>
                                                                                    <p><span>4.5</span> (83 Reviews)</p>
                                                                             </div>
                                                                             <hr />
                                                                             <p className="social-shares">
                                                                                    <span>Share via</span>
                                                                                    <i className="fa fa-pinterest"></i>
                                                                                    <i className="fa fa-instagram"></i>
                                                                             </p>
                                                                      </div>
                                                                      <a href="#" className="add-cart">
                                                                             <i className="fa fa-heart"></i>
                                                                      </a>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <div className="col-lg-4 col-md-6 col-12">
                                                        <div className="item">
                                                               <div className="product-item">
                                                                      <a href="#">
                                                                             <div className="product-img">
                                                                                    <img src="/assets/images/recently/8.jpg" />
                                                                             </div>
                                                                      </a>
                                                                      <div className="product-content">
                                                                             <h5>Wentworth Mansion</h5>
                                                                             <span>Charleston, SC</span>
                                                                             <p>Starting From $200</p>
                                                                             <div className="ratting-area">
                                                                                    <ul>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                           <li><i className="fa fa-star"></i></li>
                                                                                    </ul>
                                                                                    <p><span>5</span> (106 Reviews)</p>
                                                                             </div>
                                                                             <hr />
                                                                             <p className="social-shares">
                                                                                    <span>Share via</span>
                                                                                    <i className="fa fa-pinterest"></i>
                                                                                    <i className="fa fa-instagram"></i>
                                                                             </p>
                                                                      </div>
                                                                      <a href="#" className="add-cart">
                                                                             <i className="fa fa-heart"></i>
                                                                      </a>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="btns text-center">
                                                 <a className="custom-btn" href="#">View All</a>
                                          </div>
                                   </div>
                            </div>
                            <div className="testimonial-area section-padding">
                                   <div className="container">
                                          <div className="section-title">
                                                 <h2>Testimonials</h2>
                                          </div>
                                          <div className="row">
                                                 <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                                        <div className="test-wrap">
                                                               <div className="testimonial-slider clearfix">
                                                                      <Testimonials />
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                            <div className="cta-area">
                                   <div className="container">
                                          <div className="cta-wrap">
                                                 <div className="row">
                                                        <div className="col-lg-12">
                                                               <div className="cta-text">
                                                                      <h2>Want To Know More About Us?</h2>
                                                                      <div className="btns">
                                                                             <NextLink href="/about">
                                                                                    <a className="custom-btn">ABOUT US</a>
                                                                             </NextLink>
                                                                      </div>
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
