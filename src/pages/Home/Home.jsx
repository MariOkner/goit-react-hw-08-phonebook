import { Container } from 'pages/Contacts/Contacts.styled';
import { Image } from './Home.style';

export default function Home() {
  return (
    <Container>
      <Image src={require('../../img/banner.jpg')} alt="a girl with a phone" />
    </Container>
  );
}
