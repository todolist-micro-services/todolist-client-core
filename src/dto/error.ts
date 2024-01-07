interface ErrorState {
  errorMessage: string | null;
}

const initialState: ErrorState = {
  errorMessage: null,
};

export { initialState as initialErrorState };
export type { ErrorState };
