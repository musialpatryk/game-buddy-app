
export interface ICategory {
  id: number;
  name: string;
}

export interface IGameDetails {
  description?: string;
  rules?: string;
  categories: ICategory[];
}
