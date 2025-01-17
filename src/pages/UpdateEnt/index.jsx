import axios from "axios";
import { Form } from "../../components/Form";
import "./styles.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export function UpdateEnt() {

    const { id } = useParams();

    function handleUpdateEnt(data) {
        axios.put(`/entitys/${id}`, data)
        }
    
        useEffect(() => {
        axios.get(`/entitys/${id}`)
        .then(response => console.log(response.data))
        }, [])
    
    return (
        <div>
            <Form title={'Atualizar Informações'} textButton={'Atualizar'} onAction={handleUpdateEnt}/>
        </div>
    )
}