import MenuLogo from "../../assets/images/png/menu-logo.png";
import TextLogo from "../../assets/images/png/menu-text-img.png";
import {Link} from "react-router-dom";
import {ReactComponent as Store} from "../../assets/images/svg/store.svg";
import MenuImage2 from "../../assets/images/png/top-right-leaf.png";
import MenuImage1 from "../../assets/images/png/menu-image1.png";
import MenuImage from "../../assets/images/png/menu-image.png";
import {ReactComponent as Yellow} from "../../assets/images/svg/yellow.svg";
import {ReactComponent as LeafRight} from "../../assets/images/svg/small-leaf-right.svg";
import {ReactComponent as LeafLeft} from "../../assets/images/svg/small-leaf-left.svg";
import {ReactComponent as TopRightLeaf} from "../../assets/images/svg/top-right-leaf.svg";
import {useTranslation} from "react-i18next";

function Index() {
    const {t} = useTranslation();

    return (

        <div className="menu-container">
            <div className="menu-left-side">

                <div className="menu-logo">
                    <span className="mobile-menu-logo">
                        <Link to="/">
                        <img className="bolnisi-logo" src={MenuLogo} alt="menu-logo"/>
                        </Link>
                    </span>
                    <span className="menu-img">
                        <img src={TextLogo} alt="menu-logo"/>
                    </span>
                </div>

                <div className="menu-store-button">
                    <Link to="/store">
                        <button><Store/>{t("shop")}</button>
                    </Link>
                </div>
            </div>

            <div className="menu-right-side">

                <img className="menu-image" src={MenuImage2} alt="menu-img"/>
                <span className="menu-mobile-image">
                    <Yellow className="yellow-center"/>
                    <LeafRight className="small-leaf-right"/>
                    <LeafLeft className="small-leaf-left"/>
                    <TopRightLeaf className="top-right-leaf"/>
                    <LeafLeft className="small-bottom-leaf"/>

                </span>
                <span className="menu-image-circle"><img className="menu-image-second" src={MenuImage1} alt="menu-img"/></span>
                <span><img className="menu-image-third" src={MenuImage} alt="menu-img"/></span>

            </div>
        </div>
    );
}

export default Index;