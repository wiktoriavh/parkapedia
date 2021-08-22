export type DinosaurType = {
  name: string;
  class: DinoClasses;
  image: string;
  dino_information: DinoInformation;
  affect: Affect;
  exhibit: GrassBiome | SwampBiome | SandBiome;
  egg_items: EggItemsType;
  size: string;
  food: string;
  tier: number;
  herd: boolean;
};

export type DinoClasses =
  | 'ankylosauria'
  | 'ceratopsia'
  | 'ornithopoda'
  | 'sauropoda'
  | 'stegosauria'
  | 'theropoda';

export type Affect = {
  appeal: number;
  scariness: number;
  damage: number;
};

export type DinoInformation = {
  type_species: string;
  length: number;
  weight: number;
  height: number;
  period: string;
};

export type EggItemsType = {
  footprint: number;
  skull: number;
  gem: number;
};

export type Exhibit<Tiles extends string, Biomes extends string> = {
  exhibit_size: number;
  tiles: Tiles;
  biome: Biomes;
}

export type GrassBiome = Exhibit<'grass', 'taiga' | 'forest' | 'rainforest'>;

export type SwampBiome = Exhibit<'swamp', 'swamp' | 'tundra' | 'alpine'>;

export type SandBiome = Exhibit<'sand', 'prairie' | 'savannah' | 'desert'>;
