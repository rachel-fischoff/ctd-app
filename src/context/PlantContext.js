import React, { createContext, useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export const PlantContext = createContext();

const PlantContextProvider = (props) => {
  const [plantList, setPlantList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);

  const getPlantData = async () => {
    let tempItems = [];
    const querySnapshot = await getDocs(collection(db, "Plants-List"));
    querySnapshot.forEach((doc) => {
      tempItems.push({ ...doc.data() });
    });
    setPlantList(tempItems);
  };

  useEffect(() => {
    getPlantData();
  }, []);

  //when searchTerm is entered, the filtered plants are set to state
  //TODO: including error handling that can be displayed
  useEffect(() => {
    if (searchTerm) {
      let filtered = plantList.filter((plant) => {
        return plant.common_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setFilteredPlants(filtered);
    } else {
      setFilteredPlants([]);
    }
  }, [searchTerm, plantList]);

  return (
    <PlantContext.Provider
      value={{ plantList, setSearchTerm, searchTerm, filteredPlants }}
    >
      {props.children}
    </PlantContext.Provider>
  );
};
export default PlantContextProvider;
