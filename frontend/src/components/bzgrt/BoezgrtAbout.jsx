import React, {useContext, useEffect} from 'react';
import './BoezgrtAbout.css';
import {useDispatch, useSelector} from "react-redux";
import {getBoezgrtHome} from "../../store/apiSlice";
import DOMPurify from "dompurify";
import {translate} from "../../assets/translate";
import {LanguageContext} from "../../LanguageContext";
import BzgrtNavbar from "./BzgrtNavbar";

const BoezgrtAbout = () => {
  const dispatch = useDispatch();
  const {language} = useContext(LanguageContext)
  const {boezgrtHome} = useSelector((state) => state.api)
  useEffect(() => {
    dispatch(getBoezgrtHome())
  }, []);
  return (
      <div>
        <BzgrtNavbar/>
        <div className="boezgrt-about-container">
          <h1 className="boezgrt-title">О КОМПАНИИ</h1>
          <div className="boezgrt-content">
            <p>
              Наше предприятие Бишкекский опытно-экспериментальный завод горно-разведочной техники (БОЭЗГРТ), основанное
              в 1948г и входящее с 2021г в состав ГП «Кыргызгеология», занимается производством дробильно-размольного
              оборудования.
            </p>
            <p>
              Основываясь на многолетнем опыте наших специалистов, мы изготавливаем лабораторные щековые, валковые
              дробилки, измельчители, мельницы, и запасные части к ним.
            </p>
            <p>
              Производство ориентировано на внешний рынок – Казахстан, Российскую Федерацию, Азербайджан, Испанию,
              Болгарию и составляет примерно 80% от всего объема продаж и находит применение в лабораториях проб
              подготовки для дробления, измельчения с целью дальнейших аналитических исследований горных пород и
              минералов.
            </p>
            <p>
              Среди потребителей нашей продукции такие компании как, <span className="boezgrt-highlight">«Казахмыс», «Казцинк», «Казгидромедь», «Goldstone Minerals», «Эссей Стюарт», «КазМинералзБозымчак», «Azerbijan International Maining Company Limited», «Два Кей», «VKLabSеrvise», «Макмал золото» Кара-Балтинский ГМК</span> и
              др.
            </p>
            <p>
              Кроме этого, мы производим инструменты для направленного бурения геологоразведочных скважин – забойный
              комплекс, отклонители и приставки к ним, а также замковые соединения различных типоразмеров.
            </p>
            <p>
              Внимательный подход к вопросу качества продукции, многолетний опыт и выгодное соотношение цены и качества
              сделали нашу продукцию хорошо известной в странах СНГ и дальнего зарубежья.
            </p>
            <p>
              Более чем 80 постоянных клиентов от небольших лабораторий до крупных промышленных горнодобывающих компаний
              оказали доверие продукции нашего предприятия.
            </p>
          </div>
          {boezgrtHome.map((home, index) =>
              <div className="bodyCont"
                   dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(home[translate.translatedApi.body[language]])}}/>
          )}
        </div>
      </div>
  );
};

export default BoezgrtAbout;
