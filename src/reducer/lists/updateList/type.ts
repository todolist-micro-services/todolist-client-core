import { Identifiable, Status, initialList as init, List } from "@core/dto";

const initialList = {
  status: undefined as Status,
  list: { ...init, id: 0 } as Identifiable<List>,
};

export { initialList };
