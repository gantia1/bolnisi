import SliderImg from "../../../assets/images/png/slide-img.png"

function Index() {
    const slides = [
        {
            id: '1',
            image: SliderImg,
            title: 'ბოლნისის ვენახების კადასტრი გრძელდება!',
            text: 'ბოლნისის მუნიციპალიტეტში ღვინის ეროვნული სააგენტო აგრძელებს ვენახების კადასტრის პროგრამას.',
        },
        {
            id: '2',
            image: SliderImg,
            title: 'ბოლნისის ვენახების კადასტრი გრძელდება!',
            text: 'ბოლნისის მუნიციპალიტეტში ღვინის ეროვნული სააგენტო აგრძელებს ვენახების კადასტრის პროგრამას.',
        },
        {
            id: '3',
            image: SliderImg,
            title: 'ბოლნისის ვენახების კადასტრი გრძელდება!',
            text: 'ბოლნისის მუნიციპალიტეტში ღვინის ეროვნული სააგენტო აგრძელებს ვენახების კადასტრის პროგრამას.',
        },
    ];

    return (
        <div className="mobile-slider">
            <div className="mobile-slider-cards">

                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="mobile-slider-card"
                    >
                        <div className="gradient"></div>
                        <img src={slide.image} alt={slide.title}/>
                        <div className="mobile-slider-text">
                            <h3>{slide.title}</h3>
                            <span>{slide.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;