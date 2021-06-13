import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <h1>Angular / Angular-cli</h1>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  margin: 20px 0;
  text-align: center;
`;

export default Header;
