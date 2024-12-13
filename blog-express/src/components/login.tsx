"use client";

import { useSession } from "@/context/useSession";
import { Field, Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  data: Yup.string().required("username or email is required"),
  password: Yup.string()
    .min(3, "password must be 3 characters at minimum")
    .required("password is required"),
});

interface FormValues {
  data: string;
  password: string;
}

const base_url = process.env.NEXT_BASE_URL_BE;

export default function LoginComp() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setIsAuth, setUser } = useSession();
  const router = useRouter();
  const initialValue: FormValues = {
    data: "",
    password: "",
  };

  const handleLogin = async (user: FormValues) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${base_url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: "include",
      });

      const result = await res.json();
      if (!res.ok) throw res;

      setIsAuth(true);
      setUser(result.user);
      router.push("/");
      toast.success(result.message);
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={RegisterSchema}
        onSubmit={(values, action) => {
          handleLogin(values);
          action.resetForm();
        }}
      >
        {(props: FormikProps<FormValues>) => {
          const { handleChange, values, touched, errors } = props;
          return (
            <Form className="flex flex-col gap-2 min-w-[400px]">
              <div className="mb-2">
                <label
                  htmlFor="data"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Username / Email:
                </label>
                <Field
                  type="text"
                  name="data"
                  onChange={handleChange}
                  value={values.data}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Username / Email"
                />
                {touched.data && errors.data ? (
                  <div className="text-red-500 text-xs">{errors.data}</div>
                ) : null}
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password :
                </label>
                <Field
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="password"
                />
                {touched.password && errors.password ? (
                  <div className="text-red-500 text-xs">{errors.password}</div>
                ) : null}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="text-white disabled:bg-blue-500 disabled:cursor-not-allowed bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
