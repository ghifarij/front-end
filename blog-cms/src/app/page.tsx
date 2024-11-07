import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data: IBlog[] = await getBlogs();
  console.log(data);
  return (
    <div className="flex flex-col pb-5">
      <div className="flex relative w-full h-64 overflow-hidden mb-10 justify-center items-center">
        <Image
          src={"/hero.png"}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <h1 className="text-white absolute text-5xl font-extrabold opacity-80">
          Take a short breaks to read our blogs
        </h1>
      </div>
      <div className="flex flex-wrap gap-5 justify-center md:justify-start mx-8">
        {data.map((item, idx) => {
          return (
            <Link key={idx} href={`/blog/${item.fields.slug}`}>
              <div className="border shadow-lg rounded-lg">
                <div className="w-96 h-52 relative overflow-hidden rounded-lg">
                  <Image
                    src={`https:${item.fields.thumbnail.fields.file.url}`}
                    alt="thumbnail"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex justify-between mx-3 mt-3">
                  <div className="font-bold text-xl line-clamp-2 tracking-tight">
                    {item.fields.title}
                  </div>
                </div>
                <div className="flex justify-between mx-3 text-[#2D527C] font-semibold">
                  {item.fields.category}
                  <span className="text-xs font-light text-gray-600">
                    {item.fields.date}
                  </span>
                </div>
                <div className="flex justify-between m-3">
                  <div className="flex">
                    <Image
                      width={40}
                      height={40}
                      src={`https:${item.fields.author.fields.avatar.fields.file.url}`}
                      alt="avatar"
                      className="object-cover rounded-full"
                    />
                    <div className="flex flex-col ml-1 text-sm">
                      <div>{item.fields.author.fields.name}</div>
                      <div className="text-gray-600">
                        {item.fields.author.fields.email}
                      </div>
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
