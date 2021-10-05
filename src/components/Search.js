import React, { useContext, useState, useEffect } from "react";
import { PlantContext } from "../context/PlantContext";
import { Box, Input } from "@chakra-ui/react";

export default function Search() {
  const { plantList } = useContext(PlantContext);

  //Should it be an empty string? should it be in the search section or the context?
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);

  const handleSearch = (event) => setSearchTerm(event.target.value);
  
  useEffect(() => {
      let filtered = plantList.filter((plant)=>{
          return plant.common_name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      setFilteredPlants(filtered);
    //   return () => {
    //       cleanup
    //   }
  }, [searchTerm])

  return (
    <Box borderRadius="lg" p="6" w="75%">
      <Input
        placeholder="Search for Available Plants"
        value={searchTerm}
        onChange={handleSearch}
      />
    </Box>
  );
}
