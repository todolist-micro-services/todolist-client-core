interface Error {
  errorMessage: string | null;
}

const initialError: Error = {
  errorMessage: null,
};

export { initialError };
export type { Error };
