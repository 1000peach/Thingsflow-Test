import { useDispatch, useSelector } from "react-redux";
import { getIssueList } from "../redux/reducer/issueReducer";

const useIssue = () => {
  const { issues } = useSelector((state) => state.issue);
  const dispatch = useDispatch();

  const getIssueListAction = () => dispatch(getIssueList());

  return { issues, getIssueListAction };
};

export default useIssue;
