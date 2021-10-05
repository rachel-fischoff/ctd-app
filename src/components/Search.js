import React, { useContext } from "react";
import { PlantContext } from "../context/PlantContext";
import { Box, Text, Input } from "@chakra-ui/react";

export default function Search() {
  const { plantList } = useContext(PlantContext);
  return (
    <Box borderRadius="lg"  p="6" w="75%">
      <Input placeholder="Search for Available Plants"></Input>{" "}
    </Box>
  );
}
