import { IBlog } from "@/types/blog";
import Images from "next/image";
import Link from "next/link";

export default function RecommendationBlog({ blogs }: { blogs: IBlog[] }) {
  return (
    <div className="sticky top-28">
      {blogs.map((item, idx) => {
        return (
          <Link key={idx} href={`/blog/${item.fields.slug}`}>
            <div className="flex flex-col border-b-2 w-[225px] gap-1 mb-3 ml-5">
              <h1 className="font-semibold">{item.fields.title}</h1>
              <div className="w-[225px] h-[125px] relative overflow-hidden rounded-md">
                <Images
                  src={`https:${item.fields.thumbnail.fields.file.url}`}
                  alt="thumbnail"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="flex justify-between text-xs">
                <span>{item.fields.author.fields.name}</span>
                <span className="text-gray-600">{item.fields.date}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
