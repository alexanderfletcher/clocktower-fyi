import Link from "next/link";
import { Post } from "./post";
import Script from "next/script";

const component = (
  <div>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      The Summoner-Preacher has a new upcoming jinx (It is not considered
      official until it has been released in the official tool or communicatedon
      the unofficial discord)
    </p>
    <br></br>
    <p>
      <strong className="text-2xl">
        If the Preacher chose the Summoner on or before the 3rd night, the
        Summoner chooses which Demon, but the Storyteller chooses which player.
      </strong>
    </p>
    <br></br>
    <blockquote className="twitter-tweet" data-dnt="true" data-theme="dark">
      <p lang="zxx" dir="ltr">
        <a href="https://t.co/gu9k0kgL6V">https://t.co/gu9k0kgL6V</a>
      </p>
      &mdash; Steven Medway (@Steve_Medway)
      <a href="https://twitter.com/Steve_Medway/status/1805067272807215323?ref_src=twsrc%5Etfw">
        June 24, 2024
      </a>
    </blockquote>
    <Script async src="https://platform.twitter.com/widgets.js" />
  </div>
);

export const summonerPreacherJinx: Post = {
  _id: 3,
  date: "2024-06-24",
  description: "A new jinx for the summoner - preacher has been revealed",
  image: "/icons/summoner.png",
  published: true,
  slug: "summoner-preacher-jinx-24-06-24",
  title: "New Summoner - Preacher Jinx",
  component,
};
