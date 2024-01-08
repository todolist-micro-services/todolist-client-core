interface Token {
  token: string;
  expiration: string;
}

const initialToken: Token = {
  token: "",
  expiration: "",
};

export { initialToken };
export type { Token };
