import BannerHome from "../../components/BannerHome/BannerHome";
import Articles from "../../components/Articles/Articles";

const Home = () => {
    return (
        <>
            <main id="main-home">
            <div className="main-containers" id="main-home-banner">
                <BannerHome />
            </div>
            <div className="main-containers" id="main-article-box">
                <Articles />
            </div>
            </main>
        </>
    );
};

export default Home;