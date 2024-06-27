import Image from "next/image";
import Link from "next/link";
import { compareDesc } from "date-fns";

import { formatDate } from "@/lib/utils";
import { allPosts } from "@/posts/post";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Clocktower Updates
          </h1>
          <p className="text-xl text-muted-foreground">
            An unofficial collection of updates on the social deduction game{" "}
            <Link
              className="hover:underline"
              href="https://bloodontheclocktower.com"
            >
              Blood on the Clocktower
            </Link>
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {post.image && (
                <div className="relative h-[250px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    // sizes="100vw"
                    className="rounded-md object-contain border obj bg-muted transition-colors"
                    priority={index <= 1}
                  />
                </div>
              )}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </p>
              )}
              <Link href={`/updates/${post.slug}`} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
      <br></br>
      <footer>
        <p className="text-sm text-muted-foreground text-center">
          This project is not affiliated with The Pandemonium Institute. All
          roles, content are the property of Steven Medway and The Pandemonium
          Institute. Images of tokens are taken from{" "}
          <Link
            className="hover:underline"
            href="https://github.com/nicholas-eden/townsquare"
          >
            the free online tool source
          </Link>
        </p>
      </footer>
    </div>
  );
}
