import {
  Identifiable,
  Project,
  Status,
  initialProject as init,
} from "@core/dto";

const initialProject = {
  status: undefined as Status,
  project: { ...init, id: 0 } as Identifiable<Project>,
};

export { initialProject };
