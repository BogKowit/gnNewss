import { formatDateTime, titleCutWords } from "../../functions";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { DataTypes } from "../../types";
import { CardNews, ListNews } from "components/ui";

const CardSwitcher = ({ value }: { value: DataTypes }) => {
  const switcher = useSelector((state: RootState) => state.ui);
  const { isCard } = switcher;
  const { title, urlToImage, source, publishedAt } = value;
  const { name } = source;

  if (isCard === true) {
    return (
      <CardNews
        urlToImage={urlToImage}
        title={titleCutWords(title, 8)}
        name={name}
        datePublished={formatDateTime(publishedAt)}
      />
    );
  }
  return (
    <ListNews
      title={titleCutWords(title, 8)}
      name={name}
      datePublished={formatDateTime(publishedAt)}
    />
  );
};

export default CardSwitcher;
