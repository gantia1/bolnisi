import AboutUs from "../../../assets/images/png/about-us.png";
import AboutUs1 from "../../../assets/images/png/about-us1.png";
import {ReactComponent as Phone} from "../../../assets/images/svg/call.svg";
import {ReactComponent as Mail} from "../../../assets/images/svg/mail.svg";
import translation from "../../../language/useTranslation";

function Index() {
    const {trans} = translation();
    const structure = [
        {
            id: 1,
            name: "ნიკოლოზ მინდიაშვილი",
            position: "დირექტორი",
            phone: "+995 558 556 559",
            mail: "mchikhladze@acb.ge",
        },
        {
            id: 2,
            name: "გურამ ავქოფაშვილი",
            position: "დირექტორის მოადგილე",
            phone: "+995 558 556 559",
            mail: "mchikhladze@acb.ge",
        },
        {
            id: 3,
            name: "თეონა რეხვიაშვილი",
            position: "მარკეტინგის სპეციალისტი",
            phone: "+995 558 556 559",
            mail: "mchikhladze@acb.ge",
        },
        {
            id: 4,
            name: "სალომე ლომიძე",
            position: "გაყიდვების მენეჯერი",
            phone: "+995 558 556 559",
            mail: "mchikhladze@acb.ge",
        },
        {
            id: 5,
            name: "ნინო გიორბელიძე",
            position: "სოციალური მედიის სპეციალისტი",
            phone: "+995 558 556 559",
            mail: "mchikhladze@acb.ge",
        },
    ];
    const values = [
        {
            id: 1,
            title: "გუნდურობა",
            text: "ჩვენ ვუფრთხილდებით ჩვენი გუნდის თითოეულ წევრს დავფიქრობთ, რომ ერთიანი ძალებით ყველა დასახულ მიზანს მივაღწევთ.",
        },
        {
            id: 2,
            title: "ზრუნვა",
            text: "ჩვენი გუნდი ზრუნავს პროდუქციის ხარისხზე, მომსახურების მაღალ სტანდარტსა და ხელმისაწვდომობაზე.",
        },
        {
            id: 3,
            title: "ხარისხიანი მომსახურება",
            text: "საიტზე პროდუქტის შეძენა გაძლევთ საშუალებას კომფორტულად, სახლიდან გაუსვლელად აირჩიოთ სასურველი პროდუქტი და მიიღოთ უმოკლეს დროში.",
        },
        {
            id: 4,
            title: "ინოვაცია",
            text: "აგროცენტრის მიერ შეთავაზებული მომსახურებები საქართველოს მასშტაბით არის ერთადერთი და უკონკურენტო. ორგანიზაცია მუდმივად ზრუნავს მომსახურების ხარისხის, ცოდნის გამოყენების გასაუმჯობესებლად და ბიზნესის ეფექტიანობის გასაზრდელად.",
        },
    ];
    return (
        <div className="about-us-container">

            <div className="about-us-top">

                <div className="about-us-left-side">
                    <div className="about-us-title">
                        <span>{trans("aboutUs")}</span>
                    </div>
                    <div className="about-us-text">
                        <p>
                            ბოლნისის აგროცენტრის მოდელი 2019 წელს მომზადდა ევროკავშირისა და ბოლნისის მუნიციპალიტეტის
                            ერთობლივი დაფინანსებით „ბოლნისში ბიზნეს საქმიანობის პლატფორმის ჩამოყალიბება“ ევროკავშირის
                            ინიციატივა-მერები ეკონომიკური ზრდისთვის „ადგილობრივი წარმოებული პროდუქციის
                            მიწოდება-მოთხოვნის შესაძლებლობების და პერიფერიული მომხმარებლის“ კვლევის ფარგლებში. ბოლნისის
                            აგროცენტრის შექმნიდან დღემდე აგროპროდუქციის წარმოებისათვის აუცილებელი დამხმარე სერვისებით
                            ჯამში 430-მა აგრომეწარმემ ისარგებლა.
                        </p>
                    </div>
                    <div className="about-us-title">
                        <span>{trans("missionVision")}</span>
                    </div>
                    <div className="about-us-text">
                        <p>
                            ჩვენი მისიაა ადგილობრივი აგრომეწარმეები უზრუნველვყოთ აგროპროდუქციის წარმოებისათვის
                            აუცილებელი
                            დამხმარე სერვისებით, ხელიშევუწყოთ მათი ცნობადობისა და გაყიდვების ზრდას.
                        </p>

                        <p>
                            ჩვენი ხედვაა
                            მომხმარებელს შევთავაზოთ ეკოლოგიურად სუფთა და ხარისხიანია დგილობრივი აგროპროდუქცია, როგორც
                            ქვეყნის შიგნით, ასევე მის ფარგლებს გარეთ.
                        </p>
                    </div>
                </div>

                <div className="about-us-right-side">
                    <div className="about-us-image">
                        <img src={AboutUs} alt="about-us-img"/>
                    </div>
                    <div className="about-us-image-second">
                        <img src={AboutUs1} alt="about-us-img"/>
                    </div>
                </div>

            </div>

            <div className="about-us-structure">

                <div className="about-us-title">
                    <span>{trans("structure")}</span>
                </div>

                <div className="about-us-structure-cards">

                    {structure.map((structure) => (
                        <div
                            key={structure?.id}
                            className="about-us-structure-card"
                        >
                            <div className="about-us-structure-name">
                                <p>{structure.name}</p>
                            </div>
                            <div className="about-us-structure-position">
                                <p>{structure.position}</p>
                            </div>
                            <div className="about-us-structure-contact">
                                <span>
                                    <a href={`tel:${structure.phone}`}>
                                        <Phone/>{structure.phone}
                                    </a>
                                </span>
                                <span>
                                    <a href={`mailto:${structure.mail}`}>
                                        <Mail/>{structure.mail}
                                    </a>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="about-us-values">
                <div className="about-us-title">
                    <span>{trans("values")}</span>
                </div>
                <div className="about-us-values-cards">

                    {values.map((values) => (
                        <div
                            key={values?.id}
                            className="about-us-values-card"
                        >
                            <div className="about-us-values-card-title">
                                <span>{values.title}</span>
                            </div>
                            <div className="about-us-values-card-text">
                                <p>
                                    {values.text}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default Index;