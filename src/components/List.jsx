import React from "react";
import styled from "styled-components";

function List({ issueInfo }) {
  const { number, title, user, date, comments } = issueInfo;

  return (
    <Wrapper className="list">
      <Text>
        <h2>{`#${number} ${title}`}</h2>
        <p>{`작성자: ${user}, 작성일: ${date}`}</p>
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

const Comment = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0 0 10px 0;
  }
  p {
    all: unset;
  }
`;

export default List;
