import {
  Welcome,
  BookIMG,
  WelText,
  Text,
  LetsButt,
  Container,
  Biblio
} from "./Blockone.style";
import book from "../../../images/bookPhoto.svg";

const BlockOne = () => {
  return (
    <Welcome>
      <Container>
        <WelText> Добро пожаловать в нашу <Biblio>BIBLIO</Biblio> </WelText>
        <Text>
          Наша библиотека предлагает широкий выбор литературы для настоящих
          ценителей Новинки и бестселлеры, классика и современность - у нас есть
          все, что вам нужно Приходите к нам за книгами и погрузитесь в
          удивительный мир слов и историй
        </Text>
        <LetsButt>Вперед к чтению</LetsButt>
      </Container>
      <BookIMG src={book} />
    </Welcome>
  );
};
export default BlockOne;
