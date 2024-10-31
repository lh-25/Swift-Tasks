export function Header (props) {
const { todos, openTaskCount} = props

const isTasksPlural = todos.length != 1

const taskOrTasks = isTasksPlural? 'tasks' : 'task'
  return (
    <header>
      <h1 className="text-gradient">Swift Tasks</h1>
      <h2 className="text-gradient"> You have {openTaskCount > 0 ?
      ` ${openTaskCount} open ${taskOrTasks}.` : 'no open tasks' }</h2>
    </header>
  )
}