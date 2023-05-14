import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import logo from '../../images/Logo.svg';
import {FooterCont, LogoImg, LogoCont, LText} from "./Footer.style";

const Footer = () => {
    return (
        <div>
            <FooterCont>
                <LogoCont>
                    <LogoImg src={logo}/>
                    <LText>BIBLIO</LText>
                </LogoCont>
            </FooterCont>
        </div>
    )
}

export default Footer;