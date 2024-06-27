import { notFound, useParams } from "next/navigation";

import { GetStaticPaths, GetStaticPropsContext, Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { absoluteUrl, cn, formatDate } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Post, allPosts } from "@/posts/post";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface PostPageProps {
  slug: string;
}

// export async function generateMetadata({
//   params,
// }: PostPageProps): Promise<Metadata> {
//   console.log({ params }, "test");
//   const post = await getPostFromParams(params);

//   if (!post) {
//     return {};
//   }

//   const url = process.env.NEXT_PUBLIC_APP_URL;

//   const ogUrl = new URL(`${url}/api/og`);
//   ogUrl.searchParams.set("heading", post.title);
//   ogUrl.searchParams.set("type", "Blog Post");
//   ogUrl.searchParams.set("mode", "dark");

//   return {
//     title: post.title,
//     description: post.description,
//     authors: [{ name: "alex", url: "https://clocktower.fyi" }],
//     openGraph: {
//       title: post.title,
//       description: post.description,
//       type: "article",
//       url: absoluteUrl(post.slug),
//       images: [
//         {
//           url: ogUrl.toString(),
//           width: 1200,
//           height: 630,
//           alt: post.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: post.title,
//       description: post.description,
//       images: [ogUrl.toString()],
//     },
//   };
// }

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
