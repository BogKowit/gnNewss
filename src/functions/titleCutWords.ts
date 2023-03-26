export default function titleCutWords(
  text: string,
  lengthNewTitleProp: number = 8
): string {
  const words = text.split(" ");

  const lengthNewTitle = lengthNewTitleProp;

  if (words.length > lengthNewTitle) {
    return words.slice(0, lengthNewTitle).join(" ") + "...";
  } else {
    return text;
  }
}
