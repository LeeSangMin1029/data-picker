import { styled } from "solid-styled-components";
import { getCurrentDate } from "./date";

const StyledDiv = styled.div`
  align-self: center;
  border: 1px solid #ff9090;
  box-shadow: 2px 2px 5px #969eb1;
  padding: 10px;
  user-select: none;
  cursor: pointer;
`;

const DataPicker = () => {
  return <StyledDiv>{getCurrentDate()}</StyledDiv>;
};

export default DataPicker;
