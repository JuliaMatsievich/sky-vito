import { ModalCloseBtn } from '../modalCloseBtn';
import * as S from './modalReviews.styles';

export const ModalReviews = () => {
  return (
    <>
      <S.ModalBlock>
        <S.MReviewsContainer>
          <ModalCloseBtn />
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </S.ReviewText>
                </S.ReviewRight>
              </S.ReviewItem>
            </S.MReviewsReview>
				</S.MReviewContent>
          </S.MReviewsScroll>
        </S.MReviewsContainer>
      </S.ModalBlock>
    </>
  );
};
