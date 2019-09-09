import React from "react";
import Informacoes from "./components/Resume/informacoes";
import Skill from "./components/Resume/skills";
import Experiencia from "./components/Resume/experiencias";
import Lingua from "./components/Resume/linguas";
import Formacao from "./components/Resume/formacao";

import "./styles.css";

function App() {
  return (
    <li>
      <center>
        <h1>Currículo!</h1>
        <li><Informacoes name="Renan" idade="20" cidade="São João da Boa Vista" /></li>
        <li><Skill skill="Analista de Sistemas" /></li>
        <li><Experiencia experiencia="Desenvolvimento Web" /></li>
        <li><Lingua lingua="Inglês Avançado e Espanhol Básico" /></li>
        <li><Formacao formacao="Graduação em ADS" /></li>
      </center>
    </li>
  );
}

export default App;
