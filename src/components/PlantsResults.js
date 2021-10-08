import React, { useContext, useState, useEffect } from "react";
import { PlantContext } from "../context/PlantContext";
import { db } from "../lib/firebase";
import {
  updateDoc,
  doc,
} from "firebase/firestore";
import {
  SimpleGrid,
  Box,
  Text,
  Image,
  Button,
  Center,
  Link,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function PlantsResults() {
  const [currentValue, setCurrentValue] = useState();

  const { filteredPlants } = useContext(PlantContext);

  /* TODO: 
    1) another component that checks for inventory updates and emails the department
  */

  const emailAdmin = () => {};

  // useEffect(() => {
  //   if ((currentValue = 0)) {
  //     emailAdmin();
  //   }
  // }, [currentValue]);

  const handleInventoryUpdate = (currentValue) => {
    setCurrentValue(currentValue);
  };

  const updateDatabase = async (event) => {
    const plantRef = doc(db, "Plants-List", event.target.id);
    await updateDoc(plantRef, { inventory: currentValue });
  };


  //TODO: change filtered list so that it will reset 
  // and then not change all the plants numbers together but individually
  return (
    <SimpleGrid minChildWidth="200px" gap={6}>
      {filteredPlants &&
        filteredPlants.map((plant) => (
          <Box
            maxW="lg"
            w="85%"
            h="60"
            bg="gray.400"
            key={plant.id}
            m={4}
            p={2}
          >
            <Text as="em">{plant.common_name}</Text>
            <Image
              boxSize="100px"
              objectFit="cover"
              src={plant.image_url}
              fallbackSrc="https://via.placeholder.com/100"
              alt={plant.botanical_name}
              m={2}
            ></Image>
            <Text>Number in Stock </Text>
            <Center>
              <NumberInput
                defaultValue={plant.inventory}
                value={currentValue}
                size="md"
                maxW={24}
                onChange={handleInventoryUpdate}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button
                ml={2}
                colorScheme="teal"
                size="sm"
                onClick={updateDatabase}
                id={plant.id}
              >
                Save {currentValue}
              </Button>
            </Center>
            <Link color="teal.800" size="sm">
              Details
            </Link>
          </Box>
        ))}
    </SimpleGrid>
  );
}
