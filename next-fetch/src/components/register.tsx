"use client";

import { Field, Form, Formik, FormikProps } from "formik";
import { Metadata } from "next";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("username is required"),
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  password: Yup.string()
    .min(3, "password minimum 3 characters")
    .required("password is required"),
});

interface FormValues {
  username: string;
  email: string;
  password: string;
}

function FormRegister() {
  const initialValue: FormValues = { username: "", email: "", password: "" };

  const handleAdd = async (user: FormValues) => {
    try {
      await fetch("http://localhost:2000/users", {
        method: "POST",
        body: JSON.stringify(user),
      });
      alert("user berhasil ditambahkan!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center item-center my-5 max-w-[500px] mx-auto rounded-md p-2">
      <div className="w-[300px]">
        <h1 className="text-3xl font-bold mb-5 text-center">Register Form</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={RegisterSchema}
          onSubmit={(values, action) => {
            handleAdd(values);

            action.resetForm();
          }}
        >
          {(props: FormikProps<FormValues>) => {
            const { handleChange, values, touched, errors } = props;
            return (
              <Form>
                <div>
                  <label htmlFor="username">Username : </label>
                  <Field
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                    className="flex justify-start border rounded my-2 p-1 w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Username"
                  />
                  {touched.username && errors.username ? (
                    <div className="text-red-500 text-xs">
                      {errors.username}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email">Email : </label>
                  <Field
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    className="flex justify-start border rounded my-2 p-1 w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="email"
                  />
                  {touched.email && errors.email ? (
                    <div className="text-red-500 text-xs">{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="password">Password : </label>
                  <Field
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    className="flex justify-start border rounded my-2 p-1 w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="password"
                  />
                  {touched.password && errors.password ? (
                    <div className="text-red-500 text-xs">
                      {errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    className="w-full bg-teal-700 text-white rounded-xl p-1 hover:opacity-80 border-2 border-black"
                  >
                    Register
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default FormRegister;
