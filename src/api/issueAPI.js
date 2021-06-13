import { get } from "./instance";

export default class IssueAPI {
  static getIssueList(params) {
    const { owner, repo } = params;
    return get(`/repos/${owner}/${repo}/issues`, params);
  }
}
