import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import NewProject from "./Components/Pages/NewProject";
import Company from "./Components/Pages/Company";
import Projects from "./Components/Pages/Projects";
import Project from "./Components/Pages/Project";

import Container from "./Components/Layout/Container";

import NavBar from "./Components/Layout/NavBar";
import Footer from "./Components/Layout/Footer";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/NewProject" element={<NewProject />}></Route>
          <Route path="/Company" element={<Company />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/project/:id" element={<Project />}></Route>
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
