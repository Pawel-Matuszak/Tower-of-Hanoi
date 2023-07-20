export interface IStack<T> {
  isEmpty(): boolean;
  getSize(): number;
  push(data: T): void;
  pop(): T;
  peek(): T;
}
