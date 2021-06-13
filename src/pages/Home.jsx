import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import List from "../components/List";
import { getIssueList } from "../redux/reducer/issueReducer";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIssueList());
  }, [dispatch]);

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
