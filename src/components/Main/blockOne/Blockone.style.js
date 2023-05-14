import styled from "styled-components";
import { NavLink } from "react-router-dom";

//весь первый блок
export const Welcome = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 9vw;
  flex-wrap: nowrap;
  margin-top: 7vw;
`;
//картинка книжки
export const BookIMG = styled.img`
  padding-right: 2vw;
`;

// текст приветствия
export const WelText = styled.div`

  font-family: Manrope;
  font-size: 3.5vw;
`;
export const Text = styled.div`
  font-family: Ubuntu, sans-serif;
  font-size: 2vw;
  padding-top: 1vw;
`;

export const LetsButt = styled.a`
  margin-top: 2vw;
  width: 317px;
  height: 70px;
  background: #000000;
  border-radius: 35px;
  color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Quicksand, sans-serif;
  font-size: 2vw;
`;

export const Container = styled.div`
  display: flex;
  max-width: 40vw;
  flex-direction: column;
  text-align: left;
`;
export const Biblio = styled.span`
  color: #fecb33;
`;
