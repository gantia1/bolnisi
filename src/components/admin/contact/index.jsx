import {Button, Form, Input, InputNumber, Popconfirm, Table, Tabs} from "antd";
import TabPane from "antd/es/tabs/TabPane";
import TextArea from "antd/es/input/TextArea";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

function Index() {
    const columns = [
        {
            title: 'მიმართულება',
            dataIndex: 'direction',
        },
        {
            title: 'სახელი და გვარი',
            dataIndex: 'name',
        },
        {
            title: 'რედაქტირება',
            dataIndex: 'edit',
            render: () => {
                return (
                    <>
                        <Button type="primary"><EditOutlined/>რედაქტირება</Button>
                    </>
                );
            }
        },
        {
            title: 'წაშლა',
            dataIndex: 'delete',
            render: () => {
                return (
                    <>
                        <Popconfirm title="წაშლა"
                                    okText="კი"
                                    cancelText="არა"
                        >
                            <Button type="primary" danger><DeleteOutlined/>წაშლა</Button>
                        </Popconfirm>
                    </>
                );
            }
        }

    ];
    const data = [
        {
            key: '1',
            direction: 'test',
            name: "test",
        },
        {
            key: '2',
            direction: 'test',
            name: "test",
        },

    ];
    return (
        <div className="admin-contact">
            <div className="admin-contact-form">
                <Tabs defaultActiveKey="admin-contact1" type="card">

                    <TabPane tab="მთავარი საკონტაქტო ინფორმაცია" key="admin-contact1">
                        <div className="admin-contact-tab">
                            <Form layout="vertical">
                                <Form.Item
                                    label="რუქა"
                                    name="map"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'სავალდებულო ველი არ არის შევსებული.',
                                        },
                                    ]}
                                >
                                    <TextArea rows={4}/>
                                </Form.Item>

                                <Form.Item name="address" label="მისამართი"
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
                                    name={['user', 'email']}
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

                                <Form.Item name="facebook" label="Facebook">
                                    <Input/>
                                </Form.Item>
                                <Form.Item name="youtube" label="Youtube">
                                    <Input/>
                                </Form.Item>
                                <Form.Item name="instagram" label="Instagram">
                                    <Input/>
                                </Form.Item>
                                <Form.Item name="linkedin" label="linkedin">
                                    <Input/>
                                </Form.Item>
                                <Form.Item name="tiktok" label="TikTok">
                                    <Input/>
                                </Form.Item>


                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        შენახვა
                                    </Button>
                                </Form.Item>


                            </Form>
                        </div>
                    </TabPane>

                    <TabPane tab="საკონტაქტო ელ.ფოსტა" key="admin-contact2">
                        <div className="admin-contact-tab">

                            <Form layout="vertical">
                                <Form.Item>
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

                                    <Button type="primary" htmlType="submit">
                                        შენახვა
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </TabPane>
                    <TabPane tab="საკონტაქტო პირების მართვა" key="admin-contact3">
                        <div className="admin-add-button">
                            <Link to="/admin/contact/add-contact"><Button type="primary">დამატება</Button></Link>
                        </div>

                        <div>
                            <Table columns={columns} dataSource={data} size="middle"
                                   pagination={{defaultPageSize: 10}}
                            />
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default Index;