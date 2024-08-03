export interface Race {
  id: number;
  name: string;
  description: string;
}

export interface Faction {
  id: number;
  name: string;
  description: string;
  emblem: string;
  races: Race[];
}




export const factions: Faction[] = [
  {
    id: 1,
    name: 'Facção 1',
    description: 'Descrição da Facção 1',
    emblem: 'path/to/faction1-emblem.png',
    races: [
      { id: 1, name: 'Raça 1', description: 'Descrição da Raça 1' },
      { id: 2, name: 'Raça 2', description: 'Descrição da Raça 2' },
      // Outras raças
    ],
  },
  {
    id: 2,
    name: 'Facção 2',
    description: 'Descrição da Facção 2',
    emblem: 'path/to/faction2-emblem.png',
    races: [
      { id: 3, name: 'Raça 3', description: 'Descrição da Raça 3' },
      { id: 4, name: 'Raça 4', description: 'Descrição da Raça 4' },
      // Outras raças
    ],
  },
];
