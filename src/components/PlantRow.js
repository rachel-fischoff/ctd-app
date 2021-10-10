import React, { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import sendEmail from "./SendEmail";
import { updateDoc, doc } from "firebase/firestore";
import {
  Tr,
  Td,
  Input,
  Button,
  Center,
  Text,
  Box,
  useToast,
} from "@chakra-ui/react";

export default function PlantRow({ plant }) {
  const [currentValue, setCurrentValue] = useState(plant.inventory);
  const [hideEditButton, setHideEditButton] = useState(false);

  const toast = useToast();

  const handleHideEditButton = () => {
    setHideEditButton(true);
  };

  const updateDatabase = async (event) => {
    const plantRef = doc(db, "Plants-List", event.target.id);
    await updateDoc(plantRef, { inventory: currentValue }).then( toast({
      title: `Updated Inventory for ${event.target.name}`,
      status: "success",
      duration: 9000,
      isClosable: true,
    }));
    setHideEditButton(false);
  };

  const emailAdmin = (plant) => {
    const message = `We are out of ${plant.common_name}`;
    //TODO: could make input to put for whoever is working have to change the user object and make a prop
    const name = "rachelsplantstore@gmail.com";
    const email = "rachelsplantstore@gmail.com";
    sendEmail(message, name, email);
  };

  useEffect(() => {
    if (parseInt(currentValue) === 0) {
      emailAdmin(plant);
    }
  }, [currentValue, plant]);

  const handleInventoryUpdate = (event) => {
    setCurrentValue(event.target.value);
  };

  return (
    <Tr>
      <Td>{plant.common_name}</Td>
      <Td>
        {!hideEditButton ? (
          <Box display="flex" alignItems="center" flexDirection="column">
            <Text m={1}>{currentValue}</Text>
            <Button
              ml={2}
              variant="outline"
              colorScheme="blue"
              size="sm"
              onClick={handleHideEditButton}
            >
              Edit
            </Button>
          </Box>
        ) : (
          <Center>
            {/* TODO: FIX INPUT bg COLOR */}
            <Input
              min={0}
              variant="outline"
              value={currentValue}
              size="sm"
              onChange={handleInventoryUpdate}
            />
            <Button
              ml={2}
              colorScheme="blue"
              size="sm"
              onClick={updateDatabase}
              id={plant.id}
              name={plant.common_name}
            >
              Save
            </Button>
          </Center>
        )}
      </Td>
      <Td>{plant.kid_friendly}</Td>
      <Td>{plant.pet_friendly}</Td>
      <Td>{plant.water}</Td>
      <Td>{plant.light}</Td>
    </Tr>
  );
}
