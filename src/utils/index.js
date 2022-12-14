import { onCleanup } from "solid-js";

const clickOutside = (el, accessor) => {
  const onClick = (e) => {
    !el.contains(e.target) && accessor()?.();
  };
  document.body.addEventListener("click", onClick);
  onCleanup(() => document.body.removeEventListener("click", onClick));
};

const getCurrentDate = () => {
  const currentDate = new Date();
  // toISOString함수를 호출하면 9시간이 마이너스 된 상태로 출력이 되기 때문에 미리 더해준다.
  currentDate.setHours(currentDate.getHours() + 9);
  return currentDate.toISOString().split("T")[0].split("-");
};

const addZ = (n) => (n < 10 ? "0" + n : "" + n);

const numberList = (count) => Array.from(Array(count), (_, i) => i + 1);

// 달에 마지막 날을 구하는 함수
const getLastDayOfMonth = (year, month) => new Date(year, month, 0).getDate();

// 달의 일수를 배열로 만들어서 가져오는 함수
const getDayListOfMonth = (year, month) =>
  numberList(getLastDayOfMonth(year, month));

export { getCurrentDate, clickOutside, numberList, getDayListOfMonth, addZ };
