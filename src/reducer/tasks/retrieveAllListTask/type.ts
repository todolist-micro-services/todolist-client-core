import { Identifiable, Status, Task } from "@core/dto";

const initialTask = {
  status: undefined as Status,
  tasks: [] as Identifiable<Task>[],
};

export { initialTask };
