// 총 3개의 구역으로 나눠서 개발
// 1. APP(header, container)
// 2. header(theme, data-picker)
// 3. container(date-realtime)
import Header from "./Header";
import Container from "./Container";
import { createGlobalStyles } from "solid-styled-components";

const GlobalStyles = () => {
  const Styles = createGlobalStyles`
  body{
    background: ${(props) => props.theme().color};
    transition: 200ms ease-in-out;
  }
  * {
    margin: 0px;
    padding: 0px;
  }
  ul, ol {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  `;
  return <Styles />;
};

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container />
    </>
  );
}

export default App;
