import { Box, Image } from './Home.style';

export default function Home() {
  return (
    <Box>
      <Image src={require('../../img/banner.jpg')} alt="a girl with a phone" />
    </Box>
  );
}
