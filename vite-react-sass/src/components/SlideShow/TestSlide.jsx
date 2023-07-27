import { useEffect } from "react";

//Import le AxiosLogement() et selectionner le tableau image.json.currentElement.pictures
// Creer des fleches qui ajoute ou supprime 1 au CurrentImgSelect
// Creer Pagination avec CurrentImgSelect / Nombre d'img dans le tableau image.json.currentElement.pictures
// Creer une img par chaque element du tableau image.json.currentElement.pictures
// Quand on clique sur une des flêches ça change d'image


const TestSlide = ({pictures}, index) => {

    const MaxImages = pictures.length
    let currentLogement = 0 ;
    console.log(pictures[currentLogement]);


  const HandleClickPrevious = ()=> {
    if(currentLogement === 0) {
        currentLogement = MaxImages - 1
    }
    else{
    currentLogement--
    }
    console.log(currentLogement);
    console.log(pictures[currentLogement]);
    return currentLogement
  }
  const HandleClickNext = ()=> {
    if(currentLogement === MaxImages - 1) {
        currentLogement = 0
    }
    else{
    currentLogement++
    }
    console.log(currentLogement);
    console.log(pictures[currentLogement]);
    return currentLogement
  }


  return (
    <> 
        <div id="slide-show">
            <div className="slide-chevron-container">
                <i className="fa-solid fa-chevron-left slide-chevron" id="arrow-left" onClick={HandleClickPrevious}></i>
                <i className="fa-solid fa-chevron-right slide-chevron" id="arrow-right" onClick={HandleClickNext}></i>
            </div>
            <div className="slide-pagination-container">
                <p><span>{currentLogement+1}</span>/<span>{MaxImages}</span></p>
            </div>
            <img className="slide-image" id="slide-current" src="../src/assets/images/About.png" alt="Test image"/>
        </div>
    </>
  )

}
export default TestSlide;
