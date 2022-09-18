// Components
import Head from '../components/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function NotFound() {
    return (
        <>
            <Head title="404 - Lebel AirHotels" />
            <div className="page-wrapper">
                <div className="page-loader">
                    <div className="page-loader-inner">
                        <div className="inner"></div>
                    </div>
                </div>

                <Navbar />

                <div className="breadcumb-area breadcumb-error">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="error-text">
                                    <h2>404</h2>
                                    <h4>Page Not Found</h4>
                                    <a className="custom-btn" href="index.html">Back to home page</a>
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