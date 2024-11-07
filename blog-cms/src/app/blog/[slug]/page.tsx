import { getBlogs, getBlogSlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import Images from "next/image";

export const generateStaticParams = async () => {
  const blogs: IBlog[] = await getBlogs();

  return blogs.map((item) => ({
    slug: item.fields.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);

  return {
    title: blog.fields.title,
    description: blog.fields.title,
    authors: blog.fields.author.fields.name,
    openGraph: {
      images: [`https:${blog.fields.thumbnail.fields.file.url}`],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);

  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-2">{children}</p>
      ),
    },
  };

  return (
    <div className="flex flex-col md:flex-row my-12 w-full">
      <div className="flex-[2] max-md:hidden">
        <Link href={"/"} className="flex gap-1 ml-12">
          <FaArrowLeft className="w-6 h-6" />
          Kembali
        </Link>
      </div>
      <div className="md:flex-[5]">
        <div className="font-bold text-[#2D527C] text-xl px-5 md:p-0">
          {blog.fields.category}
        </div>
        <div className="text-3xl font-extrabold py-2 w-full md:w-[500px] px-5 md:p-0 ">
          {blog.fields.title}
        </div>
        <div className="text-sm mb-2 ">
          <span className="font-semibold pl-5 md:p-0">
            {blog.fields.author.fields.name}
          </span>{" "}
          <span>|</span>{" "}
          <span className="text-gray-500">{blog.fields.date}</span>
        </div>
        <div>
          <Images
            src={`https:${blog.fields.thumbnail.fields.file.url}`}
            alt="thumbnail"
            width={500}
            height={275}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="p-5 md:p-0 mt-5 md:w-[500px]">
          {documentToReactComponents(blog.fields.content, options)}
        </div>
      </div>
    </div>
  );
}
