export const ucFirst = (str: string): string => str[0].toUpperCase() + str.slice(1);

export const formatTime = (time: string): string => {
  const arr = time.split(':');

  return `${arr[0]}h${arr[1]}m`;
};
