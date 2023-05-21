import style from "./Home.module.css";
import Container from "../layout/Container";
import ImgE from '../img/empresas.jpg'


export default function Home() {
  return (
    <Container>
      <div className={style.father}>
        <h1>BUSINESS</h1>
        <h2>Bem-Vindo</h2>
        <p>Conheço as empresas cadastradas e descubrar mais sobre elas e seus negocios.</p>
        <img src={ImgE} alt="imagem de empresas" />
      </div>
  
    </Container>
  );
}
