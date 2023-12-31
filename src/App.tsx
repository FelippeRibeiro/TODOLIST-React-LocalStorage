import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo';
import { TodoStore } from './context/TodoContext';

function App() {
  const { Todos } = TodoStore();

  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden">
        <main className="w-full h-full flex flex-col items-center">
          <h1 className="text-3xl">TODO LIST</h1>
          <h2>Results: {Todos.length}</h2>
          <div className="w-full h-full flex flex-col gap-10 items-center mt-7">
            <CreateTodo />
            <ListTodo className="" />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
