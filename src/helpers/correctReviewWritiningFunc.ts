export const getCorrectReviewWritining = (qt: number) => {
  const qtString = String(qt);
  const qtLastSymbol = Number(qtString[qtString.length - 1]);
  let review: string = '';

  if (qt < 20) {
    if (qt === 0 || (qt >= 5 && qt <= 20)) review = 'отзывов';
    if (qt === 1) review = 'отзыв';
    if (qt >= 2 && qt <= 4) review = 'отзыва';
  } else {
    if (qtLastSymbol === 0 || (qtLastSymbol >= 5 && qtLastSymbol <= 9))
      review = 'отзывов';
    if (qtLastSymbol === 1) review = 'отзыв';
    if (qtLastSymbol >= 2 && qtLastSymbol <= 4) review = 'отзыв';
  }
  return review;
};
