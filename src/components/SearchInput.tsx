import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<BsSearch />}>
      <Input placeholder="Search Games..." borderRadius={20} />
    </InputGroup>
  );
};

export default SearchInput;
