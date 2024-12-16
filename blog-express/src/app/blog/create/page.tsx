"use client";

import React, { useEffect } from "react";
import { BlogInput } from "@/types/blog";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { createSlug } from "@/helpers/createSlug";
import RichTextEditor from "@/components/form/blog/textEditor";
import { FieldThumbnail } from "@/components/form/blog/thumbnail";
import { toast } from "react-toastify";
import { revalidate } from "@/libs/action";

export const blogSchema = Yup.object({
  title: Yup.string()
    .min(5, "Title must be at least 5 characters long")
    .max(100, "Title must be at most 100 characters long")
    .required("Title is required"),
  category: Yup.string().required("Category is required"),
  content: Yup.string()
    .min(20, "Content must be at least 20 characters long")
    .required("Content is required"),
  thumbnail: Yup.mixed<File>()
    .required("Thumbnail is required")
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

const initialValues: BlogInput = {
  title: "",
  category: "",
  slug: "",
  content: "",
  thumbnail: "",
};

const base_url = process.env.NEXT_BASE_URL_BE;

export default function BlogCreatePage() {
  const onCreate = async (data: BlogInput) => {
    try {
      const formData = new FormData();

      for (let key in data) {
        const item = data[key as keyof BlogInput];
        if (item) {
          formData.append(key, item);
        }
      }

      const res = await fetch(`${base_url}/blogs`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      const result = await res.json();
      if (!res.ok) throw result;

      revalidate("blogs");
      toast.success(result.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center mx-auto max-w-[1200px] p-4">
      <Formik
        initialValues={initialValues}
        validationSchema={blogSchema}
        onSubmit={(values, actions) => {
          onCreate(values);
          actions.resetForm();
        }}
      >
        {(props) => {
          useEffect(() => {
            props.setFieldValue("slug", createSlug(props.values.title));
          }, [props.values.title, props.setFieldValue]);

          return (
            <Form className="flex flex-col gap-3 w-full">
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Title
                </label>
                <Field
                  name="title"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                />
                <ErrorMessage
                  name="title"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="slug"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Slug
                </label>
                <input
                  type="text"
                  name="slug"
                  value={props.values.slug}
                  readOnly
                  disabled
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Category
                </label>
                <Field
                  name="category"
                  as="select"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                >
                  <option value="">~ Pilih Category ~</option>
                  <option value="Genshin">Genshin</option>
                  <option value="Sport">Sport</option>
                  <option value="Health">Health</option>
                  <option value="Food">Food</option>
                  <option value="Tech">Tech</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="thumbnail"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Thumbnail
                </label>
                <FieldThumbnail name="thumbnail" formik={props} />
                <ErrorMessage
                  name="thumbnail"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="content"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Content
                </label>
                <RichTextEditor setFieldValue={props.setFieldValue} />
                <ErrorMessage
                  name="content"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>
              <div className="flex sm:justify-end">
                <button
                  type="submit"
                  className="w-full h-[40px] sm:w-[120px] text-[#f5f5f7] bg-[#383839] hover:bg-[#595959] rounded-lg"
                >
                  Save
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
