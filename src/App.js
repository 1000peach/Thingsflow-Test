import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

import useIssue from "./hooks/useIssue";
import { SUCCESS } from "./redux/reducer/issueReducer";

import "./reset.css";

function App() {
  const { issues, getIssueListAction } = useIssue();
  const { status } = issues;

  useEffect(() => {
    if (status !== SUCCESS) getIssueListAction();
  }, []);

  return (
    <BrowserRouter>
      <Frame>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail" component={Detail} />
          </Switch>
        </main>
      </Frame>
    </BrowserRouter>
  );
}

const Frame = styled.div`
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header,
  main {
    width: min(500px, 100%);
  }
`;

export default App;
