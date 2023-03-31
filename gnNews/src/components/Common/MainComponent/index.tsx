import { useEffect, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewsData,
  setNewsError,
  setNewsLoading,
} from "../../../redux/newsReducer";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../../redux/store";
import { openPopUp } from "../../../redux/uiReducer";
import { useLocation } from "react-router-dom";
import { CardPicker, PopUpInformation } from "components";
import { BlurLock } from "components/ui";
import { fetchDataNewsByCountry } from "utils";

const MainComponent = () => {
  const news = useSelector((state: RootState) => state.news);
  const isSidebarOpen = useSelector((state: RootState) => state.ui.isOpenPopUp);
  const isCard = useSelector((state: RootState) => state.ui.isCard);
  const dispatch = useDispatch();

  const location = useLocation();
  const { state } = location;
  const country = state || "us";
  const selectedArticle = useRef(null);

  const memoizedFetchData = useMemo(() => {
    return async () => {
      try {
        dispatch(setNewsLoading());
        const data = await fetchDataNewsByCountry(country);
        dispatch(setNewsData(data.articles));
      } catch (error: any) {
        dispatch(setNewsError(error));
      }
    };
  }, [country, dispatch]);

  useEffect(() => {
    memoizedFetchData();
  }, [memoizedFetchData]);

  const handleArticleClick = (article: any) => {
    selectedArticle.current = article;
    dispatch(openPopUp());
  };

  if (news.loading) {
    return <div>Trwa ładowanie danych...</div>;
  }

  if (news.error) {
    return <div>Wystąpił błąd: {news.error}</div>;
  }

  return (
    <div
      className={`newsComponentWrapper p-2
    ${isCard === false ? "" : "gap-4"}`}
    >
      {news?.data.map((article) => (
        <div
          onClick={() => handleArticleClick(article)}
          key={uuidv4()}
          className={`${
            isCard === false
              ? `col-span-12 pr-2 xl:col-span-6 xl:gap-x-2`
              : `w-full  col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 `
          }`}
        >
          <CardPicker value={article} />
        </div>
      ))}
      {isSidebarOpen && selectedArticle.current && (
        <BlurLock>
          <PopUpInformation value={selectedArticle.current} />
        </BlurLock>
      )}
    </div>
  );
};
export default MainComponent;
