import { newHarpyAbility } from "./new-harpy-ability";
import { newPlagueDoctorAbility } from "./new-plague-doctor-ability";

export type Post = {
  published: boolean;
  date: string;
  _id: number;
  image: string;
  title: string;
  description: string;
  slug: string;
  component: JSX.Element;
};
export const allPosts: Post[] = [newHarpyAbility, newPlagueDoctorAbility];
