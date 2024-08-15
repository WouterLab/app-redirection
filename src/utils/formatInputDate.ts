export const formatInputDate = (input: string): string => {
  const cleaned = input.replace(/\D/g, '');
  let formattedDate = '';
  for (let i = 0; i < cleaned.length; i++) {
    if (i === 2 || i === 4) {
      formattedDate += '.' + cleaned.charAt(i);
    } else {
      formattedDate += input.charAt(i);
    }
  }

  return formattedDate.slice(0, 10);
};
