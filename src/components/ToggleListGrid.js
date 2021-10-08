import React, { useState } from "react";
import PlantsListView from "./PlantsListView";
import PlantsGridView from "./PlantsGridView";
import { Icon, IconButton, Box } from "@chakra-ui/react";
import { MdOutlineViewList, MdGridOn } from "react-icons/md";

export default function ToggleListGrid() {
  const [view, setView] = useState(true);

  return (
    <div>
      {view ? (
        <Box>
          <IconButton
            aria-label="View Grid"
            variant="outline"
            colorScheme="blue"
            icon={<Icon as={MdGridOn} />}
            m={2}
            onClick={() => setView(false)}
          />
          <PlantsListView />
        </Box>
      ) : (
        <Box>
          <IconButton
            aria-label="View List"
            variant="outline"
            colorScheme="blue"
            icon={<Icon as={MdOutlineViewList} />}
            m={2}
            onClick={() => setView(true)}
          />
          <PlantsGridView />
        </Box>
      )}
    </div>
  );
}
