export const formatDateCreatedAdvert = (data: string) => {
  const date = new Date(data);

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today.valueOf() - 86400000);
  const advDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const formatedData = (data: number) => {
    if (data < 10) {
      return data;
    } else return data;
  };

  const formatMonth = (data: number) => {
    const month = [
      'янв.',
      'фев',
      'март',
      'апр.',
      'май',
      'июнь',
      'июль',
      'авг.',
      'сент.',
      'окт.',
      'нояб.',
      'дек.',
    ];

    for (let i = 0; i < month.length; i++) {
      if (data === i + 1) {
        return month[i];
      }
    }
  };

  const hours = formatedData(date.getHours());
  const minutes = formatedData(date.getMinutes());
  const day = formatedData(date.getDate());
  const month = formatMonth(date.getMonth() + 1);
  const year = date.getFullYear();

  const formatNearDate = () => {
    if (advDate < yesterday) {
      return day + ' ' + month + ' ' + year + ' в ' + hours + ':' + minutes;
    } else if (advDate < today) {
      return 'Вчера' + ' в ' + hours + ':' + minutes;
    } else {
      return 'Сегодня' + ' в ' + hours + ':' + minutes;
    }
  };

  const formattedDate = formatNearDate();

  return formattedDate;
};
