import {Drawer} from "antd";
import {Link} from "react-router-dom";
import {ReactComponent as Ge} from "../../../assets/images/svg/ka.svg";
import {ReactComponent as Arrow} from "../../../assets/images/svg/arrow.svg";
import {ReactComponent as LoginIcon} from "../../../assets/images/svg/account.svg";
import {ReactComponent as Shopping} from "../../../assets/images/svg/shopping.svg";
import {ReactComponent as Store} from "../../../assets/images/svg/store.svg";

function Index(props) {


    return (
        <Drawer className='mobile-menu' width={"100%"} placement="right" open={props.open}
                onClose={props.close}>

            <div className="mobile-menu-list">

                <div className="language-selection-mobile-menu">
                    <div className="mobile-menu-language">
                        <Link to="#"><Ge/> <span>ქართული</span> <Arrow className="arrow"/></Link>
                    </div>
                    <div className="mobile-menu-language-dropdown">
                        <Link to="#"><Ge/><span>English</span></Link>
                        <Link to="#"><Ge/><span>Русский</span></Link>
                    </div>
                </div>

                <div className="mobile-menu-list-items">
                    <ul>
                        <Link to="/">
                            <li onClick={props.close}><p>მთავარი</p><Arrow/></li>
                        </Link>
                        <Link to="/news">
                            <li onClick={props.close}><p>სიახლეები</p><Arrow/></li>
                        </Link>
                        <Link to="/about-us">
                            <li onClick={props.close}><p>ჩვენს შესახებ</p><Arrow/></li>
                        </Link>
                        <Link to="#">
                            <li onClick={props.close}><p>ბოლნისის მუნიციპალიტეტი</p><Arrow/></li>
                        </Link>
                        <Link to="#">
                            <li onClick={props.close}><p>წესები და პირობები</p><Arrow/></li>
                        </Link>
                        <Link to="/contact">
                            <li onClick={props.close}><p>კონტაქტი</p><Arrow/></li>
                        </Link>

                    </ul>
                </div>

                <div className="mobile-menu-bottom">
                    <div className="mobile-menu-registration">
                        <LoginIcon/>
                        <Link to="#">შესვლა / რეგისტრაცია</Link>
                    </div>
                    <div className="mobile-menu-shopping">
                        <Shopping/><Link to="#">კალათა</Link>
                    </div>
                    <div className="mobile-menu-button">
                        <Link to="/store">
                            <button onClick={props.close}><Store/>მაღაზია</button>
                        </Link>
                    </div>
                </div>

            </div>
        </Drawer>
    );
}

export default Index;