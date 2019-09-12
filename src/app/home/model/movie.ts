export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  adult: boolean;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  buttonValue: string;
}
