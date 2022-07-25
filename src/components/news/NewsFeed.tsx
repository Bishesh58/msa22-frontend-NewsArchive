import { SearchIcon, RefreshIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Thumbnail from "./Thumbnail";
import { News } from "../../../typings";

export default function NewsFeed() {
  const [input, setInput] = useState<string>("");
  const [newsList, setNewsList] = useState<News[]>([]);
  const baseURL = "https://newsapi.org/v2";

  const getTopHeadlines = () => {
    axios
      .get(
        `${baseURL}/top-headlines?country=nz&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        const news: News[] = res.data.articles;
        setNewsList(news);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getTopHeadlines();
  }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    axios
      .get(
        `${baseURL}/everything?q=${input}&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setNewsList(res.data);
        console.log(newsList);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="-ml-4 lg:-ml-16 col-span-7 lg:col-span-5 px-4">
      <div>
        <form className="flex mr-5">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="flex-1 outline-none p-2 rounded-l-md"
          />
          <button
            onClick={handleSubmit}
            className="outline-none hover:text-primary bg-white hover:scale-110"
          >
            <SearchIcon className="h-8 w-10 border-none rounded-l-md" />
          </button>
        </form>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold">Top headlines</h1>
        <RefreshIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-primary transition-all ease-out duration-500 hover:rotate-180 active:scale-125" />
      </div>
      <div className="max-h-screen overflow-scroll border-x scrollbar-hide">
        {newsList.map((newItem, i) => (
          <p key={i}>{newItem.title}</p>
        ))}
      </div>
    </div>
  );
}
