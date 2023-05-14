import styled from "styled-components";
import { NavLink } from "react-router-dom";

// шаблон компонента
/* 
export const  = `
  
`;
*/

//Общий компонент
export const Container = styled.div`
  height: 4vw;
  display: flex;
  justify-content: space-between;
  padding-left: 9vw;
  padding-right: 9vw;
  flex-wrap: nowrap;
`;
//компонент "текст логотип"
export const Logo = styled.a`
  display: flex;
  font-family: "Montserrat";
  font-size: 2.4vw;
  text-decoration: none;
  /* identical to box height */

  /* Black */

  color: #000000;
`;

export const ContainOne = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
`;
export const ContainTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 5.5vw;
  gap: 5vw;
`;
export const ContainThree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 0.25vw;
`;
//стиль компонента "логотип"
export const LogoIMG = styled.img`
  padding-right: 1vw;
`;
//стиль кнопок
export const Buttons = styled.a`
  padding: 0.2vw;
`;
//стиль поиска
export const Search = styled.img`
  height: 1.5vw;
  padding-left: 3.5vw;
`;
//стиль регистрации и авторизации
export const LoginButton = styled.button`
  display: flex;
  align-items: flex-start;
  border: 0.19vw solid #000000;
  border-radius: 30px;
  padding: 0.7vw 40px;
  background-color: #ffffff;
`;
export const RegButton = styled.a`
  display: flex;
  border: none;
  align-items: center;
  padding-right: 1.5vw;
`;


//Фотка с книгой на главной странице
export const bookPhoto = styled.img`
  padding-left: 1vw;
`;
