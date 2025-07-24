
export interface ICategory {
  id: number;
  name: string;
}

export interface IGameDetails {
  description?: string;
  duration?: number;
  min_players?: number;
  max_players?: number;
  rules?: string;
  categories: ICategory[];
}
