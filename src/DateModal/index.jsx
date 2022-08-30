import { createComponent } from "solid-js";
import { styled } from "solid-styled-components";
import clickOutside from "../utils";

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
  // 해당 코드는 어떻게 동작하는지 잘 모르겠다.
  // use:something 이 기능을 대신하지만 내부적으로 컴파일을 했을 때 나오는 결과가 다르다.
  // solid-styled-components라이브러리에서 해당 기능을
  // 지원하지 않는다. 그래서 대체제로 아래 코드를 사용한다.
  // https://github.com/solidjs/solid-styled-components/issues/4
  createComponent(Contents, {
    ref(el) {
      clickOutside(el, () => setView(false));
    },
  });
  return (
    <>
      <Modal>
        <Contents />
      </Modal>
    </>
  );
};

export default DateModal;
