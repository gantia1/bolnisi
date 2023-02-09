import {Drawer} from "antd";
import {ReactComponent as Close} from "../../../assets/images/svg/close-cart.svg";
import CartImage from "../../../assets/images/png/offers-img.png";
import {ReactComponent as Subtraction} from "../../../assets/images/svg/subtraction.svg";
import {ReactComponent as Addition} from "../../../assets/images/svg/addition.svg";


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
        <div>
            <Drawer className="mobile-cart" width={"100%"} title={<Close onClick={props.close}/>} placement="right"
                    onClose={props.close} open={props.open} closable={false}>
                <div className="mobile-cart-container">
                    <div className="mobile-cart-title">
                        <span>კალათა</span>
                        <hr/>
                    </div>
                    <div className="menu-cart-cards">
                        {cart.map((cart) => (
                            <>
                                <div className="menu-cart-card" key={cart.id}>
                                    <div className="menu-cart-card-image"><img src={cart.image} alt=""/></div>
                                    <div className="menu-cart-card-title"><span>{cart.title}</span></div>
                                    <div className="menu-cart-card-price-quantity">
                                        <div><span>{cart.price}</span></div>
                                        <div className="menu-cart-card-price">
                                            <span><Subtraction/>{cart.quantity}<Addition/></span>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                            </>
                        ))}
                    </div>
                    <div className="mobile-cart-sum">
                        <div className="mobile-cart-product-sum"><span>4 პროდუქტი, სულ</span></div>
                        <div className="mobile-cart-price-sum"><span>11₾</span></div>
                    </div>
                    <div className="mobile-cart-button">
                        <span>გადახდა</span>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default Index;