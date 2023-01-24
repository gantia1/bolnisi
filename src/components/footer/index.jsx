import FooterLogo from "../../assets/images/png/region_logo.png";
import {ReactComponent as Facebook} from "../../assets/images/svg/facebook.svg";
import {ReactComponent as Instagram} from "../../assets/images/svg/instagram.svg";
import {ReactComponent as Linkedin} from "../../assets/images/svg/linkedin.svg";
import {ReactComponent as Tiktok} from "../../assets/images/svg/tiktok.svg";
import {ReactComponent as Youtube} from "../../assets/images/svg/youtube.svg";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import Map from "../../assets/images/png/mini-map.png";

function Index() {
    useEffect(() => {
        scrollToTop();
    }, []);

    function scrollToTop() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <footer>
            <div className="footer-container">

                <div className="footer-list">

                    <div className="footer-mobile">
                        <div className="footer-first-container">
                            <ul>
                                <li className='footer-list-item footer-logo'>
                                    <Link onClick={scrollToTop} to="/"><img src={FooterLogo} alt="footer-logo"/></Link>
                                </li>
                            </ul>
                            <div className="footer-second-container">
                                <ul className="footer-menu">

                                    <li className='footer-list-item'>
                                        <Link onClick={scrollToTop} to="/">მთავარი</Link>
                                    </li>
                                    <li className='footer-list-item'>
                                        <Link onClick={scrollToTop} to="/news">სიახლეები</Link>
                                    </li>
                                    <li className='footer-list-item'>
                                        <Link onClick={scrollToTop} to="/about-us">ჩვენს შესახებ</Link>
                                    </li>

                                </ul>

                                <ul className="footer-menu">

                                    <li className='footer-list-item'>ბოლნისის მუნიციპალიტეტი</li>
                                    <li className='footer-list-item'><Link to="#">წესები და პირობები</Link></li>
                                    <li className='footer-list-item'><Link onClick={scrollToTop}
                                                                           to="/contact">კონტაქტი</Link></li>

                                </ul>
                            </div>
                            <ul className="footer-phone-number">
                                <a href="tel:+995551250026">
                                    <li>დაგვიკავშირდით<h2>+995 551 25 00 26</h2></li>
                                </a>
                                <ul className="footer-social-media">
                                    <li><Facebook/></li>
                                    <li><Instagram/></li>
                                    <li><Linkedin/></li>
                                    <li><Tiktok/></li>
                                    <li><Youtube/></li>
                                </ul>
                            </ul>
                        </div>

                    </div>
                    <div className="footer-mobile">
                        <ul>
                            <li className='footer-list-item footer-map'>
                                <img src={Map} alt="map"/>
                            </li>
                        </ul>

                        <ul className="footer-address">
                            <li className='footer-list-item'>
                                დავით აღმაშენებლის 13ა, ბოლნისი, საქართველო
                            </li>
                            <li className="footer-list-item">
                                <a href="mailto:agrocentribolnisi@gmail.com">agrocentribolnisi@gmail.com</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Index;