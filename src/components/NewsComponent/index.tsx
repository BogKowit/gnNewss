import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewsData,
  setNewsError,
  setNewsLoading,
} from "../../redux/newsReducer";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../redux/store";
import { useLocation } from "react-router-dom";
import { fetchDataNewsByCountry } from "../../utils";
import CardPicker from "../CardPicker";

const NewsComponent = () => {
  const news = useSelector((state: RootState) => state.news);
  const dispatch = useDispatch();

  const location = useLocation();
  const { state } = location;
  const country = state || "us";

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

  if (news.loading) {
    return <div>Trwa ładowanie danych...</div>;
  }

  if (news.error) {
    return <div>Wystąpił błąd: {news.error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {news?.data.map((article) => (
        <CardPicker value={article} key={uuidv4()} cardKey={uuidv4()} />
      ))}
    </div>
  );
};

export default NewsComponent;
