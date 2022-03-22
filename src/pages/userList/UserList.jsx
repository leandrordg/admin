import { DataGrid } from "@material-ui/data-grid";
import { userRows } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./userList.css";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "username",
      headerName: "Usuário",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 130 },
    { field: "transaction", headerName: "Valor", width: 160 },
    {
      field: "action",
      headerName: "Acao",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Editar</button>
            </Link>

            <button
              className="userListDelete"
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
    <div className="userList">
      <div className="userTitleItens">
        <h1 className="userTitle">Usuários</h1>
        <Link to="/newuser">
          <button className="userButton">Adicionar</button>
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
