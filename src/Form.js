import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import Results from "./Results.js";

export default function Form() {
  let [keyWord, setKeyWord] = useState(null);
  let [infos, setInfos] = useState(null);

  function handleResponse(response) {
    console.log(response.data[1].img);
    setInfos(response.data[0]);
  }

  function handleChange(event) {
    setKeyWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://www.breakingbadapi.com/api/characters?name=${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
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
      <Results result={infos} />
    </div>
  );
}
