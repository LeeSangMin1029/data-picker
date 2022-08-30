import { createSignal, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { styled } from "solid-styled-components";
import { getCurrentDate } from "./date";
import DateModal from "../DateModal";

const StyledDiv = styled.div`
  align-self: center;
  border: 1px solid #ff9090;
  box-shadow: 2px 2px 5px #969eb1;
  user-select: none;
  padding: 10px;
  cursor: pointer;
`;

const [view, setView] = createSignal(false);
const onClickEvent = () => {
  setView(true);
};

const DataPicker = () => {
  return (
    <>
      <StyledDiv onClick={[onClickEvent]}>{getCurrentDate()}</StyledDiv>
      <Show when={view()} fallback={<></>}>
        <Portal>
          <DateModal setView={setView} />
        </Portal>
      </Show>
    </>
  );
};

export default DataPicker;
