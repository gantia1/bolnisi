import Slider from "../../slider";
import {ReactComponent as Arrow} from "../../../assets/images/svg/arrow.svg";
import {ReactComponent as Production} from "../../../assets/images/svg/production.svg";
import salesImage from "../../../assets/images/png/offers-img.png";
import {ReactComponent as Add} from "../../../assets/images/svg/shopping-1.svg";
import {ReactComponent as Percent} from "../../../assets/images/svg/percentw.svg";
import {ReactComponent as CardHover} from "../../../assets/images/svg/card-hover.svg";
import {ReactComponent as Favorite} from "../../../assets/images/svg/favorite.svg";
import {ReactComponent as AddFavorite} from "../../../assets/images/svg/add-favorite.svg";
import {useEffect, useState} from "react";
import translation from "../../../language/useTranslation";

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
        sale: "36₾",
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
        sale: "32₾",
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
    const [favorites, setFavorites] = useState([]);
    const {trans} = translation();

    useEffect(() => {
        setFavorites(sales);
    }, []);


    function handleFavorite(id) {
        const newFavorites = favorites.map(sale => {
            return sale.id === id ? {...sale, favorite: !sale.favorite} : sale;
        });
        setFavorites(newFavorites);
    }


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
                <div className="store-production-cards">
                    {favorites.map((sale,) => (
                        <div
                            key={sale.id}
                            className="store-production-card"
                        >
                            <div className="store-production-card-img">
                                <img src={sale.image} alt={sale.id}/>
                                <div className="store-production-card-sale">
                                    <Percent/>
                                </div>
                                <div className="store-production-card-hover">
                                    <CardHover/>
                                </div>
                                <div className="store-production-add-to-favorites">
                                    <div className="store-production-add-svg">
                                        <span
                                            onClick={() => {
                                                handleFavorite(sale.id);
                                            }}
                                        >
                                          {sale.favorite === true ? <Favorite/> : <AddFavorite/>}
                                        </span>
                                    </div>

                                    {sale.favorite === true ? (
                                        <span className="add-to-favorites-tooltip">{trans("removeFromFavorites")}</span>

                                    ) : (
                                        <span className="add-to-favorites-tooltip">{trans("addToFavorites")}</span>
                                    )}

                                </div>

                            </div>
                            <div className="store-production-card-title">
                                <span>{sale.title}</span>
                            </div>
                            <div className="store-production-card-text">
                                <span>{sale.text}</span>
                            </div>
                            <div className="store-production-card-price">
                                <span>{sale.price}</span>
                                <span>{sale.sale}</span>
                            </div>
                            <div className="store-production-card-add">
                                <span><Add/></span>
                                <span>{trans("addToCard")}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="store-production-cards-title">
                    <span>{trans("wine")}</span>
                    <span>{trans("fully")}</span>
                    <span><Arrow/></span>
                </div>
                <div className="store-production-cards">
                    {sales.map((sale) => (
                        <div
                            key={sale.id}
                            className="store-production-card"
                        >
                            <div className="store-production-card-img">
                                <img src={sale.image} alt={sale.id}/>
                                {
                                    sale.sale !== "" ?
                                        (
                                            <div className="store-production-card-sale">
                                                <Percent/>
                                            </div>
                                        )
                                        : null
                                }
                                <div className="store-production-card-hover">
                                    <CardHover/>
                                </div>
                            </div>
                            <div className="store-production-card-title">
                                <span>{sale.title}</span>
                            </div>
                            <div className="store-production-card-text">
                                <span>{sale.text}</span>
                            </div>
                            <div className="store-production-card-price">
                                <span>{sale.price}</span>
                                <span>{sale.sale}</span>
                            </div>
                            <div className="store-production-card-add">
                                <span><Add/></span>
                                <span>{trans("addToCard")}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="store-production-cards-title">
                    <span>{trans("milkProducts")}</span>
                    <span>{trans("fully")}</span>
                    <span><Arrow/></span>
                </div>
                <div className="store-production-cards">
                    {sales.map((sale) => (
                        <div
                            key={sale.id}
                            className="store-production-card"
                        >
                            <div className="store-production-card-img">
                                <img src={sale.image} alt={sale.id}/>
                                {
                                    sale.sale !== "" ?
                                        (
                                            <div className="store-production-card-sale">
                                                <Percent/>
                                            </div>
                                        )
                                        : null
                                }
                                <div className="store-production-card-hover">
                                    <CardHover/>
                                </div>
                            </div>
                            <div className="store-production-card-title">
                                <span>{sale.title}</span>
                            </div>
                            <div className="store-production-card-text">
                                <span>{sale.text}</span>
                            </div>
                            <div className="store-production-card-price">
                                <span>{sale.price}</span>
                                <span>{sale.sale}</span>
                            </div>
                            <div className="store-production-card-add">
                                <span><Add/></span>
                                <span>{trans("addToCard")}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="store-production-cards-title">
                    <span>{trans("fruitsVegetables")}</span>
                    <span>{trans("fully")}</span>
                    <span><Arrow/></span>
                </div>
                <div className="store-production-cards">
                    {sales.map((sale) => (
                        <div
                            key={sale.id}
                            className="store-production-card"
                        >
                            <div className="store-production-card-img">
                                <img src={sale.image} alt={sale.id}/>
                                {
                                    sale.sale !== "" ?
                                        (
                                            <div className="store-production-card-sale">
                                                <Percent/>
                                            </div>
                                        )
                                        : null
                                }
                                <div className="store-production-card-hover">
                                    <CardHover/>
                                </div>
                            </div>
                            <div className="store-production-card-title">
                                <span>{sale.title}</span>
                            </div>
                            <div className="store-production-card-text">
                                <span>{sale.text}</span>
                            </div>
                            <div className="store-production-card-price">
                                <span>{sale.price}</span>
                                <span>{sale.sale}</span>
                            </div>
                            <div className="store-production-card-add">
                                <span><Add/></span>
                                <span>{trans("addToCard")}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="store-production-cards-title">
                    <span>ფავორიტები</span>
                </div>
                <ul>
                    {favorites.map(sale =>
                        sale.favorite === true ? <li key={sale.id}>{sale.text}{sale.price}</li> : null
                    )}
                </ul>
            </div>

        </>
    );
}

export default Index;