import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import sendEmail from "./SendEmail";
import { updateDoc, doc } from "firebase/firestore";
import { Tr, Td, Input, Button, Center, Text, Box } from "@chakra-ui/react";

export default function PlantRow({ plant }) {
  const [currentValue, setCurrentValue] = useState(plant.inventory);
  const [hideEditButton, setHideEditButton] = useState(false);

  const handleHideEditButton = () => {
    //change state to true or false and then have it show in a conditional with a boolean
    setHideEditButton(true);
  };

  //should move this repeated code somewhere both list & grid can access it -- probably in context
  //do i don't have to repeat all 3 of the functions 
  const updateDatabase = async (event) => {
    const plantRef = doc(db, "Plants-List", event.target.id);
    await updateDoc(plantRef, { inventory: currentValue });
  };


//could make input to put for whoever is working
const name = "rachelsplantstore@gmail.com";
const email = "rachelsplantstore@gmail.com";

  const emailAdmin = (plant) => {
    const message = `We are out of ${plant.common_name}`;
    sendEmail(message, name, email);
  };

  useEffect(() => {
    if (currentValue === 0) {
      emailAdmin(plant);
    }
  }, [currentValue, plant]);

  //TODO: maybe put inline?
  const handleInventoryUpdate = (event) => {
    setCurrentValue(event.target.value);
  };

  return (
    <Tr key={plant.id}>
      <Td>{plant.common_name}</Td>
      <Td>
        {!hideEditButton ? (
          //TODO: align the box center
          <Box display="flex" alignItems="center" flexDirection="column">
            <Text m={1}>{plant.inventory}</Text>
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
            {/* TODO: FIX INPUT COLOR */}
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
