export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export type TodoContextType = {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    moveTodo: (fromIndex: number, toIndex: number) => void;
  };