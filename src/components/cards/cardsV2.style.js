import styled from 'styled-components';

export const Container = styled.div`
    width: 12.8vw;
    height: 28vw;
    display:flex;
    flex-direction:column;
    border-radius: 15px;
    background-color:white;
`
export const ImgBook = styled.img`
    border-radius: 15px;
    min-height: 20vw;
`
export const TextBook = styled.div`
    margin-top: .3vw;
    margin-left: .5vw;
    text-align: left;
    name{
        font-family: Montserrat;
        font-size: 1vw;
        font-weight: 700;
    }
    author{
        font-family:Montserrat,sans-serif;
        font-size:.8vw;
        color: #787878;
    }
`
export const ButtonCont = styled.div`
    margin-top:1vw;
    margin-left:.5vw;
    display: flex;
`
export const ButtonRead = styled.button`
    cursor:pointer;
    border-radius: 43px;
    padding: .5vw 1vw .5vw 1vw;
    display:flex;
    flex-direction: row;
    align-items: center;
    border: 2px solid #000000;
    font-weight: 700;
    font-family:Quicksand,sans-serif;
    font-size:1.5vw;
    background: none;
`
export const ButtonHeart = styled.button`
    margin-left: 2vw;
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
`
export const Cat = styled.div`
    display:grid;
    grid-template-columns: 25% 25% 25% 25%; 
    gap: 1% 1%; 
    padding-left: 30vw;
    padding-right:10vw;
    padding-top: 5vw;
`