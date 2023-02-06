import {ReactComponent as All} from "../../../assets/images/svg/all.svg";
import {ReactComponent as Calendar} from "../../../assets/images/svg/news.svg";
import {ReactComponent as CalendarToday} from "../../../assets/images/svg/calendar-today.svg";
import {ReactComponent as Percent} from "../../../assets/images/svg/percent.svg";
import {ReactComponent as Announcement} from "../../../assets/images/svg/announcement.svg";
import {ReactComponent as NewsIcon} from "../../../assets/images/svg/news.svg";
import {ReactComponent as CalendarIcon} from "../../../assets/images/svg/calendar.svg";
import {ReactComponent as AnnouncementIcon} from "../../../assets/images/svg/announcement.svg";
import NewsImage from "../../../assets/images/png/news-image.png";
import NewsImageSecond from "../../../assets/images/png/news-card-2.png";
import NewsImageThird from "../../../assets/images/png/news-image-2.png";
import NewsImageFourth from "../../../assets/images/png/news-image-3.png";
import NewsImageFifth from "../../../assets/images/png/news-image-4.png";
import NewsImageSixth from "../../../assets/images/png/news-image-5.png";
import NewsImageSeventh from "../../../assets/images/png/news-image-6.png";
import NewsImageEighth from "../../../assets/images/png/menu-image1.png";
import {Pagination} from "antd";
import React, {useState} from "react";
import {ReactComponent as SearchIcon} from "../../../assets/images/svg/search.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ReactComponent as CalendarFuture} from "../../../assets/images/svg/calendar-future.svg";
import MaskedInput from 'react-text-mask'
import Dropdown from "../../dropdown";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";


