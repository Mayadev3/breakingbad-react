import "./Results.css";

export default function Results(props) {
  console.log(props.result);
  return <div className="Results">{props.result}</div>;
}
