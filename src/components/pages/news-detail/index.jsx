import NewsImage from "../../../assets/images/png/news-image.png";
import React from "react";
import {ReactComponent as NewsIcon} from "../../../assets/images/svg/news.svg";
import {ReactComponent as CalendarIcon} from "../../../assets/images/svg/calendar.svg";
import {ReactComponent as AnnouncementIcon} from "../../../assets/images/svg/announcement.svg";
import NewsImageSecond from "../../../assets/images/png/news-card-2.png";
import NewsImageThird from "../../../assets/images/png/news-image-2.png";

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
    const similar = [
        {
            id: "1",
            image: NewsImage,
            svg: NewsIcon,
            date: new Date(2022, 11, 12),
            category: "სიახლე",
            title: "ბოლნისის ვენახების კადასტრი გრძელდება!",
            text: "ბოლნისის მუნიციპალიტეტში ღვინის ეროვნული სააგენტო აგრძელებს ვენახების კადასტრის პროგრამას.",
        },
        {

            id: "2",
            image: NewsImageSecond,
            svg: CalendarIcon,
            date: new Date(2022, 10, 12),
            category: "ღონისძიება",
            title: "ღვინის დღეები ბოლნისში",
            text: "ბოლნური ღვინო უკვე მეშვიდე წელია, ქართული ტრადიციული ტრადიციული წესით ქვევრში მზადდება - RMG-ის მხარდაჭერა მეღვინეებს",
        },
        {
            id: "3",
            image: NewsImageThird,
            svg: AnnouncementIcon,
            date: new Date(2022, 9, 12),
            category: "განცხადება",
            title: "ღვინის ფესტივალი ღვინის სამშობლოში",
            text: "საქართველოს მთავრობის ინიციატივით, დღეს, ქალაქ ბოლნისში ახალი, ყოველწლიური ღვინის\n" +
                "                                ფესტივალი\n" +
                "                                \"ღვინის დღეები საქართველოში\" გაიმართა, რომელიც სრულად მიეძღვნა ქართული ღვინის\n" +
                "                                პოპულარიზაციას, როგორც ადგილობრივ, ისე საერთაშორისო დონეზე.",
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
            <div className="news-detail-similar-news-cards">
                {similar.map((similar) => (
                    <div
                        key={similar.id}
                        className="news-detail-similar-news-card"
                    >
                        <img src={similar.image} alt=""/>
                        <div className="news-detail-similar-news-card-title">
                            <p>{similar.date.toLocaleDateString('en-GB').replaceAll('/', '.')}</p>
                            <p>
                                <similar.svg/>
                                {similar.category}
                            </p>
                        </div>
                        <h2>{similar.title}</h2>
                        <div className="news-detail-similar-news-card-text">
                            <p>
                                {similar.text}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;