import Slider from "../../slider";
import {ReactComponent as Arrow} from "../../../assets/images/svg/arrow.svg";
import {ReactComponent as Production} from "../../../assets/images/svg/production.svg";
import salesImage from "../../../assets/images/png/offers-img.png";
import {ReactComponent as Add} from "../../../assets/images/svg/shopping-1.svg";
import {ReactComponent as Percent} from "../../../assets/images/svg/percentw.svg";
import {ReactComponent as CardHover} from "../../../assets/images/svg/card-hover.svg";
import {useState} from "react";

function Index() {
    const [subMenu, setSubMenu] = useState(1);

    const handleClick = (id) => {
        setSubMenu(id)
    };
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
    ]
    return (
        <>
            <Slider/>
            <div className="store-container">

                <div className="store-production-dropdown">
                    <span className="store-production-title"><Production/>პროდუქცია</span>

                    <div className="store-list">
                        <div className="store-production-dropdown-left">
                            <div className="store-production-items">
                                <div className="store-production-title store-production-title-dropdown"><Production/>პროდუქცია
                                </div>
                                <ul>
                                    <li className={`store-category ${subMenu === 1 && 'active'}`}
                                        onMouseOver={() => handleClick(1)}>
                                        <p>ღვინო</p>
                                        <Arrow/>
                                    </li>
                                    <li className={`store-category ${subMenu === 2 && 'active'}`}
                                        onMouseOver={() => handleClick(2)}>
                                        <p>რძის პროდუქტები</p>
                                        <Arrow/>
                                    </li>
                                    <li className={`store-category ${subMenu === 3 && 'active'}`}
                                        onMouseOver={() => handleClick(3)}>
                                        <p>ხილ-ბოსტნეული</p>
                                        <Arrow/>
                                    </li>
                                    <li className={`store-category ${subMenu === 4 && 'active'}`}
                                        onMouseOver={() => handleClick(4)}>
                                        <p>სხვა</p>
                                        <Arrow/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="store-production-dropdown-right">
                            {subMenu === 1 ? (
                                <ul>
                                    <li>წითელი</li>
                                    <li>თეთრი</li>
                                    <li>მშრალი</li>
                                    <li>ქარხნული</li>
                                    <li>ოჯახის მარნის</li>
                                    <li>ქვევრის</li>
                                </ul>
                            ) : subMenu === 2 ? (
                                <ul>
                                    <li>რძე</li>
                                    <li>რძე</li>
                                    <li>რძე</li>
                                    <li>რძე</li>
                                    <li>რძე</li>
                                    <li>რძე</li>
                                </ul>
                            ) : subMenu === 3 ? (
                                <ul>
                                    <li>ხილი</li>
                                    <li>ხილი</li>
                                    <li>ხილი</li>
                                    <li>ხილი</li>
                                    <li>ხილი</li>
                                    <li>ხილი</li>
                                </ul>
                            ) : subMenu === 4 ? (
                                <ul>
                                    <li>სხვა</li>
                                    <li>სხვა</li>
                                </ul>
                            ) : null}
                        </div>
                    </div>

                </div>

                <div className="store-production-cards-title store-production-sale">
                    <span>ფასდაკლებული პროდუქცია</span>
                    <span>სრულად</span>
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
                                <div className="store-production-card-sale">
                                    <Percent/>
                                </div>
                                <div className="store-production-card-hover">
                                    <CardHover/>
                                </div>
                                <div className="store-production-add-to-favorites">
                                    <span className="add-to-favorites-tooltip">რჩეულებში დამატება</span>
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
                                <span>დაამატე კალათში</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="store-production-cards-title">
                    <span>ღვინო</span>
                    <span>სრულად</span>
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
                                <span>დაამატე კალათში</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="store-production-cards-title">
                    <span>რძის პროდუქტები</span>
                    <span>სრულად</span>
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
                                <span>დაამატე კალათში</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="store-production-cards-title">
                    <span>ხილ-ბოსტნეული</span>
                    <span>სრულად</span>
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
                                <span>დაამატე კალათში</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Index;