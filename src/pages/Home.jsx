import React from "react";
import styled from "styled-components";

import List from "../components/List";

function Home() {
  return (
    <Container>
      <List />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 50px;
`;

export default Home;
