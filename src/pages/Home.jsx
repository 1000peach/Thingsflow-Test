import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import List from "../components/List";
import useIssue from "../hooks/useIssue";
import { INIT, LOADING, SUCCESS } from "../redux/reducer/issueReducer";

function Home() {
  const { issues, getIssueListAction } = useIssue();
  const { status, data } = issues;

  useEffect(() => {
    if (status !== SUCCESS) getIssueListAction();
  }, []);

  if (status === LOADING || status === INIT) return null;

  return (
    <Container>
      <a href="https://thingsflow.com/ko/home" target="_blank" rel="noreferrer">
        <AdImg src="http://placehold.it/500x100?text=ad" alt="img" />
      </a>

      <ul>
        {data.map((issue) => (
          <li key={issue.id}>
            <Link to={`/detail?id=${issue.id}`}>
              <List
                issueInfo={{
                  number: issue.number,
                  title: issue.title,
                  user: issue.user.login,
                  date: issue.created_at,
                  comments: issue.comments
                }}
              />
            </Link>
          </li>
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
