import React from "react";
import "./Form.css";
export default function Form() {
  return (
    <div className="Form">
      <form>
        <input
          type="text"
          placeholder="Search for Character..."
          className="searcher"
        />
      </form>
    </div>
  );
}
