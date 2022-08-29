/* @refresh reload */
import { render } from "solid-js/web";
import { WrapperThemeProvider } from "./themes";
import App from "./App";

render(
  () => (
    <WrapperThemeProvider>
      <App />
    </WrapperThemeProvider>
  ),
  document.getElementById("root")
);
