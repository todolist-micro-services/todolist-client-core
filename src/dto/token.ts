interface Token {
  value: string;
  expirationDate: string;
}

const initialToken: Token = {
  value: "",
  expirationDate: "",
};

export { initialToken };
export type { Token };
