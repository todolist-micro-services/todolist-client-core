interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

const initialUser: User = {
  id: 0,
  firstname: "",
  lastname: "",
  email: "",
};

export { initialUser };
export type { User };
