import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";

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
      <div className="flex flex-wrap gap-5 justify-center">
        {data.map((item) => {
          return (
            <div className="border shadow-lg rounded-lg">
              <img
                src={item.fields.thumbnail.fields.file.url}
                alt="thumbnail"
                className="w-96 h-52 object-cover rounded-lg"
              />
              <div className="flex justify-between mx-3 mt-3">
                <div className="font-bold text-xl">{item.fields.title}</div>
                <div className="text-xs font-light text-gray-600">
                  {item.fields.date}
                </div>
              </div>
              <div className="mx-3 text-[#2D527C] font-semibold">
                {item.fields.category}
              </div>
              <div className="flex justify-between m-3">
                <div className="flex">
                  <img
                    src={item.fields.author.fields.avatar.fields.file.url}
                    alt="avatar"
                    className="w-10 h-10 object-cover rounded-full"
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
          );
        })}
      </div>
    </div>
  );
}
