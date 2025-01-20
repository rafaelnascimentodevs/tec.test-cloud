import { MdDelete } from "react-icons/md";
import "../Card/styles.css";
import { useNavigate } from "react-router-dom";

export function Card({ entity, onDelEntity }) {
  const navigate = useNavigate();

  return (
    <article className="cardContainer">
      <header className="cardHeader">
        <h2>{entity.empresa}</h2>
        <MdDelete 
          onClick={() => onDelEntity(entity.id)} 
          size={28} 
          color="#ed4337" 
          className="deleteIcon" 
        />
      </header>
      <p className="info">E-mail: {entity.email}</p>
      <p className="info">Endereço: {entity.endereco}</p>

      <div className="buttonsContainer">
        <button 
          className="button" 
          onClick={() => navigate(`/OneEntity/${entity.id}`)}
        >
          Ver Empresa
        </button>
        <button 
          className="button" 
          onClick={() => navigate(`/updateEntitys/${entity.id}`)}
        >
          Atualizar
        </button>
      </div>
    </article>
  );
}
