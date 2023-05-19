import style from "./Home.module.css";
import Container from "../layout/Container";

export default function Home() {
  return (
    <Container>
      <div className={style.father}>
        <h1>home</h1>
      </div>
    </Container>
  );
}
