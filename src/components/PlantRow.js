import React, { useState } from "react";
import { db } from "../firebase";
import sendEmail from "./SendEmail";
import { updateDoc, doc } from "firebase/firestore";
import { Tr, Td, Input, Button } from "@chakra-ui/react";

export default function PlantRow({ plant }) {
  const [currentValue, setCurrentValue] = useState();

  const updateDatabase = async (event) => {
    const plantRef = doc(db, "Plants-List", event.target.id);
    await updateDoc(plantRef, { inventory: currentValue });
  };

  const emailAdmin = (plant) => {
    const message = `We are out of ${plant.common_name}`;
    sendEmail(message);
  };

  const handleInventoryUpdate = (currentValue) => {
    setCurrentValue(currentValue);
  };

  return (
    <Tr>
      <Td>{plant.common_name}</Td>
      <Td isNumeric>{plant.inventory}
      <Input size="sm" ></Input>
      <Button>Edit</Button>
      </Td>
      <Td>{plant.kid_friendly}</Td>
      <Td>{plant.pet_friendly}</Td>
      <Td>{plant.water}</Td>
      <Td>{plant.light}</Td>
    </Tr>
  );
}
