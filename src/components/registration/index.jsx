import React, {useState, useEffect} from "react";
import {Form, Input, InputNumber, Modal, Select} from "antd";
import {ReactComponent as Sms} from "../../assets/images/svg/sms.svg";
import {ReactComponent as Refresh} from "../../assets/images/svg/refresh.svg";
import {ReactComponent as Success} from "../../assets/images/svg/success-popup.svg";
import InputCode from "react-code-input";
import translation from "../../language/useTranslation";

function Index(props) {
    const [activeTab, setActiveTab] = useState(1);
    const [completedStep, setCompletedStep] = useState(1);
    const [completedStepLegal, setCompletedStepLegal] = useState(1);
    const [loading, setLoading] = useState(0);
    const {trans} = translation();

    useEffect(() => {
        loading > 0
            ? setTimeout(() => setLoading(loading - 1), 1000)
            : setLoading(0);
    }, [loading]);
    const handleClickStep = (id) => {
        setCompletedStep(id);
    };
    const handleClickStepLegal = (id) => {
        setCompletedStepLegal(id);
    };

    const handleIdIncrease = () => {
        setCompletedStep(completedStep + 1);

    };
    const handleIdIncreaseLegal = () => {
        setCompletedStepLegal(completedStepLegal + 1);

    };


    const handleClick = (id) => {
        setActiveTab(id);
    };

    const handleClickClose = (id) => {
        props.close();
        setCompletedStep(id);
        setCompletedStepLegal(id);
    };


    return (
        <Modal className="registration-body" open={props.open} onCancel={props.close} footer={false}>
            {
                completedStep === 4 || completedStepLegal === 4 ? (
                    <div className="success-popup">
                        <div className="success-popup-content">
                            <div className="success-popup-svg"></div>
                            <div className="success-popup-text">
                                <span><Success/></span>
                                <span>{trans("successRegistration")}</span>
                            </div>
                            <div className="success-popup-button" onClick={() => handleClickClose(1)}>
                                <span>{trans("close")}</span></div>
                        </div>
                    </div>
                ) : (
                    <div className="registration-container">
                        <div className="registration">

                            <div className="registration-header">
                                <div className="registration-title">
                                    <span>{trans("registration")}</span>
                                </div>
                                <div className="registration-tab">
                        <span
                            className={` ${activeTab === 1 && 'active'}`}
                            onClick={() => handleClick(1)}>
                            {trans("naturalPerson")}
                        </span>
                                    <span
                                        className={` ${activeTab === 2 && 'active'}`}
                                        onClick={() => handleClick(2)}>
                            {trans("legalEntity")}
                        </span>
                                </div>

                            </div>


                            <div className="registration-content">
                                {activeTab === 1 ? (
                                    <div className="registration-natural-person">
                                        {completedStep === 1 ? (
                                            <Form>
                                                <Form.Item
                                                    className="registration-input"
                                                    name={"name-person"}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'სავალდებულო ველი არ არის შევსებული.',
                                                        },
                                                    ]}>
                                                    <Input
                                                        bordered={false}
                                                        placeholder={trans("nameLastname")}
                                                    />
                                                </Form.Item>

                                                <Form.Item>
                                                    <Select
                                                        showSearch
                                                        placeholder={trans("country")}
                                                        optionFilterProp="children"
                                                        filterOption={(input, option) =>
                                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                        }
                                                    />
                                                </Form.Item>

                                                <Form.Item
                                                    className="registration-input"
                                                    name={'email'}
                                                >
                                                    <Input
                                                        bordered={false}
                                                        placeholder={trans("email")}
                                                    />
                                                </Form.Item>

                                                <Form.Item
                                                    className="registration-input"
                                                    name={"phone-number"}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'სავალდებულო ველი არ არის შევსებული.',
                                                        },
                                                    ]}>
                                                    <InputNumber
                                                        bordered={false}
                                                        placeholder={trans("phoneNumber")}
                                                        controls={false}
                                                    />
                                                </Form.Item>
                                                <Form.Item>
                                                    <button className="registration-sms-button"
                                                            onClick={() => {
                                                                setLoading(30);
                                                                handleIdIncrease()
                                                            }}>
                                                        <Sms/> {trans("sendTheCode")}
                                                    </button>
                                                </Form.Item>
                                            </Form>

                                        ) : completedStep === 2 ? (
                                            <div className="registration-phone-number">
                                                <div className="registration-phone-number-text">
                                                    {trans("smsCode")}
                                                </div>
                                                <div className="registration-phone-number-input-code">
                                                    <InputCode
                                                        name={"name"}
                                                        label="Code Label"
                                                        inputMode={'numeric'}
                                                    />
                                                </div>
                                                <div className="registration-phone-number-footer">
                                                    <div className="registration-input-code-time">
                                                        <span>{`00:${loading > 9 ? loading : '0' + loading}`}</span>

                                                    </div>
                                                    <div className="registration-repeat-input-code" style={{
                                                        opacity: loading > 0 ? '0.5' : '1',
                                                        cursor: loading > 0 ? 'notAllowed' : 'pointer'
                                                    }}>
                                                        <span
                                                            style={{pointerEvents: loading > 0 ? 'none' : 'unset'}}
                                                            onClick={() => setLoading(30)}>
                                                            <span className={`resend-sms ${loading > 0 && 'loading'}`}
                                                            ><Refresh/></span>
                                                            {trans("sendCode")}</span>
                                                    </div>
                                                </div>
                                                <div className="registration-phone-number-button"
                                                     onClick={handleIdIncrease}>
                                                    <span>{trans("confirmation")}</span>
                                                </div>
                                            </div>
                                        ) : completedStep === 3 ? (
                                            <div className="registration-repeat-password">
                                                <Form>
                                                    <div className="registration-repeat-password-container">
                                                        <Form.Item
                                                            name="password"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: "ველის შევსება სავალდებულოა"
                                                                },
                                                                {
                                                                    min: 8,
                                                                    message: "პაროლი მინიმუმ 8"
                                                                },
                                                                // {
                                                                //     validator: (_, value) =>
                                                                //         value && value.includes('A')
                                                                //             ? Promise.resolve()
                                                                //             : Promise.reject("პაროლი უნდა შეიცავდეს..."),
                                                                // },
                                                            ]}
                                                        >
                                                            <Input.Password
                                                                placeholder={trans("password")}
                                                                visibilityToggle={false}
                                                            />
                                                        </Form.Item>
                                                        <Form.Item
                                                            name="confirmPassword"
                                                            dependencies={["password"]}
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: "ველის შევსება სავალდებულოა"
                                                                },
                                                                ({getFieldValue}) => ({
                                                                    validator(_, value) {
                                                                        if (!value || getFieldValue('password') === value) {
                                                                            return Promise.resolve();
                                                                        }
                                                                        return Promise.reject("პაროლი არ ემთხვევა");
                                                                    },
                                                                }),
                                                            ]}
                                                        >
                                                            <Input.Password
                                                                placeholder={trans("repeatPassword")}
                                                                visibilityToggle={false}
                                                            />
                                                        </Form.Item>
                                                    </div>
                                                    <Form.Item>
                                                        <div
                                                            className="registration-repeat-password-confirm"
                                                            onClick={handleIdIncrease}
                                                        >
                                                            <span>{trans("registration")}</span>
                                                        </div>
                                                    </Form.Item>
                                                </Form>
                                            </div>

                                        ) : null}

                                        <div className="registration-stepper">
                                            <div className="stepper-wrapper">
                                                <div
                                                    className={`stepper-item ${completedStep === 1 ? 'completed' : "completed"}`}>
                                                    <div className="step-counter"
                                                         style={{
                                                             pointerEvents: loading > 0 ? 'none' : 'unset'
                                                         }}
                                                         onClick={() => handleClickStep(1)}></div>
                                                </div>
                                                <div
                                                    className={`stepper-item ${completedStep >= 2 ? 'completed' : null}`}>
                                                    <div className="step-counter"
                                                         style={{
                                                             pointerEvents: loading > 0 ? 'none' : 'unset'
                                                         }}
                                                         onClick={() => handleClickStep(2)}></div>
                                                </div>
                                                <div
                                                    className={`stepper-item ${completedStep >= 3 ? 'completed' : null}`}>
                                                    <div className="step-counter"
                                                         style={{
                                                             pointerEvents: loading > 0 ? 'none' : 'unset'
                                                         }}
                                                         onClick={() => handleClickStep(3)}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : activeTab === 2 ? (
                                    <div className="registration-legal-entity registration-natural-person">

                                        {completedStepLegal === 1 ? (
                                            <Form>
                                                <Form.Item
                                                    className="registration-input"
                                                    name={"legalName"}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'სავალდებულო ველი არ არის შევსებული.',
                                                        },
                                                    ]}>
                                                    <Input
                                                        bordered={false}
                                                        placeholder={trans("legalEntityName")}
                                                    />
                                                </Form.Item>
                                                <Form.Item
                                                    className="registration-input"
                                                    name={"Identification-number"}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'სავალდებულო ველი არ არის შევსებული.',
                                                        },
                                                    ]}>
                                                    <InputNumber
                                                        bordered={false}
                                                        placeholder={trans("IdentificationNumber")}
                                                        controls={false}
                                                    />
                                                </Form.Item>
                                                <Form.Item
                                                    className="registration-input"
                                                    name={'legal-email'}
                                                >
                                                    <Input
                                                        bordered={false}
                                                        placeholder={trans("email")}
                                                    />
                                                </Form.Item>
                                                <Form.Item
                                                    className="registration-input"
                                                    name={"legal-phone-number"}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'სავალდებულო ველი არ არის შევსებული.',
                                                        },
                                                    ]}>
                                                    <InputNumber
                                                        bordered={false}
                                                        placeholder={trans("phoneNumber")}
                                                        controls={false}
                                                    />
                                                </Form.Item>
                                                <Form.Item>
                                                    <button className="registration-sms-button"
                                                            onClick={() => {
                                                                setLoading(30);
                                                                handleIdIncreaseLegal()
                                                            }}>
                                                        <Sms/> {trans("sendTheCode")}
                                                    </button>
                                                </Form.Item>
                                            </Form>
                                        ) : completedStepLegal === 2 ? (
                                            <div className="registration-phone-number">
                                                <div className="registration-phone-number-text">
                                                    {trans("smsCode")}
                                                </div>
                                                <div className="registration-phone-number-input-code">
                                                    <InputCode
                                                        name={"name-legal"}
                                                        label="Code Label"
                                                        inputMode={'numeric'}
                                                    />
                                                </div>
                                                <div className="registration-phone-number-footer">
                                                    <div className="registration-input-code-time">
                                                        <span>{`00:${loading > 9 ? loading : '0' + loading}`}</span>
                                                    </div>
                                                    <div className="registration-repeat-input-code" style={{
                                                        opacity: loading > 0 ? '0.5' : '1',
                                                        cursor: loading > 0 ? 'notAllowed' : 'pointer'
                                                    }}>
                                                        <span
                                                            style={{pointerEvents: loading > 0 ? 'none' : 'unset'}}
                                                            onClick={() => setLoading(30)}>
                                                            <span className={`resend-sms ${loading > 0 && 'loading'}`}
                                                            ><Refresh/></span>
                                                            {trans("sendCode")}</span>
                                                    </div>
                                                </div>
                                                <div className="registration-phone-number-button"
                                                     onClick={handleIdIncreaseLegal}>
                                                    <span>{trans("confirmation")}</span>
                                                </div>
                                            </div>
                                        ) : completedStepLegal === 3 ? (
                                            <div className="registration-repeat-password">
                                                <Form>
                                                    <div className="registration-repeat-password-container">
                                                        <Form.Item
                                                            name="legalPassword"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: "ველის შევსება სავალდებულოა"
                                                                },
                                                                {
                                                                    min: 8,
                                                                    message: "პაროლი მინიმუმ 8"
                                                                },
                                                            ]}
                                                        >
                                                            <Input.Password
                                                                placeholder={trans("password")}
                                                                visibilityToggle={false}
                                                            />
                                                        </Form.Item>
                                                        <Form.Item
                                                            name="legal-confirmPassword"
                                                            dependencies={["legalPassword"]}
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: "ველის შევსება სავალდებულოა"
                                                                },
                                                                ({getFieldValue}) => ({
                                                                    validator(_, value) {
                                                                        if (!value || getFieldValue('password') === value) {
                                                                            return Promise.resolve();
                                                                        }
                                                                        return Promise.reject("პაროლი არ ემთხვევა");
                                                                    },
                                                                }),
                                                            ]}
                                                        >
                                                            <Input.Password
                                                                placeholder={trans("repeatPassword")}
                                                                visibilityToggle={false}
                                                            />
                                                        </Form.Item>
                                                    </div>
                                                    <Form.Item>
                                                        <div
                                                            className="registration-repeat-password-confirm"
                                                            onClick={handleIdIncrease}
                                                        >
                                                            <span>{trans("registration")}</span>
                                                        </div>
                                                    </Form.Item>
                                                </Form>
                                            </div>
                                        ) : null}

                                        <div className="registration-stepper">
                                            <div className="stepper-wrapper">
                                                <div
                                                    className={`stepper-item ${completedStepLegal === 1 ? 'completed' : "completed"}`}>
                                                    <div className="step-counter"
                                                         style={{
                                                             pointerEvents: loading > 0 ? 'none' : 'unset'
                                                         }}
                                                         onClick={() => handleClickStepLegal(1)}></div>
                                                </div>
                                                <div
                                                    className={`stepper-item ${completedStepLegal >= 2 ? 'completed' : null}`}>
                                                    <div className="step-counter"
                                                         style={{
                                                             pointerEvents: loading > 0 ? 'none' : 'unset'
                                                         }}
                                                         onClick={() => handleClickStepLegal(2)}></div>
                                                </div>
                                                <div
                                                    className={`stepper-item ${completedStepLegal >= 3 ? 'completed' : null}`}>
                                                    <div className="step-counter"
                                                         style={{
                                                             pointerEvents: loading > 0 ? 'none' : 'unset'
                                                         }}
                                                         onClick={() => handleClickStep(3)}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ) : null}

                            </div>
                        </div>
                    </div>
                )}
        </Modal>

    );
}

export default Index;