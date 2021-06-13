import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

import "./reset.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </Main>
    </BrowserRouter>
  );
}

const Main = styled.main`
  padding: 0 20px;
`;

export default App;
