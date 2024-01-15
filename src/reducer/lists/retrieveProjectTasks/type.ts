import { Identifiable, List, Status } from "@core/dto";

const initialList = {
  status: undefined as Status,
  lists: [] as Identifiable<List>[],
};

export { initialList };
