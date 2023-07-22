export interface IStack<T> {
  push(element: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number;
}

export type Stack = number[];

export type StackName = "left" | "middle" | "right";
