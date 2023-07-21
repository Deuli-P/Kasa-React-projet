
import Collapsible from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AxiosAboutCollapse from "../../components/AxiosAboutCollapse/AxiosAboutCollapse";

const About = () => {
  // Utilisez useState pour stocker les données obtenues de ImportByAxios

    const Data = AxiosAboutCollapse();


  // Utiliser les données récupérées dans votre composant
  return (
    <>
      <Header />
      <main id="main-about">
        <div className="main-containers" id="main-about-banner">
          <div className="blendMode"></div>
        </div>
        <div className="main-containers" id="main-about-collapse">
          {Data.map((collaps, index) => (
            <Collapsible label={collaps.title} content={collaps.text} key={index} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
