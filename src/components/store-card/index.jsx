import {useNavigate} from "react-router-dom";
import {ReactComponent as Add} from "../../assets/images/svg/shopping-1.svg";
import {ReactComponent as Percent} from "../../assets/images/svg/percentw.svg";
import {ReactComponent as CardHover} from "../../assets/images/svg/card-hover.svg";
import React, {useEffect, useState} from "react";
import {ReactComponent as Favorite} from "../../assets/images/svg/favorite.svg";
import {ReactComponent as AddFavorite} from "../../assets/images/svg/add-favorite.svg";
import {useTranslation} from "react-i18next";

function Index({products}) {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        setFavorites(products);
    }, [products]);


    function handleFavorite(id) {
        const newFavorites = favorites.map(product => {
            return product.id === id ? {...product, favorite: !product.favorite} : product;
        });
        setFavorites(newFavorites);
    }

    return (
        <div className="store-production-cards">
            {favorites.map((product,) => (
                <div
                    key={product.id}
                    className="store-production-card"
                >
                    <div className="store-production-card-img">
                        <img src={product.image} alt={product.id}/>
                        {
                            product.sale !== "" ?
                                (
                                    <div className="store-production-card-sale">
                                        <Percent/>
                                    </div>
                                )
                                : null
                        }

                        <div className="store-production-card-hover"
                             onClick={() => navigate(`/product/${product.id}`)}>
                            <CardHover/>
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
                    <div className="store-production-card-title">
                        <span>{product.title}</span>
                    </div>
                    <div className="store-production-card-text">
                        <span>{product.text}</span>
                    </div>
                    <div className="store-production-card-price">
                        <span>{product.price}</span>
                        <span>{product.sale}</span>
                    </div>
                    <div className="store-production-card-add">
                        <span><Add/></span>
                        <span>{t("addToCard")}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Index;