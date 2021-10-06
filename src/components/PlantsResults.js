import React, { useContext, useState } from "react";
import { PlantContext } from "../context/PlantContext";
import {
  SimpleGrid,
  Box,
  Text,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function PlantsResults() {
  const { filteredPlants } = useContext(PlantContext);


//   const [value, setValue] = useState(defaultValue);

  /* In this component? 
    1) save button? that updates the database based on the list - 
    2) another component that checks for inventory updates and emails the department
  */
  const handleInventoryUpdate = () => {



  };

  return (
    <SimpleGrid minChildWidth="200px" gap={6}>
      {filteredPlants &&
        filteredPlants.map((plant) => (
          //change about to id. add ids to database.
          <Box w="100%" h="60" bg="gray.400" key={plant.about}>
            <Text>{plant.common_name}</Text>
            <Image
              boxSize="100px"
              objectFit="cover"
              src={plant.image_url}
              alt={plant.botanical_name}
            ></Image>
            <Text>Number in Stock </Text>
            {/* TODO: add inventory field to database and then value = plant.available_to_sell */}
            <NumberInput size="md" maxW={24} onChange={handleInventoryUpdate} >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        ))}
    </SimpleGrid>
  );
}
