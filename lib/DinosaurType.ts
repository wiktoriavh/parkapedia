export type DinosaurType = {
  name: string;
  class: string;
  image: string;
  dino_information: DinoInformation;
  affect: Affect;
  exhibit: Exhibit;
  egg_items: EggItems;
  size: string;
  food: string;
  tier: number;
  herd: boolean;
};

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

export type EggItems = {
  theropoda_footprint: number;
  theropoda_skull: number;
  epic_gem: number;
};

export type Exhibit = {
  tiles: string;
  biome: string;
  exhibit_size: number;
};
