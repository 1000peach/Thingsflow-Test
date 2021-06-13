import React from "react";
import qs from "query-string";

import useIssue from "../hooks/useIssue";

function Detail({ location: { search } }) {
  const { data, status } = useIssue();
  const { idx } = qs.parse(search);

  console.log(idx);

  return <div>{/* <List /> */}</div>;
}

export default Detail;
