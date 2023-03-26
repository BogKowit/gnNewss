import { useEffect } from "react";
import { Cards } from "../ui";
import { useSwitch } from "../context/ContextSwitch";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { DataState, DataTypes } from "../../types";
import { fetchPostById, selectPostById } from "../../redux/dataReducer";

const Article = () => {
  const { isCard } = useSwitch();

  const dispatch = useDispatch();
  const post = useSelector((state) => selectPostById(state, 1));

  useEffect(() => {
    dispatch(fetchPostById(1));
  }, [dispatch]);

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-2 mt-2">
      {/* {articles?.map((value: DataTypes) => {
        return isCard === true ? (
          <Cards value={value} key={uuidv4()} cardKey={uuidv4()} />
        ) : (
          <Cards value={value} key={uuidv4()} cardKey={uuidv4()} />
        );
      })} */}
    </div>
  );
};

export default Article;
