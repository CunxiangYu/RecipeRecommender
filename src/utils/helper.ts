import moment from 'moment';

export const isBeforeToday = (date: string): boolean => {
  const dateToday = moment(Date.now());
  return moment(date, 'YYYY-MM-DD').isBefore(dateToday, 'day');
};
