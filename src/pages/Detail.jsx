import React from "react";
import qs from "query-string";

import useIssue from "../hooks/useIssue";

function Detail({ location: { search } }) {
  const { data, status } = useIssue();
  const { id } = qs.parse(search);

  return <div>{/* <List /> */}</div>;
}

export default Detail;
