interface IDateTime {
  date: string;
  time: string;
}

export interface IRace {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: {
      lat: string;
      long: string;
      locality: string;
      country: string;
    };
  };
  date: string;
  time: string;
  FirstPractice: IDateTime;
  SecondPractice: IDateTime;
  ThirdPractice?: IDateTime;
  Sprint?: IDateTime;
  Qualifying: IDateTime;
}

export interface IRacesData {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: {
      season: string;
      Races: IRace[];
    };
  };
}
