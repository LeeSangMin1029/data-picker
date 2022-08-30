import { onCleanup } from "solid-js";

const clickOutside = (el, accessor) => {
  const onClick = (e) => !el.contains(e.target) && accessor();
  document.body.addEventListener("click", onClick);
  onCleanup(() => document.body.removeEventListener("click", onClick));
};
const getCurrentDate = () => {
  const currentDate = new Date();
  return currentDate.toISOString().split("T")[0];
};

export { getCurrentDate, clickOutside };
