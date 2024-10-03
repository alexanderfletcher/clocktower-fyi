import { Button } from "@/components/ui/button";
import { Post } from "./post";
import Script from "next/script";
import Link from "next/link";

const component = (
  <div>
    <p>
      <strong className="text-3xl">
        Once per day, if you publicly guess which players are Minion(s) and
        which are Demon(s), good wins.
      </strong>
    </p>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      The almanac has also been updated by Steven and can be seen found in the
      tweet below.
    </p>
    <br></br>
    <p className="hover:underline">
      <Link href="/characters/alsaahir">
        Check out jinxes and interesting interactions here!
      </Link>
    </p>
    <br></br>
    <blockquote className="twitter-tweet" data-dnt="true" data-theme="dark">
      <p lang="zxx" dir="ltr">
        <a href="https://t.co/4mz8IxEJTm">https://t.co/4mz8IxEJTm</a>
      </p>
      &mdash; Steven Medway (@Steve_Medway){" "}
      <a href="https://twitter.com/Steve_Medway/status/1806597656812331419?ref_src=twsrc%5Etfw">
        June 28, 2024
      </a>
    </blockquote>{" "}
    <Script async src="https://platform.twitter.com/widgets.js" />
  </div>
);

export const alsaahir: Post = {
  _id: 6,
  date: "2024-06-28",
  description:
    "Alsaahir(Townfolk): Once per day, if you publicly guess which players are Minion(s) and which are Demon(s), good wins.",
  image: "/icons/alsaahir.webp",
  published: true,
  slug: "alsahiir-28-06-24",
  title: "Alsaahir Revealed",
  component,
};
