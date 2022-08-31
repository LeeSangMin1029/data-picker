/* @refresh reload */
import { render } from "solid-js/web";
import { WrapperThemeProvider } from "./Components/ThemeProvider";
import App from "./Components/App";

render(
  () => (
    <WrapperThemeProvider>
      <App />
    </WrapperThemeProvider>
  ),
  document.getElementById("root")
);
