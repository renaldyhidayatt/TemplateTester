import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "redux/action";

function RegisterPage() {
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
    <div className="col-md-12">
      <div className="card card-container">
        <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card" />
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {(props) => {
            const { errors, touched, isSubmitting } = props;
            return (
              <Form>
                <div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Field name="username" className={"form-control" + (errors.username && touched.username ? " is-invalid" : "")} />
                    <ErrorMessage name="username" component="div" className="invalid-feedback" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">email</label>
                    <Field name="email" className={"form-control" + (errors.email && touched.email ? " is-invalid" : "")} />
                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" className={"form-control" + (errors.password && touched.password ? " is-invalid" : "")} />
                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                  </div>
                  <div className="form-group">
                    <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                      {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                      Register
                    </button>
                  </div>
                </div>
                {message && (
                  <div className="form-group">
                    <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                      {message}
                    </div>
                  </div>
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default RegisterPage;
