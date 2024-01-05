import { Menu } from '../../components/menu/menu';
import { useParams } from 'react-router-dom';
import { ModalReviews } from '../../components/modal/modalReviews/modalReviews';
import { useGetCommentsAdvertQuery } from '../../services/advApi';

export const ReviewsAdvertPage = () => {
  const params = useParams();
  const advertId = Number(params.id);
  const { data: comments } = useGetCommentsAdvertQuery({ pk: advertId });

  return (
    <>
      <Menu />
      <ModalReviews comments={comments} advId={advertId} />
    </>
  );
};
