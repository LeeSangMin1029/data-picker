import { createSignal, Show, createMemo } from "solid-js";
import { createStore } from "solid-js/store";
import { Portal } from "solid-js/web";
import { styled } from "solid-styled-components";
import DateModal from "./DateModal";
import { getCurrentDate, addZ } from "../utils";

const StyledDiv = styled.div`
  align-self: center;
  border: 1px solid #ff9090;
  box-shadow: 2px 2px 5px #969eb1;
  user-select: none;
  padding: 10px;
  cursor: pointer;
  color: ${(props) => props.theme().fontColor};
`;

const DataPicker = () => {
  let getFullDate;
  const generateDate = () => {
    let [year, month, day] = [...getCurrentDate()];
    return {
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(day),
      get getFullDate() {
        return getFullDate();
      },
    };
  };
  const [view, setView] = createSignal(false);
  const [date, setDate] = createStore(generateDate());
  const currentDate = () => date;
  getFullDate = createMemo(
    () => `${date.year}/${addZ(date.month)}/${addZ(date.day)}`
  );

  console.log(date);
  return (
    <>
      <StyledDiv onClick={() => setView(true)}>{date["getFullDate"]}</StyledDiv>
      <Show when={view()} fallback={<></>}>
        <Portal>
          <DateModal setView={setView} date={date} setDate={setDate} />
        </Portal>
      </Show>
    </>
  );
};

export default DataPicker;
