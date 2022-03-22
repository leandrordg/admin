import { Link } from "react-router-dom";
import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <div className="addProduct">
        <h1 className="addProductTitle">Novo Produto</h1>
        <Link to="/products" className="link">
          <button className="addProductButton">Voltar</button>
        </Link>
      </div>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Imagem</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Nome</label>
          <input type="text" placeholder="digite aqui.." />
        </div>
        <div className="addProductItem">
          <label>Estoque</label>
          <input type="text" placeholder="digite aqui.." />
        </div>
        <div className="addProductItem">
          <label>Ativo</label>
          <select id="active" name="active">
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>
        <div className="addProductItem">
          <button className="addProductButton">Criar</button>
        </div>
      </form>
    </div>
  );
}
