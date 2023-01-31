import Slider from "../../slider";
import {ReactComponent as Arrow} from "../../../assets/images/svg/arrow.svg";
import {ReactComponent as Production} from "../../../assets/images/svg/production.svg";
import salesImage from "../../../assets/images/png/offers-img.png";
import {useState} from "react";
import translation from "../../../language/useTranslation";
import StoreCard from "../../store-card";

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
    const {trans} = translation();


    const handleClick = (id) => {
        setSubMenu(id)
    };


    return (
        <>
            <Slider/>
            <div className="store-container">

                <div className="store-production-dropdown">
                    <span className="store-production-title"><Production/>{trans("production")}</span>

                    <div className="store-list">
                        <div className="store-production-dropdown-left">
                            <div className="store-production-items">
                                <div className="store-production-title store-production-title-dropdown">
                                    <Production/>{trans("production")}
                                </div>
                                <ul>
                                    <li className={`store-category ${subMenu === 1 && 'active'}`}
                                        onMouseOver={() => handleClick(1)}>
                                        <p>{trans("wine")}</p>
                                        <Arrow/>
                                    </li>
                                    <li className={`store-category ${subMenu === 2 && 'active'}`}
                                        onMouseOver={() => handleClick(2)}>
                                        <p>{trans("milkProducts")}</p>
                                        <Arrow/>
                                    </li>
                                    <li className={`store-category ${subMenu === 3 && 'active'}`}
                                        onMouseOver={() => handleClick(3)}>
                                        <p>{trans("fruitsVegetables")}</p>
                                        <Arrow/>
                                    </li>
                                    <li className={`store-category ${subMenu === 4 && 'active'}`}
                                        onMouseOver={() => handleClick(4)}>
                                        <p>{trans("other")}</p>
                                        <Arrow/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="store-production-dropdown-right">
                            {subMenu === 1 ? (
                                <ul>
                                    <li>{trans("red")}</li>
                                    <li>{trans("white")}</li>
                                    <li>{trans("dry")}</li>
                                    <li>{trans("factory")}</li>
                                    <li>{trans("familyCellar")}</li>
                                    <li>{trans("ofThePitcher")}</li>
                                </ul>
                            ) : subMenu === 2 ? (
                                <ul>
                                    <li>{trans("milk")}</li>
                                    <li>{trans("milk")}</li>
                                    <li>{trans("milk")}</li>
                                    <li>{trans("milk")}</li>
                                    <li>{trans("milk")}</li>

                                </ul>
                            ) : subMenu === 3 ? (
                                <ul>
                                    <li>{trans("fruit")}</li>
                                    <li>{trans("fruit")}</li>
                                    <li>{trans("fruit")}</li>
                                    <li>{trans("fruit")}</li>
                                </ul>
                            ) : subMenu === 4 ? (
                                <ul>
                                    <li>{trans("other")}</li>
                                    <li>{trans("other")}</li>
                                </ul>
                            ) : null}
                        </div>
                    </div>

                </div>

                <div className="store-production-cards-title store-production-sale">
                    <span>{trans("discountedProducts")}</span>
                    <span>{trans("fully")}</span>
                    <span><Arrow/></span>
                </div>

                <StoreCard products={sales}/>

                <div className="store-production-cards-title">
                    <span>{trans("wine")}</span>
                    <span>{trans("fully")}</span>
                    <span><Arrow/></span>
                </div>

                <StoreCard products={sales}/>

                <div className="store-production-cards-title">
                    <span>{trans("milkProducts")}</span>
                    <span>{trans("fully")}</span>
                    <span><Arrow/></span>
                </div>

                <StoreCard products={sales}/>

                <div className="store-production-cards-title">
                    <span>{trans("fruitsVegetables")}</span>
                    <span>{trans("fully")}</span>
                    <span><Arrow/></span>
                </div>

                <StoreCard products={sales}/>

            </div>

        </>
    );
}

export default Index;