import { Main, Title } from './Home.style';

export default function Home() {
  return (
    <Main>
      <Title>
        Task manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Main>
  );
}
