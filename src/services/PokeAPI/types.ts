export interface TypesResponse {
  count: number;
  next?: any;
  previous?: any;
  results: NameWithURL[];
}

export interface NameWithURL {
  name: string;
  url: string;
}

export interface PokemonByType {
  pokemon: NameWithURL;
  slot: number;
}

export interface ListOfPokemonByTypeResponse {
  id: number;
  name: string;
  pokemon: PokemonByType[];
}

export interface PokemonByTypeResponse {
  data: PokemonCardData;
  status: number;
  statusText: string;
  headers: Headers;
}

export interface Type {
  slot: number;
  type: NameWithURL;
}

export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface PokemonCardData {
  base_experience: number;
  height: number;
  id: number;
  name: string;
  order: number;
  sprites: Sprites;
  weight: number;
  types: Type[];
}

export interface PokemonsResponse {
  count: number;
  next: string;
  previous?: any;
  results: NameWithURL[];
}


