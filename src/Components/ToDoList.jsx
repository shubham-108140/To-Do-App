import {
  faCircleCheck,
  faCircleCheck as filledCircle,
} from "@fortawesome/free-solid-svg-icons"; // Import filled and unfilled circle icons
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState, useContext } from "react";
import Alert from "./Alert";
import { TodoContext } from "../App";



// Ensure to rename the component appropriately in Alert.js and import it correctly in ToDoList.js

const ToDoList = () => {
  const {todos , query } = useContext(TodoContext);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(todos); //initially set filteredTodos to all todos
  }, [todos]);

  useEffect(() => {
    //filter todos based on Whenever query changes
    if (query.trim() === "") {
      setFilteredTodos(todos); //reset to all todos if query is empty
    } else {
      const filtered = todos.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTodos(filtered);
    }
  }, [query, todos]);

  return (
    <div className="flex justify-center width-fill p-0">
      {/* <Search setQuery={setQuery}/> */}

      <ol className="todo_list width-fill">
        {filteredTodos && filteredTodos.length > 0 ? (
          filteredTodos?.map((itemValue, itemIndex) => (
            <Item key={itemIndex} item={itemValue}/>
          ))
        ) : (
          <p>Seems lonely in here, what are you up to?</p>
        )}
      </ol>
    </div>
  );
};

const Item = ({item}) => {
  const {setTodos } = useContext(TodoContext);
  const handleSubmit = () => {
    console.log("Complete button clicked!!");
    setTodos((prevToDoState) =>
      prevToDoState.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );
  };

  //Edit
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  const handleEdit = () => {
    setEditing(true);
  };
  const handleInputSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };
  const handleInputBlur = () => {
    setEditing(false);
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      //making cursor to go at the end
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

  const handleInputChange = (event) => {
    setTodos((prevToDoState) => {
      return prevToDoState.map((todo) =>
        todo.id === item.id ? { ...todo, title: event.target.value } : todo
      );
    });
  };

  //Delete
  // const handleDelete = () => {
  //   console.log("Delete Clicked");
  //   setToDos((prevToDoState) => prevToDoState.filter((todo) => todo.id!==item.id))
  // };

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleDelete = () => {
    setIsAlertOpen(true);
  };

  const handleClose = () => {
    setIsAlertOpen(false);
  };

  return (
    <li
      id={item?.id}
      className="todo_item rounded-lg bg-[#DDE6ED] p-4 mb-2 flex items-start justify-around"
      style={{ backgroundColor: item?.is_completed && "#468585" }}
    >
      {editing ? (
        <form className="edit-form" onSubmit={handleInputSubmit}>
          <label htmlFor="edit-todo">
            <input
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />
          </label>
        </form>
      ) : (
        <>
          <button className="todo_items_left" onClick={handleSubmit}>
            {item.is_completed ? (
              <FontAwesomeIcon
                icon={filledCircle}
                size="xl"
                style={{ color: "#22C55E" }}
              />
            ) : (
              <FontAwesomeIcon icon={faCircleCheck} size="xl" />
            )}
            <p
              style={
                item.is_completed ? { textDecoration: "line-through" } : {}
              }
            >
              {item?.title}
            </p>
          </button>

          <div className="todo_items_right">
            {item?.is_completed === false && (
              <button className="mr-3" id="Edit-button" onClick={handleEdit}>
                <FontAwesomeIcon icon={faPenToSquare} size="lg" />
              </button>
            )}
            <button className="mr-3" id="Delete-button" onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrashCan} size="lg" />
            </button>
            <Alert
              open={isAlertOpen}
              onClose={handleClose}
              item={item}
              setToDos={setTodos}
            />
          </div>
        </>
      )}
    </li>
  );
};
export default ToDoList;
