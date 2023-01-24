import {Button, Image, Popconfirm, Table} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import test from "../../../../assets/images/png/test.png";

const columns = [
    {
        title: 'ფოტო',
        dataIndex: 'image',
        render: () => {
            return (
                <>
                    <Image.PreviewGroup>
                        <Image width={100} src={test}/>
                    </Image.PreviewGroup>
                </>
            );
        }
    },
    {
        title: 'თარიღი',
        dataIndex: 'date',
    },
    {
        title: "სახელწოდება",
        dataIndex: "name"
    },
    {
        title: "კატეგორია",
        dataIndex: "category"
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
        image: 'test',
        date: "2022.12.14",
        name: 'test',
        category: 'test'
    },
    {
        key: '2',
        image: 'test',
        date: "2022.12.14",
        name: 'test',
        category: 'test'
    },
];

function Index() {
    return (
        <>
            <Table columns={columns} dataSource={data} size="middle"
                   pagination={{defaultPageSize: 10}}
            />
        </>
    );
}

export default Index;