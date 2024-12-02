import Link from "next/link";
import { IconType } from "react-icons";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import CopyButton from "./copy";

interface IShare {
  Icon: IconType;
  link: string;
  style: string;
}

const share: IShare[] = [
  {
    Icon: FaFacebook,
    link: "https://www.facebook.com/sharer/sharer.php?u=",
    style: "text-blue-500",
  },
  {
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/sharing/share-offsite/?url=",
    style: "text-blue-600",
  },
  {
    Icon: FaXTwitter,
    link: "https://www.twitter.com/intent/tweet?url=",
    style: "text-black",
  },
  {
    Icon: FaWhatsapp,
    link: "https://wa.me/?text=",
    style: "text-green-500",
  },
];

export default function ShareButton({ slug }: { slug: string }) {
  const domain = "https://ghifarij-blogger.vercel.app/blog/";

  return (
    <div className="flex flex-col ml-5 md:ml-12 md:mt-10">
      <p className="mb-2 uppercase font-semibold md:font-bold">Bagikan</p>
      <div className="flex gap-3 text-lg md:text-2xl">
        {share.map((item, idx) => {
          return (
            <Link
              key={idx}
              href={`${item.link}${domain}${slug}`}
              target="_blank"
            >
              <item.Icon className={`${item.style}`} />
            </Link>
          );
        })}
        <CopyButton link={`${domain}${slug}`} />
      </div>
    </div>
  );
}
