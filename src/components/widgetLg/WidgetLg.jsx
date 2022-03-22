import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Últimas Transações</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Cliente</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Quantidade</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/147472402_2773008959582728_7121946917656230673_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFHckbD0H4UipWQPIbzUBRZeVh37vh-lzZ5WHfu-H6XNjyypgANT3mar3x4QxpEU4mqW8nKECDNSFlWVzkaUkdw&_nc_ohc=eQhlavZtWU8AX-sejY6&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT-jvVXOYBMf1oDKhknuNjZHXppk2-CszwD2PE1qybK0iw&oe=6235E0C9"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Leandro Rodrigues</span>
          </td>
          <td className="widgetLgDate">03 Fevereiro 2022</td>
          <td className="widgetLgAmount">R$ 449,99</td>
          <td className="widgetLgStatus">
            <Button type="Aprovado" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/147472402_2773008959582728_7121946917656230673_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFHckbD0H4UipWQPIbzUBRZeVh37vh-lzZ5WHfu-H6XNjyypgANT3mar3x4QxpEU4mqW8nKECDNSFlWVzkaUkdw&_nc_ohc=eQhlavZtWU8AX-sejY6&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT-jvVXOYBMf1oDKhknuNjZHXppk2-CszwD2PE1qybK0iw&oe=6235E0C9"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Leandro Rodrigues</span>
          </td>
          <td className="widgetLgDate">03 Fevereiro 2022</td>
          <td className="widgetLgAmount">R$ 449,99</td>
          <td className="widgetLgStatus">
            <Button type="Rejeitado" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/147472402_2773008959582728_7121946917656230673_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFHckbD0H4UipWQPIbzUBRZeVh37vh-lzZ5WHfu-H6XNjyypgANT3mar3x4QxpEU4mqW8nKECDNSFlWVzkaUkdw&_nc_ohc=eQhlavZtWU8AX-sejY6&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT-jvVXOYBMf1oDKhknuNjZHXppk2-CszwD2PE1qybK0iw&oe=6235E0C9"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Leandro Rodrigues</span>
          </td>
          <td className="widgetLgDate">03 Fevereiro 2022</td>
          <td className="widgetLgAmount">R$ 449,99</td>
          <td className="widgetLgStatus">
            <Button type="Pendente" />
          </td>
        </tr>
      </table>
    </div>
  );
}
