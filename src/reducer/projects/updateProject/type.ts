import {
  Identifiable,
  Project,
  Status,
  initialProject as init,
} from "@core/dto";

const initialProject = {
  status: undefined as Status,
  projects: { ...init, uuid: 0 } as Identifiable<Project>,
};

export { initialProject };
