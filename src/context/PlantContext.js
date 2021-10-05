import React, { createContext, useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { ref, onValue } from "firebase/database";

export const PlantContext = createContext();

const PlantContextProvider = (props) => {
  const [plantList, setPlantList] = useState([]);


  useEffect(() => {
    getPlantData();
  }, []);

  const getPlantData = () => {
    const plantNameRef = ref(db, "Plants-List");
    onValue(plantNameRef, (snapshot) => {
      const data = snapshot.val();
      setPlantList(data);
    });
  };

  return (
    <PlantContext.Provider value={{ plantList }}>
      {props.children}
    </PlantContext.Provider>
  );
};
export default PlantContextProvider;
