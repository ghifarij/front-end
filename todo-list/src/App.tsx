import { useEffect, useRef, useState } from "react";
import { ITodo } from "./types/todo";
import Todos from "./components/todos";

function App() {
  const [todo, setTodo] = useState<ITodo[]>([
    { id: 1, desc: "Coding", isDone: false },
    { id: 2, desc: "Eat", isDone: true },
    { id: 3, desc: "Sleep", isDone: false },
    { id: 4, desc: "Repeat", isDone: false },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAdd = () => {
    if (inputRef.current) {
      if (inputRef.current.value == "")
        return alert("input tidak boleh kosong");

      const newTodo: ITodo = {
        id: todo.length ? Math.max(...todo.map((item) => item.id)) + 1 : 1,
        desc: inputRef.current.value,
        isDone: false,
      };
      setTodo((t) => [...t, newTodo]);
      inputRef.current.value = "";
    }
  };

  const handleDelete = (id: number) => {
    const newArr = [...todo].filter((item) => item.id !== id);
    setTodo(newArr);
  };

  const handleDone = (id: number) => {
    const newArr = todo.map((item) => {
      if (item.id == id) {
        return { ...item, isDone: !item.isDone };
      }
      return { ...item };
    });

    setTodo(newArr);
  };

  return (
    <div className="flex flex-col items-center p-10 bg-[#FAF7F0] w-[800px] mx-auto my-10 border-2 border-[#B17457] rounded-xl">
      <h1 className="text-[60px] font-bold text-[#DA8359]">
        To<span className="text-[#B17457]">Do</span>-List
      </h1>
      <Todos todos={todo} handleDelete={handleDelete} handleDone={handleDone} />
      <div className="flex mt-10 min-w-[400px] gap-4">
        <input
          ref={inputRef}
          className="w-full border-2 border-[#CB6040] rounded-md p-2"
          type="text"
          placeholder="Add todo here"
        />
        <button
          className="bg-[#CB6040] p-2 rounded-md text-[#F5F5F7]"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <p className="font-medium text-2xl mt-5">
        Done : {todo.filter((item) => item.isDone == true).length}
      </p>
    </div>
  );
}

export default App;
