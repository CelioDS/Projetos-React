import styles from "./Project.module.css";
import { parse, v4 as uuidv4 } from "uuid";
import Message from "../Layout/Message";
import Loading from "../Layout/Loading";
import Container from "../Layout/Container";
import ProjectForm from "../Project/ProjectForm";
import ServiceForm from "../service/ServiceForm";
import ServiceCard from "../service/ServiceCard";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Project() {
  // pega o parâmetro "id" da URL
  const { id } = useParams();

  // estado que armazena os dados do projeto
  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);

  // busca os dados do projeto da API quando o componente é montado
  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
          setServices(data.services);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, [id]);

  // estado que controla a exibição do formulário de edição do projeto
  const [showProjectForm, setShowProjectForm] = useState(false);

  const [mensagem, setMensagem] = useState();
  const [type, setType] = useState();

  // função que valida o orçamento e faz a requisição PATCH para atualizar o projeto na API
  function editPost(project) {
    setMensagem("");

    if (project.budget < project.cost) {
      setMensagem("Orçamento não pode ser menor que  custo do projeto!");
      setType("error");
      return false;
    }
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH", //atualiza do o que foi alterado
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        setMensagem(`Projeto ${project.id} atualizado!`);
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function removeService() {}

  // função que alterna a exibição do formulário de edição do projeto
  function toogleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  const [showServiceForm, setShowServiceForm] = useState(false);

  function toogleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  function createService(project) {
    setMensagem("");
    // last service
    const lastService = project.services[project.services.length - 1];
    lastService.id = uuidv4();
    const lastServiceCost = lastService.cost;
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    // maximum value validation
    if (newCost > parseFloat(project.budget)) {
      setMensagem("Orçamento ultrapassado, verifique o valor do seviço!");
      setType("error");
      project.services.pop();
      return false;
    }
    //add service cost to project total cost
    project.cost = newCost;

    //update project
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setShowServiceForm(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {project.name ? (
        // exibe os detalhes do projeto se o nome do projeto existir
        <div className={styles.project_details}>
          <Container customClass="column">
            {mensagem && <Message type={type} msg={mensagem}></Message>}
            <div className={styles.details_container}>
              <h1>
                Projeto: <span>{project.name}</span>
              </h1>
              <button onClick={toogleProjectForm}>
                {/* alterna o texto do botão entre "Editar projeto" e "Fechar projeto" */}
                {!showProjectForm ? "Editar projeto" : "Fechar projeto"}
              </button>
              {!showProjectForm ? (
                // exibe as informações do projeto se o formulário de edição não estiver sendo exibido
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Orçamento:</span> R${project.budget}
                  </p>
                  <p>
                    <span>Total utilizado:</span> R${project.cost}
                  </p>
                </div>
              ) : (
                // exibe o formulário de edição do projeto se o botão de edição foi clicado
                <div className={styles.project_info}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText={"Concluir edição"}
                    projectData={project}
                  />
                </div>
              )}
            </div>

            <div className={styles.service_form_container}>
              <h2>Adcione um serviço</h2>
              <button onClick={toogleServiceForm} className={styles.btn}>
                {/* alterna o texto do botão entre "Editar projeto" e "Fechar projeto" */}
                {!showServiceForm ? "Adicionar serviço" : "Fechar serviço"}
              </button>
              <div className={styles.project_info}>
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText="Adcionar serviço"
                    projectData={project}
                  />
                )}
              </div>
            </div>
            <h2>serviço</h2>
            <Container customClass="Start">
              {services.length > 0 ? (
                services.map((service) => {
                  return (
                    <ServiceCard
                      id={service.id}
                      name={service.name}
                      description={service.description}
                      cost={service.cost}
                      key={service.id}
                      handleRemove={removeService}
                    />
                  );
                })
              ) : (
                <Container>
                  <p>Aguardando serviços...</p>
                  {<Loading />}
                </Container>
              )}
            </Container>
          </Container>
        </div>
      ) : (
        // exibe o componente de carregamento se o nome do projeto ainda não foi carregado
        <Loading />
      )}
    </>
  );
}
