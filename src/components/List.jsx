import React from "react";
import styled from "styled-components";
import { getFormattedInfo } from "../utils/handler";

function List({ issueInfo }) {
  const { number, title, user, date, comments } = issueInfo;

  return (
    <Wrapper className="list">
      <Text>
        <h2>{`#${number} ${title}`}</h2>
        <p>{`작성자: ${user ? user.login : ""}, 작성일: ${getFormattedInfo(date)}`}</p>
      </Text>
      <Comment>{`코멘트: ${comments}`}</Comment>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  border-bottom: 1px solid black;
`;

const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 18px;
    margin: 0 0 10px 0;
  }

  p {
    all: unset;
    font-size: 14px;
  }
`;

const Comment = styled.div`
  width: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export default List;
