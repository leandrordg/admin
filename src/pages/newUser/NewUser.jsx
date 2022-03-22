import { Link } from "react-router-dom";
import "./newUser.css";

export default function newUser() {
  return (
    <div className="newUser">
      <div className="newUserTitle">
        <h1>Novo Usuário</h1>
        <Link to="/users">
          <button className="newUserBtn">Voltar</button>
        </Link>
      </div>
      <form className="newUserForm">
        <div className="newUserItens">
          <div className="newUserInfo">
            <h3>Informações Pessoais</h3>
            <div className="newUserItem">
              <label>Usuário</label>
              <input type="text" placeholder="digite aqui.." />
            </div>
            <div className="newUserItem">
              <label>Nome Completo</label>
              <input type="text" placeholder="digite aqui.." />
            </div>
            <div className="newUserItem">
              <label>Email</label>
              <input type="email" placeholder="digite aqui.." />
            </div>
            <div className="newUserItem">
              <label>Senha</label>
              <input type="password" placeholder="digite aqui.." />
            </div>
          </div>
          <div className="newUserContact">
            <h3>Informações de Contato</h3>
            <div className="newUserItem">
              <label>Telefone</label>
              <input type="text" placeholder="digite aqui.." />
            </div>
            <div className="newUserItem">
              <label>Endereço</label>
              <input type="text" placeholder="digite aqui.." />
            </div>
            <label className="newUserLabel">Gênero</label>
            <div className="newUserGender">
              <input type="radio" name="gender" id="male" value="male" />
              <label for="male">Masculino</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label for="female">Feminino</label>
              <input type="radio" name="gender" id="other" value="other" />
              <label for="other">Outros</label>
            </div>
            <button className="newUserBtn mt-20">Cadastrar</button>
          </div>
        </div>
      </form>
    </div>
  );
}
