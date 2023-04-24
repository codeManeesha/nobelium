import './App.css';
import AddTodo from './components/AddTodoList'
import TodoList from'./components/TodoList'
function App() {
  return (
    <div className="App">
    <h1>My Tasks</h1>
   
    <AddTodo/>
    <div className="List">
    <TodoList/>
    </div>
    </div>
  );
}

export default App;
