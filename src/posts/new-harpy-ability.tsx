import Link from "next/link";
import { Post } from "./post";
import Script from "next/script";

const NewHarpyAbility = (
  <div>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      The ability of the Harpy has been updated. You can check the details
      <Link href="https://twitter.com/Steve_Medway/status/1805543717576884557">
        here
      </Link>
      .
    </p>
    <br></br>
    <p>
      <strong className="text-xl">
        Each night, choose 2 players: tomorrow, the 1st player is mad that the
        2nd is evil, or one or both might die.
      </strong>
    </p>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      This change has not been implemented officially yet, so consider it an
      upcoming change.
    </p>
    <blockquote className="twitter-tweet" data-dnt="true" data-theme="dark">
      <p lang="zxx" dir="ltr">
        <a href="https://t.co/osYIt0Q5Dw">https://t.co/osYIt0Q5Dw</a>
      </p>
      &mdash; Steven Medway (@Steve_Medway){" "}
      <a href="https://twitter.com/Steve_Medway/status/1805543717576884557?ref_src=twsrc%5Etfw">
        June 25, 2024
      </a>
    </blockquote>
    <Script async src="https://platform.twitter.com/widgets.js" />
  </div>
);

export const newHarpyAbility: Post = {
  _id: 1,
  date: "2024-06-25",
  description: "A new ability for the Harpy has been revealed",
  image: "/icons/harpy.png",
  published: true,
  slug: "new-harpy-ability-25-06-24",
  title: "Upcoming Change to the Harpy",
  component: NewHarpyAbility,
};
