import { FC } from 'react';
import { AppRoutes } from './routes';
import * as S from './styles/globalStyle.styles';

const App: FC = () => {
  return (
    <>
      <S.GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
