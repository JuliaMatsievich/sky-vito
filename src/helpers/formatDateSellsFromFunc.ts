export const formatDateSellsFrom = (data: string) => {
  const date = new Date(data);

  const formatMonth = (data: number) => {
    const month = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];

    for (let i = 0; i < month.length; i++) {
      if (data === i + 1) {
        return month[i];
      }
    }
  };

  const month = formatMonth(date.getMonth() + 1);
  const year = date.getFullYear();

  const formatNearDate = month + ' ' + year;

  return formatNearDate;
};
