import { styled } from "solid-styled-components";
import { useTheme } from "./ThemeProvider";

const Switch = styled.label`
  position: relative;
  display: flex;

  width: 50px;
  height: 26px;
`;

const NoneInput = styled.input`
  display: none;
  &:checked + span:before {
    left: 26px;
    background-color: #3368ff;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: gray;
  border-radius: 14px;
  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: white;
    left: 4px;
    top: 3px;
    border-radius: 100%;
    transition: 200ms ease-in-out;
  }
`;
const ThemeButton = () => {
  const [theme, { toggleTheme }] = useTheme();
  return (
    <Switch>
      <NoneInput type="checkbox" onClick={toggleTheme} />
      <Slider />
    </Switch>
  );
};

export default ThemeButton;
