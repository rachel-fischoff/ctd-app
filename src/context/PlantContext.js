import React, { createContext, useEffect, useState } from "react";
import { db } from "../lib/firebase";
import {
  collection,
  addDoc,
  getDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export const PlantContext = createContext();

const PlantContextProvider = (props) => {
  const [plantList, setPlantList] = useState([]);

  //Should it be an empty string? should it be in the search section or the context?
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

  // const addDefaultInventory = () => {

  // };

  // addDefaultInventory();

  //sets plant list to state during first render
  useEffect(() => {
    getPlantData();
  }, []);

  //when searchTerm is entered, the filtered plants are set to state
  useEffect(() => {
    if (plantList) {
      let filtered = plantList.filter((plant) => {
        return plant.common_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setFilteredPlants(filtered);
    }
  }, [searchTerm]);

  return (
    <PlantContext.Provider
      value={{ plantList, setSearchTerm, searchTerm, filteredPlants }}
    >
      {props.children}
    </PlantContext.Provider>
  );
};
export default PlantContextProvider;
