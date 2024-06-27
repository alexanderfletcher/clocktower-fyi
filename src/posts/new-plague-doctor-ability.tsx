import Link from "next/link";
import { Post } from "./post";
import Script from "next/script";

const component = (
  <div>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      The ability of the plague doctor is getting updated in a future release
      (It is not considered official until it has been released in the official
      tool or communicatedon the unofficial discord)
    </p>
    <br></br>
    <p>
      <strong className="text-3xl">
        If you die, the Storyteller gains a Minion ability.
      </strong>
    </p>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      This is a slight difference as previously it was a not in play minion.
    </p>
    <blockquote className="twitter-tweet" data-dnt="true" data-theme="dark">
      <p lang="zxx" dir="ltr">
        <a href="https://t.co/n5DWXnlyX3">https://t.co/n5DWXnlyX3</a>
      </p>
      &mdash; Steven Medway (@Steve_Medway)
      <a href="https://twitter.com/Steve_Medway/status/1805534403264922050?ref_src=twsrc%5Etfw">
        June 25, 2024
      </a>
    </blockquote>
    <script async src="https://platform.twitter.com/widgets.js"></script>
  </div>
);

export const newPlagueDoctorAbility: Post = {
  _id: 1,
  date: "2024-06-25",
  description: "A new ability for the harpy has been revealed",
  image: "/icons/plaguedoctor.png",
  published: true,
  slug: "new-plague-doctor-ability-25-06-24",
  title: "Upcoming Change to the Plague Doctor",
  component,
};
