import React, { useEffect } from "react";

// reactstrap components
import { Card, CardHeader, Container, Row } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { getCategory } from "redux/action/category.action";
import { connect } from "react-redux";
import CategoryTable from "components/Table/Category";

function Tables(props) {
  useEffect(() => {
    props.dispatch(getCategory());
  });

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card tables</h3>
              </CardHeader>
              <CategoryTable />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default connect()(Tables);
