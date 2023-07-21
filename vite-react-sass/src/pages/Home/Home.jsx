
import BannerHome from "../../components/BannerHome/BannerHome";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Articles from "../../components/Articles/Articles";

const Home = () => {
    return (
        <>
            <Header />
            <main id="main-home">
            <div className="main-containers" id="main-home-banner">
                <BannerHome />
            </div>
            <div className="main-containers" id="main-article-box">
                <Articles />
            </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;