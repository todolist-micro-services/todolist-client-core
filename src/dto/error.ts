interface Error {
  errorMessage: string | null;
  id: number;
  time: Date;
}

const initialError: Error = {
  errorMessage: null,
  id: 0,
  time: new Date(),
};

export { initialError };
export type { Error };
