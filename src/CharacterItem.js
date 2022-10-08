import React from "react";
import "./CharacterItem.css";
export default function CharacterItem(props) {
  return (
    <div className="CharacterItem">
      {/*container of entire card collection*/}

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            {/*content of front of card*/}
            <img src={props.item.img} alt="character" />
          </div>
          <div className="card-back">
            {/*content of back of card*/}
            <h1>{props.item.name}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {props.item.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {props.item.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> {props.item.birthday}
              </li>
              <li>
                <strong>Status:</strong> {props.item.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
