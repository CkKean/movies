export interface Response<T> {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: 1;
  results: T;
  total_pages: number;
  total_results: number;
}
