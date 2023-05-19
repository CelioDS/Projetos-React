export default function ListItem(props) {
  return (
    <li>
      <a target="_blank" rel="noreferrer" href={props.href}>
        <img key={props.id} src={props.src} alt={props.alt} />
      </a>
    </li>
  );
}
