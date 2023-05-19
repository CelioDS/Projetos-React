export default function Button(props) {
  return <button onClick={props.event}>{props.text}</button>;
}
// passando um evendo por meio de props
