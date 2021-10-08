import React, { useContext } from "react";
import { PlantContext } from "../context/PlantContext";
import PlantBox from "./PlantBox";
import { SimpleGrid } from "@chakra-ui/react";

export default function PlantsGridView() {
  const { filteredPlants } = useContext(PlantContext);
  return (
    <SimpleGrid minChildWidth="200px" gap={6}>
      {filteredPlants &&
        filteredPlants.map((plant) => (
          <PlantBox plant={plant}/>
        ))}
    </SimpleGrid>
  );
}
