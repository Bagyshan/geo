import React from "react";
import { Route, Routes } from "react-router-dom";
import HistoryAndMission from "../components/about/HistoryAndMission";
import Main from "../components/main/Main";
import OrganizationalChart from "../components/about/OrganizationalChart";
import NewsCards from "../components/news/NewsCards";
import AchievementsProjects from "../components/about/AchievementsProjects";
import NewsItem from "../components/news/NewsItem";
import Services from "../components/services/Services";
import Projects from "../components/projects/Projects";
import Contacts from "../components/contacts/Contacts";
import InvestorPage from "../components/about/InvestorPage";
import NewsForm from "../components/news/NewsForm";
import NewsPage from "../components/news/NewsPage";

const PUBLIC_ROUTES = [
  
  { id: 2, link: "/", element: <Main/> },
  { id: 1, link: "/news", element: <NewsPage/> },
  { id: 3, link: "/historyandmission", element: <HistoryAndMission /> },
  { id: 4, link: "/organization", element: <OrganizationalChart /> },
  { id: 5, link: "/achievementsProjects", element: <AchievementsProjects/> },
  { id: 6, link: "/newsitem/:newsId", element: <NewsItem/> },
  { id: 8, link: "/services", element: <Services/> },
  { id: 9, link: "/projects", element: <Projects/> },
  { id: 10, link: "/contacts", element: <Contacts/> },
  { id: 11, link: "/investorpage", element: <InvestorPage/> },
  { id: 12, link: '/newsform', element: <NewsForm/> }
];

const Myroutes = () => {
  return (
    <Routes>
      {" "}
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default Myroutes;
