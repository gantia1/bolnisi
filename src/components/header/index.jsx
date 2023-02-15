import {Link, NavLink, useLocation} from "react-router-dom";
import {ReactComponent as HeaderLogo} from "../../assets/images/svg/header-logo.svg";
import Ka from "../../assets/images/png/ka.png";
import En from "../../assets/images/png/en.png";
import Ru from "../../assets/images/png/ru.png";
import {ReactComponent as Shopping} from "../../assets/images/svg/shopping.svg";
import {ReactComponent as Account} from "../../assets/images/svg/account.svg";
import {ReactComponent as Arrow} from "../../assets/images/svg/arrow.svg";
import Menu from "../menu";
import Slider from "../slider";
import {ReactComponent as HeaderToggle} from "../../assets/images/svg/toggle.svg";
import {ReactComponent as Store} from "../../assets/images/svg/store.svg";
import MobileMenu from "../mobile/menu";
import {useEffect, useRef, useState} from "react";
import Logo from "../../assets/images/png/menu-logo.png";
import MenuLogo from "../../assets/images/png/menu-text-img.png";
import Registration from "../registration";
import MobileCart from "../mobile/cart";
import {useTranslation} from "react-i18next";
import Cart from "../cart";

const langs = ['ka', 'en', 'ru'];

function Index() {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    const {t, i18n, i18n: {language}} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    const showDrawer = () => {
        setOpen(true);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const showCart = () => {
        setIsOpenCart(true);
    };


    const languages = {
        ka: <span onClick={() => changeLanguage('ka')}><img src={Ka} alt="ka"/> <p> ქართული </p></span>,
        en: <span onClick={() => changeLanguage('en')}><img src={En} alt="en"/> <p> English </p></span>,
        ru: <span onClick={() => changeLanguage('ru')}><img src={Ru} alt="ru"/> <p> Русский </p></span>,
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpenCart(false);
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (

        <>
            <header>
                <div className="header-container">
                    <div className="header-pages-logo">
                        <div>
                            <Link to="/"><img src={Logo} alt=""/></Link>
                        </div>
                        <HeaderLogo/>

                    </div>


                    <div className="header-nav-item">
                        <div className="language-selection">
                            <div className="language">
                                {languages[language]}<Arrow className="arrow"/>
                            </div>
                            <div className="language-dropdown-content">
                                {langs.map((lang) => {
                                    if (lang !== language) {
                                        return languages[lang]
                                    }
                                    return false
                                })}
                            </div>
                        </div>
                        <div className="header-nav-list">
                            <div className="header-account" onClick={showModal}><Account/></div>
                            <div className="header-nav-cart-container" ref={wrapperRef}>
                                <div className={`header-nav-cart ${openCart ? "color" : ""}`}
                                     onClick={() => setOpenCart(!openCart)}>
                                    <span><Shopping/></span>
                                    <span className="header-cart-quantity">2</span>
                                </div>
                                <Cart open={openCart} close={() => setOpenCart(false)}/>
                            </div>

                        </div>
                        <div className="header-store">
                            <Link to="/store">
                                <button><Store/>{t("shop")}</button>
                            </Link>
                        </div>
                    </div>
                    <div className="header-toggle">
                        <HeaderToggle onClick={showDrawer}/>
                    </div>
                </div>

                <div className="pages-menu menu-container font-face-hn">
                    <ul>
                        <li><NavLink to="/">{t("main")}</NavLink></li>
                        <li><NavLink to="/news">{t("news")}</NavLink></li>
                        <li><NavLink to="/about-us">{t("aboutUs")}</NavLink></li>
                        <li><NavLink to="/municipality">{t("municipality")}</NavLink></li>
                        <li><NavLink to="/terms-conditions">{t("termsConditions")}</NavLink></li>
                        <li><NavLink to="/contact">{t("contact")}</NavLink></li>
                    </ul>
                </div>
            </header>
            {location.pathname === "/" ? (
                <>
                    <Menu/>
                    <Slider/>
                </>
            ) : (
                <div className="pages-mobile-menu">
                    <div className="pages-menu-logo">
                        <Link to="/"><img src={Logo} alt="menu-logo"/></Link>
                    </div>
                    <div
                        className={location.pathname === "/online-store" || "/store" ? 'pages-menu-text-logo-hide' : 'pages-menu-text-logo'}>
                        <img src={MenuLogo} alt="menu-logo"/>
                    </div>
                    <div className="pages-mobile-menu-shopping" onClick={showCart}>
                        <span>2</span>
                        <span><Shopping/></span>
                    </div>
                </div>
            )}
            <MobileMenu open={open} close={() => setOpen(false)}/>
            <Registration open={isModalOpen} close={() => setIsModalOpen(false)}/>
            <MobileCart open={isOpenCart} close={() => setIsOpenCart(false)}/>
        </>
    );
}

export default Index;