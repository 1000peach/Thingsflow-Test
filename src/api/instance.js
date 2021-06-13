import axios from "axios";

const baseURL = "https://api.github.com";

const instance = axios.create({
  baseURL: baseURL
});

const get = (path) => {
  return new Promise((resolve, reject) => {
    instance
      .get(path)
      .then(({ data }) => resolve(data))
      .catch((e) => reject(e));
  });
};

export { get };
