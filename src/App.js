import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Search from "./components/Search";
import db from "./components/utils/firebase";
import { TailSpin } from "react-loader-spinner";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const userCollectionRef = collection(db, "todos");
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [searchTodo, setSearchTodo] = useState("");
  const [loader, setLoader] = useState(false);

  const createTodo = (value) => {
    // await addDoc(userCollectionRef,{ title: value })
    setTodo(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSearchTodo("");
    setLoader(true);
    await addDoc(userCollectionRef, { title: todo });
    // setTodos((prvs) => {
    //   return [...prvs, { title: todo }];
    // });
    setTodo("");
    getData();
  };

  const filterTodo = (value) => {
    setSearchTodo(value);
  };

  const deletTodo = async (id) => {
    // setTodos(todos.filter((todo) => todo !== id));
    setLoader(true);
    const todosDoc = doc(db, "todos", id);
    await deleteDoc(todosDoc);
    getData();
  };

  const getData = async () => {
    setLoader(true);
    try {
      const data = await getDocs(userCollectionRef);
      if (data) {
        setLoader(false);
        setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="todos-container">
      <div className="todos-wrapper">
        <h2>Todo List</h2>
        <Search filterTodo={filterTodo} />
        <TodoList todos={todos} deletTodo={deletTodo} searchTodo={searchTodo} />
        {loader ? (
          <TailSpin color="#fff" height={50} width={40} />
        ) : (
          <AddTodo
            createTodo={createTodo}
            submitHandler={submitHandler}
            todo={todo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
