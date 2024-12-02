import Hero from "@/components/hero";
import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data: IBlog[] = await getBlogs();
  return (
    <div className="flex flex-col pb-5">
      <Hero />
      <div className="flex flex-wrap gap-5 justify-center md:justify-start mx-8">
        {data.map((item, idx) => {
          return (
            <Link key={idx} href={`/blog/${item.slug}`} data-cy="blog-item">
              <div className="border shadow-lg rounded-lg">
                <div className="w-96 h-52 relative overflow-hidden rounded-lg">
                  <Image
                    src={`${item.thumbnail}`}
                    alt="thumbnail"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex justify-between mx-3 mt-3">
                  <div className="font-bold text-xl line-clamp-2 tracking-tight">
                    {item.title}
                  </div>
                </div>
                <div className="flex justify-between mx-3 text-[#2D527C] font-semibold">
                  {item.category}
                  <span className="text-xs font-light text-gray-600">
                    {item.createdAt}
                  </span>
                </div>
                <div className="flex justify-between m-3">
                  <div className="flex">
                    <div className="w-10 h-10 relative overflow-hidden rounded-full">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src={`${item.user.avatar}`}
                        alt="avatar"
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex flex-col ml-1 text-sm">
                      <div>{item.user.username}</div>
                      <div className="text-gray-600">{item.user.email}</div>
                    </div>
                  </div>
                </div>

                <button className="m-3 rounded-lg border-2 border-black text-white px-2 py-1 bg-[#2D527C] hover:opacity-80">
                  Read more
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
