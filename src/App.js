import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
import Municipality from "./components/pages/municipality";
import TermsConditions from "./components/pages/terms-conditions";
import i18n from "../src/components/i18n/i18n";

function App() {
    const baseUrl = () => {
        return (i18n.language === "ka" ? "" : "/" + i18n.language);
    }

    return (
        <Router basename={baseUrl()}>
            < Routes>
                < Route
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
                        path={"/municipality"}
                        element={<Municipality/>}
                    />
                    <Route
                        path={"/terms-conditions"}
                        element={<TermsConditions/>}
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
        </Router>
    );
}

export default App;
