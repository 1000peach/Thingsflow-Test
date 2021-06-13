import React from "react";
import qs from "query-string";

import useIssue from "../hooks/useIssue";
import styled from "styled-components";
import List from "../components/List";

function Detail({ location: { search } }) {
  const { issues } = useIssue();
  const { data, status } = issues;

  const { idx } = qs.parse(search);
  const issue = data[idx];

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
            user: issue.user.login,
            date: issue.created_at,
            comments: issue.comments
          }}
        />
      </Info>
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
