import "./styles.css";

export function Form() {
  return (
    <form>
      <h2>Cadastro de Empresa</h2>
      <div className="field">
        <input placeholder="Empresa" />
      </div>

      <div className="field">
        <input placeholder="CNPJ" />
      </div>

      <div className="field">
        <input placeholder="E-mail" />
      </div>

      <div className="field">
        <input placeholder="Telefone" />
      </div>

      <div className="field">
        <input placeholder="Endereco" />
      </div>

      <button>Cadastrar</button>
    </form>
  );
}
