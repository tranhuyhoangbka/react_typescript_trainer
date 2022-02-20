export interface IPagination<T> {
  status: string,
  data: {
    total: number;
    page: number;
    pageSize: number;
    items: T[];
  }
}