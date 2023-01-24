import {Button, Form, Input, InputNumber} from "antd";
import {Link} from "react-router-dom";
import {ArrowLeftOutlined} from "@ant-design/icons";

function Index() {
    return (
        <div className="admin-contact">
            <Link to="/admin/contact" style={{width: "3%"}}>
                <Button type="primary"><ArrowLeftOutlined/></Button>
            </Link>
            <Form layout="vertical">
                <div className="admin-contact-tab">
                    <h3>ქართული</h3>

                    <Form.Item
                        name={"contact-direction"}
                        label="მიმართულება"
                        rules={[
                            {
                                required: true,
                                message: 'სავალდებულო ველი არ არის შევსებული.',
                            },
                        ]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name={"contact-name"}
                        label="სახელი და გვარი"
                        rules={[
                            {
                                required: true,
                                message: 'სავალდებულო ველი არ არის შევსებული.',
                            },
                        ]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name={"contact-position"}
                        label="თანამდებობა"
                        rules={[
                            {
                                required: true,
                                message: 'სავალდებულო ველი არ არის შევსებული.',
                            },
                        ]}>
                        <Input/>
                    </Form.Item>

                    <h3>ინგლისური</h3>

                    <Form.Item
                        name={"contact-direction-en"}
                        label="მიმართულება"
                        rules={[
                            {
                                required: true,
                                message: 'სავალდებულო ველი არ არის შევსებული.',
                            },
                        ]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name={"contact-name-en"}
                        label="სახელი და გვარი"
                        rules={[
                            {
                                required: true,
                                message: 'სავალდებულო ველი არ არის შევსებული.',
                            },
                        ]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name={"contact-position-en"}
                        label="თანამდებობა"
                        rules={[
                            {
                                required: true,
                                message: 'სავალდებულო ველი არ არის შევსებული.',
                            },
                        ]}>
                        <Input/>
                    </Form.Item>

                    <h3>რუსული</h3>

                    <Form.Item
                        name={"contact-direction-ru"}
                        label="მიმართულება"
                        rules={[
                            {
                                required: true,
                                message: 'სავალდებულო ველი არ არის შევსებული.',
                            },
                        ]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name={"contact-name-ru"}
                        label="სახელი და გვარი"
                        rules={[
                            {
                                required: true,
                                message: 'სავალდებულო ველი არ არის შევსებული.',
                            },
                        ]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name={"contact-position-ru"}
                        label="თანამდებობა"
                        rules={[
                            {
                                required: true,
                                message: 'სავალდებულო ველი არ არის შევსებული.',
                            },
                        ]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item name="phone" label="ტელ. ნომერი*" rules={[
                        {
                            required: true,
                            message: 'სავალდებულო ველი არ არის შევსებული.',
                        },
                    ]}>
                        <InputNumber
                            addonBefore="+995"
                            style={{
                                width: '100%',
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name={'email'}
                        label="ელ. ფოსტა"
                        rules={[
                            {
                                required: true,
                                message: 'არასწორი ელ. ფოსტის ფორმატი.',
                                type: 'email',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            შენახვა
                        </Button>
                    </Form.Item>

                </div>
            </Form>
        </div>
    );
}

export default Index;