export default (text: string | (string | number)[]) => {
  const parsedText: { text?: string; delay?: number }[] = [];
  let textArray: (string | number)[];

  if (Array.isArray(text)) {
    textArray = text;
  } else {
    textArray = text.split(' ').map((obj) => (Number(obj) ? Number(obj) : obj));
  }

  for (let i = 0; i < textArray.length; i++) {
    if (
      typeof textArray[i] === 'number' &&
      typeof textArray[i + 1] === 'string'
    ) {
      parsedText.push({
        text: textArray[i + 1] as string,
        delay: textArray[i] as number,
      });
    } else if (
      typeof textArray[i] === 'string' &&
      typeof textArray[i - 1] !== 'number'
    ) {
      parsedText.push({ text: textArray[i] as string });
    } else if (
      typeof textArray[i] === 'number' &&
      typeof textArray[i + 1] !== 'string'
    ) {
      parsedText.push({ delay: textArray[i] as number });
    }
  }

  return parsedText;
};
