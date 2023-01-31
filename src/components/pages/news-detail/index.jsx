import NewsImage from "../../../assets/images/png/news-image.png";
import React from "react";
import {ReactComponent as NewsIcon} from "../../../assets/images/svg/news.svg";
import SimilarNews from "../../similar-news";

function Index() {
    // const {id} = useParams();
    const news = [
        {
            id: 1,
            image: NewsImage,
            svg: NewsIcon,
            date: new Date(2022, 12, 12),
            category: "სიახლე",
            title: "ბოლნისის ვენახების კადასტრი გრძელდება!",
            shortText: "ბოლნისის მუნიციპალიტეტში ღვინის ეროვნული სააგენტო აგრძელებს ვენახების კადასტრის პროგრამას.",
            text: "საქართველოს მთავრობის ინიციატივით, დღეს, ქალაქ ბოლნისში ახალი, ყოველწლიური ღვინის ფესტივალი ,,ღვინის დღეები საქართველოში” გაიმართა, რომელიც სრულად მიეძღვნა ქართული ღვინის პოპულარიზაციას, როგორც ადგილობრივ, ისე საერთაშორისო დონეზე. 🍂🍇 საფესტივალო ტერიტორიაზე მისულ, სტუმრებს მრავალი სახეობის ყურძნის ჯიშის ღვინოს დაგემოვნების პარალელურად შესაძლებლობა ჰქონდათ გაცნობოდნენ ღვინის 8000 წლიან უწყვეტ ტრადიციას, ქართული კულინარიის ნიმუშებს, კულტურასა და ტრადიციებს. 🍂🍷აღსანიშნავია, რომ ღვინის დღეების ყოველ წლიურ ფესტივალს საფუძველი პრემიერ მინისტრის ინიციატივით ჩაეყარა და მისი მიზანი ქართული ღვინის პოპულარიზაცია, ქართველი მეღვინეების სტიმულირება და საერთაშორისო ასპარეზზე ღვინის სამშობლოს პოზიციონირებაა. 🍂✨ სამომავლოდ ფესტივალი ტრადიციულ სახეს მიიღებს და მომდევნო წლებში უფრო ფართო მასშტაბებს შეიძენს. რაც რა თქმა უნდა გააძლიერებს ქართული ღვინის ბრენდს, გაზრდის ქვეყნის ცნობადობას, საერთაშორისო არეალზე და ხელს შეუწყობს ტურისტული ნაკადების ზრდას.",
        },
    ];
    const album = [
        {
            id: 1,
            image: NewsImage,
        },
        {
            id: 2,
            image: NewsImage,
        },
        {
            id: 3,
            image: NewsImage,
        },
        {
            id: 4,
            image: NewsImage,
        },
        {
            id: 5,
            image: NewsImage,
        },
        {
            id: 6,
            image: NewsImage,
        },
        {
            id: 7,
            image: NewsImage,
        },
    ];


    return (
        <div className="news-detail-container">
            {news.map((news) => (
                <div className="news-detail" key={news.id}>
                    <div className="news-detail-date-category">
                        <span>{news.date.toLocaleDateString('en-GB').replaceAll('/', '.')}</span>
                        <span>
                            <news.svg/>
                            {news.category}
                        </span>
                    </div>
                    <div className="news-detail-image">
                        <img src={NewsImage} alt=""/>
                    </div>
                    <div className="news-detail-title">
                        <span>{news.title}</span>
                    </div>
                    <div className="news-detail-text">
                        <span>{news.text}</span>
                    </div>
                </div>
            ))}
            <div className="news-detail-album">
                {album.map((photo) =>
                    <div
                        key={photo.id}
                        className="news-detail-photo"
                    >
                        <img src={photo.image} alt=""/>
                    </div>
                )}
            </div>
            <div className="news-detail-similar-news-title">
                <span>მსგავსი სიახლეები</span>
            </div>
            <SimilarNews/>
        </div>
    );
}

export default Index;