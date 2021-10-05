import React, { createContext, useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { ref, onValue } from "firebase/database";

export const PlantContext = createContext();

const PlantContextProvider = (props) => {
  const [plantList, setPlantList] = useState([]);

    //Should it be an empty string? should it be in the search section or the context?
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPlants, setFilteredPlants] = useState([]);



  //sets plant list to state during first render
  useEffect(() => {
    getPlantData();
  }, []);


  //when searchTerm is entered sets the filtered plants
  useEffect(() => {
    let filtered = plantList.filter((plant)=>{
        return plant.common_name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    setFilteredPlants(filtered);
}, [searchTerm])


  const getPlantData = () => {
    const plantNameRef = ref(db, "Plants-List");
    onValue(plantNameRef, (snapshot) => {
      const data = snapshot.val();
      setPlantList(data);
    });
  };

  return (
    <PlantContext.Provider value={{ plantList, setSearchTerm, searchTerm, filteredPlants }}>
      {props.children}
    </PlantContext.Provider>
  );
};
export default PlantContextProvider;
