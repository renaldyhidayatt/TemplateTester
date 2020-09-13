import axios from "axios";

const getAll = (params) => {
  return axios.get("/posts", { params });
};

const get = (id) => {
  return axios.get(`/posts/${id}`);
};

const create = (data) => {
  return axios.post("/posts/create", data);
};

const update = (id, data) => {
  return axios.put(`/posts/${id}`, data);
};

const remove = (id) => {
  return axios.delete(`/posts/${id}`);
};

const removeAll = () => {
  return axios.delete(`/posts/delete/all`);
};

const findByTitle = (title) => {
  return axios.get(`/posts?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};
