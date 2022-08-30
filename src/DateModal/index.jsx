import { createComponent } from "solid-js";
import { styled } from "solid-styled-components";
import { clickOutside, createRefComponents } from "../utils";

const Modal = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

const Contents = styled.div`
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
`;

const DateModal = ({ setView }) => {
  const ContentsComp = createRefComponents(Contents, clickOutside, () =>
    setView(false)
  );
  return (
    <>
      <Modal>
        <ContentsComp />
      </Modal>
    </>
  );
};

export default DateModal;
