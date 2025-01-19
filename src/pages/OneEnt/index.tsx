import React, { useState, useEffect } from "react"; // Certifique-se de importar o useState
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./styles.css";

interface Entity {
  empresa: string;
  cnpj: string;
  endereco: string;
  telefone: string;
  email: string;
}

export function OneEnt() {
  const [entity, setEntity] = useState<Entity | null>(null); // Tipando o estado com a interface Entity
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/entitys/${id}`)
      .then(response => setEntity(response.data)) 
      .catch(error => console.log(error));
  }, [id]);

  if (!entity) {
    return <div>Carregando...</div>; 
  }

  return (
    <article className="cardContainer">
      <header id="cardheader">
        <h2>{entity.empresa}</h2>
      </header>
      <p>CNPJ</p>
      {entity.cnpj}
      <p>Endereço</p>
      {entity.endereco}
      <p>Telefone</p>
      {entity.telefone}
      <p>Email</p>
      {entity.email}
      <div className="buttonsContainer">
        <button onClick={() => navigate(`/`)}>Voltar</button>
      </div>
    </article>
  );
}
