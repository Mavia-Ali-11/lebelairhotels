import { useEffect } from 'react';
import NextLink from "next/link";

export default function Navbar() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "/assets/js/lib.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <header>
            <div className="header-area" id="sticky-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-8">
                            <div className="logo">
                                <NextLink href="/">
                                    <a>
                                        <img src="/assets/images/logo/logo.png" />
                                        <span>Lebel AirHotels</span>
                                    </a>
                                </NextLink>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 d-none d-lg-block">
                            <div className="main-menu">
                                <nav className="nav_mobile_menu">
                                    <ul>
                                        <li className="special-btn"><NextLink href="/login"><a>Signin</a></NextLink></li>
                                        <li className="special-btn green"><NextLink href="/signup"><a>Signup</a></NextLink></li>
                                        <li className="lang-dropdown" id="lang-dropdown">
                                            <div>
                                                <a className="en"><span>ENG</span></a>
                                                <a className="ru"><span>RUS</span></a>
                                                <a className="it"><span>ITA</span></a>
                                                <a className="jp"><span>JAP</span></a>
                                                <a className="fr"><span>FRE</span></a>
                                                <a className="de"><span>GER</span></a>
                                            </div>
                                        </li>
                                        <li className="currency-dropdown mr-0">
                                            <div>
                                                <a><span>USD</span></a>
                                                <a><span>GBP</span></a>
                                                <a><span>JPY</span></a>
                                                <a><span>EUR</span></a>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-12 d-block d-lg-none col-2">
                            <div className="mobile_menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}