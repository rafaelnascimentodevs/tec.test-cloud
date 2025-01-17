import "./styles.css";
import { data, useParams } from "react-router-dom"
import { useEffect} from "react";
import axios from "axios";


export function OneEnt({entity}) {

  const { id } = useParams();
  function handleOneEnt() {
    axios.get(`/entitys/${id}`)
    then(response => console.log(response.data.entitys))
    console.log('Detalhes da empresa:', id)
  }
  
  useEffect(() => {
    axios.get(`/entitys/${id}`)
    .then(response => console.log(response.data))
  }
  , [])

  return (
    <article className="onePostContainer">
      <h2>Detalhes da Empresa</h2>
      <p>
        {entity.empresa}
      </p>
      <p>
        {entity.cnpj}
      </p>
      <p>
        {entity.email}
      </p>
      <p>
        {entity.telefone}
      </p>
      <p>
        {entity.endereco}
      </p>
    </article>
  );
}
