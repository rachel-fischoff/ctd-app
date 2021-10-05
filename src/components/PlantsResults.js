import React, { useContext } from "react";
import { PlantContext } from "../context/PlantContext";
import { SimpleGrid, Box, Text, Image } from "@chakra-ui/react";

export default function PlantsResults() {
  const { filteredPlants } = useContext(PlantContext);

  return (
    <SimpleGrid minChildWidth="200px" gap={6}>
      {filteredPlants &&
        filteredPlants.map((plant) => (
          //change about to id. add ids to database.
          <Box w="100%" h="40" bg="blue.500" key={plant.about}>
            <Text>{plant.common_name}</Text>
            <Image
              boxSize="100px"
              objectFit="cover"
              src={plant.image_url}
              alt={plant.botanical_name}
            ></Image>
          </Box>
        ))}
    </SimpleGrid>
  );
}
