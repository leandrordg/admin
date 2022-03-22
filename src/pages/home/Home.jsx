import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../data";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="title">
        <span>
          Início - <strong>Leandro Rodrigues</strong>
        </span>
      </div>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="Análise de usuários"
        grid
        dataKey="Usuario ativo"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
