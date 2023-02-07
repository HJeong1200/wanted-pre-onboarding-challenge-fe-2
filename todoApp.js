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
let UpdatedTodo;

// CREATE

/**
 * @param {string?} content
 * @param {boolean?} isDone
 * @param {string?} category
 * @param {string[]?} tags
 *
 * @returns {Todo} todo
 */
function createTodo() {}

// READ

/**
 * @param {number} id
 *
 * @returns {Todo} todo
 */
function getTodo() {}

/**
 * @return {Todo[]} todos
 */
function getAllTodos() {}

// UPDATE

/**
 * @param {number} id
 * @param {UpdatedTodo} body
 *
 * @returns {Todo} todo
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
 * @param {number} tagIndex
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
