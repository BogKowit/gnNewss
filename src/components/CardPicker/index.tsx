import { formatDateTime, titleCutWords } from "../../functions";
import { DataTypes } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CardNews, ListNews } from "../ui";

const CardPicker = ({
  value,
  cardKey,
}: {
  value: DataTypes;
  cardKey: string;
}) => {
  const switcher = useSelector((state: RootState) => state.ui);
  const { isCard } = switcher;
  const { title, urlToImage, source, publishedAt } = value;
  const { name } = source;

  if (isCard === true) {
    return (
      <CardNews
        cardKey={cardKey}
        urlToImage={urlToImage}
        title={titleCutWords(title, 8)}
        name={name}
        datePublished={formatDateTime(publishedAt)}
        value={value}
      />
    );
  }
  return (
    <ListNews
      cardKey={cardKey}
      urlToImage={urlToImage}
      title={titleCutWords(title, 8)}
      name={name}
      datePublished={formatDateTime(publishedAt)}
    />
  );
};

export default CardPicker;
