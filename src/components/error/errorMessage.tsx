import { FC } from 'react';
import * as S from './errorMessage.styles';

interface IError {
  message: string | undefined;
}

export const ErrorMessage: FC<IError> = (props) => {
  const { message } = props;

  return (
    <>
      <S.Error>{message}</S.Error>
    </>
  );
};
