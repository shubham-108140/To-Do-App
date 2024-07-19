const Form = ({setTodos}) => {

    const handleSubmit =(event)=>{
        console.log("Form Submitted")
        event.preventDefault(); //prevent rerendereing-auto when hit submit
        let value = event.target.elements.toDo.value;
        console.log(value);
        setTodos((prevtodo)=>{
          return [...prevtodo,{title:value,id:crypto.randomUUID(),is_completed:false}]
        })

        event.target.reset();   //reset fields of form after bering submitted
    }
  return (
    <div>
      <form autoComplete="none" className="form" onSubmit={handleSubmit}>
      {/* <label htmlFor="todo">
        </label> */}
        <input
          name="toDo"
          id="toDo"
          type="text"
          placeholder="Write Your Next Task: "
        />
      <button >
        <span className="visually-hidden">Submit</span>
        <svg>
          <path d="" />
        </svg>
      </button>
      </form>
    </div>
  );
};

export default Form;
