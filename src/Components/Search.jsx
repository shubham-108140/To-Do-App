import { useEffect, useState,useContext } from "react";
import { TodoContext } from "../App";


const Search = () => {
  const [query,setLocalQUery]=useState("");
  const { setQuery } = useContext(TodoContext);

  const handleInputChange =(event)=>{
    const value = event.target.value;
    setLocalQUery(value);
    setQuery(value);
  }
  
  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
      <form autoComplete="none" className="form mr-5 w-3/4">
        <input
          name="search"
          id="toDo"
          type="text"
          placeholder="Search..."
          className="text-white"
          onChange={handleInputChange}
          value={query}
        />
      </form>

  );
};

export default Search;
