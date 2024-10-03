import { Post } from "./post";
import Script from "next/script";

const component = (
  <div>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      The ability of the balloonist is getting updated in a future release (It
      is not considered official until it has been released in the official tool
      or communicatedon the unofficial discord)
    </p>
    <br></br>
    <p>
      <strong className="text-3xl">
        Each night, you learn a player of a different character type than last
        night. [+0 or +1 Outsider]
      </strong>
    </p>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      This is a fairly big change and has lead to a bunch of discussion in
      online spaces with the most contentious part around the outsider count
      change.
    </p>
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      I've changed the definite "+1 Outsider" to a more vague "+0 or +1
      Outsider" so that the Balloonist is not confirmable. It is a little
      counter-intuitive, but a Townsfolk that definitely adds an Outsider is a
      great Townsfolk, because both the Outsider and the Townsfolk can usually
      be confirmed. With this new option to not add an Outsider, the Storyteller
      can occasionally not add an Outsider, which will make the Balloonist more
      balanced and bluffing easier. - Steven Medway
    </blockquote>
    <br></br>
    <blockquote className="twitter-tweet" data-dnt="true" data-theme="dark">
      <p lang="zxx" dir="ltr">
        <a href="https://t.co/XJcN03SWqc">https://t.co/XJcN03SWqc</a>
      </p>
      &mdash; Steven Medway (@Steve_Medway){" "}
      <a href="https://twitter.com/Steve_Medway/status/1804010894768378053?ref_src=twsrc%5Etfw">
        June 21, 2024
      </a>
    </blockquote>
    <Script async src="https://platform.twitter.com/widgets.js" />
  </div>
);

export const newBallonistAbility: Post = {
  _id: 5,
  date: "2024-06-21",
  description: "The balloonist has a new ability",
  image: "/icons/balloonist.webp",
  published: true,
  slug: "new-ballonist-ability-21-06-24",
  title: "New Balloonist Ability",
  component,
};
