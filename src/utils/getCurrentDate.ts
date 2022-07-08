import { addZero } from './addZero';

export const getCurrentDate = (date: number) => {
  const fullDate = new Date(date);
  const currentDate = fullDate.toLocaleString('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'UTC'
  });
  const currentTime = `${addZero(fullDate.getHours())}:${addZero(
    fullDate.getMinutes()
  )}`;

  return `${currentDate} ${currentTime}`;
};
