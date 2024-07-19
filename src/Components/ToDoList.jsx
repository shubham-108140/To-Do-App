const ToDoList = ({todo}) => {
  return (
    <ol className="todo_list">
      {todo && todo.length > 0 ? (todo?.map((itemValue, itemIndex) => <Item key={itemIndex} item={itemValue} />)) : 
      (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
};

const Item = ({item}) => {
  return (
    <li id={item?.id} className="todo_item">
      <button className="todo_items_left">
        {/* <svg>
          <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
        </svg> */}
        <p>{item?.title}</p>
      </button>
      <div className="todo_items_right">
        <button>
          <span className="visually-hidden">Edit</span>
          {/* <svg>
            <path d="" />
          </svg> */}
        </button>
        <button>
          <span className="visually-hidden">Delete</span>
          {/* <svg>
            <path d="" />
          </svg> */}
        </button>
      </div>
    </li>
  );
};
export default ToDoList;
