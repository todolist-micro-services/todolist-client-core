import { Identifiable, initialList, initialUser, List, User } from "./main.ts";

interface Task {
  name: string;
  description: string;
  creationDate: Date;
  creator: User;
  list: Identifiable<List>;
}

const initialTask: Task = {
  name: "",
  description: "",
  creationDate: new Date(),
  creator: initialUser,
  list: { ...initialList, id: 0 },
};

export { initialTask };
export type { Task };
