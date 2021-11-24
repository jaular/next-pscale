import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";

export default function Container(props) {
  const { children, navigation, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Home",
    description: `App with Next.js, Tailwind CSS, Prisma and PlanetScale`,
    image: "https://next-pscale.vercel.app/static/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{`Next PlanetScale | ${meta.title}`}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://next-pscale.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://next-pscale.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Next PlanetScale" />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:title"
          content={`Next PlanetScale | ${meta.title}`}
        />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jaular" />
        <meta
          name="twitter:title"
          content={`Next PlanetScale | ${meta.title}`}
        />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <main className="container flex-grow max-w-5xl px-6 mx-auto my-14 lg:px-8 md:my-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
