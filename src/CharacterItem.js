import React from "react";
import "./CharacterItem.css";
export default function CharacterItem(props) {
  return (
    <div className="CharacterItem">
      <img src={props.item.img} alt="character" />
    </div>
  );
}
