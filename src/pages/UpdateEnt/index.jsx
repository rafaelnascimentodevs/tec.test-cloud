import axios from "axios";
import { Form } from "../../components/Form";
import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";

export function UpdateEnt() {

    const navigate = useNavigate();
    const { id } = useParams();

    function handleUpdateEnt(data) {
        axios.put(`/entitys/${id}`, data)
        navigate('/')
        }
    
    return (
        <div>
            <Form title={'Atualizar Informações'} textButton={'Atualizar'} onAction={handleUpdateEnt}/>
        </div>
    )
}