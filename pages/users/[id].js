import Link from "next/link";
import Container from "@/components/Container";
import prisma from "@/lib/prisma";

export default function User({ data }) {
  return (
    <Container title={data.name}>
      <div className="space-y-8 text-center">
        {data.length === 0 ? (
          <h1 className="text-3xl font-bold tracking-tight text-black-500 md:text-5xl">
            User not found!
          </h1>
        ) : (
          <>
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              <span className="text-black-500">User: </span>
              <span className="text-orange-600">{data.name}</span>
            </h1>
            <p className="text-base tracking-tight text-black-300 md:text-lg">
              Created at: {data.createdAt}
            </p>
          </>
        )}
        <div>
          <Link href="/">
            <a className="font-medium text-orange-600 underline hover:text-orange-500">
              Back to home
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  let data;

  try {
    const resp = await prisma.users.findFirst({
      where: {
        id: parseInt(id),
      },
    });
    const json = await JSON.parse(JSON.stringify(resp));

    data = {
      id: json.id,
      name: json.name,
      createdAt: json.created_at,
      // createdAt: new Date(json.created_at).toLocaleDateString(),
    };
  } catch (error) {
    data = [];
  }
  return {
    props: {
      data,
    },
  };
}
