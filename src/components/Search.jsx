import { useState } from "react";
import { Form, SearchBar } from "./styles";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <Form onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <SearchBar
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          value={input}
        />
      </div>
    </Form>
  );
}

export default Search;
