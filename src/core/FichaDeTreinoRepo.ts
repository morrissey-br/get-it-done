import { FichaDeTreino } from "./FichaDeTreino";
import { ID } from "./ID";

export interface FichaDeTreinoRepo {
  getAll(): Promise<FichaDeTreino[]>;
  getById(id: ID): Promise<FichaDeTreino>;
  create(ficha: FichaDeTreino): Promise<void>;
  update(ficha: FichaDeTreino): Promise<void>;
  delete(id: ID): Promise<void>;
}
