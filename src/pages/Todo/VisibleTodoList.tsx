import { connect } from 'react-redux'
import { toggleTodo } from '../../state/actions/todo'
import TodoList from '../../components/TodoList'

//@ts-ignore
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter((t:any) => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter((t:any) => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = (state: any) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

//@ts-ignore
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: (id: any) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList