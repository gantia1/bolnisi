import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminNews from "./components/admin/news";
import AdminContact from "./components/admin/contact";
import AddContact from "./components/admin/contact/add";
import AdminLayout from "./components/layout/admin-layout";
import Layout from "./components/layout";
import AddNews from "./components/admin/news/add";
import HomeNews from "./components/home-news";
import Contact from "./components/pages/contact";
import News from "./components/pages/news";
import AboutUs from "./components/pages/about-us";
import OnlineStore from "./components/pages/online-store";
import NewsDetail from "./components/pages/news-detail";
import Store from "./components/pages/store";
import Product from "./components/pages/product";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Layout/>}
                >
                    <Route
                        path="/"
                        element={<HomeNews/>}
                    />
                    <Route
                        path="/contact"
                        element={<Contact/>}
                    />
                    <Route
                        path="/news"
                        element={<News/>}
                    />
                    <Route
                        path="/about-us"
                        element={<AboutUs/>}
                    />
                    <Route
                        path="/store"
                        element={<Store/>}
                    />
                    <Route
                        path="/online-store"
                        element={<OnlineStore/>}
                    />
                    <Route
                        path="/news/:id"
                        element={<NewsDetail/>}
                    />
                    <Route
                        path="/product/:id"
                        element={<Product/>}
                    />
                </Route>


                <Route
                    path='/admin'
                    element={<AdminLayout/>}
                >
                    <Route
                        path='/admin/news'
                        element={<AdminNews/>}
                    />
                    <Route
                        path='/admin/news/add-news'
                        element={<AddNews/>}
                    />
                    <Route
                        path='/admin/contact'
                        element={<AdminContact/>}
                    />

                    <Route
                        path='/admin/contact/add-contact'
                        element={<AddContact/>}
                    />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
