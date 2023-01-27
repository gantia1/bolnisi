import OffersCardImg from "../../assets/images/png/offers-img.png";
import {ReactComponent as ArrowForward} from "../../assets/images/svg/arrow-forward.svg";
import {ReactComponent as Shopping} from "../../assets/images/svg/shopping-1.svg";
import {ReactComponent as CardHover} from "../../assets/images/svg/card-hover.svg";
import RightLeaf from "../../assets/images/png/bottom-right-leaf.png";
import translation from "../../language/useTranslation";

function Index() {
    const offers = [
        {
            id: "1",
            image: OffersCardImg,
            name: "ზედამო",
            wineName: "რქაწითელი",
            price: "24₾",
            oldPrice: "32₾"
        },
        {
            id: "2",
            image: OffersCardImg,
            name: "მარბანი",
            wineName: "საფერავი",
            price: "32₾",
            oldPrice: "36₾"
        },
        {
            id: "3",
            image: OffersCardImg,
            name: "ლუკას მარანი",
            wineName: "რქაწითელი",
            price: "18₾",
            oldPrice: "23₾"
        },
    ];
    const {trans} = translation();

    return (
        <div className="home-offers-container">

            <span className=""><h3>{trans("offers")}</h3></span>

            <div className="home-offers">

                <div className="home-offers-cards">


                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            className="home-offers-card"
                        >
                            <div className="home-offers-card-img">
                                <img src={offer.image} alt="offer-img"/>
                                <div className="home-offers-img-hover">
                                    <CardHover/>
                                </div>
                                <div className="home-offers-card-shopping">
                                    <Shopping/>
                                </div>
                            </div>
                            <div className="home-offers-card-title">
                                <p>{offer.name}</p>
                                <h3>{offer.wineName}</h3>
                            </div>
                            <div className="home-offers-card-price">
                                <h1>{offer.price}</h1>
                                <h2>{offer.oldPrice}</h2>
                            </div>
                        </div>
                    ))}

                </div>


                <div className="home-offers-second-card">


                    <div className="home-offers-registration">
                        <h2>{trans("registration")}</h2> <ArrowForward/>
                    </div>
                    <div className="home-offers-right-leaf">
                        <img src={RightLeaf} alt=""/>
                    </div>
                    <div className="home-offers-event">
                        <div className="event-date">
                            <h1>22</h1>
                            <p>ოქტომბერი</p>
                        </div>
                        <div className="event-details">
                            <div className="event-time">
                                15:00
                            </div>
                            <div className="event-locations">
                                <h3>ბოლნისი</h3><h3>გურჯაანი</h3><h3>ყვარელი</h3>
                            </div>
                        </div>
                    </div>
                    <div className="home-offers-event">
                        <div className="event-date">
                            <h1>23</h1>
                            <p>ოქტომბერი</p>
                        </div>
                        <div className="event-details">
                            <div className="event-time">
                                15:00
                            </div>
                            <div className="event-locations">
                                <h3>ბოლნისი</h3><h3>გურჯაანი</h3><h3>ყვარელი</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Index;