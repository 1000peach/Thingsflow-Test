import React, { useEffect } from "react";
import styled from "styled-components";

import List from "../components/List";
import useIssue from "../hooks/useIssue";

function Home() {
  const { issues, getIssueListAction } = useIssue();

  useEffect(() => {
    getIssueListAction();
  }, []);

  return (
    <Container>
      <List />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 50px;
`;

export default Home;
