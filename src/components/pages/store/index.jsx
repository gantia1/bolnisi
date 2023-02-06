import Slider from "../../slider";
import {ReactComponent as Arrow} from "../../../assets/images/svg/arrow.svg";
import {ReactComponent as Production} from "../../../assets/images/svg/production.svg";
import salesImage from "../../../assets/images/png/offers-img.png";
import {useState} from "react";
import StoreCard from "../../store-card";
import {useTranslation} from "react-i18next";

const sales = [
    {
        id: 1,
        image: salesImage,
        title: "ზედამო",
        text: "წითელი ღვინო ნატურალური საფერავი..",
        price: "24₾",
        sale: "32₾",
    },
    {
        id: 2,
        image: salesImage,
        title: "მარბანი",
        text: "თეთრი ღვინო რქაწითელი 2020…",
        price: "32₾",
        sale: "",
    },
    {
        id: 3,
        image: salesImage,
        title: "ლუკას მარანი",
        text: "რქაწითელი ექიმის ნატურალური ღვინო",
        price: "18₾",
        sale: "23₾",
    },
    {
        id: 4,
        image: salesImage,
        title: "ზედამო",
        text: "წითელი ღვინო ნატურალური საფერავი..",
        price: "24₾",
        sale: "",
    },
    {
        id: 5,
        image: salesImage,
        title: "მარბანი",
        text: "თეთრი ღვინო რქაწითელი 2020…",
        price: "32₾",
        sale: "36₾",
    },
];

function Index() {
    const [subMenu, setSubMenu] = useState(1);
    const {t} = useTranslation();


    const handleClick = (id) => {
        setSubMenu(id)
    };


    return (
        <>
            <Slider/>
            <div className="store-container">

                <div className="store-production-dropdown">
                    <span className="store-production-title"><Production/>{t("production")}</span>

                    <div className="store-list">
                        <div className="store-production-dropdown-left">
                            <div className="store-production-items">
                                <div className="store-production-title store-production-title-dropdown">
                                    <Production/>{t("production")}
                                </div>
                                <ul>
                                    <li className={`store-category ${subMenu === 1 && 'active'}`}
                                        onMouseOver={() => handleClick(1)}>
                                        <p>{t("wine")}</p>
                                        <Arrow/>
                                    </li>
                                    <li className={`store-category ${subMenu === 2 && 'active'}`}
                                        onMouseOver={() => handleClick(2)}>
                                        <p>{t("milkProducts")}</p>
                                        <Arrow/>
                                    </li>
                                    <li className={`store-category ${subMenu === 3 && 'active'}`}
                                        onMouseOver={() => handleClick(3)}>
                                        <p>{t("fruitsVegetables")}</p>
                                        <Arrow/>
                                    </li>
                                    <li className={`store-category ${subMenu === 4 && 'active'}`}
                                        onMouseOver={() => handleClick(4)}>
                                        <p>{t("other")}</p>
                                        <Arrow/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="store-production-dropdown-right">
                            {subMenu === 1 ? (
                                <ul>
                                    <li>{t("red")}</li>
                                    <li>{t("white")}</li>
                                    <li>{t("dry")}</li>
                                    <li>{t("factory")}</li>
                                    <li>{t("familyCellar")}</li>
                                    <li>{t("ofThePitcher")}</li>
                                </ul>
                            ) : subMenu === 2 ? (
                                <ul>
                                    <li>{t("milk")}</li>
                                    <li>{t("milk")}</li>
                                    <li>{t("milk")}</li>
                                    <li>{t("milk")}</li>
                                    <li>{t("milk")}</li>

                                </ul>
                            ) : subMenu === 3 ? (
                                <ul>
                                    <li>{t("fruit")}</li>
                                    <li>{t("fruit")}</li>
                                    <li>{t("fruit")}</li>
                                    <li>{t("fruit")}</li>
                                </ul>
                            ) : subMenu === 4 ? (
                                <ul>
                                    <li>{t("other")}</li>
                                    <li>{t("other")}</li>
                                </ul>
                            ) : null}
                        </div>
                    </div>

                </div>

                <div className="store-production-cards-title store-production-sale">
                    <span>{t("discountedProducts")}</span>
                    <span>{t("fully")}</span>
                    <span><Arrow/></span>
                </div>

                <StoreCard products={sales}/>

                <div className="store-production-cards-title">
                    <span>{t("wine")}</span>
                    <span>{t("fully")}</span>
                    <span><Arrow/></span>
                </div>

                <StoreCard products={sales}/>

                <div className="store-production-cards-title">
                    <span>{t("milkProducts")}</span>
                    <span>{t("fully")}</span>
                    <span><Arrow/></span>
                </div>

                <StoreCard products={sales}/>

                <div className="store-production-cards-title">
                    <span>{t("fruitsVegetables")}</span>
                    <span>{t("fully")}</span>
                    <span><Arrow/></span>
                </div>

                <StoreCard products={sales}/>

            </div>

        </>
    );
}

export default Index;