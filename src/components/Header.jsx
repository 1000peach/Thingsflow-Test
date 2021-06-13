import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper className="header">
      <h1>Angular / Angular-cli</h1>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  text-align: center;
`;

export default Header;
