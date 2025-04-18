import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import './../../../button.css';

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const ReactHookFormExample = () => {
    console.log("ReactHookFormExample component rendered");

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields, isSubmitting },
        watch,
    } = useForm({ resolver: yupResolver(validationSchema) });

    const onSubmit = (values) => {
        alert("Form has been submitted!");
        console.log("React Hook Form Submitted:", values);
    };

    console.log("Current Form Values:", watch());
    console.log("Validation Errors:", errors);
    console.log("Touched Fields:", touchedFields);
    console.log("Is Submitting:", isSubmitting);


    return (
        <div>
            <br/>
            <hr/>
            <h2>React Hook Form</h2>
            <p>
                A performant, flexible, and easy-to-use form library for React that reduces re-renders and provides great developer experience.
            </p>

            <h3>Benefits:</h3>
            <h4>Minimal Rerenders</h4>
            <p>It minimizes rerenders, making it very efficient.</p>
            <h4>Easy Integration</h4>
            <p>Works well with existing validation libraries like Yup.</p>
            <h4>Ref-based Approach</h4>
            <p>Utilizes refs instead of onChange, leading to better performance with large forms.</p>
            <h4>Less Boilerplate</h4>
            <p>It requires less code for validation, error handling, and maintaining form state.</p>

            <h3>Code:</h3>
            <pre>
                <code>
                    {`import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import './../../../button.css';

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const ReactHookFormExample = () => {
    console.log("ReactHookFormExample component rendered");

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields, isSubmitting },
        watch,
    } = useForm({ resolver: yupResolver(validationSchema) });

    const onSubmit = (values) => {
        alert("Form has been submitted!");
        console.log("React Hook Form Submitted:", values);
    };

    console.log("Current Form Values:", watch());
    console.log("Validation Errors:", errors);
    console.log("Touched Fields:", touchedFields);
    console.log("Is Submitting:", isSubmitting);


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="label" htmlFor="name">Name: </label>
                <input id="name" type="text" {...register("name")} autoComplete="name" />
                {errors.name && <div className="error-message">{errors.name.message}</div>}
            </div>
            <br/>
            <div>
                <label className="label" htmlFor="email">Email: </label>
                <input id="email" type="email" {...register("email")} autoComplete="email" />
                {errors.email && <div className="error-message">{errors.email.message}</div>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ReactHookFormExample;`}
                </code>
            </pre>

            <h3>Output:</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="label" htmlFor="name">Name: </label>
                    <input id="name" type="text" {...register("name")} autoComplete="name" />
                    {errors.name && <div className="error-message">{errors.name.message}</div>}
                </div>
                <br/>
                <div>
                    <label className="label" htmlFor="email">Email: </label>
                    <input id="email" type="email" {...register("email")} autoComplete="email" />
                    {errors.email && <div className="error-message">{errors.email.message}</div>}
                </div>
                <button type="submit">Submit</button>
            </form>
            <h1 className="output">
                You can use the browser’s developer tools (Inspect) to view console messages for this example.
            </h1>
        </div>
    );
}

export default ReactHookFormExample;
