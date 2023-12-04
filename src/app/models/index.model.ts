export interface IStages {
  title: string;
  image: string;
  description: string;
}

export interface ITeam {
  name: string;
  position: string;
  image: string;
  description: string;
  interests: string;
  quotes: string[];
}

export interface Item {
  url: string;
  name: string;
  logo: string;
  title: string[];
  services: string[];
  photos: string[];
}
