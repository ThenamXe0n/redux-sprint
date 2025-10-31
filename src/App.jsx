import TodoForm from "./components/forms/TodoForm";
import TodoTable from "./components/tables/TodoTable";

function App() {
  return (
    <section className="flex bg-[#d1e6ff] h-screen w-screen ">
      <div className="flex-1">
        <TodoForm />
      </div>
      <div className="min-w-[70%]">
        <TodoTable />
      </div>
    </section>
  );
}

export default App;
