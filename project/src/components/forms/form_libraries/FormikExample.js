import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './../../../button.css';

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const FormikExample = () => {
    console.log("FormikExample component rendered");

    return (
        <div>
            <br/>
            <hr/>
            <h2>Formik</h2>
            <p>
                This is a comprehensive library that simplifies handling forms in React,
                especially for large forms or forms with a lot of validation requirements.
            </p>

            <h3>Benefits:</h3>
            <h4>State Management</h4>
            <p>Formik manages form state (e.g., values, errors) for you.</p>
            <h4>Validation</h4>
            <p>Built-in support for validation with Yup, making it easier to enforce validation rules.</p>
            <h4>Field Handling</h4>
            <p>Prebuilt components like 'Field' that automatically manage inputs.</p>
            <h4>Performance</h4>
            <p>Reduces unnecessary renders by optimizing form components.</p>            

            <h3>Code:</h3>
            <pre>
                <code>
                    {`import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './../../../button.css';

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const FormikExample = () => {
    console.log("FormikExample component rendered");

    return (
        <div>
            <Formik
                initialValues={{ name: "", email: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    alert("Form has been submitted!");
                    console.log("Formik Submitted:", values);
                }}
            >
                {({ handleSubmit, values, errors, touched }) => {
                    console.log("Current Form Values:", values);
                    console.log("Validation Errors:", errors);
                    console.log("Touched Fields:", touched);

                    return (
                        <Form onSubmit={handleSubmit}>
                            <div>
                                <label className="label" htmlFor="formik-name">Name: </label>
                                <Field id="formik-name" type="text" name="name" autoComplete="name" />
                                <ErrorMessage className="error-message" name="name" component="div" />
                            </div>
                            <br/>
                            <div>
                                <label className="label" htmlFor="formik-email">Email: </label>
                                <Field id="formik-email" type="email" name="email" autoComplete="email" />
                                <ErrorMessage className="error-message" name="email" component="div" />
                            </div>

                            <button type="submit">Submit</button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default FormikExample;`}
                </code>
            </pre>

            <h3>Output:</h3>
            <Formik
                initialValues={{ name: "", email: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    alert("Form has been submitted!");
                    console.log("Formik Submitted:", values);
                }}
            >
                {({ handleSubmit, values, errors, touched }) => {
                    console.log("Current Form Values:", values);
                    console.log("Validation Errors:", errors);
                    console.log("Touched Fields:", touched);

                    return (
                        <Form onSubmit={handleSubmit}>
                            <div>
                                <label className="label" htmlFor="formik-name">Name: </label>
                                <Field id="formik-name" type="text" name="name" autoComplete="name" />
                                <ErrorMessage className="error-message" name="name" component="div" />
                            </div>
                            <br/>
                            <div>
                                <label className="label" htmlFor="formik-email">Email: </label>
                                <Field id="formik-email" type="email" name="email" autoComplete="email" />
                                <ErrorMessage className="error-message" name="email" component="div" />
                            </div>

                            <button type="submit">Submit</button>
                        </Form>
                    );
                }}
            </Formik>
            <h1 className="output">
                You can use the browser’s developer tools (Inspect) to view console messages for this example.
            </h1>
        </div>
    );
}

export default FormikExample;