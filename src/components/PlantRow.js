import React from "react";
import { Tr, Td } from "@chakra-ui/react";

export default function PlantRow({ plant }) {
  return (
    <Tr>
      <Td>{plant.common_name}</Td>
      <Td isNumeric>{plant.inventory}</Td>
      <Td>{plant.kid_friendly}</Td>
      <Td>{plant.pet_friendly}</Td>
      <Td>{plant.water}</Td>
      <Td>{plant.light}</Td>
    </Tr>
  );
}
