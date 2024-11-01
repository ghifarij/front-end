import Link from "next/link";

export default function UserPage() {
  const data = [
    { id: "1", name: "aquaman" },
    { id: "2", name: "batman" },
    { id: "3", name: "cici" },
  ];
  return (
    <div className="flex flex-col items-center">
      {data.map((item, idx) => {
        return (
          <Link href={`/user/${item.id}`} key={idx}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
