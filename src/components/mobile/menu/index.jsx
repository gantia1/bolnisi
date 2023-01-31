import {Drawer} from "antd";
import {Link} from "react-router-dom";
import {ReactComponent as Arrow} from "../../../assets/images/svg/arrow.svg";
import {ReactComponent as LoginIcon} from "../../../assets/images/svg/account.svg";
import {ReactComponent as Shopping} from "../../../assets/images/svg/shopping.svg";
import {ReactComponent as Store} from "../../../assets/images/svg/store.svg";
import Ka from "../../../assets/images/png/ka.png";
import En from "../../../assets/images/png/en.png";
import Ru from "../../../assets/images/png/ru.png";
import Registration from "../../registration";
import {useContext, useState} from "react";
import translation from "../../../language/useTranslation";
import {TranslationContext} from "../../../contexts/TranslationContext";

const langs = ['ka', 'en', 'ru']

function Index(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const {currentLanguage, setCurrentLanguage} = useContext(TranslationContext)
    const {trans} = translation();
    const showModal = () => {
        setIsModalOpen(true);
    };
    const languages = {
        ka: <span onClick={() => setCurrentLanguage("ka")}><img src={Ka} alt="ka"/> <p> ქართული </p></span>,
        en: <span onClick={() => setCurrentLanguage("en")}><img src={En} alt="en"/> <p> English </p></span>,
        ru: <span onClick={() => setCurrentLanguage("ru")}><img src={Ru} alt="ru"/> <p> Русский </p></span>,
    }
    return (
        <>
            <Drawer className='mobile-menu' width={"100%"} placement="right" open={props.open}
                    onClose={props.close}>

                <div className="mobile-menu-list">

                    <div className="language-selection-mobile-menu">
                        <div className="mobile-menu-language">
                            {languages[currentLanguage]}<Arrow className="arrow"/>
                        </div>
                        <div className="mobile-menu-language-dropdown">
                            {langs.map((lang) => {
                                if (lang !== currentLanguage) {
                                    return languages[lang]
                                }
                            })}
                        </div>
                    </div>

                    <div className="mobile-menu-list-items">
                        <ul>
                            <Link to="/">
                                <li onClick={props.close}><p>{trans("main")}</p><Arrow/></li>
                            </Link>
                            <Link to="/news">
                                <li onClick={props.close}><p>{trans("news")}</p><Arrow/></li>
                            </Link>
                            <Link to="/about-us">
                                <li onClick={props.close}><p>{trans("aboutUs")}</p><Arrow/></li>
                            </Link>
                            <Link to="#">
                                <li onClick={props.close}><p>{trans("municipality")}</p><Arrow/></li>
                            </Link>
                            <Link to="#">
                                <li onClick={props.close}><p>{trans("termsConditions")}</p><Arrow/></li>
                            </Link>
                            <Link to="/contact">
                                <li onClick={props.close}><p>{trans("contact")}</p><Arrow/></li>
                            </Link>

                        </ul>
                    </div>

                    <div className="mobile-menu-bottom">
                        <div className="mobile-menu-registration" onClick={showModal}>
                            <LoginIcon/>
                            <span>{trans("loginRegistration")}</span>
                        </div>
                        <div className="mobile-menu-shopping">
                            <Shopping/><Link to="#">{trans("basket")}</Link>
                        </div>
                        <div className="mobile-menu-button">
                            <Link to="/store">
                                <button onClick={props.close}><Store/>{trans("shop")}</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </Drawer>
            <Registration open={isModalOpen} close={() => setIsModalOpen(false)}/>
        </>
    );
}

export default Index;
