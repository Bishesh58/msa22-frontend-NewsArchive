import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { News } from "../../typings";

type Props = {};

export default function Widgets({}: Props) {

  
  const [trending, setTrending] = useState<News[]>([]);
  const baseURL = "https://newsapi.org/v2";
  const getTrending = () => {
    axios
      .get(
        `${baseURL}/top-headlines?sources=bbc-news&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        const news: News[] = res.data.articles;
        setTrending(news);
        console.log(news);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    //getTrending();
  }, []);

  return (
    <div className="hidden lg:inline col-span-2 max-h-screen overflow-auto scrollbar-hide">
      <div>
        {/* {trending.map((item) => (
          <p>{item.title}</p>
        ))} */}
      </div>
    </div>
  );
}
