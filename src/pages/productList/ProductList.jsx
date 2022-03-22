import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./productList.css";

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Produto",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.link} />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "desc", headerName: "Descrição", width: 300 },
    { field: "stock", headerName: "Estoque", width: 160 },
    { field: "price", headerName: "Preço", width: 130 },
    {
      field: "action",
      headerName: "Acao",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Editar</button>
            </Link>

            <button
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            >
              Apagar
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productTitleItens">
        <h1 className="productTitle">Produtos</h1>
        <Link to="/newproduct">
          <button className="productBtn">Adicionar</button>
        </Link>
      </div>
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        autoHeight
      />
    </div>
  );
}
