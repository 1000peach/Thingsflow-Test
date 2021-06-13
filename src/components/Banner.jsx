import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <Wrapper>
      <a key="ad" href="https://thingsflow.com/ko/home" target="_blank" rel="noreferrer">
        <Img src="http://placehold.it/500x100?text=ad" alt="img" />
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 20px;
`;

const Img = styled.img`
  width: max(100%, 500px);
  object-fit: cover;
  height: 100px;
`;

export default Banner;
