import M from "materialize-css";
import * as S from "./styles";

import Logo from "../../assets/tractian.svg";

import { useState, useEffect } from "react";
import Card from "../../components/Card";

export default function Dashboard() {
  // eslint-disable-next-line no-unused-vars
  const [tabs, setTabs] = useState(null);

  useEffect(() => {
    setTabs(M.Tabs.init(document.querySelector(".tabs")));
  }, []);

  return (
    <S.Container>
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <S.Logo src={Logo} alt="tractian" />
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab">
              <a href="#dashboard">Dashboard</a>
            </li>
            <li className="tab">
              <a href="#companies">Companies</a>
            </li>
            <li className="tab disabled">
              <a href="#admin">Admin area</a>
            </li>
          </ul>
        </div>
      </nav>
        {DashboardContent()}
        {CompaniesContent()}
        {AdminContent()}
    </S.Container>
  );

  function DashboardContent() {
    return (
      <S.Dashboard id="dashboard" className="col s12">
        <h2>Welcome, Name</h2>
        <h2>Your Company</h2>
        <Card color="#214fbc" title="My company example name" />
        <Card color="red" title="My other company" />
        <h2>Assets with low health</h2>
      </S.Dashboard>
    );
  }

  function CompaniesContent() {
    return (
      <div id="companies" className="col s12">
        This is a content of companies
      </div>
    );
  }

  function AdminContent() {
    return (
      <div id="admin" className="col s12">
        This is a content of admin
      </div>
    );
  }
}
