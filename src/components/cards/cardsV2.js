import {Container, ImgBook, TextBook, ButtonCont, ButtonHeart, ButtonRead, Cat} from "./cardsV2.style";
import Guts from '../../images/obloshka.svg'
import Heart from '../../images/Heart.svg'

const CardV2 = ({title, author, img_url}) => {
    return (
            <Container>
                <ImgBook src={img_url}/>
                <TextBook>
                    <name>{title}</name>
                    <br/>
                    <author>{author}</author>
                </TextBook>
                <ButtonCont>
                    <ButtonRead>Читать</ButtonRead>
                    <ButtonHeart><img src={Heart}/></ButtonHeart>
                </ButtonCont>
            </Container>
    )
}
export default CardV2;