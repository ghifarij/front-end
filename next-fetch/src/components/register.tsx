"use client";

import action from "@/app/action";
import { Field, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  password: Yup.string()
    .min(3, "password minimum 3 characters")
    .required("password is required"),
});

interface FormValues {
  name: string;
  email: string;
  password: string;
}

function FormRegister() {
  const initialValue: FormValues = { name: "", email: "", password: "" };

  const handleAdd = async (user: FormValues) => {
    try {
      await fetch("http://localhost:8000/api/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "content-type": "application/json" },
      });
      action("users");
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
                  <label htmlFor="name">name : </label>
                  <Field
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    className="flex justify-start border rounded my-2 p-1 w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="name"
                  />
                  {touched.name && errors.name ? (
                    <div className="text-red-500 text-xs">{errors.name}</div>
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
