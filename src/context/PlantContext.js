import React, { createContext, useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { ref, onValue } from "firebase/database";

export const PlantContext = createContext();

const PlantContextProvider = (props) => {
  const getPlantData = () => {
    const plantNameRef = ref(db, "Plants-List");
    onValue(plantNameRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  };
  getPlantData();
  return (
    <PlantContext.Provider value={{ getPlantData }}>
      {props.children}
    </PlantContext.Provider>
  );
};
export default PlantContextProvider;
