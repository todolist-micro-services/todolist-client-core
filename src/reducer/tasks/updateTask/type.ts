import { Identifiable, Status, initialTask as init, Task } from "@core/dto";

const initialTask = {
  status: undefined as Status,
  task: { ...init, id: 0 } as Identifiable<Task>,
};

export { initialTask };
