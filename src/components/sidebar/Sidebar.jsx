import {
  AttachMoneyOutlined,
  BarChartOutlined,
  ChatBubbleOutlined,
  DynamicFeedOutlined,
  LineStyleOutlined,
  MailOutline,
  PermIdentityOutlined,
  Report,
  StorefrontOutlined,
  TimelineOutlined,
  TrendingUpOutlined,
  WorkOutline,
} from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyleOutlined className="sidebarIcon" />
                Início
              </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineOutlined className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpOutlined className="sidebarIcon" />
              Vendas
            </li>
          </ul>
        </div>

        {/*  */}

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu rápido</h3>
          <ul className="sidebarList">
            <NavLink to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentityOutlined className="sidebarIcon" />
                Usuários
              </li>
            </NavLink>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <StorefrontOutlined className="sidebarIcon" />
                Produtos
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoneyOutlined className="sidebarIcon" />
              Transações
            </li>
            <li className="sidebarListItem">
              <BarChartOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        {/*  */}

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notificações</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedOutlined className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlined className="sidebarIcon" />
              Mensagens
            </li>
          </ul>
        </div>

        {/*  */}

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Pessoal</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <WorkOutline className="sidebarIcon" />
              Gerenciar
            </li>
            <li className="sidebarListItem">
              <TimelineOutlined className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Relatórios
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
