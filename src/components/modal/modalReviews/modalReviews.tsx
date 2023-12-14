import { useGetWindowSize } from '../../../hooks/useGetWindowSize';
import { Search } from '../../search/search';
import { ModalCloseBtn } from '../../buttons/modalCloseBtn/modalCloseBtn';
import * as S from './modalReviews.styles';
import { PHONE_WIDTH } from '../../../constants/breakpoints';
import { BackBtn } from '../../buttons/backBtn/backBtn';
import { Footer } from '../../Footer/footer';

export const ModalReviews = () => {
  const { windowWidth } = useGetWindowSize();
  return (
    <>
      {windowWidth !== undefined && windowWidth < PHONE_WIDTH ? (
        <Search />
      ) : null}
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
