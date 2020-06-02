export default class Paginated<T> {
  pagesCount: number;
  totalElements: string;
  objects: Array<T>;
}
