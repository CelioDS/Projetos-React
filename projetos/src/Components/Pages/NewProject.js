import styles from "./NewProject.module.css";
import ProjectForm from "../Project/ProjectForm";
import { useNavigate } from "react-router-dom";

export default function NewProject() {
  const history = useNavigate();

  function CreatePost(project) {
    //initialaze const and services

    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //recirect
        history("/projects", {
          state: { message: "Projeto criado com sucesso!" },
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.new_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm
        handleSubmit={CreatePost}
        btnText="Criar Projeto"
      ></ProjectForm>
    </div>
  );
}
