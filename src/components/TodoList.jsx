import { TodoCard } from "./TodoCard";

export  function TodoList (props) {
const {todos} = props


const tab = 'All'

const filtersTodoList = tab === 'All' ? todos : tab === 'Complete' ? todos.filter(val => val.complete) : todos.filter(val => !val.complete)
  return (
    <>
     
      {filtersTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} todoIndex={todoIndex} {...props} />
        )
      })}
    </>
  )
}