import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <BsChevronDown />
          Order By : Relevance
        </Button>
      </Menu.Trigger>
    </Menu.Root>
  );
};

export default SortSelector;
