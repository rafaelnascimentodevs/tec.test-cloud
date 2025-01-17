import { useForm } from "react-hook-form";
import "./styles.css";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState:{errors} } = useForm({
    resolver: yupResolver(postSchema)
  });
  function handleCreateEnt(data){
    axios.post('/entitys', data)
    console.log('Empresa criada com sucesso!')
    navigate('/')
    reset ();
  }

  return (
    <form onSubmit={handleSubmit(onAction)}>
      <h2>{title}</h2>
      <div className="field">
        <input placeholder="Empresa" {...register("empresa")} />
        {errors.empresa?.message}
      </div>

      <div className="field">
        <input placeholder="CNPJ" {...register("cnpj")} />
        {errors.cnpj?.message}
      </div>

      <div className="field">
        <input placeholder="E-mail" {...register("email")}/>
        {errors.email?.message}
      </div>

      <div className="field">
        <input placeholder="Telefone" {...register("telefone")}/>
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
