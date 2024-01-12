import { Identifiable, Project, Status } from "@core/dto";

const initialProject = {
  status: undefined as Status,
  projects: [] as Identifiable<Project>[],
};

export { initialProject };
