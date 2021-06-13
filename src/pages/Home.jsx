import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

import List from "../components/List";
import Loading from "../components/Loading";

import useIssue from "../hooks/useIssue";
import { INIT, LOADING } from "../redux/reducer/issueReducer";

function Home() {
  const { issues } = useIssue();
  const { status, data } = issues;

  if (status === LOADING || status === INIT) return <Loading />;

  return (
    <div>
      <ul>
        {data.map((issue, idx) => {
          if (!issue) return <Banner key="ad banner" />;

          return (
            <li key={issue.id}>
              <Link to={`/detail?idx=${idx}`}>
                <List
                  issueInfo={{
                    number: issue.number,
                    title: issue.title,
                    user: issue.user,
                    date: issue.created_at,
                    comments: issue.comments
                  }}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
