import {useState} from "react";
import {Button, Checkbox, DatePicker, Form, Input, message, Modal, Radio, Select, Space, Upload} from "antd";
import dayjs from "dayjs";
import {ArrowLeftOutlined, PlusOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import {Link} from "react-router-dom";


function Index() {
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [previewOpen, setPreviewOpen] = useState(false);
    const [galleryList, setGalleryList] = useState([]);
    const [photoList, setPhotoList] = useState([]);

    const [form] = Form.useForm()
    const handleCancel = () => setPreviewOpen(false);

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const validatePhoto = (file) => {
        const isJpgPngOrJpeg = file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgPngOrJpeg) {
            message?.error('ატვირთული ფაილის ფორმატი განსხვავდება ნებადართულისგან - ფაილის ფორმატი უნდა იყოს jpg, jpeg, png.');
            return false;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message?.error('ატვირთული ფაილის ზომა აღემატება ნებადართულს - ფაილის ზომა არ უნდა აღემატებოდეს 2 მბ-ს.');
            return false;
        }
        return true;
    }

    const beforeUpload = (file, name) => {
        if (validatePhoto(file)) {
            name === 'uploads' ?
                setGalleryList((galleryList) => [...galleryList, {
                    name: file.name,
                    url: URL.createObjectURL(file)
                }])
                :
                setPhotoList([{
                    name: file.name,
                    url: URL.createObjectURL(file)
                }])
        }
        return false;
    };

    const categories = [
        {
            value: 'განცხადებები',
            label: 'განცხადებები',
        },
        {
            value: 'ღონისძიებები',
            label: 'ღონისძიებები',
        },
        {
            value: 'შეთავაზებები',
            label: 'შეთავაზებები',
        },
        {
            value: 'ფასდაკლებები',
            label: 'ფასდაკლებები',
        },
    ]


    return (
        <div className="admin-news">

            <Link to="/admin/news" style={{width: "3%", marginBottom: "20px"}}>
                <Button type="primary"><ArrowLeftOutlined/></Button>
            </Link>

            <Form layout="vertical" form={form}>
                <div className="admin-news-tab">
                    <Form.Item
                        style={{width: "100%"}}
                        name={'date'}
                        label="თარიღი"
                        rules={[
                            {
                                required: true,
                                message: 'ველის შევსება სავალდებულოა.',
                            },
                        ]}
                        initialValue={dayjs()}
                    >
                        <DatePicker
                            defaultValue={dayjs()}
                            style={{
                                width: '100%',
                            }}/>
                    </Form.Item>

                    <Form.Item
                        name={'category'}
                        label="კატეგორია"
                        rules={[
                            {
                                required: true,
                                message: 'ველის შევსება სავალდებულოა.',
                            },
                        ]}
                    >
                        <Select
                            defaultValue=""
                            options={categories}
                        />

                    </Form.Item>

                    <Space direction={"vertical"}>
                        <span>მთავარი ფოტო</span>
                        <Upload
                            onPreview={handlePreview}
                            beforeUpload={(file) => beforeUpload(file, 'upload')}
                            listType="picture-card"
                            fileList={photoList}
                            maxCount={1}
                            onRemove={(file) => {
                                const index = photoList.indexOf(file);
                                const newFileList = photoList.slice();
                                newFileList.splice(index, 1);
                                setPhotoList(newFileList);
                            }}
                        >
                            <Button type="link" icon={<PlusOutlined/>}></Button>
                        </Upload>

                        <Modal open={previewOpen} title={previewTitle} footer={null}
                               onCancel={handleCancel}>
                            <img alt="main-img" style={{width: '100%'}} src={previewImage}/>
                        </Modal>
                    </Space>

                    <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                        <span>ფოტო გალერეა</span>
                        <Upload
                            beforeUpload={(file) => beforeUpload(file, 'uploads')}
                            multiple={true}
                            onRemove={(file) => {
                                const index = galleryList.indexOf(file);
                                const newFileList = galleryList.slice();
                                newFileList.splice(index, 1);
                                setGalleryList(newFileList);
                            }}
                            fileList={galleryList}
                            listType="picture-card"
                            onPreview={handlePreview}

                        >
                            <Button type="link" icon={<PlusOutlined/>}></Button>
                        </Upload>

                        <Modal open={previewOpen} title={previewTitle} footer={null}
                               onCancel={handleCancel}>
                            <div className="admin-upload-image">
                                <img alt="gallery-img" style={{width: '100%'}} src={previewImage}/>
                            </div>
                        </Modal>

                    </Space>
                    <Form.Item
                        label="მთავარი სიახლე"
                    >
                        <Radio.Group name="admin-news-radio" defaultValue={1}>
                            <Radio value={1}>1</Radio>
                            <Radio value={2}>2</Radio>
                            <Radio value={3}>3</Radio>
                            <Radio value={4}>არა</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item>
                        <Checkbox>გამოქვეყნება</Checkbox>
                    </Form.Item>

                    <h3>ქართული</h3>

                    <Form.Item
                        label="დასახელება"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'ველის შევსება სავალდებულოა.',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="მოკლე აღწერა"
                        name="short-description"
                        rules={[
                            {
                                required: true,
                                message: 'ველის შევსება სავალდებულოა.',
                            },
                        ]}
                    >
                        <TextArea rows={4}/>
                    </Form.Item>

                    <Form.Item
                        label="აღწერა"

                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'ველის შევსება სავალდებულოა.',
                            },
                        ]}
                    >
                        <TextArea/>
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