function Index() {

    const news = [
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
        {
            id: 4,
            image: NewsImageFourth,
            svg: NewsIcon,
            date: new Date(2022, 8, 12),
            category: "სიახლე",
            title: "ბოლნისის ვენახების კადასტრი გრძელდება!",
            text: "ბოლნისის მუნიციპალიტეტში ღვინის ეროვნული სააგენტო აგრძელებს ვენახების კადასტრის პროგრამას.",
        },
        {

            id: 5,
            image: NewsImageFifth,
            svg: CalendarIcon,
            date: new Date(2022, 10, 12),
            category: "ღონისძიება",
            title: "ღვინის დღეები ბოლნისში",
            text: "ბოლნური ღვინო უკვე მეშვიდე წელია, ქართული ტრადიციული ტრადიციული წესით ქვევრში მზადდება - RMG-ის მხარდაჭერა მეღვინეებს",
        },
        {
            id: 6,
            image: NewsImageSixth,
            svg: AnnouncementIcon,
            date: new Date(2022, 10, 12),
            category: "განცხადება",
            title: "ღვინის ფესტივალი ღვინის სამშობლოში",
            text: "საქართველოს მთავრობის ინიციატივით, დღეს, ქალაქ ბოლნისში ახალი, ყოველწლიური ღვინის\n" +
                "                                ფესტივალი\n" +
                "                                \"ღვინის დღეები საქართველოში\" გაიმართა, რომელიც სრულად მიეძღვნა ქართული ღვინის\n" +
                "                                პოპულარიზაციას, როგორც ადგილობრივ, ისე საერთაშორისო დონეზე.",
        },
        {
            id: 7,
            image: NewsImageSeventh,
            svg: NewsIcon,
            date: new Date(2022, 10, 12),
            category: "სიახლე",
            title: "ბოლნისის ვენახების კადასტრი გრძელდება!",
            text: "ბოლნისის მუნიციპალიტეტში ღვინის ეროვნული სააგენტო აგრძელებს ვენახების კადასტრის პროგრამას.",
        },
        {

            id: 8,
            image: NewsImageEighth,
            svg: CalendarIcon,
            date: new Date(2022, 10, 12),
            category: "ღონისძიება",
            title: "ღვინის დღეები ბოლნისში",
            text: "ბოლნური ღვინო უკვე მეშვიდე წელია, ქართული ტრადიციული ტრადიციული წესით ქვევრში მზადდება - RMG-ის მხარდაჭერა მეღვინეებს",
        },
    ];

    const [filtered, setFiltered] = useState(news);
    const [activeTab, setActiveTab] = useState(1);
    const [selected, setSelected] = useState("ყველა");
    const [searchData, setSearchData] = useState();

    const [data, setData] = useState({
        startDate: new Date("01/01/2022"),
        endDate: new Date()
    })

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const {t, i18n: {language}} = useTranslation();

    let newsCategory = news.filter(news => news.category === "სიახლე");
    let eventCategory = news.filter(news => news.category === "ღონისძიება");
    let announcementCategory = news.filter(news => news.category === "განცხადება");
    let saleCategory = news.filter(news => news.category === "ფასდაკლება");

    const options = [
        {
            id: 1,
            value: "ყველა",
            svg: All,
            category: news,
        },
        {
            id: 2,
            value: "სიახლეები",
            svg: Calendar,
            category: newsCategory,
        },
        {
            id: 3,
            value: "ღონისძიებები",
            svg: CalendarToday,
            category: eventCategory,
        },
        {
            id: 4,
            value: "ფასდაკლებები",
            svg: Percent,
            category: saleCategory,
        },
        {
            id: 5,
            value: "განცხადებები",
            svg: AnnouncementIcon,
            category: announcementCategory,
        },
    ];
    const navigate = useNavigate();

    const handleChangeDate = (name, date) => {
        setData({
            ...data,
            [name]: date
        })
    }


    const handleClick = (id, name) => {
        setActiveTab(id);
        setFiltered(name);
    };
    const filterBySearch = (event) => {
        setSearchData(event.target.value)
    }

    const search = event => {
        let updatedList = news.filter((news) => {
            return (
                news.category.toLowerCase().indexOf(searchData?.toLowerCase()) !== -1 ||
                news.title.toLowerCase().indexOf(searchData?.toLowerCase()) !== -1 ||
                news.text.toLowerCase().indexOf(searchData?.toLowerCase()) !== -1
            )
        });
        setFiltered(updatedList);
    }

    return (
        <div className="news-container">

            <div className="news-filter">
                <div className="news-filter-desktop">
                    <div className="news-filter-list">
                          <span className={` ${activeTab === 1 && 'active'}`}
                                onClick={() => handleClick(1, news)}><All/>{t("all")}</span>
                        <span className={` ${activeTab === 2 && 'active'}`}
                              onClick={() => handleClick(2, newsCategory)}><Calendar/>{t("news")}</span>
                        <span className={` ${activeTab === 3 && 'active'}`}
                              onClick={() => handleClick(3, eventCategory)}><CalendarToday/>{t("events")}</span>
                        <span className={` ${activeTab === 4 && 'active'}`}
                              onClick={() => handleClick(4, saleCategory)}><Percent/>{t("discounts")}</span>
                        <span className={` ${activeTab === 5 && 'active'}`}
                              onClick={() => handleClick(5, announcementCategory)}><Announcement/>{t("statements")}</span>
                    </div>
                </div>

                <div className="news-filter-mobile">
                    <Dropdown
                        setFiltered={setFiltered} selected={selected}
                        setSelected={setSelected} options={options}
                    />
                </div>


                <div className="news-date-search">
                    <ol>
                        <li className="news-date-search-mobile news-date-search-date">
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                selectsRange={true}
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(update) => {
                                    setDateRange(update);
                                }}
                                withPortal
                                customInput={
                                    <MaskedInput
                                        mask={[/[0-3]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[1-2]/, /\d/, /\d/, /\d/]}
                                    />
                                }
                            />
                            <span className="news-today-calendar"><CalendarToday/></span>
                        </li>
                        <li className={`news-date-search news-start-date${'-' + language}`}>
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                selected={data.startDate}
                                onChange={(date) => handleChangeDate('startDate', date)}
                                customInput={
                                    <MaskedInput
                                        mask={[/[0-3]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[1-2]/, /\d/, /\d/, /\d/]}
                                    />
                                }
                            />
                            <span className="news-today-calendar"><CalendarToday/></span>
                        </li>
                        <li className={`news-date-search news-end-date${'-' + language}`}>
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                selected={data.endDate}
                                onChange={(date) => handleChangeDate('endDate', date)}
                                customInput={
                                    <MaskedInput
                                        mask={[/[0-3]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[1-2]/, /\d/, /\d/, /\d/]}
                                    />
                                }
                            />
                            <span className="news-today-calendar"><CalendarFuture/></span>
                        </li>

                        <li
                            className="news-date-search news-search-input"
                        >
                            <input placeholder={t("searchWord")}
                                   onChange={filterBySearch}
                                   onKeyPress={event => {
                                       if (event.key === 'Enter') {
                                           search();
                                       }
                                   }}
                            />
                            <span className="news-search-icon" onClick={search}><SearchIcon/></span>
                        </li>
                    </ol>
                </div>
            </div>

            <div className="news-cards">

                {filtered && filtered.map((news) => (
                    // eslint-disable-next-line no-mixed-operators
                    (news.date <= data.endDate && news.date >= data.startDate ||
                        // eslint-disable-next-line no-mixed-operators
                        news.date <= endDate && news.date >= startDate)
                    &&
                    <div

                        key={news.id}
                        className="news-card"
                    >
                        <div className="news-card-image">
                            <img src={news.image} alt="" onClick={() => navigate(`/news/${news.id}`)}/>
                        </div>
                        <div className="news-card-title">
                            <p>{news.date.toLocaleDateString('en-GB').replaceAll('/', '.')}</p>
                            <p>
                                <news.svg/>
                                {news.category}
                            </p>
                        </div>
                        <h2>{news.title}</h2>
                        <div className="news-card-text">
                            <p>
                                {news.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="news-pagination">
                <Pagination responsive={true} defaultCurrent={1} total={50} defaultPageSize={5}/>
            </div>
        </div>
    );
}

export default Index;