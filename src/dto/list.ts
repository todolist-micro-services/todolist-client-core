import { Identifiable } from "./identifiable.ts";
import { initialProject, Project } from "./project.ts";
import { initialUser, User } from "./user.ts";

interface List {
  name: string;
  description: string;
  creator: User;
  parent?: Identifiable<List>;
  project: Identifiable<Project>;
}

const initialList: List = {
  name: "",
  description: "",
  creator: initialUser,
  project: { ...initialProject, id: 0 },
};

export { initialList };
export type { List };
