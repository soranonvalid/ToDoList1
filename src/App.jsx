import { useState, useEffect } from "react";
import Closing from "./components/closing";
import Input from "./components/input";
import RadioGroup from "./components/radioGroup";
import Button from "./components/button";
import Card from "./components/card";

let date = new Date().toLocaleDateString();

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [form, setForm] = useState({
    date: date,
    title: "",
    desc: "",
    status: "To do",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.title || !form.desc) {
      alert("Judul dan deskripsi harus diisi! ");
      return;
    } else {
      console.log(form);
      setTodos([...todos, form]);
      setForm({
        date: date,
        title: "",
        desc: "",
        status: "To do",
      });
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEdit = (index, updatedTodo) => {
    if (!updatedTodo.title || !updatedTodo.desc) {
      alert("Judul dan deskripsi harus diisi! ");
      return;
    } else if (
      updatedTodo.status !== "To do" &&
      updatedTodo.status !== "In Progress" &&
      updatedTodo.status !== "Done"
    ) {
      alert("Status tidak valid! ");
      return;
    } else {
      const newTodos = [...todos];
      newTodos[index] = updatedTodo;
      setTodos(newTodos);
    }
  };

  return (
    <main className="flex flex-col justify-center max-w-[1000px] mx-auto p-4">
      <Closing text="To do List" />

      <div className="py-4">
        <Input
          label="Judul"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Masukan judul..."
        />
        <Input
          label="Deskripsi"
          name="desc"
          type="textarea"
          value={form.desc}
          onChange={handleChange}
          placeholder="Masukan deskripsi..."
        />
        <RadioGroup
          label="status"
          name="status"
          options={["To do", "In Progress", "Done"]}
          value={form.status}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Tambah</Button>
      </div>

      <hr className="border border-black/25 my-5" />

      {/* Nampilin si cardnya */}
      <div
        className={`grid gap-4 max-h-[620px] my-5 overflow-y-scroll ${
          todos.length >= 3
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : todos.length >= 2
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1"
        }`}
      >
        {todos.map((todo, i) => (
          <Card
            key={i}
            title={todo.title}
            desc={todo.desc}
            status={todo.status}
            date={todo.date}
            onEdit={() => {
              const updatedTitle = prompt("Update title:", todo.title);
              const updatedDesc = prompt("Update description:", todo.desc);
              const updatedStatus = prompt(
                "Update status (To do, In Progress, Done):",
                todo.status
              );
              if (updatedTitle && updatedDesc && updatedStatus) {
                handleEdit(i, {
                  title: updatedTitle,
                  desc: updatedDesc,
                  status: updatedStatus,
                });
              }
            }}
            onDelete={() => handleDelete(i)}
          />
        ))}
      </div>
      <Closing text="SORA & KDN. | Copyright 2025©" />
    </main>
  );
}

export default App;
