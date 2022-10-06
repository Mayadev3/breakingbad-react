import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import Results from "./Results.js";
import Spinner from "./spinner.gif";

export default function Form() {
  //let [keyWord, setKeyWord] = useState(null);
  let [infos, setInfos] = useState([]);

  function handleResponse(response) {
    console.log(response.data);
    setInfos(response.data);
  }

  function handleChange(event) {
    //setKeyWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://www.breakingbadapi.com/api/characters`;
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
