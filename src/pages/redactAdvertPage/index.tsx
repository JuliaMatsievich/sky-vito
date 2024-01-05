// import { FC } from "react"
import { Menu } from '../../components/menu/menu';
import { AdvertRedact } from '../../components/modal/modalAdvert/advertRedact';
import { useParams } from 'react-router-dom';

export const RedactAdvertPage = () => {
  const params = useParams();
  const advertId = Number(params.id);
  return (
    <>
      <Menu />
      <AdvertRedact advId={advertId} />
    </>
  );
};
