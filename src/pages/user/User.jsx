import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar usuario</h1>
        <Link to="/users">
          <button className="userAddButton">Voltar</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/147472402_2773008959582728_7121946917656230673_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFHckbD0H4UipWQPIbzUBRZeVh37vh-lzZ5WHfu-H6XNjyypgANT3mar3x4QxpEU4mqW8nKECDNSFlWVzkaUkdw&_nc_ohc=eQhlavZtWU8AX-sejY6&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT-jvVXOYBMf1oDKhknuNjZHXppk2-CszwD2PE1qybK0iw&oe=6235E0C9"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Leandro Rodrigues</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Detalhes da conta</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">leandrordg</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">25.10.2004</span>
            </div>
            <span className="userShowTitle">Detalhes do contato</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+55 19 99127-9634</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">lj251004@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">São Paulo | Brazil</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Alterar</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Usuário</label>
                <input
                  type="text"
                  placeholder="leandrordg"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Nome Completo</label>
                <input
                  type="text"
                  placeholder="Leandro Rodrigues"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="lj251004@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Telefone</label>
                <input
                  type="text"
                  placeholder="+55 19 99127-9634"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Endereço</label>
                <input
                  type="text"
                  placeholder="São Paulo | Brazil"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/147472402_2773008959582728_7121946917656230673_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFHckbD0H4UipWQPIbzUBRZeVh37vh-lzZ5WHfu-H6XNjyypgANT3mar3x4QxpEU4mqW8nKECDNSFlWVzkaUkdw&_nc_ohc=eQhlavZtWU8AX-sejY6&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT-jvVXOYBMf1oDKhknuNjZHXppk2-CszwD2PE1qybK0iw&oe=6235E0C9"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" hidden />
              </div>
              <button className="userButton">Atualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
