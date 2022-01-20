const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  alert('New TODO button clicked!')
  list.push('todo-text')
}

class Set {
  constructor(arr) {
    this. arr = arr
  }

  add(val) {
    if (!this.has(val)) this.arr.push(val)
  }

  delete(val) {

  }

  has(val) {
    return this.arr.includes(val)
  }
  
}