import { batch } from "solid-js";
import { styled } from "solid-styled-components";
import { clickOutside } from "../utils"; // 사용 중인 코드
// import ModalContainer from "./ModalContainer";

const Modal = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  & > div {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 600px;
    background-color: ${(props) => props.theme().backgroundColor};
    border-radius: 10px;
    transform: translateX(-50%) translateY(-50%);
  }
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  color: black;
`;

const StyledButton = styled.i`
  padding: 10px;
  cursor: pointer;
`;

const StyledDate = styled.div``;

// const StyledContainer = styled.div``;

const DateModal = ({ setView, date, setDate }) => {
  const onLeftClick = (e) => {
    batch(() => {
      if (date.month <= 1) {
        setDate("month", () => 12);
        setDate("year", (d) => d - 1);
      } else {
        setDate("month", (d) => d - 1);
        setDate("day", (d) => 1);
      }
    });
  };
  const onRightClick = (e) => {
    batch(() => {
      if (date.month >= 12) {
        setDate("month", () => 1);
        setDate("year", (d) => d + 1);
      } else {
        setDate("month", (d) => d + 1);
        setDate("day", (d) => 1);
      }
    });
  };
  return (
    <>
      <Modal>
        <div
          use:clickOutside={() => {
            setView(false);
          }}
        >
          <StyledHeader>
            <StyledButton
              class="fa-solid fa-angle-left"
              onClick={onLeftClick}
            ></StyledButton>
            <StyledDate>{date["getFullDate"]}</StyledDate>
            <StyledButton
              class="fa-solid fa-angle-right"
              onClick={onRightClick}
            ></StyledButton>
          </StyledHeader>
          {/* <ModalContainer date={date} /> */}
        </div>
      </Modal>
    </>
  );
};

export default DateModal;
