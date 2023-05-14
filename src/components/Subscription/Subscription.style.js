import styled from "styled-components";
import {NavLink} from "react-router-dom";
export const TypeRead = styled.div`
  display: flex;
  gap: 14.75vw;
  padding-top: 2vw;
`;

export const FreeRead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 80px 86px;

  position: absolute;
  width: 14.8vw;
  height: 32.6vw;
  left: 10vw;

  background: #FFF2D0;
  border-radius: 1vw;
`;
export const PayRead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 80px 86px;


  position: absolute;
  width: 14.8vw;
  height: 32.6vw;
  left: 57.375vw;

  background: #7380FF;
  border-radius: 1vw;
`;
export const TextOne = styled.text`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #000000;

`;

export const TextTwo = styled.text`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  color: #000000;
  padding-bottom:5vw;
`;