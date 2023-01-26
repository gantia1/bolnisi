import TextLogo from "../../../assets/images/png/menu-text-img.png";
import {ReactComponent as Call} from "../../../assets/images/svg/call.svg";
import {ReactComponent as Mail} from "../../../assets/images/svg/mail.svg";
import {ReactComponent as Facebook} from "../../../assets/images/svg/facebook.svg";
import {ReactComponent as Instagram} from "../../../assets/images/svg/instagram.svg";
import {ReactComponent as Linkedin} from "../../../assets/images/svg/linkedin.svg";
import {ReactComponent as Tiktok} from "../../../assets/images/svg/tiktok.svg";
import {ReactComponent as Youtube} from "../../../assets/images/svg/instagram.svg";
import {Form, Input, InputNumber} from "antd";
import TextArea from "antd/es/input/TextArea";
import {ReactComponent as RightLeaf} from "../../../assets/images/svg/top-right-leaf.svg";
import ContactCard from "../../../assets/images/png/contact-card.png";
import ContactCardSecond from "../../../assets/images/png/contact-card-2.png";
import ContactCardThird from "../../../assets/images/png/contact-card-3.png";
import {ReactComponent as LeftLeaf} from "../../../assets/images/svg/bottom-right-leaf.svg";
import React, {useState} from "react";
import SuccessPopup from "../../success-popup";


