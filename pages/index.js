import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Container from "@/components/Container";
import Banner from "@/components/Banner";
import UserForm from "@/components/UserForm";
import Users from "@/components/Users";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Home({ data }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
  });
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    setIsRefreshing(false);
  }, [data]);

  function refreshData() {
    router.replace(router.asPath);
    setIsRefreshing(true);
  }

  async function handleSave(e) {
    e.preventDefault();

    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (response.status < 300) {
      await response.json();
      refreshData();
    }
  }

  return (
    <Container>
      <div className="space-y-6 md:space-y-12">
        <h1 className="text-3xl font-bold tracking-tight text-black-500 md:text-5xl">
          Welcome to{" "}
          <a
            className="text-orange-600 underline hover:text-orange-500"
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js!
          </a>
        </h1>

        <Banner
          title="Next PlanetScale"
          description="App with Next.js, Tailwind CSS, Prisma and PlanetScale"
          imgUrl="/static/banner.svg"
          width="1200"
          height="627"
        />

        <div>
          <UserForm
            formData={formData}
            setFormData={setFormData}
            handleSave={handleSave}
            isRefreshing={isRefreshing}
          />
        </div>

        <Users data={data} />
      </div>
    </Container>
  );
}

export async function getServerSideProps() {
  let data;

  try {
    const resp = await prisma.users.findMany();
    const json = await JSON.parse(JSON.stringify(resp));

    data = await json.map((item) => ({
      id: item.id,
      name: item.name,
      createdAt: item.created_at,
      // createdAt: new Date(item.created_at).toLocaleDateString(),
    }));
  } catch (error) {
    data = [];
  }

  return {
    props: {
      data,
    },
  };
}
