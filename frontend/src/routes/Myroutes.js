import React, {useEffect, useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import HistoryAndMission from "../components/about/HistoryAndMission";
import Main from "../components/main/Main";
import OrganizationalChart from "../components/about/OrganizationalChart";
import AchievementsProjects from "../components/about/AchievementsProjects";
import NewsItem from "../components/news/NewsItem";
import Services from "../components/services/Services";
import Projects from "../components/projects/Projects";
import Contacts from "../components/contacts/Contacts";
import InvestorPage from "../components/about/InvestorPage";
import NewsForm from "../components/news/NewsForm";
import NewsPage from "../components/news/NewsPage";
import MapItem from "../components/map/mapItem";
import NewMapItem from "../components/map/newMapItem";
import EmployeeItem from "../components/about/EmployeeItem";
import AchievementItem from "../components/about/AchievementItem";
import BoezgrtMain from "../components/bzgrt/BoezgrtMain";
import BoezgrtAbout from "../components/bzgrt/BoezgrtAbout";
import BoezgrtProductCard from "../components/bzgrt/BoezgrtProductCard";
import BoezgrtContacts from "../components/bzgrt/BoezgrtContacts";
import BoezgrtProductDetail from "../components/bzgrt/BoezgrtProductDetail";
import GPItem from "../components/about/gpItem";

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
  { id: 12, link: '/newsform', element: <NewsForm/> },
  { id: 13, link: '/mapItem/:mapId', element:<MapItem/>},
  { id: 14, link: '/newMapItem/:mapId', element:<NewMapItem/>},
  { id: 15, link: '/employee/:employeeId', element:<EmployeeItem/>},
  { id: 16, link: '/achievement/:achievementId', element:<AchievementItem/>},
  { id: 17, link: '/boezgrtmain', element: <BoezgrtMain/> },
  { id: 18, link: '/boezgrabout', element: <BoezgrtAbout/> },
  { id: 19, link: '/boezgrproductcard', element: <BoezgrtProductCard/> },
  { id: 20, link: '/boezgrtcontact', element: <BoezgrtContacts/> },
  { id: 21, link: '/boezgrproduct/:productId', element: <BoezgrtProductDetail/>},
  { id: 22, link: '/gp/:gpId', element: <GPItem/>}
];
const Reload = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <React.Fragment key={location.pathname}>{children}</React.Fragment>;
};

const Myroutes = () => {
  const location = useLocation();
  const [key, setKey] = useState(location.pathname);

  useEffect(() => {
    setKey(location.pathname);
  }, [location]);
  return (
    <Routes key={key}>
      {" "}
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={<Reload>{elem.element}</Reload>} key={elem.id} />
      ))}
    </Routes>
  );
};

export default Myroutes;
