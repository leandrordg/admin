import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Receita</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ 1.590,24</span>
          <span className="featuredMoneyRate">
            -11.5 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Comparado com o mês passado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Vendas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ 5.590,24</span>
          <span className="featuredMoneyRate">
            -1.5 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Comparado com o mês passado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Custo</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ 1.590,24</span>
          <span className="featuredMoneyRate">
            +4.3 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Comparado com o mês passado</span>
      </div>
    </div>
  );
}
