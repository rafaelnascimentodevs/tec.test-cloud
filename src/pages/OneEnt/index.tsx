import React, { useState, useEffect } from "react";
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
  const [entity, setEntity] = useState<Entity | null>(null);
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
    <article className="onePostContainer">
      <header className="cardHeader">
        <h2>{entity.empresa}</h2>
      </header>
      <section className="entityDetails">
        <div className="detailRow">
          <strong>CNPJ:</strong> {entity.cnpj}
        </div>
        <div className="detailRow">
          <strong>Endereço:</strong> {entity.endereco}
        </div>
        <div className="detailRow">
          <strong>Telefone:</strong> {entity.telefone}
        </div>
        <div className="detailRow">
          <strong>Email:</strong> {entity.email}
        </div>
      </section>
      <div className="buttonsContainer">
        <button className="button" onClick={() => navigate(`/`)}>
          Voltar
        </button>
      </div>
    </article>
  );
}
