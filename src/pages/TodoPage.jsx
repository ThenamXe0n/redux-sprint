import { lazy ,useState} from "react";
import NavBar from "../components/NavBar";
import TodoForm from "../components/forms/TodoForm";
// import TodoTable from "../components/tables/TodoTable";
const TodoTable = lazy(() => import("../components/tables/TodoTable"));

const TodoPage = () => {
  return (
    <div>
      <section className="flex bg-[#d1e6ff] h-screen w-screen ">
        <div className="flex-1">
          <TodoForm />
        </div>
        <div className="min-w-[70%]">
          <TodoTable />
        </div>
      </section>
    </div>
  );
};

export default TodoPage;
