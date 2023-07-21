import axios from "axios";
import { useEffect, useState } from "react";

const AxiosLogement = () => {
  const [collaps, setCollaps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get("../src/assets/images/image.json");
        setCollaps(response.data);
      } 
      catch (error) {
        console.error("Erreur de data logement:", error);
      }
    };

    fetchData();
  }, []);

  // Vous pouvez également retourner les données récupérées ici
  return collaps;
};

export default AxiosLogement;

