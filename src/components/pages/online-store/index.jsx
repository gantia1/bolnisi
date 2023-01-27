import StoreImage from "../../../assets/images/png/slide-img.png"
import React, {useState} from "react";
import {ReactComponent as Facebook} from "../../../assets/images/svg/facebook.svg";
import {ReactComponent as Instagram} from "../../../assets/images/svg/instagram.svg";
import {ReactComponent as Linkedin} from "../../../assets/images/svg/linkedin.svg";
import {ReactComponent as Tiktok} from "../../../assets/images/svg/tiktok.svg";
import {ReactComponent as Youtube} from "../../../assets/images/svg/youtube.svg";
import {ReactComponent as Call} from "../../../assets/images/svg/call.svg";
import {ReactComponent as Mail} from "../../../assets/images/svg/mail.svg";
// import {ReactComponent as Location} from "../../../assets/images/svg/";
import DetailInfoImage from "../../../assets/images/png/offers-img.png";
import {ReactComponent as AllProducts} from "../../../assets/images/svg/checklist.svg";
import {ReactComponent as Wine} from "../../../assets/images/svg/wine-bar.svg";
import {ReactComponent as Milk} from "../../../assets/images/svg/milk.svg";
import {ReactComponent as Fruit} from "../../../assets/images/svg/fruit.svg";
import ProductImage from "../../../assets/images/png/news-image-4.png";
import ProductImageSecond from "../../../assets/images/png/offers-img.png";
import ProductImageThird from "../../../assets/images/png/news-image-4.png";
import ProductImageFourth from "../../../assets/images/png/offers-img.png";
import ProductImageFifth from "../../../assets/images/png/news-image-4.png";
import {ReactComponent as ProductAdd} from "../../../assets/images/svg/shopping-1.svg";
import {ReactComponent as Percent} from "../../../assets/images/svg/percentw.svg";
import {Link} from "react-router-dom";
import Dropdown from "../../dropdown";
import translation from "../../../language/useTranslation";


