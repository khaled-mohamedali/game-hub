import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

export interface SearchProps {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: SearchProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup flex="1" startElement={<BsSearch />}>
        <Input ref={ref} placeholder="Search Games..." borderRadius={20} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
