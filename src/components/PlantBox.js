import React, { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import sendEmail from "./SendEmail";
import { updateDoc, doc } from "firebase/firestore";
import {
  Box,
  Text,
  Image,
  Button,
  Center,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function PlantBox({ plant }) {
  const [currentValue, setCurrentValue] = useState();

  const emailAdmin = (plant) => {
    const message = `We are out of ${plant.common_name}`;
    sendEmail(message);
  };

  useEffect(() => {
    if ((parseInt(currentValue)) === 0) {
      emailAdmin(plant);
    }
  }, [currentValue, plant]);

  const handleInventoryUpdate = (currentValue) => {
    setCurrentValue(currentValue);
  };

  const updateDatabase = async (event) => {
    const plantRef = doc(db, "Plants-List", event.target.id);
    await updateDoc(plantRef, { inventory: currentValue });
  };

  return (
    <Box maxW="lg" w="85%" h="60" bg="gray.200" key={plant.id} m={4} p={2}>
      <Text as="em">{plant.common_name}</Text>
      <Image
        boxSize="100px"
        objectFit="cover"
        src={plant.image_url}
        fallbackSrc="https://via.placeholder.com/100/FFFFFF/000000?text=Image%20Not%20Available"
        alt={plant.botanical_name}
        m={2}
      ></Image>
      <Text>Number in Stock </Text>
      <Center>
        <NumberInput
          defaultValue={plant.inventory}
          min={0}
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
          colorScheme="blue"
          size="sm"
          onClick={updateDatabase}
          id={plant.id}
        >
          Save {currentValue}
        </Button>
      </Center>
    </Box>
  );
}
