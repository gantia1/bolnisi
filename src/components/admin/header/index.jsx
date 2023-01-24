import {ReactComponent as Toggle} from "../../../assets/images/svg/toggle.svg";
import {Button, Drawer, Menu, Space} from "antd";
import {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";

function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const onClose = () => {
        setIsOpen(false);
    };


    return (
        <>
            <div className="admin-header">
                <div className="admin-header-list">
                    <div className="header-button">
                        <Button type="text" onClick={() => setIsOpen(true)}><Toggle/></Button>
                    </div>
                </div>
                <Drawer
                    placement="left"
                    width={300}
                    onClose={onClose}
                    open={isOpen}
                    extra={
                        <Space>

                        </Space>
                    }
                >
                    <Menu theme="light" mode="inline">
                        <Menu.Item
                            className={location.pathname === "/admin/news" ? 'ant-menu-item-selected' : 'ant-menu-item'}
                            as="li"
                            onClick={onClose}>
                            <span>სიახლეები</span>
                            <NavLink to="/admin/news"/>
                        </Menu.Item>
                        <Menu.Item
                            className={location.pathname === "/admin/contact" ? 'ant-menu-item-selected' : 'ant-menu-item'}
                            as="li"
                            onClick={onClose}>
                            <span>კონტაქტი</span>
                            <NavLink to="/admin/contact"/>
                        </Menu.Item>
                    </Menu>
                </Drawer>
            </div>

        </>
    );
}

export default Index;