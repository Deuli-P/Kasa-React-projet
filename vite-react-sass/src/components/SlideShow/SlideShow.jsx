import { useEffect, useState } from "react";

const SlideShow = (props) => {

        const [data, SetData] = useState([]);

        useEffect(() => {
                
        })

    return (
        <div id="slide-show">
            <svg className="collapse-slide-chevron" id="arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" fill="white"/>
            </svg>
            <svg className="collapse-slide-chevron" id="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" fill="white"/>
            </svg>
        <img src={props.src} alt={props.title}/>
        </div>
    );
};

export default SlideShow;