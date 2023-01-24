import TabPane from "antd/es/tabs/TabPane";
import NewsManagement from "./news-management";
import {Button, Tabs} from "antd";
import {Link} from "react-router-dom";


function Index() {

    return (
        <div className="admin-news">
            <div className="admin-news-container">
                <Tabs defaultActiveKey="news-main" type="card">

                    <TabPane tab="სიახლეების მართვა" key="news-management">
                        <div className="admin-add-button">
                            <Link to="/admin/news/add-news"><Button type="primary">დამატება</Button></Link>
                        </div>
                        <NewsManagement/>
                    </TabPane>

                </Tabs>

            </div>
        </div>
    );
}

export default Index;