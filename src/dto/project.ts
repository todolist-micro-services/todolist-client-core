interface Project {
  name: string;
  description: string;
  creationDate: Date;
  creator: number;
}

const initialProject: Project = {
  name: "",
  description: "",
  creationDate: new Date(),
  creator: 0,
};

export { initialProject };
export type { Project };