function Index() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const contacts = [
        {
            id: 1,
            image: ContactCard,
            name: "მარიამ ჩიხლაძე",
            position: "შესყიდვები",
            phone: "+995 558 556 559",
            mail: "mchikhladze@acb.ge",
        },
        {

            id: 2,
            image: ContactCardSecond,
            name: "გიორგი დათებაშვილი",
            position: "ფინანსური დეპარტამენტი",
            phone: "+995 558 556 559",
            mail: "gdatebashvili@acb.ge",
        },
        {
            id: 3,
            image: ContactCardThird,
            name: "გურამ აბრამია",
            position: "იურიდიული დეპარტამენტი",
            phone: "+995 558 556 559",
            mail: "gabramia@acb.ge",
        },
    ];

    return (
        <>
            <div className="contact pages-container">

                <div className="contact-top">
                    <div className="contact-left-side">
                        <div className="contact-left-side-image">
                            <img src={TextLogo} alt=""/>
                        </div>
                        <div className="contact-info">
                            <ul>
                                <li><strong>საკონტაქტო ინფორმაცია</strong></li>
                                <li>დავით აღმაშენებლის 13ა, ბოლნისი, საქართველო</li>
                                <a href="tel:+995551250026">

                                    <li><Call/>+995 551 25 00 26</li>
                                </a>
                                <a href="mailto:agrocentribolnisi@gmail.com">
                                    <li className="contact-mail"><Mail/>agrocentribolnisi@gmail.com</li>
                                </a>
                                <ul className="contact-social-media">
                                    <li><Facebook/></li>
                                    <li><Instagram/></li>
                                    <li><Linkedin/></li>
                                    <li><Tiktok/></li>
                                    <li><Youtube/></li>
                                </ul>
                            </ul>
                        </div>
                    </div>

                    <div className="contact-right-side">

                        <div className="contact-right-side-title">
                            <span>დაგვიკავშირდით</span>
                        </div>

                        <div className="contact-right-leaf">
                            <RightLeaf/>
                        </div>

                        <Form className="contact-right-side-form">
                            <Form.Item
                                name={"name"}

                                rules={[
                                    {
                                        required: true,
                                        message: 'სავალდებულო ველი არ არის შევსებული.',
                                    },
                                ]}>
                                <Input
                                    bordered={false}
                                    placeholder="სახელი და გვარი*"
                                />
                            </Form.Item>
                            <Form.Item
                                name={"phone-number"}

                                rules={[
                                    {
                                        required: true,
                                        message: 'სავალდებულო ველი არ არის შევსებული.',
                                    },
                                ]}>
                                <InputNumber
                                    bordered={false}
                                    placeholder="ტელ.ნომერი*"
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name={'email'}
                            >
                                <Input
                                    bordered={false}
                                    placeholder="ელ.ფოსტა"
                                />
                            </Form.Item>

                            <Form.Item
                                name={"subject-matter"}

                                rules={[
                                    {
                                        required: true,
                                        message: 'სავალდებულო ველი არ არის შევსებული.',
                                    },
                                ]}>
                                <Input
                                    bordered={false}
                                    placeholder="თემატიკა*"
                                />
                            </Form.Item>

                            <Form.Item
                                name="description"
                            >
                                <TextArea rows={4}
                                          bordered={false}
                                          placeholder="შეტყობინება"
                                />
                            </Form.Item>

                            <Form.Item>
                                <button className="contact-form-button" onClick={showModal}>
                                    გაგზავნა
                                </button>
                            </Form.Item>
                        </Form>


                    </div>
                </div>

                <div className="contact-cards-title">
                    <span>საკონტაქტო პირები</span>
                </div>

                <div className="contact-cards">
                    <div className="contact-bottom-left-leaf">
                        <LeftLeaf/>
                    </div>
                    {contacts.map((contact) => (
                        <div
                            key={contact.id}
                            className="contact-card"
                        >
                            <div className="contact-card-back"/>
                            <div className="contact-card-top">
                                <img src={contact.image} alt=""/>
                                <span>{contact.position}</span>
                            </div>
                            <div className="contact-card-bottom">
                                <ul>
                                    <li><strong>{contact.name}</strong></li>
                                    <a href={`tel:${contact.phone}`}>
                                        <li><Call/><span>{contact.phone}</span></li>
                                    </a>
                                    <a href={`mailto:${contact.mail}`}>
                                        <li><Mail/><span>{contact.mail}</span></li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="contact-top">
                    <div className="contact-right-side for-mobile">

                        <div className="contact-right-side-title">
                            <span>დაგვიკავშირდით</span>
                        </div>

                        <div className="contact-right-leaf">
                            <RightLeaf/>
                        </div>

                        <Form className="contact-right-side-form">
                            <Form.Item
                                name={"nameMobile"}

                                rules={[
                                    {
                                        required: true,
                                        message: 'სავალდებულო ველი არ არის შევსებული.',
                                    },
                                ]}>
                                <Input
                                    bordered={false}
                                    placeholder="სახელი და გვარი*"
                                />
                            </Form.Item>
                            <Form.Item
                                name={"phone-number-mobile"}

                                rules={[
                                    {
                                        required: true,
                                        message: 'სავალდებულო ველი არ არის შევსებული.',
                                    },
                                ]}>
                                <InputNumber
                                    bordered={false}
                                    placeholder="ტელ.ნომერი*"
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name={'emailMobile'}
                            >
                                <Input
                                    bordered={false}
                                    placeholder="ელ.ფოსტა"
                                />
                            </Form.Item>

                            <Form.Item
                                name={"subject-matter-two"}

                                rules={[
                                    {
                                        required: true,
                                        message: 'სავალდებულო ველი არ არის შევსებული.',
                                    },
                                ]}>
                                <Input
                                    bordered={false}
                                    placeholder="თემატიკა*"
                                />
                            </Form.Item>

                            <Form.Item
                                name="description-mobile"
                            >
                                <TextArea rows={4}
                                          bordered={false}
                                          placeholder="შეტყობინება"
                                />
                            </Form.Item>

                            <Form.Item>
                                <button className="contact-form-button" onClick={showModal}>
                                    გაგზავნა
                                </button>
                            </Form.Item>
                        </Form>


                    </div>
                </div>
            </div>
            <div>
                <iframe title="bolnisi-map"
                        className={'google-map'}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47848.86524504503!2d44.51747001359763!3d41.448896490047964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4043e8ce6b502255%3A0x74dd03abe927bd76!2sBolnisi!5e0!3m2!1sen!2sge!4v1672312636844!5m2!1sen!2sge"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <SuccessPopup open={isModalOpen} close={() => setIsModalOpen(false)}/>
        </>
    );
}

export default Index;