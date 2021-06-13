import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";

import "./reset.css";

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Main>
    </BrowserRouter>
  );
}

const Main = styled.main`
  padding: 0 20px;
`;

export default App;
