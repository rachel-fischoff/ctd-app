import React from "react";
import { MdOutlineViewList, MdGridOn } from "react-icons/md";
import { Center, Icon, IconButton } from "@chakra-ui/react";

export default function ToggleTableGrid() {
//   const handleToggle = () => {};

  //TODO: change button styling 
  return (
    <div>
      <Center>
        <IconButton
          aria-label="View List"
          icon={<Icon as={MdOutlineViewList} />}
        />
        <IconButton aria-label="View Grid" icon={<Icon as={MdGridOn} />} />
      </Center>
    </div>
  );
}
