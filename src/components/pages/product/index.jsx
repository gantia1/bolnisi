import ProductImage from "../../../assets/images/png/offers-img.png";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {ReactComponent as Addition} from "../../../assets/images/svg/addition.svg";
import {ReactComponent as Subtraction} from "../../../assets/images/svg/subtraction.svg";
import React, {useEffect, useState} from "react";
import {ReactComponent as Add} from "../../../assets/images/svg/shopping-1.svg";
import {ReactComponent as Info} from "../../../assets/images/svg/info.svg";
import {ReactComponent as Percent} from "../../../assets/images/svg/percentw.svg";
import {ReactComponent as Favorite} from "../../../assets/images/svg/favorite.svg";
import {ReactComponent as AddFavorite} from "../../../assets/images/svg/add-favorite.svg";
import StoreCard from "../../store-card";
import salesImage from "../../../assets/images/png/offers-img.png";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const products = [
    {
        id: 1,
        image: ProductImage,
        title: "წითელი ღვინო ნატურალური საფერავი მშრალი",
        price: "24₾",
        sale: "32₾",
    }
];

const similarProduct = [
    {
        id: 1,
        image: ProductImage,
        title: "მარბანი",
        text: "თეთრი ღვინო რქაწითელი 2020…",
        price: "32₾",
        sale: "36₾",
    },
    {
        id: 2,
        image: salesImage,
        title: "ზედამო",
        text: "წითელი ღვინო ნატურალური საფერავი..",
        price: "24₾",
        sale: "",
    },
    {
        id: 3,
        image: salesImage,
        title: "მარბანი",
        text: "თეთრი ღვინო რქაწითელი 2020…",
        price: "32₾",
        sale: "36₾",
    },
]

function Index() {
    const [count, setCount] = useState(1);
    const [favorites, setFavorites] = useState([]);

    const {t} = useTranslation();

    useEffect(() => {
        setFavorites(products);
    }, []);


    function handleFavorite(id) {
        const newFavorites = favorites.map(product => {
            return product.id === id ? {...product, favorite: !product.favorite} : product;
        });
        setFavorites(newFavorites);
    }

    const subtraction = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }


    return (
        <div className="product-container">

            <div className="product">

                <div className="product-image">


                    {favorites.map((product) => (
                        <Carousel
                            key={product.id}
                        >
                            <div>
                                <img src={product.image} alt={product.title}/>
                                <div className="product-sale">
                                    <Percent/>
                                </div>
                                <div className="store-production-add-to-favorites">
                                    <div className="store-production-add-svg">
                                        <span
                                            onClick={() => {
                                                handleFavorite(product.id);
                                            }}
                                        >
                                          {product.favorite === true ? <Favorite/> : <AddFavorite/>}
                                        </span>
                                    </div>

                                    {product.favorite === true ? (
                                        <span className="add-to-favorites-tooltip">{t("removeFromFavorites")}</span>

                                    ) : (
                                        <span className="add-to-favorites-tooltip">{t("addToFavorites")}</span>
                                    )}

                                </div>
                            </div>
                            <div>
                                <img src={product.image} alt={product.title}/>
                                <div className="product-sale">
                                    <Percent/>
                                </div>
                                <div className="store-production-add-to-favorites">
                                    <div className="store-production-add-svg">
                                        <span
                                            onClick={() => {
                                                handleFavorite(product.id);
                                            }}
                                        >
                                          {product.favorite === true ? <Favorite/> : <AddFavorite/>}
                                        </span>
                                    </div>

                                    {product.favorite === true ? (
                                        <span className="add-to-favorites-tooltip">{t("removeFromFavorites")}</span>

                                    ) : (
                                        <span className="add-to-favorites-tooltip">{t("addToFavorites")}</span>
                                    )}

                                </div>
                            </div>
                            <div>
                                <img src={product.image} alt={product.title}/>
                                <div className="product-sale">
                                    <Percent/>
                                </div>
                                <div className="store-production-add-to-favorites">
                                    <div className="store-production-add-svg">
                                        <span
                                            onClick={() => {
                                                handleFavorite(product.id);
                                            }}
                                        >
                                          {product.favorite === true ? <Favorite/> : <AddFavorite/>}
                                        </span>
                                    </div>

                                    {product.favorite === true ? (
                                        <span className="add-to-favorites-tooltip">{t("removeFromFavorites")}</span>

                                    ) : (
                                        <span className="add-to-favorites-tooltip">{t("addToFavorites")}</span>
                                    )}

                                </div>
                            </div>
                        </Carousel>
                    ))}

                </div>

                <div className="product-info">

                    <div className="product-info-cellar-name">
                        <Link to="/online-store">
                            <span>
                            <img src={ProductImage} alt=""/>
                            ლუკას მარანი
                            </span>
                        </Link>
                    </div>

                    <div className="product-info-title">
                        <span>წითელი ღვინო ნატურალური საფერავი მშრალი</span>
                    </div>
                    <div className="product-info-price-quantity">
                        <div className="product-info-price-container">
                            <span>ფასი</span>
                            <div className="product-info-price">
                                <span>24₾</span>
                                <span>32₾</span>
                            </div>
                        </div>
                        <div className="product-info-quantity-container">
                            <span>რაოდენობა</span>
                            <div className="product-info-quantity">
                                <span onClick={subtraction}><Subtraction/></span>
                                <span>{count}</span>
                                <span onClick={() => setCount(count + 1)}><Addition/></span>
                            </div>
                        </div>

                    </div>

                    <div className="product-info-add">
                        <span><Add/></span>
                        <span>{t("addToCard")}</span>
                    </div>

                    <div className="product-additional-info-title">
                        <span><Info/></span>
                        <span>{t("additionalInfo")}</span>
                    </div>

                    <div className="product-additional-info-container">
                        <div className="product-additional-info">
                            <span>{t("capacity")}</span>
                            <span>750მლ</span>
                        </div>
                        <div className="product-additional-info">
                            <span>{t("year")}</span>
                            <span>2020</span>
                        </div>
                        <div className="product-additional-info">
                            <span>{t("alcoholVol")}</span>
                            <span>13</span>
                        </div>

                    </div>
                    <div className="product-description">
                        <span>
                            ადგილწარმოშობის დასახელების კონტროლირებადი
                            თეთრი მშრალი ღვინო “წინანდალი” დამზადებულია კახეთში,
                            წინანდლის მევენახეობის სპეციფიკურ ზონაში გაშენებული რქაწითელისა
                            და მწვანეს ჯიშის რჩეული ყურძნისაგან. იგი ხასიათდება ღია ჩალისფერი
                            შეფერილობით, გამოირჩევა შესანიშნავი ბუკეტით, დარბილებული დახვეწილი
                            გემოთი და განუმეორებელი არომატით.
                        </span>
                    </div>

                </div>

            </div>
            <div className="product-cards-title">მსგავსი პროდუქტები</div>
            <div className="product-cards">
                <StoreCard products={similarProduct}/>
            </div>
        </div>
    );
}

export default Index;