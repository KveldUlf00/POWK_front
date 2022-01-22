import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000/settings/",
});

const getSettings = async () => {
  const response = await api.get("/").then(({ data }) => data);
  return response;
};

const postSettings = async (param) => {
  const response = await api.get(`/${param}`).then(({ data }) => data);
  return response;
};

const getVideos = async () => {
  const response = await api.get("/videos").then(({ data }) => data);
  return response;
};

export { getSettings, getVideos, postSettings };
