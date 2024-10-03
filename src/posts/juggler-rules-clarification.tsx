import { Post } from "./post";
import Script from "next/script";

const component = (
  <div>
    <p className="pt-5 pb-5">
      <strong className="text-3xl">
        When making a Juggler guess, the Juggler may not guess the same player
        and character more than once.
      </strong>
    </p>
    <blockquote className="twitter-tweet" data-dnt="true" data-theme="dark">
      <p lang="zxx" dir="ltr">
        <a href="https://t.co/XJcN03SWqc">https://t.co/XJcN03SWqc</a>
      </p>
      &mdash; Steven Medway (@Steve_Medway)
      <a href="https://twitter.com/Steve_Medway/status/1804010894768378053?ref_src=twsrc%5Etfw">
        June 21, 2024
      </a>
    </blockquote>
    <Script async src="https://platform.twitter.com/widgets.js" />
  </div>
);

export const jugglerRuleClarification: Post = {
  _id: 6,
  date: "2024-06-21",
  description:
    "When making a Juggler guess, the Juggler may not guess the same player and character more than once.",
  image: "/icons/juggler.webp",
  published: true,
  slug: "Juggler-rules-clarification-21-06-24",
  title: "Juggler rules clarification",
  component,
};
