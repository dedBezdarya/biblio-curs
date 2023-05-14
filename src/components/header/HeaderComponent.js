import {
    Container,
    Logo,
    LogoIMG,
    RegButton,
    LoginButton,
    Search,
    Buttons,
    ContainOne,
    ContainTwo,
    ContainThree,
    Welcome
} from './HeaderComponent.style.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import logo from '../../images/Logo.svg';
import loop from '../../images/loop.svg';
import AuthModal from "../auth/authModal";
import book from '../../images/bookPhoto.svg';
import {BrowserRouter} from 'react-router-dom';
import RegistrationForm from "../registration/registration";
import RegModal from "../registration/RegistModal";



const Header = () => {
    return (
        <div>
            <Container>
                <ContainOne>
                    <Logo href='/'><LogoIMG src={logo}/> BIBLIO</Logo>
                    <Search src={loop}/>
                </ContainOne>
                <ContainTwo>
                    <Link to={'/cardv2'}><Buttons>Каталог</Buttons></Link>
                    <Buttons>Рекомендации </Buttons>
                    <Buttons>Подписка</Buttons>
                </ContainTwo>
                <ContainThree>
                    <RegButton><RegModal>Регистрация</RegModal></RegButton>
                    <LoginButton>
                        <AuthModal>Вход</AuthModal>
                    </LoginButton>
                </ContainThree>
            </Container>
            {/* Каталог
        Рекомендации
        Подписка */}
        </div>
    )
}

export default Header;