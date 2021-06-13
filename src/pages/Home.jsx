import React, { useEffect } from "react";
import styled from "styled-components";

import IssueAPI from "../api/issueAPI";

import List from "../components/List";

function Home() {
  const getIssueList = async () => {
    const data = await IssueAPI.getIssueList({
      owner: "angular",
      repo: "angular-cli"
    });
    console.log(data);
  };

  useEffect(() => {
    getIssueList();
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
