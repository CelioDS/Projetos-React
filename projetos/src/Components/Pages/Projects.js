import Message from "../Layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Container from "../Layout/Container";
import LinkButton from "../Layout/LinkButton";
import ProjectCards from "../Project/ProjectCards";
import { useState, useEffect } from "react";
import Loading from "../Layout/Loading";

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoanding] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/Projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data);
          setRemoveLoanding(true);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  function removeProject(id) {
    fetch(`http://localhost:5000/Projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Projeto removido com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/NewProject" text="Criar Projeto"></LinkButton>
      </div>
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCards
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não tem projetos cadastrados</p>
        )}
      </Container>
    </div>
  );
}
