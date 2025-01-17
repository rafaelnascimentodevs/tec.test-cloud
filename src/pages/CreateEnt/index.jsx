import { Form } from "../../components/Form";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CreateEnt() {

  const navigate = useNavigate();

  function handleCreateEnt(data){
    axios.post('/entitys', data)
    navigate('/')
    
  }

  return (
    <div>
      <Form title={'Cadastrar Empresa'} textButton={'Cadastrar'} onAction={handleCreateEnt} />
    </div>
  );
}
