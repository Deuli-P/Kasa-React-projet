import AxiosLogement from '../AxiosLogement/AxiosLogement'

const Articles = () => {

    const Data = AxiosLogement();

    return (
        <>
        {Data.map((element) => (
                 <article className="article-location" key= {element.id}>
                    <div className="box-shadow"></div>
                    <img src={element.cover} alt={element.title} />
                    <div className="article-location-text">
                        <h3>{element.title}</h3>
                    </div>
                </article> 
        ))}
        </>
    );
};

export default Articles;