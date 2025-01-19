
import { MdDelete } from "react-icons/md";
import "../Card/styles.css";
import { useNavigate } from "react-router-dom";

export function Card({ entity, onDelEntity }) {

  const navigate = useNavigate();
  return (
      <article className="cardContainer">
        < header id="cardheader" >
          <h2>{entity.empresa}</h2>
          <MdDelete onClick={() => onDelEntity(entity.id)} size={28} color="#ed4337" />
        </header>
          <p>{entity.email}</p>
          <p>{entity.endereco}</p>

          <div className="buttonsContainer">
            <button onClick={() => navigate(`/OneEntity/${entity.id}`)}>Ver Empresa</button>
            <button onClick={() => navigate(`/updateEntitys/${entity.id}`)}>Atualizar</button>
          </div>
      </article>
  );
}
