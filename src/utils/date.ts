type DateParser = (date: Date) => string;
export const parseDate: DateParser = (date) =>
  date.toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

type DateTimeParser = (dateTime: number) => string;
export const parseDateTime: DateTimeParser = (dateTime) =>
  parseDate(new Date(dateTime));
