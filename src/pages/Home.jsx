import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import List from "../components/List";
import Loading from "../components/Loading";

import useIssue from "../hooks/useIssue";
import { INIT, LOADING } from "../redux/reducer/issueReducer";

function Home() {
  const { issues } = useIssue();
  const { status, data } = issues;

  if (status === LOADING || status === INIT) return <Loading />;

  return (
    <div>
      <ul>
        {data.map((issue, idx) => {
          if (!issue) {
            return (
              <a key="ad" href="https://thingsflow.com/ko/home" target="_blank" rel="noreferrer">
                <AdImg src="http://placehold.it/500x100?text=ad" alt="img" />
              </a>
            );
          }
          return (
            <li key={issue.id}>
              <Link to={`/detail?idx=${idx}`}>
                <List
                  issueInfo={{
                    number: issue.number,
                    title: issue.title,
                    user: issue.user,
                    date: issue.created_at,
                    comments: issue.comments
                  }}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const AdImg = styled.img`
  width: max(100%, 500px);
  object-fit: cover;
  height: 100px;
`;

export default Home;
