import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

function App() {
  // const todos = [
  //  { input: 'Hello! Add your first todo!', complete: true } 
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  // ]


  const [todos, setTodos] = useState([
     { input: 'Hello! Add your first todo!', complete: true }
  ])

  const [selectedTab, setSelectedTab] = useState('Open')

 const handleAddTodo = (newTodo) => {
  const newTodoList = [...todos, {input: newTodo, complete: false}]
  setTodos(newTodoList)
  handleSavaData(newTodoList)

 }
 const handleCompleteTodo = (index) => {
// update/edit/motify

  let newTodoList = [...todos]
  let completedTodo = todos[index]
  completedTodo['complete'] = true
  newTodoList[index] = completedTodo
  setTodos(newTodoList)
  handleSavaData(newTodoList)
 }
 const handleDeleteTodo = (index) => {
  let newTodoList = todos.filter((val, valIndex) => {
    return valIndex !== index
  })
  setTodos(newTodoList)
  handleSavaData(newTodoList)
 }

const handleSavaData = (currTodos) => {
  localStorage.setItem('todo-app', JSON.stringify({todos: currTodos}))
}
 useEffect(() => {
  // guard clause
  if (!localStorage || !localStorage.getItem('todo-app')) { return }
  let db = JSON.parse(localStorage.getItem('todo-app'))
  setTodos(db.todos)
 }, [])

  return (
    <>

      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>

  )
}

export default App
