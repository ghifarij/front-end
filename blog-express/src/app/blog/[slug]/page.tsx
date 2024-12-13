import { IBlog } from "@/types/blog";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import Images from "next/image";
import ShareButton from "@/components/share";
import { getBlogs, getBlogSlug } from "@/libs/blog";
import { formatDate } from "@/helpers/formatDate";

export const generateStaticParams = async () => {
  const blogs: IBlog[] = await getBlogs();

  return blogs.map((item) => ({
    slug: item.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);

  return {
    title: blog.title,
    description: blog.title,
    authors: blog.user.username,
    openGraph: {
      images: [`${blog.thumbnail}`],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);

  return (
    <div className="flex flex-col md:flex-row my-12 w-full">
      <div className="flex-[2] max-md:hidden">
        <Link href={"/"} className="flex gap-1 ml-12">
          <FaArrowLeft className="w-6 h-6" />
          Kembali
        </Link>
        <ShareButton slug={blog.slug} />
      </div>
      <div className="md:flex-[5]">
        <div className="font-bold text-[#2D527C] text-xl px-5 md:p-0">
          {blog.category}
        </div>
        <div className="text-3xl font-extrabold py-2 w-full md:w-[600px] px-5 md:p-0 ">
          {blog.title}
        </div>
        <div className="text-sm mb-2 ">
          <span className="font-semibold pl-5 md:p-0">
            {blog.user.username}
          </span>{" "}
          <span>|</span>{" "}
          <span className="text-gray-500">{formatDate(blog.createdAt)}</span>
        </div>
        <div>
          <Images
            src={`${blog.thumbnail}`}
            alt="thumbnail"
            width={600}
            height={275}
            className="object-cover rounded-lg md:p-0 p-2"
          />
        </div>
        <div className="p-5 md:p-0 mt-5 md:w-[600px]">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
      <div className="md:hidden">
        <ShareButton slug={blog.slug} />
      </div>
    </div>
  );
}
