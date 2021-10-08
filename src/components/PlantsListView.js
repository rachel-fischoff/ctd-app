import React, { useContext } from "react";
import { PlantContext } from "../context/PlantContext";
import PlantRow from "./PlantRow";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  useToken,
} from "@chakra-ui/react";

export default function PlantsListView() {
  const { filteredPlants } = useContext(PlantContext);

  const bg = useToken("colors", "gray.200");

  return (
    <Table variant="mytable" colorScheme="teal" size="sm">
      <TableCaption>Rachel's Plant Shop Inventory</TableCaption>
      <Thead>
        <Tr bg={bg + "!important"}>
          <Th>Name</Th>
          <Th isNumeric>In Stock</Th>
          <Th>Kid-Friendly</Th>
          <Th>Pet-Friendly</Th>
          <Th>Water</Th>
          <Th>Light</Th>
        </Tr>
      </Thead>
      <Tbody>
        {filteredPlants &&
          filteredPlants.map((plant) => <PlantRow plant={plant}  key={plant.id}/>)}
      </Tbody>
      <Tfoot>
        <Tr bg={bg + "!important"}>
          <Th>Name</Th>
          <Th isNumeric>In Stock</Th>
          <Th>Kid-Friendly</Th>
          <Th>Pet-Friendly</Th>
          <Th>Water</Th>
          <Th>Light</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}
