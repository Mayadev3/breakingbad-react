import "./Results.css";
import CharacterItem from "./CharacterItem.js";
export default function Results(props) {
  return (
    <div className="Results">
      {props.result.map(function (item, index) {
        return (
          <section className="cards" key={index}>
            <CharacterItem item={item}></CharacterItem>
          </section>
        );
      })}
    </div>
  );
}
//{props.result.status}
/*<div className="character-images" key={index}>
            <img src={item.img} alt="characters" className="image" />
          </div>*/
