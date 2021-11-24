import Link from "next/link";

export default function Users({ data }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 md:gap-12">
      {data.map((item) => (
        <Link key={item.id} href={`/users/${item.id}`}>
          <a className="p-4 bg-gray-200 border-2 border-transparent rounded-lg hover:border-orange-600 ">
            <p className="inline-block mb-2 font-medium text-black-500">
              {item.name} &rarr;
            </p>
            <p className="text-sm text-black-300">{item.createdAt}</p>
          </a>
        </Link>
      ))}
    </div>
  );
}
