import { Id } from "./id";

type Identifiable<Type> = Type & { id: Id };

export type { Identifiable };
