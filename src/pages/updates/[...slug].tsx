export const runtime = "experimental-edge";

import { notFound } from "next/navigation";

import { GetStaticPaths, GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";

import { absoluteUrl, cn, formatDate } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Post, allPosts } from "@/posts/post";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

interface PostPageProps {
  slug: string;
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params || !params.slug) return { props: { slug: "" } };
  return { props: { slug: params.slug[0] } };
}
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export default function PostPage({ slug }: PostPageProps) {
  const post = allPosts.find((post) => post.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Head>
        <title>{post.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={post.description} />
        <meta property="og:url" content={`https://clocktower.fyi/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Clocktower.fyi" />
        <meta property="og:description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:image"
          content={`https://clocktower.fyi/${post.image}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta
          name="twitter:image"
          content={`https://clocktower.fyi/${post.image}`}
        />
        <link rel="canonical" href={`https://clocktower.fyi/${slug}`} />
      </Head>
      <Link
        href="/updates"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link>
      <div>
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-sm text-muted-foreground"
          >
            Published on {formatDate(post.date)}
          </time>
        )}
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <hr className="mt-12" />
      {post.component}
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/updates"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  );
}
