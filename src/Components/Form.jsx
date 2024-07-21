import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { TodoContext } from "../App";
import { useContext } from "react";


const Form = () => {
  const {setTodos}=useContext(TodoContext);
  const handleSubmit = (event) => {
    console.log("Form Submitted");
    event.preventDefault(); //prevent rerendereing-auto when hit submit

    let value = event.target.elements.toDo.value;
    console.log(value);

    const newToDo = {
      title: value,
      id: crypto.randomUUID(),
      is_completed: false,
    };

    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newToDo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Update localStorage
      return updatedTodos; // Return updated todos state
    });
    event.target.reset(); //reset fields of form after bering submitted
  };

  
  return (
    <div>
        <form autoComplete="none" className="form w-2/4" onSubmit={handleSubmit}>
          <input
            name="toDo"
            id="toDo"
            type="text"
            placeholder="Write Your Task: "
            className="text-white"
          />
          <button className="p-3  bg-[#22C55E] rounded-md">
            {/* <button className="p-3 bg-[#22C55E] rounded-md"> */}
            <FontAwesomeIcon icon={faSquarePlus} size="xl" />
          </button>
        </form>
      </div>
    
  );
};

export default Form;
