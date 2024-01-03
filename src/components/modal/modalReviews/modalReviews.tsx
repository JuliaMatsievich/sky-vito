import { useGetWindowSize } from '../../../hooks/useGetWindowSize';
import { ModalCloseBtn } from '../../buttons/modalCloseBtn/modalCloseBtn';
import * as S from './modalReviews.styles';
import { PHONE_WIDTH } from '../../../constants/breakpoints';
import { BackBtn } from '../../buttons/backBtn/backBtn';
import { Footer } from '../../Footer/footer';
import { Menu } from '../../menu/menu';
import { useGetCommentsAdvertQuery } from '../../../services/advApi';
import { FC } from 'react';
import { SERVER_URL } from '../../../constants/url';

interface IModalComments {
  advId: number;

}

export const ModalReviews:FC<IModalComments> = (props) => {
  const {advId} = props
  const { windowWidth } = useGetWindowSize();
  const {data: comments} = useGetCommentsAdvertQuery({pk: advId});

  return (
    <>
      {windowWidth !== undefined && windowWidth < PHONE_WIDTH ? <Menu /> : null}
      <S.ModalBlock>
        <S.MReviewsContainer>
          <ModalCloseBtn />
          <BackBtn />
          <S.MReviewsTitle>Отзывы о товаре</S.MReviewsTitle>
          <S.MReviewsScroll>
            <S.MReviewContent>
              <S.MReviewsAdd className="mreviews__add">
                Добавить отзыв
              </S.MReviewsAdd>
              <S.MReviewsForm>
                <S.MReviewsTextarea
                  rows={5}
                  placeholder="Введите отзыв"
                ></S.MReviewsTextarea>
                <S.MReviewsBtn>Опубликовать</S.MReviewsBtn>
              </S.MReviewsForm>
              <S.MReviewsReview>
                {comments !=undefined ? comments?.map((comment) => (
                  <S.ReviewItem>
                  <S.ReviewLeft>
                    <S.ReviewImage>
                      <S.ReviewImg src={comment.author.avatar !==undefined ?`${SERVER_URL}/` + comment.author.avatar : "/img/no-foto.png"} alt="avatar" />
                    </S.ReviewImage>
                  </S.ReviewLeft>
                  <S.ReviewRight>
                    <S.ReviewName>
                      {comment.author.name} <span>{comment.created_on}</span>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>
                     {comment.text}
                    </S.ReviewText>
                  </S.ReviewRight>
                </S.ReviewItem>
                )) : <div>Комменатриев пока нет</div>}
                {/* <S.ReviewItem>
                  <S.ReviewLeft>
                    <S.ReviewImage>
                      <S.ReviewImg src="" alt="" />
                    </S.ReviewImage>
                  </S.ReviewLeft>
                  <S.ReviewRight>
                    <S.ReviewName>
                      Олег <span>14 августа</span>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </S.ReviewText>
                  </S.ReviewRight>
                </S.ReviewItem>
                <S.ReviewItem>
                  <S.ReviewLeft>
                    <S.ReviewImage>
                      <S.ReviewImg src="" alt="" />
                    </S.ReviewImage>
                  </S.ReviewLeft>
                  <S.ReviewRight>
                    <S.ReviewName>
                      Олег <span>14 августа</span>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </S.ReviewText>
                  </S.ReviewRight>
                </S.ReviewItem>
                <S.ReviewItem>
                  <S.ReviewLeft>
                    <S.ReviewImage>
                      <S.ReviewImg src="" alt="" />
                    </S.ReviewImage>
                  </S.ReviewLeft>
                  <S.ReviewRight>
                    <S.ReviewName>
                      Олег <span>14 августа</span>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </S.ReviewText>
                  </S.ReviewRight>
                </S.ReviewItem>
                <S.ReviewItem>
                  <S.ReviewLeft>
                    <S.ReviewImage>
                      <S.ReviewImg src="" alt="" />
                    </S.ReviewImage>
                  </S.ReviewLeft>
                  <S.ReviewRight>
                    <S.ReviewName>
                      Олег <span>14 августа</span>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </S.ReviewText>
                  </S.ReviewRight>
                </S.ReviewItem>
                <S.ReviewItem>
                  <S.ReviewLeft>
                    <S.ReviewImage>
                      <S.ReviewImg src="" alt="" />
                    </S.ReviewImage>
                  </S.ReviewLeft>
                  <S.ReviewRight>
                    <S.ReviewName>
                      Олег <span>14 августа</span>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </S.ReviewText>
                  </S.ReviewRight>
                </S.ReviewItem>
                <S.ReviewItem>
                  <S.ReviewLeft>
                    <S.ReviewImage>
                      <S.ReviewImg src="" alt="" />
                    </S.ReviewImage>
                  </S.ReviewLeft>
                  <S.ReviewRight>
                    <S.ReviewName>
                      Олег <span>14 августа</span>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </S.ReviewText>
                  </S.ReviewRight>
                </S.ReviewItem>
                <S.ReviewItem>
                  <S.ReviewLeft>
                    <S.ReviewImage>
                      <S.ReviewImg src="" alt="" />
                    </S.ReviewImage>
                  </S.ReviewLeft>
                  <S.ReviewRight>
                    <S.ReviewName>
                      Олег <span>14 августа</span>
                    </S.ReviewName>
                    <S.ReviewTitle>Комментарий</S.ReviewTitle>
                    <S.ReviewText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </S.ReviewText>
                  </S.ReviewRight>
                </S.ReviewItem> */}
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
