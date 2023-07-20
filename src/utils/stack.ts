import { IStack } from "~/types";

class StackNode<T> {
  data: T;
  next: StackNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class Stack<T> implements IStack<T> {
  private top: StackNode<T> | null;
  private size: number;

  constructor(private capacity: number = Infinity) {
    this.top = null;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  push(data: T) {
    if (this.size === this.capacity) {
      throw new Error("Stack is full");
    }

    const newNode = new StackNode(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop(): T {
    if (this.top === null) {
      throw new Error("Stack is empty");
    }
    const removedNode = this.top;
    this.top = this.top.next;
    this.size--;
    return removedNode.data;
  }

  peek(): T {
    if (this.top === null) {
      throw new Error("Stack is empty");
    }
    return this.top.data;
  }
}

export default Stack;