function Index() {
    const [activeTab, setActiveTab] = useState(1);
    const [activeFilter, setActiveFilter] = useState(1);
    const [selected, setSelected] = useState("ყველა პროდუქტი");
    const products = [
        {
            id: 1,
            image: ProductImage,
            price: "24₾",
            sale: "32₾",
            text: "წითელი ღვინო ნატურალური საფერავი მშრალი 2020",
            category: "wine",
        },
        {
            id: 2,
            image: ProductImageSecond,
            price: "24₾",
            sale: "",
            text: "თეთრი ღვინო რქაწითელი 2020 ექიმის ნატურალური ღვინო",
            category: "milk",
        },
        {
            id: 3,
            image: ProductImageThird,
            price: "43₾",
            sale: "",
            text: "ქვევრის რქაწითელი 2021",
            category: "wine",
        },
        {
            id: 4,
            image: ProductImageFourth,
            price: "24₾",
            sale: "",
            text: "ქვევრის რქაწითელი 2021",
            category: "wine",
        },
        {
            id: 5,
            image: ProductImageFifth,
            price: "24₾",
            sale: "32₾",
            text: "წითელი ღვინო ნატურალური საფერავი მშრალი 2020",
            category: "wine",
        },
    ];
    let wine = products.filter(products => products.category === "wine");
    let milk = products.filter(products => products.category === "milk");
    let fruit = products.filter(products => products.category === "fruit");
    const {trans} = translation();
    const images = [
        {
            id: 1,
            image: DetailInfoImage,
        },
        {
            id: 2,
            image: DetailInfoImage,
        },
        {
            id: 3,
            image: DetailInfoImage,
        },
        {
            id: 4,
            image: DetailInfoImage,
        },
        {
            id: 5,
            image: DetailInfoImage,
        },
        {
            id: 6,
            image: DetailInfoImage,
        },
        {
            id: 7,
            image: DetailInfoImage,
        },
    ];
    const options = [
        {
            id: 1,
            value: "ყველა პროდუქტი",
            category: products,
            svg: AllProducts,
        },
        {
            id: 2,
            value: "ღვინო",
            category: wine,
            svg: Wine,
        },
        {
            id: 3,
            value: "რძის პროდუქცია",
            category: milk,
            svg: Milk,
        },
        {
            id: 4,
            value: "ხილ-ბოსტნეული",
            category: fruit,
            svg: Fruit,
        },
    ];


    const [filtered, setFiltered] = useState(products);

    const handleClickFilter = (id, category) => {
        setActiveFilter(id)
        setFiltered(category);
    };
    const handleClick = (id) => {
        setActiveTab(id)
    };

    return (
        <div className="online-store-container">

            <div className="online-store-image">
                <img src={StoreImage} alt="store-img"/>
            </div>

            <div className="online-store-mobile-container">
                <div className="online-store-cellar">
                    <div className="online-store-small-img">
                        <img src={StoreImage} alt="store-img"/>
                    </div>
                    <div className="online-store-top-title">
                        <span>ლუკას მარანი “Lukas Cellar”</span>
                    </div>

                </div>
                <div className="online-store-tabs">
                        <span className={`online-store-tab ${activeTab === 1 && 'active'}`}
                              onClick={() => handleClick(1)}>{trans("production")}
                        </span>
                    <span className={`online-store-tab ${activeTab === 2 && 'active'}`}
                          onClick={() => handleClick(2)}>{trans("informationInDetails")}
                </span>
                    <hr/>
                </div>

                {activeTab === 1 ? (
                    <div className="online-detail-production">
                        <div className="online-detail-production-filter">
                            <span
                                className={` ${activeFilter === 1 && 'active'}`}
                                onClick={() => handleClickFilter(1, products)}
                            >
                                <AllProducts/>{trans("allProducts")}
                            </span>
                            <span
                                className={` ${activeFilter === 2 && 'active'}`}
                                onClick={() => handleClickFilter(2, wine)}
                            >
                            <Wine/>{trans("wine")}</span>
                            <span
                                className={` ${activeFilter === 3 && 'active'}`}
                                onClick={() => handleClickFilter(3, milk)}
                            >
                                <Milk/>{trans("milkProducts")}
                            </span>
                            <span
                                className={` ${activeFilter === 4 && 'active'}`}
                                onClick={() => handleClickFilter(4, fruit)}
                            >
                                <Fruit/>{trans("fruitsVegetables")}
                            </span>
                        </div>

                        <div className="online-detail-production-filter-mobile">
                            <Dropdown
                                filtered={filtered} setFiltered={setFiltered} selected={selected}
                                setSelected={setSelected} options={options} products={products}
                            />
                        </div>

                        <div className="online-detail-production-cards">
                            {filtered && filtered.map((product) => (
                                <div
                                    key={product.id}
                                    className="online-detail-production-card"
                                >

                                    <div className="online-detail-production-card-image">
                                        <img src={product.image} alt={product.category}/>
                                        {
                                            product.sale !== "" ?
                                                (
                                                    <div className="online-detail-production-card-sale">
                                                        <Percent/>
                                                    </div>
                                                )
                                                : null
                                        }
                                    </div>

                                    <div className="online-detail-production-card-price">
                                        <h1>{product.price}</h1>
                                        <h2>{product.sale}</h2>
                                    </div>
                                    <div className="online-detail-production-card-title">
                                        <p>{product.text}</p>
                                    </div>
                                    <div className="online-detail-production-card-add">
                                        <ProductAdd/> {trans("addToCard")}
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                ) : activeTab === 2 ? (
                    <div className="online-store-detail-info">
                        <div className="online-store-description">
                                <span>
                                „ლუკას მარანი“ დაარსდა 2017 წელს, სოფელ საბერეთში.
                                ჩვენი მარანი უძველეს ტრადიციებზე დაფუძნებული ღვინის მწარმოებელია,
                                რომელიც ვაზის უნიკალური კულტურის შენარჩუნებასა და მაღალი ხარისხის
                                პროდუქტის წარმოებაზეა ორიენტირებულია.
                                </span>
                        </div>

                        <div className="online-store-contact">

                            <div className="online-store-contact-us">
                                <a href="tel:+995577797490">
                                    <span><Call/>577 79 74 90</span>
                                </a>

                                <a href="mailto:Salome.gabritchidze@ciu.edu.ge">
                                    <span className="contact-mail"><Mail/>Salome.gabritchidze@ciu.edu.ge</span>
                                </a>
                            </div>

                            <div>
                                <span>საქართველო, თბილისი, 0131, დ. აღმაშენებლის ხეივანი N170ა</span>
                            </div>

                            <div className="online-store-social-media">
                                <Link to="#"><Facebook/></Link>
                                <Link to="#"><Instagram/></Link>
                                <Link to="#"><Linkedin/></Link>
                                <Link to="#"><Tiktok/></Link>
                                <Link to="#"><Youtube/></Link>
                            </div>
                        </div>
                        <div className="online-store-detail-info-images">
                            {images.map((image) => (
                                <div
                                    key={image.id}
                                    className="online-store-detail-info-image"
                                >
                                    <img src={image.image} alt={image.id}/>
                                </div>

                            ))}
                        </div>
                    </div>
                ) : null}
            </div>

        </div>
    );
}

export default Index;