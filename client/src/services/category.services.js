import axios from "axios";
import { authHeader } from "helpers";

export const categoryServices = {
  getList,
  create,
  update,
  delete: _delete,
  detail,
};

function getList() {
  axios.get("https://my-json-server.typicode.com/afifbasya/reactjs-redux/users");
}

function create(dataToSubmit) {
  axios.post("/api/category/create", dataToSubmit, { headers: authHeader() });
}

function update(id, dataToSubmit) {
  axios.put("/api/category/update" + id, dataToSubmit, { headers: authHeader() });
}

function detail(id) {
  axios.get("/api/category/" + id, { headers: authHeader() });
}

function _delete(id) {
  axios.delete("/api/category/delete" + id, { headers: authHeader() });
}
