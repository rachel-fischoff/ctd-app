import React, { createContext, useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

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

  /** used the following to add default inventory and doc id to plant doc **/
  // const addDefaultInventory = async () => {
  //   const querySnapshot = await getDocs(collection(db, "Plants-List"));
  //   querySnapshot.forEach(async (document) => {
  //     const docRef = doc(db, 'Plants-List', document.id)
  //     await updateDoc(docRef, {id: document.id})
  //   });
  // };

  //sets plant list to state during first render & TODO: should update when inventory is changed
  useEffect(() => {
    getPlantData();
  }, []);

  //when searchTerm is entered, the filtered plants are set to state
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
