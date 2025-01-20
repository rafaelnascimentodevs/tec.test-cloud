import { useForm } from "react-hook-form";
import "./styles.css";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import InputMask from 'react-input-mask';


const postSchema = (
  yup.object({
    empresa: yup.string().required("O Campo Empresa é obrigatório"),
    cnpj: yup.string().required("O Campo CNPJ obrigatório"),
    email: yup.string().required("O Campo E-mail é obrigatório"),
    telefone: yup.string().required("Campo Telefone é obrigatório"),
    endereco: yup.string().required("Campo Endereço é obrigatório"),
  })
);



export function Form({title, textButton, onAction}) {

  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState:{errors} } = useForm({
    resolver: yupResolver(postSchema)
  });

  async function getDataUpdat(){
    const response = await axios.get(`/entitys/${id}`)
    reset(response.data)
  }
  
  useEffect(() => {
    getDataUpdat()
  }, []);
  

  return (
    <form className="formContainer" onSubmit={handleSubmit(onAction)}>
      <h2>{title}</h2>
      <div className="field">

        <input placeholder="Empresa" {...register("empresa")} />
        {errors.empresa?.message}
      </div>

      <div className="field">
        <InputMask mask={"99.999.999/9999-99"} maskChar="" placeholder="CNPJ" type="text" autoComplete="off" {...register("cnpj")} />
        <script src="./cnpj.js"></script>
        {errors.cnpj?.message}
      </div>

      <div className="field">
        <input type="email" placeholder="E-mail" {...register("email")}/>
        {errors.email?.message}
      </div>

      <div className="field">
        <InputMask mask="(99)99999-9999" maskChar="" placeholder="Telefone" {...register("telefone")}/>
        {errors.telefone?.message}
      </div>

      <div className="field">
        <input placeholder="Endereco" {...register("endereco")} />
        {errors.endereco?.message}
      </div>

      <button type="submit">{textButton}</button>
    </form>
  );
}
