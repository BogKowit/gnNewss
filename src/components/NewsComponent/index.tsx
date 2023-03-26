import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewsData,
  setNewsError,
  setNewsLoading,
} from "../../redux/newsReducer";
import { v4 as uuidv4 } from "uuid";
import { Cards } from "../ui";
import { RootState } from "../../redux/store";
import { fetchDataNewsByCountry } from "../../utils/fetchDataNewsByCountry";
import { useLocation } from "react-router-dom";

const NewsComponent = () => {
  const news = useSelector((state: RootState) => state.news);
  const dispatch = useDispatch();

  const location = useLocation();
  const { state } = location;
  const country = state

  const memoizedFetchData = useMemo(() => {
    return async () => {
      try {
        dispatch(setNewsLoading());
        const data = await fetchDataNewsByCountry(country);
        dispatch(setNewsData(data.articles));
      } catch (error) {
        // @ts-ignore
        dispatch(setNewsError(error.message));
      }
    };
  }, [dispatch]);

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
    <div>
      {news.data.map((article) => (
        <Cards value={article} key={uuidv4()} cardKey={uuidv4()} />
      ))}
    </div>
  );
};

export default NewsComponent;
