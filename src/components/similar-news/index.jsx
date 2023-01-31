import React from "react";
import NewsImage from "../../assets/images/png/news-image.png";
import {ReactComponent as CalendarIcon} from "../../assets/images/svg/calendar.svg";
import {ReactComponent as AnnouncementIcon} from "../../assets/images/svg/announcement.svg";
import NewsImageSecond from "../../assets/images/png/news-card-2.png";
import NewsImageThird from "../../assets/images/png/news-image-2.png";
import {ReactComponent as NewsIcon} from "../../assets/images/svg/news.svg";


function Index() {
    const similar = [
        {
            id: 1,
            image: NewsImage,
            svg: NewsIcon,
            date: new Date(2022, 11, 12),
            category: "სიახლე",
            title: "ბოლნისის ვენახების კადასტრი გრძელდება!",
            text: "ბოლნისის მუნიციპალიტეტში ღვინის ეროვნული სააგენტო აგრძელებს ვენახების კადასტრის პროგრამას.",
        },
        {

            id: 2,
            image: NewsImageSecond,
            svg: CalendarIcon,
            date: new Date(2022, 10, 12),
            category: "ღონისძიება",
            title: "ღვინის დღეები ბოლნისში",
            text: "ბოლნური ღვინო უკვე მეშვიდე წელია, ქართული ტრადიციული ტრადიციული წესით ქვევრში მზადდება - RMG-ის მხარდაჭერა მეღვინეებს",
        },
        {
            id: 3,
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
    );
}

export default Index;