"use client";

import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

interface AvatarFormValues {
  avatar: File | null;
}

const AvatarSchema = Yup.object().shape({
  avatar: Yup.mixed<File>()
    .required("Avatar is required")
    .test(
      "fileSize",
      "File terlalu besar (maksimal 2MB)",
      (value) =>
        !value || (value instanceof File && value.size <= 2 * 1024 * 1024)
    )
    .test(
      "fileType",
      "Format file tidak didukung (hanya .jpeg, .png, .jpg, .webp)",
      (value) =>
        !value ||
        (value instanceof File &&
          ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(
            value.type
          ))
    ),
});

const base_url = process.env.NEXT_BASE_URL_BE;

const EditAvatar = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const initialValues: AvatarFormValues = {
    avatar: null,
  };

  const handleSubmit = async (values: AvatarFormValues) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      if (values.avatar) {
        formData.append("file", values.avatar);
      }
      const res = await fetch(`${base_url}/users/avatar-cloud`, {
        method: "PATCH",
        body: formData,
        credentials: "include",
      });
      const result = await res.json();
      if (!res.ok) throw result;
      toast.success(result.message);
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white shadow-md rounded-lg mt-2">
      <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
        Edit Avatar
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={AvatarSchema}
        onSubmit={(values, action) => {
          handleSubmit(values);
          action.resetForm();
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Avatar
              </label>
              <input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files?.[0] || null;
                  setFieldValue("avatar", file);
                }}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
              <ErrorMessage
                name="avatar"
                component="div"
                className="text-sm text-red-500 mt-1"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full disabled:bg-blue-500 disabled:cursor-not-allowed bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md"
            >
              {isLoading ? "Loading ..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditAvatar;
