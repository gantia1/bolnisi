import CartImage from "../../assets/images/png/offers-img.png";
import {ReactComponent as Subtraction} from "../../assets/images/svg/subtraction.svg";
import {ReactComponent as Addition} from "../../assets/images/svg/addition.svg";
import {ReactComponent as Delete} from "../../assets/images/svg/delete.svg";

function Index(props) {

    const cart = [
        {
            id: 1,
            image: CartImage,
            title: "წითელი ღვინო ნატურალური საფერავი",
            price: 24 + "₾",
            quantity: 1,
        },
        {
            id: 2,
            image: CartImage,
            title: "ქვეშის სულგუნი",
            price: 34 + "₾",
            quantity: 1,
        },
        {
            id: 3,
            image: CartImage,
            title: "მრავალყვავილოვანი თაფლი, აკაურთა, 2022",
            price: 23 + "₾",
            quantity: 1,
        }
    ]
    return (
        <div className={`header-cart-container ${props.open ? "show" : "hide"}`} onClick={() => props.open}>

            <div className="header-cart">
                <div className="header-cart-items">
                    {cart.map((cart) => (
                        <>
                            <div className="header-cart-item" key={cart.id}>
                                <div className="header-cart-image"><img src={cart.image} alt=""/></div>
                                <div className="header-cart-title"><span>{cart.title}</span></div>
                                <div className="header-cart-item-quantity">
                                    <span><Subtraction/></span>
                                    <span>{cart.quantity}</span>
                                    <span><Addition/></span>
                                </div>
                                <div className="header-cart-delete">
                                    <Delete/>
                                </div>
                                <div className="header-cart-price">
                                    <div><span>{cart.price}</span></div>
                                </div>
                            </div>
                        </>
                    ))}
                    <hr/>
                    <div className="header-cart-bottom">
                        <div className="header-cart-button"><span>გადახდა</span></div>
                        <div className="header-cart-sum">
                            <span>4 პროდუქტი, სულ</span>
                            <span>11₾</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;