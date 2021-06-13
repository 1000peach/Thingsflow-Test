import React from "react";
import styled from "styled-components";
import qs from "query-string";
import ReactMarkdown from "react-markdown";

import Loading from "../components/Loading";
import List from "../components/List";
import useIssue from "../hooks/useIssue";

import { INIT, LOADING } from "../redux/reducer/issueReducer";

function Detail({ location: { search } }) {
  const { issues } = useIssue();
  const { data, status } = issues;

  if (search.length < 1) return <h1>잘못된 접근입니다.</h1>;

  const { idx } = qs.parse(search);
  if (Number(idx) === 4) return <h1>잘못된 접근입니다.</h1>;

  const issue = data[idx];

  window.scrollTo({
    top: 0
  });

  if (status === LOADING || status === INIT) return <Loading />;

  return (
    <div>
      <Info>
        <ProfileImg>
          <img src={issue.user.avatar_url} alt="profile avatar" />
        </ProfileImg>
        <List
          issueInfo={{
            number: issue.number,
            title: issue.title,
            user: issue.user,
            date: issue.created_at,
            comments: issue.comments
          }}
        />
      </Info>
      <ReactMarkdown>{issue.body}</ReactMarkdown>
    </div>
  );
}

const Info = styled.div`
  display: flex;
  width: 100%;
`;

const ProfileImg = styled.div`
  padding-top: 20px;
  margin-right: 20px;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
  }
`;

export default Detail;
