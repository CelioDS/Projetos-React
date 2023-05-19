import styles from "./ProjectForm.module.css";
import Input from "../Form/Input";
import Select from "../Form/Select";
import Submit from "../Form/Submit";
import LinkButton from "../Layout/LinkButton";

import { useEffect, useState } from "react";

export default function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categoria, setCategorias] = useState([]);
  const [project, setproject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categorias", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategorias(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
    //console.log(project)
  };

  function handleChange(e) {
    setproject({ ...project, [e.target.name]: e.target.value });
  }
  function handleCategory(e) {
    setproject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
    console.log(project);
  }

  return (
    <div>
      <form onSubmit={submit} className={styles.form}>
        <div>
          <Input
            type="text"
            text="Nome do projeto"
            name="name"
            placeholder="insira o nome do projeto..."
            handleOnChange={handleChange}
            value={project.name ? project.name.charAt(0).toUpperCase() + project.name.slice(1) : ""}

          ></Input>
        </div>
        <div>
          <Input
            type="number"
            text="Orçamento do projeto"
            name="budget"
            placeholder="insira o orçamento total..."
            handleOnChange={handleChange}
            value={project.budget ? project.budget : ""}
          ></Input>
        </div>
        <div>
          <Select
            name="category_id"
            text="Selecione a categoria"
            options={categoria}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ""}
          ></Select>
        </div>
        <div className={styles.area_btn}>
          <Submit text={btnText} />
          <LinkButton
            className={styles.button}
            to="/Projects"
            text="Ver projetos"
          />
        </div>
      </form>
    </div>
  );
}
