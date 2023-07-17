import styles from "../Project/ProjectCards.module.css";
import { BsFillTrashFill } from "react-icons/bs";

export default function ServiceCard({
  id,
  name,
  cost,
  description,
  handleRemove,
}) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id, cost);
  };

  return (
    <div className={styles.project_card}>
      <h4 className={styles.services_card}>
        Name: <span>{name}</span>
      </h4>
      <p>
        <span>Custo total: </span>R${cost}
      </p>
      <p>
        <span>Descrição: </span>
        {description}
      </p>
      <div className={styles.project_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}
