// Todo Types

interface Todo {
  id: number;
  content: string;
  isDone: boolean;
  category: string;
  tags?: string[];
}

interface UpdatedTodo {
  id: number;
  content?: string;
  isDone?: boolean;
  category?: string;
  tags?: string[];
}

// CREATE

interface CreateTodo {
  (
    content?: string,
    isDone?: boolean,
    category?: string,
    tags?: string[]
  ): Todo;
}
// READ

interface GetTodo {
  (id: number): Todo;
}

interface GetAllTodos {
  (): Todo[];
}

// UPDATE

interface UpdateTodo {
  (id: number, body: UpdatedTodo): Todo;
}

interface UpdateTag {
  (id: number, tagIndex: number, tag: string): Todo;
}

// DELETE

interface DeleteTodo {
  (id: number): Todo[];
}

interface DeleteAllTodos {
  (): void;
}

interface DeleteTag {
  (id: number, tagIndex: number): Todo;
}

interface DeleteAllTags {
  (id: number): Todo;
}
