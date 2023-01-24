import {Outlet} from "react-router-dom";
import AdminHeader from "../../admin/header";


function Index() {
    return (
        <>
            <AdminHeader/>
            <Outlet/>
        </>
    );
}

export default Index;