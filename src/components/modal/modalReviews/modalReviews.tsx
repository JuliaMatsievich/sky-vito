import { useGetWindowSize } from '../../../hooks/useGetWindowSize';
import { ModalCloseBtn } from '../../buttons/modalCloseBtn/modalCloseBtn';
import * as S from './modalReviews.styles';
import { PHONE_WIDTH } from '../../../constants/breakpoints';
import { BackBtn } from '../../buttons/backBtn/backBtn';
import { Footer } from '../../Footer/footer';
import { FC, useState } from 'react';
import { SERVER_URL } from '../../../constants/url';
import { IComment } from '../../../interface';
import { useAppSelector } from '../../../hooks/useAppSelector';
import {
  useAddCommentMutation,
  useLazyGetCommentsAdvertQuery,
} from '../../../services/advApi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '../../error/errorMessage';
import { formatDateCreatedAdvert } from '../../../helpers/formatDateCreatedFunc';

interface IModalComments {
  comments: IComment[] | undefined;
  advId: number;
}

interface ICommentForm {
  text: string;
}

export const ModalReviews: FC<IModalComments> = (props) => {
  const { comments, advId } = props;
  const [currComments, setCurrComments] = useState<IComment[] | undefined>(
    comments,
  );
  const { windowWidth } = useGetWindowSize();
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const [addCommentApi, {}] = useAddCommentMutation();
  const [getComments, {}] = useLazyGetCommentsAdvertQuery();

  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isSubmitSuccessful },
    reset,
  } = useForm<ICommentForm>({
    defaultValues: {
      text: '',
    },
  });

  const handleAddComment: SubmitHandler<ICommentForm> = async (data) => {
    const { text } = data;
    await addCommentApi({ pk: advId, text: text })
      .unwrap()
      .then(() => {
        getComments({ pk: advId })
          .unwrap()
          .then((data) => {
            setCurrComments(data);
          });
        reset();
      });
  };

  return (
    <>
      <S.ModalBlock>
        <S.MReviewsContainer>
          <ModalCloseBtn />
          <BackBtn />
          <S.MReviewsTitle>Отзывы о товаре</S.MReviewsTitle>
          <S.MReviewsScroll>
            <S.MReviewContent>
              {isAuth ? (
                <>
                  <S.MReviewsAdd className="mreviews__add">
                    Добавить отзыв
                  </S.MReviewsAdd>
                  <S.MReviewsForm onSubmit={handleSubmit(handleAddComment)}>
                    <S.MReviewsTextarea
                      rows={5}
                      placeholder="Введите отзыв"
                      {...register('text', {
                        required: 'Поле не может быть пустым',
                      })}
                    ></S.MReviewsTextarea>
                    {errors.text && (
                      <ErrorMessage message={errors.text.message} />
                    )}
                    <S.MReviewsBtn
                      disabled={!isDirty || isSubmitSuccessful}
                      type="submit"
                    >
                      Опубликовать
                    </S.MReviewsBtn>
                  </S.MReviewsForm>
                </>
              ) : null}
              <S.MReviewsReview>
                {currComments != undefined && currComments.length > 0 ? (
                  currComments?.map((comment) => (
                    <S.ReviewItem key={comment.id}>
                      <S.ReviewLeft>
                        <S.ReviewImage>
                          <S.ReviewImg
                            src={
                              comment.author.avatar !== undefined
                                ? `${SERVER_URL}/` + comment.author.avatar
                                : '/img/no-foto.png'
                            }
                            alt="avatar"
                          />
                        </S.ReviewImage>
                      </S.ReviewLeft>
                      <S.ReviewRight>
                        <S.ReviewName>
                          {comment.author.name}{' '}
                          <span>
                            {formatDateCreatedAdvert(comment.created_on)}
                          </span>
                        </S.ReviewName>
                        <S.ReviewTitle>Комментарий</S.ReviewTitle>
                        <S.ReviewText>{comment.text}</S.ReviewText>
                      </S.ReviewRight>
                    </S.ReviewItem>
                  ))
                ) : (
                  <div>Отзывов пока нет</div>
                )}
              </S.MReviewsReview>
            </S.MReviewContent>
          </S.MReviewsScroll>
        </S.MReviewsContainer>
      </S.ModalBlock>
      {windowWidth !== undefined && windowWidth < PHONE_WIDTH ? (
        <Footer />
      ) : null}
    </>
  );
};
