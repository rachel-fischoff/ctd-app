import React, { useContext } from "react";
import { PlantContext } from "../context/PlantContext";
import PlantBox from "./PlantBox";
import { SimpleGrid, Text } from "@chakra-ui/react";

export default function PlantsGridView() {
  const { filteredPlants } = useContext(PlantContext);
  return (
    <SimpleGrid minChildWidth="200px" gap={6}>
      {filteredPlants.length > 0 ? 
        filteredPlants.map((plant) => (
          <PlantBox plant={plant}/>
        )): null}
        {/* TODO: make bold */}
        <Text fontSize="xs" mt={5} padding={1} >Rachel's Plant Shop Inventory</Text>
    </SimpleGrid>
  );
}
