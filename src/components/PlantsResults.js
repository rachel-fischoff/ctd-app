import React, { useContext } from "react";
import { PlantContext } from "../context/PlantContext";
import PlantBox from "./PlantBox";
import { SimpleGrid } from "@chakra-ui/react";

export default function PlantsResults() {
  const { filteredPlants } = useContext(PlantContext);

  //TODO: change filtered list so that it will reset
  // and then not change all the plants numbers together but individually
  return (
    <SimpleGrid minChildWidth="200px" gap={6}>
      {filteredPlants &&
        filteredPlants.map((plant) => (
          <PlantBox plant={plant}/>
        ))}
    </SimpleGrid>
  );
}
