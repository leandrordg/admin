import Chart from "../../components/chart/Chart";
import { Link } from "react-router-dom";
import { productData } from "../../data";
import "./product.css";
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Editar produto</h1>
        <Link to="/products">
          <button className="productButton">Voltar</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey="Vendas"
            title="Performance de vendas"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://img.terabyteshop.com.br/produto/g/placa-de-video-msi-geforce-rtx-3090-gaming-trio-24gb-gddr6x-384bit-geforce-rtx-3090-gaming-trio_104329.png"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">RTX 3090</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Vendas:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Ativo:</span>
              <span className="productInfoValue">sim</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Em estoque:</span>
              <span className="productInfoValue">não</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Nome do Produto</label>
            <input type="text" placeholder="RTX 3090" />
            <label>Em estoque</label>
            <select name="inStock" id="inStock">
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </select>
            <label>Ativo</label>
            <select name="active" id="active">
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://img.terabyteshop.com.br/produto/g/placa-de-video-msi-geforce-rtx-3090-gaming-trio-24gb-gddr6x-384bit-geforce-rtx-3090-gaming-trio_104329.png"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" hidden />
            </div>
            <button className="productButton">Atualizar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
