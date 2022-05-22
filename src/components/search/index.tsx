import { useState } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlass } from "phosphor-react";

const Index = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: any) => {
    e.preventDefault();
    navigate(`/search/${value}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <InputGroup bg="light.dark">
        <InputLeftElement
          pointerEvents="none"
          children={<MagnifyingGlass size={20} weight="bold" />}
        />
        <Input
          type="text"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          placeholder="Search..."
          isRequired
        />
      </InputGroup>
    </form>
  );
};

export default Index;
