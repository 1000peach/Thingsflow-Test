import React, { useEffect } from "react";
import styled from "styled-components";

import List from "../components/List";
import useIssue from "../hooks/useIssue";
import { INIT, LOADING } from "../redux/reducer/issueReducer";

function Home() {
  const { issues, getIssueListAction } = useIssue();
  const { status, data } = issues;

  useEffect(() => {
    getIssueListAction();
  }, []);

  if (status === LOADING || status === INIT) return null;

  return (
    <Container>
      <ul>
        <a href="https://thingsflow.com/ko/home" target="_blank" rel="noreferrer">
          <AdImg src="http://placehold.it/500x100?text=ad" alt="img" />
        </a>
        {data.map((issue) => (
          <List
            key={issue.id}
            issueInfo={{
              number: issue.number,
              title: issue.title,
              user: issue.user.login,
              date: issue.created_at,
              comments: issue.comments
            }}
          />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 50px;
`;

const AdImg = styled.img`
  width: max(100%, 500px);
  object-fit: cover;
  height: 100px;
`;

export default Home;
