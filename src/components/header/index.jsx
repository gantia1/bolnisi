import {Link, NavLink, useLocation} from "react-router-dom";
import {ReactComponent as HeaderLogo} from "../../assets/images/svg/header-logo.svg";
import {ReactComponent as Ge} from "../../assets/images/svg/ka.svg";
import {ReactComponent as Shopping} from "../../assets/images/svg/shopping.svg";
import {ReactComponent as Account} from "../../assets/images/svg/account.svg";
import {ReactComponent as Arrow} from "../../assets/images/svg/arrow.svg";
import Menu from "../menu";
import Slider from "../slider";
import {ReactComponent as HeaderToggle} from "../../assets/images/svg/toggle.svg";
import {ReactComponent as Store} from "../../assets/images/svg/store.svg";
import MobileMenu from "../mobile/menu";
import {useContext, useState} from "react";
import Logo from "../../assets/images/png/menu-logo.png";
import MenuLogo from "../../assets/images/png/menu-text-img.png";
import Registration from "../registration";
import translation from "../../language/useTranslation";
import {TranslationContext} from "../../contexts/TranslationContext";

const langs = ['ka', 'en', 'ru']

function Index() {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {currentLanguage, setCurrentLanguage} = useContext(TranslationContext)
    const {trans} = translation();
    const showDrawer = () => {
        setOpen(true);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };

    const languages = {
        ka: <p onClick={() => setCurrentLanguage("ka")}><Ge/> <span> ქართული </span></p>,
        en: <p onClick={() => setCurrentLanguage("en")}><Ge/> <span> English </span></p>,
        ru: <p onClick={() => setCurrentLanguage("ru")}><Ge/> <span> Русский</span></p>,
    }

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
                                {languages[currentLanguage]}<Arrow className="arrow"/>
                            </div>
                            <div className="language-dropdown-content">
                                {langs.map((lang) => {
                                    if (lang !== currentLanguage) {
                                        return languages[lang]
                                    }
                                })}
                            </div>
                        </div>
                        <div className="header-nav-list">
                            <span className="header-account" onClick={showModal}><Account/></span>
                            <span><Link to="#"><Shopping/></Link></span>
                        </div>
                        <Link to="/store">
                            <div className="header-store">
                                <span><Store/>{trans("shop")}</span>
                            </div>
                        </Link>
                    </div>

                    <div className="header-toggle">
                        <HeaderToggle onClick={showDrawer}/>
                    </div>
                </div>
                <div className="pages-menu menu-container font-face-hn">
                    <ul>
                        <li><NavLink to="/">{trans("main")}</NavLink></li>
                        <li><NavLink to="/news">{trans("news")}</NavLink></li>
                        <li><NavLink to="/about-us">{trans("aboutUs")}</NavLink></li>
                        <li><NavLink to="/municipality">{trans("municipality")}</NavLink></li>
                        <li><NavLink to="/terms-conditions">{trans("termsConditions")}</NavLink></li>
                        <li><NavLink to="/contact">{trans("contact")}</NavLink></li>
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
                        className={location.pathname === "/online-store" ? 'pages-menu-text-logo-hide' : 'pages-menu-text-logo'}>
                        <img src={MenuLogo} alt="menu-logo"/>
                    </div>
                    <div className="pages-mobile-menu-shopping">
                        <span>2</span>
                        <span><Shopping/></span>
                    </div>
                </div>
            )
            }
            <MobileMenu open={open} close={() => setOpen(false)}/>
            <Registration open={isModalOpen} close={() => setIsModalOpen(false)}/>
        </>
    );
}

export default Index;