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

// reactstrap components
import { Button, Card, CardBody, FormGroup, InputGroupAddon, InputGroupText, InputGroup, Row, Col } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "redux/action";

function Register() {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);
  const [successful, setSuccessful] = useState(false);
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Email is invalid"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  function onSubmit(values, { setSubmitting }) {
    setTimeout(() => {
      let dataToSubmit = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      dispatch(register(dataToSubmit))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
      setSubmitting(false);
    }, 500);
  }
  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign Up</small>
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              {(props) => {
                const { errors, touched, isSubmitting } = props;
                return (
                  <Form role="form">
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field name="username" placeholder="Username" className={"form-control" + (errors.username && touched.username ? " is-invalid" : "")} />
                        <ErrorMessage name="username" component="div" className="invalid-feedback" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field name="email" className={"form-control" + (errors.email && touched.email ? " is-invalid" : "")} />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
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
                    <Row className="my-4">
                      <Col xs="12">
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input className="custom-control-input" id="customCheckRegister" type="checkbox" />
                          <label className="custom-control-label" htmlFor="customCheckRegister">
                            <span className="text-muted">
                              I agree with the{" "}
                              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                Privacy Policy
                              </a>
                            </span>
                          </label>
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center">
                      <Button className="mt-4" disabled={isSubmitting} color="primary" type="submit">
                        {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Create Account
                      </Button>
                    </div>
                    {message && (
                      <div className="text-center">
                        <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                          {message}
                        </div>
                      </div>
                    )}
                  </Form>
                );
              }}
            </Formik>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default Register;
