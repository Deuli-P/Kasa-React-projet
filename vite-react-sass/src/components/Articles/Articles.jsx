import { useEffect, useState } from "react";
import axios from "axios";


const Articles = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState([]);

    useEffect(()=> {
        axios
            .get('../src/assets/images/image.json')
            .then((res)=> setData(res.data));
    },[])

    return (
        <>
        {data.map((element) => (
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