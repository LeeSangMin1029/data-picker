import { onCleanup, createComponent } from "solid-js";

const clickOutside = (el, accessor) => {
  const onClick = (e) => {
    !el.contains(e.target) && accessor();
  };
  document.body.addEventListener("click", onClick);
  onCleanup(() => document.body.removeEventListener("click", onClick));
};

// use:something 이 기능을 대신하지만 내부적으로 컴파일을 했을 때 나오는 결과가 다르다.
// solid-styled-components라이브러리에서 해당 기능을
// 지원하지 않는다. 그래서 대체제로 아래 코드를 사용한다.
// https://github.com/solidjs/solid-styled-components/issues/4
const createRefComponents = (comp, fn, accessor) =>
  createComponent(comp, {
    ref(el) {
      fn(el, accessor);
    },
  });

const getCurrentDate = () => {
  const currentDate = new Date();
  return currentDate.toISOString().split("T")[0];
};

const setNextMonth = (date) => {
  const nextMonth = date.getMonth() + 1;
  const year = date.getFullYear();
  if (nextMonth >= 12) {
    date.setFullYear(year + 1, 0, 1);
  }
  date.setFullYear(year, nextMonth, 1);
};

const setPrevMonth = (date) => {
  const prevMonth = date.getMonth() - 1;
  const year = date.getFullYear();

  if (prevMonth <= -1) {
    date.setFullYear(year - 1, 11, 1);
  }
  date.setFullYear(year, prevMonth, 1);
};

export {
  getCurrentDate,
  clickOutside,
  setNextMonth,
  setPrevMonth,
  createRefComponents,
};
