import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import Results from "./Results.js";

export default function Form() {
  let [keyWord, setKeyWord] = useState();

  function handleChange(event) {
    setKeyWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for Character..."
          className="searcher"
          onChange={handleChange}
        />
      </form>
      <Results result={keyWord} />
    </div>
  );
}
