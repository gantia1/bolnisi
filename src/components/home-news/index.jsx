import NewsCardImg from "../../assets/images/png/news-card.png";
import NewsCardImg2 from "../../assets/images/png/news-card-1.png";
import NewsCardImg3 from "../../assets/images/png/news-card-2.png";
import {ReactComponent as NewsIcon} from "../../assets/images/svg/news.svg";
import {ReactComponent as CalendarIcon} from "../../assets/images/svg/calendar.svg";
import {ReactComponent as AnnouncementIcon} from "../../assets/images/svg/announcement.svg";
import {ReactComponent as Arrow} from "../../assets/images/svg/arrow.svg";
import {Link} from "react-router-dom";
import HomeOffers from "../home-offers";
import translation from "../../language/useTranslation";

function Index() {
    const news = [
        {
            id: 1,
            image: NewsCardImg,
            svg: NewsIcon,
            date: "21.07.2023",
            category: "სიახლე",
            title: "ბოლნისის ვენახების კადასტრი გრძელდება!",
            text: "ბოლნისის მუნიციპალიტეტში ღვინის ეროვნული სააგენტო აგრძელებს ვენახების კადასტრის პროგრამას.",
        },
        {

            id: 2,
            image: NewsCardImg2,
            svg: CalendarIcon,
            date: "21.07.2023",
            category: "ღონისძიება",
            title: "ღვინის დღეები ბოლნისში",
            text: "ბოლნური ღვინო უკვე მეშვიდე წელია, ქართული ტრადიციული ტრადიციული წესით ქვევრში მზადდება - RMG-ის მხარდაჭერა მეღვინეებს",
        },
        {
            id: 3,
            image: NewsCardImg3,
            svg: AnnouncementIcon,
            date: "21.07.2023",
            category: "განცხადება",
            title: "ღვინის ფესტივალი ღვინის სამშობლოში",
            text: "საქართველოს მთავრობის ინიციატივით, დღეს, ქალაქ ბოლნისში ახალი, ყოველწლიური ღვინის\n" +
                "                                ფესტივალი\n" +
                "                                \"ღვინის დღეები საქართველოში\" გაიმართა, რომელიც სრულად მიეძღვნა ქართული ღვინის\n" +
                "                                პოპულარიზაციას, როგორც ადგილობრივ, ისე საერთაშორისო დონეზე.",
        },
    ];
    const {trans} = translation();
    return (
        <>
            <div className="home-news-container">

                <span><h3>{trans("news")}</h3></span>

                <div className="home-news-cards">


                    {news.map((news) => (
                        <div
                            key={news?.id}
                            className="home-news-card"
                        >
                            <img src={news?.image} alt=""/>
                            <div className="home-news-card-title">
                                <p>{news?.date}</p>
                                <p>
                                    <news.svg/>
                                    {news?.category}</p>
                            </div>
                            <h2>{news?.title}</h2>
                            <div className="home-news-card-text">
                                <p>
                                    {news?.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="home-all-news">
                    <Link to="/news">
                        <div className={"all-news"}>
                            <div className={"all-news-arrow"}><Arrow/></div>
                            <div className={"all-news-text"}>{trans("allNews")}</div>
                        </div>
                    </Link>
                </div>
                <hr/>
            </div>
            <HomeOffers/>
        </>
    );
}

export default Index;