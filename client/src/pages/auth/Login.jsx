/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Field, Form as FormFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
// reactstrap components
import { Button, Card, CardBody, FormGroup, InputGroupAddon, InputGroupText, InputGroup, Row, Col } from "reactstrap";
import { login } from "redux/action";
import { Link, Redirect } from "react-router-dom";

function Login(props) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);

  const { message } = useSelector((state) => state.message);
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  function onSubmit(values, { setSubmitting }) {
    setTimeout(() => {
      let dataToSubmit = {
        username: values.username,
        password: values.password,
      };

      dispatch(login(dataToSubmit))
        .then(() => {
          props.history.push("/admin/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
      setSubmitting(false);
    }, 500);
  }

  if (isLoggedIn) {
    return <Redirect to="/admin/profile" />;
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign In</small>
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              {(props) => {
                const { errors, touched, isSubmitting } = props;

                return (
                  <FormFormik role="form">
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field name="username" placeholder="username" className={"form-control" + (errors.username && touched.username ? " is-invalid" : "")} />
                        <ErrorMessage name="username" component="div" className="invalid-feedback" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field name="password" type="password" className={"form-control" + (errors.password && touched.password ? " is-invalid" : "")} />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                      </InputGroup>
                    </FormGroup>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input className="custom-control-input" id=" rememberMe" type="checkbox" />
                      <label className="custom-control-label" htmlFor=" rememberMe">
                        <span className="text-muted">Remember me</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <Button className="my-4" color="primary" type="submit" disabled={isSubmitting}>
                        {isSubmitting && <span className="spinner-border spinner-border-sm mr-1" />}
                        SignIn
                      </Button>
                    </div>
                  </FormFormik>
                );
              }}
            </Formik>
          </CardBody>
        </Card>
        <Col>
          {message && (
            <div>
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </Col>
        <Row className="mt-3">
          <Col xs="6">
            <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <Link className="text-light" to="/auth/register" onClick={(e) => e.preventDefault()}>
              <small>Create new account</small>
            </Link>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default Login;
