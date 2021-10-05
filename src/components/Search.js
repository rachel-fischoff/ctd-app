import React, { useContext, useState } from "react";
import { PlantContext } from "../context/PlantContext";
import { Box, Text, Input } from "@chakra-ui/react";

export default function Search() {
  const { plantList } = useContext(PlantContext);

  //Should it be an empty string? should it be in the search section or the context?
  const [searchTerm, setSearchTerm] = useState("");
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
