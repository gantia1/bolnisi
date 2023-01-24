import {Carousel} from "antd";
import SlideImg from "../../assets/images/png/slide-img.png";
import {useRef} from "react";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import MobileSlider from "../mobile/slider";
import {useLocation} from "react-router-dom";


function Index() {
    const slides = [
        {
            id: '1',
            image: SlideImg,
            title: 'ბოლნისის ვენახების კადასტრი გრძელდება!',
            text: 'ბოლნისის მუნიციპალიტეტში ღვინის ეროვნული სააგენტო აგრძელებს ვენახების კადასტრის პროგრამას.',
        },
        {
            id: '2',
            image: SlideImg,
            title: 'ბოლნისის ვენახების კადასტრი გრძელდება!',
            text: 'ბოლნისის მუნიციპალიტეტში ღვინის ეროვნული სააგენტო აგრძელებს ვენახების კადასტრის პროგრამას.',
        },
        {
            id: '3',
            image: SlideImg,
            title: 'ბოლნისის ვენახების კადასტრი გრძელდება!',
            text: 'ბოლნისის მუნიციპალიტეტში ღვინის ეროვნული სააგენტო აგრძელებს ვენახების კადასტრის პროგრამას.',
        },
        {
            id: '3',
            image: SlideImg,
            title: 'ბოლნისის ვენახების კადასტრი გრძელდება!',
            text: 'ბოლნისის მუნიციპალიტეტში ღვინის ეროვნული სააგენტო აგრძელებს ვენახების კადასტრის პროგრამას.',
        },
    ];
    const slider = useRef(null);
    const route = useLocation()
    console.log(route)

    return (
        <>
            <div className={`slider-container ${route.pathname === '/store' && 'no-leaf'}`}>

                <Carousel autoplay autoplaySpeed={5000} ref={slider}>


                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="single-slide"
                        >
                            <div className="gradient"/>
                            <img className="slider-image" src={slide.image} alt={slide.title}/>
                            <div className="slider-text">
                                <div className="slider-title">

                                    <h1>{slide.title}</h1>
                                    <p>
                                        {slide.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>

                <div className="slider-button">

                    <div className="slider-prev-button">
                        <div className="slider-arrow" onClick={() => slider.current.prev()}><LeftOutlined/></div>
                    </div>

                    <div className="slider-next-button">
                        <div className="slider-arrow" onClick={() => slider.current.next()}><RightOutlined/></div>
                    </div>
                </div>
            </div>
            <MobileSlider/>
        </>
    );
}

export default Index;