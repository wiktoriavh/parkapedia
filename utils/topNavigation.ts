export const topNavigations: TopNavigationType[] = [
  {
    name: "home",
    href: "/"
  },
  {
    name: 'dinosaurs',
    href: '/dinosaurs',
  },
  {
    name: 'biomes',
    href: '/biomes',
  },
  {
    name: 'campaign',
    href: '/campaign',
  },
];

export type TopNavigationType = {
  name: string;
  href: string
}