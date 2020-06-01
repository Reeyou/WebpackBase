import React from 'react'
import Footer from '../../components/Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Styles from './index.scss'

const App = () => (
  <div className={Styles.todo}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App