// Todo 목록
let todos: Todo[] = [];

// CREATE
const createTodo: CreateTodo = (content, isDone, category, tags) => {
  let body: Todo = {} as Todo;

  body.id = todos.length + 1;
  if (content) body.content = content;
  if (isDone) body.isDone = isDone;
  if (category) body.category = category;
  if (tags) body.tags = tags;

  todos.push(body);
  return body;
};

// READ
const getTodo: GetTodo = (id) => {
  return todos[id];
};

const getAllTodos: GetAllTodos = () => {
  return todos;
};

// UPDATE
const updateTodo: UpdateTodo = (id, body) => {
  const oldTodo = todos[id];
  const newTodo = { ...oldTodo, ...body };

  todos[id] = newTodo;
  return todos[id];
};

const updateTag: UpdateTag = (id, tagIndex, tag) => {
  let oldTag = todos[id].tags;

  if (!oldTag) {
    oldTag = [tag];
  } else {
    oldTag.splice(tagIndex, 1, tag);
  }

  todos[id].tags = oldTag;

  return todos[id];
};

// DELETE
const deleteTodo: DeleteTodo = (id) => {
  todos.splice(id - 1, 1);

  return todos;
};

const deleteAllTodos: DeleteAllTodos = () => {
  todos = [];
};

const deleteTag: DeleteTag = (id, tagIndex) => {
  if (todos[id].tags) {
    todos[id].tags!.splice(tagIndex, 1);
  }

  return todos[id];
};

const deleteAllTags: DeleteAllTags = (id) => {
  if (todos[id].tags) todos[id].tags = [];

  return todos[id];
};
