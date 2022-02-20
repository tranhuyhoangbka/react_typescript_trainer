export interface IPagination<T> {
  status: string,
  data: {
    total: number;
    page: number;
    page_size: number;
    items: T[];
  }
}