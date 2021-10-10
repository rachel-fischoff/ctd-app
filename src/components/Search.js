import React, { useContext } from "react";
import { PlantContext } from "../context/PlantContext";
import { Box, Input } from "@chakra-ui/react";

export default function Search() {
  const { searchTerm, setSearchTerm } =
    useContext(PlantContext);

  const handleSearch = (event) => setSearchTerm(event.target.value);


  return (
    <Box borderRadius="lg" p="6" w="75%">
      <Input
        placeholder="Search for Available Plants"
        value={searchTerm}
        onChange={handleSearch}
      />
    </Box>
  );
}
