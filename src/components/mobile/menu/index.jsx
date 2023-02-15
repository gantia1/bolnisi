import {Drawer} from "antd";
import {Link, useLocation} from "react-router-dom";
import {ReactComponent as Arrow} from "../../../assets/images/svg/arrow.svg";
import {ReactComponent as LoginIcon} from "../../../assets/images/svg/account.svg";
import {ReactComponent as Shopping} from "../../../assets/images/svg/shopping.svg";
import {ReactComponent as Store} from "../../../assets/images/svg/store.svg";
import Ka from "../../../assets/images/png/ka.png";
import En from "../../../assets/images/png/en.png";
import Ru from "../../../assets/images/png/ru.png";
import Registration from "../../registration";
import {useState} from "react";
import Cart from "../cart";
import {useTranslation} from "react-i18next";

const langs = ['ka', 'en', 'ru'];

function Index(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);
    const {t, i18n, i18n: {language}} = useTranslation();

    const {pathname, search, hash} = useLocation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        if (lng !== language) {
            i18n.changeLanguage(lng).then(() => window.location.replace(
                `/${lng}${pathname}${search}${hash}`
            ))
        }
    }
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
    return (
        <>
            <Drawer className='mobile-menu' width={"100%"} placement="right" open={props.open}
                    onClose={props.close}>

                <div className="mobile-menu-list">

                    <div className="language-selection-mobile-menu">
                        <div className="mobile-menu-language">
                            {languages[language]}<Arrow className="arrow"/>
                        </div>
                        <div className="mobile-menu-language-dropdown">
                            {langs.map((lang) => {
                                if (lang !== language) {
                                    return languages[lang]
                                }
                                return false
                            })}
                        </div>
                    </div>

                    <div className="mobile-menu-list-items">
                        <ul>
                            <Link to="/">
                                <li onClick={props.close}><p>{t("main")}</p><Arrow/></li>
                            </Link>
                            <Link to="/news">
                                <li onClick={props.close}><p>{t("news")}</p><Arrow/></li>
                            </Link>
                            <Link to="/about-us">
                                <li onClick={props.close}><p>{t("aboutUs")}</p><Arrow/></li>
                            </Link>
                            <Link to="#">
                                <li onClick={props.close}><p>{t("municipality")}</p><Arrow/></li>
                            </Link>
                            <Link to="#">
                                <li onClick={props.close}><p>{t("termsConditions")}</p><Arrow/></li>
                            </Link>
                            <Link to="/contact">
                                <li onClick={props.close}><p>{t("contact")}</p><Arrow/></li>
                            </Link>

                        </ul>
                    </div>

                    <div className="mobile-menu-bottom">
                        <div className="mobile-menu-registration" onClick={showModal}>
                            <LoginIcon/>
                            <span>{t("loginRegistration")}</span>
                        </div>
                        <div className="mobile-menu-shopping" onClick={showCart}>
                            <Shopping/><span>{t("basket")}</span>
                        </div>
                        <div className="mobile-menu-button">
                            <Link to="/store">
                                <button onClick={props.close}><Store/>{t("shop")}</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </Drawer>
            <Registration open={isModalOpen} close={() => setIsModalOpen(false)}/>
            <Cart open={isOpenCart} close={() => setIsOpenCart(false)}/>

        </>
    );
}

export default Index;
