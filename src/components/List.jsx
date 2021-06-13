import React from "react";
import styled from "styled-components";

function List() {
  return (
    <Wrapper>
      <Text>
        <h2>#111 issue title</h2>
        <p>작성자: name, 작성일: 2021년 6월 13일</p>
      </Text>
      <Comment>코멘트: 67</Comment>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
