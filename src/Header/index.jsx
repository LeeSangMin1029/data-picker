import { styled } from "solid-styled-components";
import ThemeButton from "../ThemeButton";
import DataPicker from "../DataPicker";

const StyledHeader = styled.div`
  display: flex;
`;

function Header() {
  return (
    <StyledHeader>
      <ThemeButton />
      <DataPicker />
    </StyledHeader>
  );
}

export default Header;
