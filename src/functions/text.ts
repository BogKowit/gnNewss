export function titleCutWords(text: string): string {
  const words = text.split(" ");

  const lengthNewTitle = 8;

  if (words.length > lengthNewTitle) {
    return words.slice(0, lengthNewTitle).join(" ") + "...";
  } else {
    return text;
  }
}
