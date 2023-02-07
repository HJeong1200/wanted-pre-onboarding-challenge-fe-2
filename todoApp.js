// Todo Types

/**
 * @type {{id: number, content: string, isDone: boolean, category: string, tags?:string[]}}
 *
 */
let Todo;

/**
 * @type {{id: number, content?: string, isDone?: boolean, category?: string, tags?:string[]}}
 *
 */
let UpdatedTodoBody;

// CREATE

/**
 * @param {string?} content
 *
 */
function createTodo() {}

// READ

/**
 * @param {number} id
 *
 * @returns {Todo} todo
 */
function getTodo(id) {}

/**
 * @return {Todo[]} todos
 */
function getAllTodos() {}

// UPDATE

/**
 * @param {UpdatedTodoBody} body
 *
 * @returns {Todo[]} todos
 */
function updateTodo() {}

/**
 * @param {number} id
 * @param {number} tagIndex
 * @param {string} tag
 *
 * @returns {Todo} todo
 */
function updateTag() {}

// DELETE

/**
 * @param {number} id
 *
 * @returns {Todo[]} todos
 */
function deleteTodo() {}

/**
 * @returns {null}
 */
function deleteAllTodos() {}

/**
 * @param {number} id
 * @param {string} tag
 *
 * @returns {Todo} todo
 */
function deleteTag() {}

/**
 * @param {number} id
 *
 * @returns {Todo} todo
 */
function deleteAllTags() {}
