//import Articles from "../components/Articles";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Articles from "../../components/Articles/Articles";
const Home = () => {
    return (
        <>
            <Header />
            <main id="main-home">
            <div className="main-containers" id="main-banner">
                <Banner />
            </div>
            <div className="main-containers" id="main-article-box">
                <Articles />
                <Articles />
                <Articles />
                <Articles />
                <Articles />
                <Articles />
                 {/* <Articles key="1" images="" title="Titre de la location"/> */}
            </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;