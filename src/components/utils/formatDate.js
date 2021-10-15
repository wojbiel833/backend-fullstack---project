export const formatDate = today => {
  const currentDate = new Date();

  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = currentDate.getMonth().toString().padStart(2, '0');
  const year = currentDate.getFullYear();

  return `${day}.${month}.${year}r.`;
};
