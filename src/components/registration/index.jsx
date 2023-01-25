import React, {useState} from "react";
import {Form, Input, InputNumber, Modal, Select} from "antd";
import {ReactComponent as Sms} from "../../assets/images/svg/sms.svg";
import InputCode from "react-code-input";

function Index(props) {
    const [activeTab, setActiveTab] = useState(1);
    const [completedStep, setCompletedStep] = useState(1);
    const [completedStepLegal, setCompletedStepLegal] = useState(1);

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

    return (
        <Modal className="registration-body" open={props.open} onCancel={props.close} footer={false}>
            <div className="registration-container">

                <div className="registration">

                    <div className="registration-header">
                        <div className="registration-title">
                            <span>რეგისტრაცია</span>
                        </div>
                        <div className="registration-tab">
                        <span
                            className={` ${activeTab === 1 && 'active'}`}
                            onClick={() => handleClick(1)}>
                            ფიზიკური პირი
                        </span>
                            <span
                                className={` ${activeTab === 2 && 'active'}`}
                                onClick={() => handleClick(2)}>
                            იურიდიული პირი
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
                                            name={"name"}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'სავალდებულო ველი არ არის შევსებული.',
                                                },
                                            ]}>
                                            <Input
                                                bordered={false}
                                                placeholder="სახელი და გვარი"
                                            />
                                        </Form.Item>

                                        <Form.Item>
                                            <Select
                                                showSearch
                                                placeholder="ქვეყანა"
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
                                                placeholder="ელ.ფოსტა"
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
                                                placeholder="ტელ.ნომერი"
                                                controls={false}
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <button className="registration-sms-button" onClick={handleIdIncrease}>
                                                <Sms/> კოდის გაგზავნა
                                            </button>
                                        </Form.Item>
                                    </Form>

                                ) : completedStep === 2 ? (
                                    <div className="registration-phone-number">
                                        <div className="registration-phone-number-text">
                                            შეიყვანეთ თქვენს მიერ მითითებულ ტელეფონის ნომერზე მიღებული 4-ნიშნა კოდი
                                        </div>
                                        <div className="registration-phone-number-input-code">
                                            <InputCode
                                                name={"name"}
                                                length={6}
                                                label="Code Label"
                                                inputMode={'numeric'}
                                            />
                                        </div>
                                        <div className="registration-phone-number-footer">
                                            <div className="registration-input-code-time">
                                                <span>00:30</span>
                                            </div>
                                            <div className="registration-repeat-input-code">
                                                <span>კოდის თავიდან გაგზავნა</span>
                                            </div>
                                        </div>
                                        <div className="registration-phone-number-button" onClick={handleIdIncrease}>
                                            <span>დადასტურება</span>
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
                                                        placeholder="პაროლი"
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
                                                        placeholder="პაროლი განმეორებით"
                                                        visibilityToggle={false}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <Form.Item>
                                                <div className="registration-repeat-password-confirm">
                                                    <span>რეგისტრაცია</span>
                                                </div>
                                            </Form.Item>
                                        </Form>
                                    </div>

                                ) : null}

                                <div className="registration-stepper">
                                    <div className="stepper-wrapper">
                                        <div
                                            className={`stepper-item ${completedStep === 1 ? 'completed' : "completed"}`}>
                                            <div className="step-counter" onClick={() => handleClickStep(1)}></div>
                                        </div>
                                        <div className={`stepper-item ${completedStep >= 2 ? 'completed' : null}`}>
                                            <div className="step-counter" onClick={() => handleClickStep(2)}></div>
                                        </div>
                                        <div className={`stepper-item ${completedStep >= 3 ? 'completed' : null}`}>
                                            <div className="step-counter" onClick={() => handleClickStep(3)}></div>
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
                                                placeholder="დასახელება"
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
                                                placeholder="საიდენტიფიკაციო ნომერი"
                                                controls={false}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            className="registration-input"
                                            name={'legal-email'}
                                        >
                                            <Input
                                                bordered={false}
                                                placeholder="ელ.ფოსტა"
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
                                                placeholder="ტელ.ნომერი"
                                                controls={false}
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <button className="registration-sms-button" onClick={handleIdIncreaseLegal}>
                                                <Sms/> კოდის გაგზავნა
                                            </button>
                                        </Form.Item>
                                    </Form>
                                ) : completedStepLegal === 2 ? (
                                    <div className="registration-phone-number">
                                        <div className="registration-phone-number-text">
                                            შეიყვანეთ თქვენს მიერ მითითებულ ტელეფონის ნომერზე მიღებული 4-ნიშნა კოდი
                                        </div>
                                        <div className="registration-phone-number-input-code">
                                            <InputCode
                                                name={"name"}
                                                length={6}
                                                label="Code Label"
                                                inputMode={'numeric'}
                                            />
                                        </div>
                                        <div className="registration-phone-number-footer">
                                            <div className="registration-input-code-time">
                                                <span>00:30</span>
                                            </div>
                                            <div className="registration-repeat-input-code">
                                                <span>კოდის თავიდან გაგზავნა</span>
                                            </div>
                                        </div>
                                        <div className="registration-phone-number-button"
                                             onClick={handleIdIncreaseLegal}>
                                            <span>დადასტურება</span>
                                        </div>
                                    </div>
                                ) : completedStepLegal === 3 ? (
                                    <div className="registration-repeat-password">
                                        <Form>
                                            <div className="registration-repeat-password-container">
                                                <Form.Item
                                                    name="legal-password"
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
                                                        placeholder="პაროლი"
                                                        visibilityToggle={false}
                                                    />
                                                </Form.Item>
                                                <Form.Item
                                                    name="legal-confirmPassword"
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
                                                        placeholder="პაროლი განმეორებით"
                                                        visibilityToggle={false}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <Form.Item>
                                                <div className="registration-repeat-password-confirm">
                                                    <span>რეგისტრაცია</span>
                                                </div>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                ) : null}

                                <div className="registration-stepper">
                                    <div className="stepper-wrapper">
                                        <div
                                            className={`stepper-item ${completedStepLegal === 1 ? 'completed' : "completed"}`}>
                                            <div className="step-counter" onClick={() => handleClickStepLegal(1)}></div>
                                        </div>
                                        <div className={`stepper-item ${completedStepLegal >= 2 ? 'completed' : null}`}>
                                            <div className="step-counter" onClick={() => handleClickStepLegal(2)}></div>
                                        </div>
                                        <div className={`stepper-item ${completedStepLegal >= 3 ? 'completed' : null}`}>
                                            <div className="step-counter" onClick={() => handleClickStep(3)}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ) : null}

                    </div>
                </div>
            </div>

        </Modal>

    );
}

export default Index;