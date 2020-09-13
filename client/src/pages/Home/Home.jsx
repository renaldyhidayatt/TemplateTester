import React, { useState, useEffect } from "react";
import TutorialDataService from "services/posts.services";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import { Jumbotron, Button, Container } from "reactstrap";
import Posts from "components/Home/Posts";
import Header from "components/Home/Header";

const TutorialsList = () => {
  const [tutorials, setTutorials] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  const pageSizes = [3, 6, 9];

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const getRequestParams = (searchTitle, page, pageSize) => {
    let params = {};

    if (searchTitle) {
      params["title"] = searchTitle;
    }

    if (page) {
      params["page"] = page - 1;
    }

    if (pageSize) {
      params["size"] = pageSize;
    }

    return params;
  };

  const retrieveTutorials = () => {
    const params = getRequestParams(searchTitle, page, pageSize);

    TutorialDataService.getAll(params)
      .then((response) => {
        const { tutorials, totalPages } = response.data;

        setTutorials(tutorials);
        setCount(totalPages);

        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(retrieveTutorials, [page, pageSize]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  return (
    <div>
      <Header image={"https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-1.2.1&w=1000&q=80"} title="Tester" subtitle="Tester Blog" />
      <div className="container">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search by title" value={searchTitle} onChange={onChangeSearchTitle} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit" onClick={retrieveTutorials}>
              Search
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <Posts tutorials={tutorials} />
            {/* Pager */}
            <div className="clearfix">
              <select onChange={handlePageSizeChange} value={pageSize}>
                {pageSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <Pagination className="my-3" count={count} page={page} siblingCount={1} boundaryCount={1} variant="outlined" shape="rounded" onChange={handlePageChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialsList;
