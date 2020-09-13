import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Row, Col, Spinner, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CategoryTable(props) {
  const { getCategoryList, errorCategoryList } = useSelector((state) => state.category);

  const { SearchBar } = Search;

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ];

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "nama",
      text: "Nama",
      sort: true,
    },
    {
      dataField: "alamat",
      text: "Alamat",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      headerStyle: () => {
        return { width: "5%" };
      },
      formatter: (rowContent, row) => {
        return (
          <div className="text-right">
            <UncontrolledDropdown>
              <DropdownToggle className="btn-icon-only text-light" href="#pablo" role="button" size="sm" color="" onClick={(e) => e.preventDefault()}>
                <i className="fas fa-ellipsis-v" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i class="fa fa-edit "></i> Action
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Another action
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      {getCategoryList ? (
        <ToolkitProvider bootstrap4 keyField="id" data={getCategoryList} columns={columns} defaultSorted={defaultSorted} search>
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to="/create">
                    <Button color="dark" className="mr-2">
                      Create User
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} placeholder="Search .." />
                  </div>
                </Col>
              </Row>

              <BootstrapTable className="align-items-center table-flush" {...props.baseProps} pagination={paginationFactory()} />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">{errorCategoryList ? <h4>{errorCategoryList}</h4> : <Spinner color="dark" />}</div>
      )}
    </div>
  );
}

export default CategoryTable;
