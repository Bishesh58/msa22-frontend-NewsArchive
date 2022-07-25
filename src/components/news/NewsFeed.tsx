import { SearchIcon, RefreshIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Thumbnail from "./Thumbnail";

interface News {
  author: string;
  title: string;
  url: string;
  urlToImage: string;
  description: string;
  content: string;
  source: object;
}

export default function NewsFeed() {
  const [input, setInput] = useState<string>("");
  const [newsList, setNewsList] = useState<News[] | undefined>([]);
  const baseURL = "https://newsapi.org/v2";

  const getTrending = () => {
    axios
      .get(
        `${baseURL}/everything?q=trending&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        const news: News[] = res.data;
        setNewsList(news);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getTrending();
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
    <div className="-ml-4 lg:col-span-5 px-4">
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
            <SearchIcon className="h-10 w-10 border-none rounded-l-md" />
          </button>
        </form>
      </div>
      <div className="flex items-center justify-between">
        <h1># Headline</h1>
        <RefreshIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-primary transition-all ease-out duration-500 hover:rotate-180 active:scale-125" />
      </div>
      <div className="max-h-screen overflow-scroll border-x scrollbar-hide">
        
      </div>
    </div>
  );
}
