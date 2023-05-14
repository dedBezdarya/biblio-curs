import {
    ContMain,
    CommonCont,
    ContTextOne,
    Bestseller,
    ContTextTwo,
    CartCont,
    ContTextThree,
    Imge,
    ContTextFour,
    ContText,
    BestsCont,
    PopularCont,
    PopularText,
    WelcomeText,
    ContMidOne,
    ContMidTwo,
    MiniTitleText,
    IcoCont,
    FreeRead,
    Subscription,
    Oportunity,
    TypeRead,
    PayRead,
    TextOne,
    TextTwo,
    Sub,
    LetsSub,
    SubBut, LetsButTxt
} from "./BlockThree.style";
import Punch from "../../../images/Img.svg";
import Choice from "../../../images/choice.svg";
import Access from "../../../images/access.svg";
import Eco from "../../../images/eco.svg";
import Usefully from "../../../images/usefuly.svg";
import React from "react";
import CardV2 from '../../cards/cardsV2';
import {useState} from 'react'

const BlockThree = () => {
    const [data, setData] = useState([])
    useState(() => {
        fetch("http://localhost:3001/manga/top")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
    }, [])
    return (
        <CommonCont>
            <BestsCont>
                <Bestseller>Бестселлеры</Bestseller>
            </BestsCont>
            <CartCont>
                {data.map((data) => (
                    <CardV2 key={data.id} {...data}/>
                ))}

            </CartCont>
            <PopularCont>
                <PopularText>Популярные книги</PopularText>
            </PopularCont>
            <CartCont>
                <CardV2 key={1} name={'Человек-бензопила. Книга 2.'} author={'Кэнтаро Миура'}
                        img_url={'.'}/>
                <CardV2 key={1} name={'Человек-бензопила. Книга 2.'} author={'Кэнтаро Миура'}
                        img_url={'.'}/>
                <CardV2 key={1} name={'Человек-бензопила. Книга 2.'} author={'Кэнтаро Миура'}
                        img_url={'.'}/>
                <CardV2 key={1} name={'Человек-бензопила. Книга 2.'} author={'Кэнтаро Миура'}
                        img_url={'.'}/>
                <CardV2 key={1} name={'Человек-бензопила. Книга 2.'} author={'Кэнтаро Миура'}
                        img_url={'.'}/>
            </CartCont>
            <ContMain>
                <ContText>
                    <WelcomeText>Почему читатели выбирают нас</WelcomeText>
                    <ContMidOne>
                        <ContTextOne>
                            <img src={Access}/>
                            <br/>
                            <MiniTitleText>Доступность</MiniTitleText>
                            <br/>
                            Наша онлайн-библиотека доступна
                            в любое время и в любом месте соединения с интернетом. Нет необходимости тратить время
                            на поездки в традиционную библиотеку и искать нужную книгу среди полок.
                        </ContTextOne>
                        <ContTextTwo>
                            <img src={Choice}/>
                            <br/>
                            <MiniTitleText>Большой выбор</MiniTitleText>
                            <br/>
                            Наша онлайн-библиотека предлагает огромный выбор книг, статей, журналов и других материалов.
                            Вам
                            не придется ограничивать себя только теми книгами, которые есть
                            в ближайшей библиотеке.
                        </ContTextTwo>
                    </ContMidOne>
                    <ContMidTwo>
                        <ContTextThree>
                            <img src={Usefully}/>
                            <br/>
                            <MiniTitleText>Удобство использования</MiniTitleText>
                            <br/>
                            В нашей онлайн-библиотеке вы можете легко найти нужную книгу или статью с помощью
                            поисковой
                            системы
                            и не тратить время на поиск по полкам. Также вы можете сохранять закладки
                            и заметки, что упрощает работу
                            с материалами.
                        </ContTextThree>
                        <ContTextFour>
                            <img src={Eco}/>
                            <br/>
                            <MiniTitleText>Экономия денег и времени</MiniTitleText>
                            <br/>
                            Использование онлайн-библиотеки позволяет экономить время и деньги на поездки в
                            традиционную
                            библиотеку и покупку книг. Вам
                            не нужно беспокоиться о сроках возврата книг и штрафах за их просрочку.
                        </ContTextFour>
                    </ContMidTwo>
                </ContText>
                <Imge src={Punch}/>
            </ContMain>

            <Sub>
                <LetsSub>
                    ПОДПИШИСЬ, ЧТОБЫ ПОЛУЧИТЬ БОЛЬШЕ ВОЗМОЖНОСТЕЙ
                </LetsSub>
                <SubBut>
                    <LetsButTxt>Узнать больше</LetsButTxt>
                </SubBut>
            </Sub>
        </CommonCont>
    )
}

export default BlockThree;



