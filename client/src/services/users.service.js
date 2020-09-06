import axios from "axios";
import { authHeader } from "../helpers";

export const usersServices = {
  getPublicContent,
  getUsersBoard,
  getModeratorBoard,
  getAdminBoard,
};

function getPublicContent() {
  return axios.get("/api/test/all");
}

function getUsersBoard() {
  return axios.get("/api/test/user", { headers: authHeader() });
}

function getModeratorBoard() {
  return axios.get("/api/test/mod", { headers: authHeader() });
}

function getAdminBoard() {
  return axios.get("/api/test/admin", { headers: authHeader() });
}
