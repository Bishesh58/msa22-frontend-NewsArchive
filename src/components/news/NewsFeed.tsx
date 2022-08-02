import { SearchIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Thumbnail from "./Thumbnail";
import { getQueryNews } from "../../slices/newsSlice";

import { useAppSelector, useAppDispatch } from "../../app/hooks";

export default function NewsFeed() {
  const [input, setInput] = useState<string>("");

  const { news, error } = useAppSelector((state) => state.news);

  const dispatch = useAppDispatch();

  const getCategory = (category: string) => {};

  useEffect(() => {}, []);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(getQueryNews(input));
    } else {
      alert("Enter value to search! e.g. Elon Musk");
    }
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

      <h1 className="font-bold py-2">Top headlines</h1>

      <div className="max-h-screen overflow-auto border-x scrollbar-hide my-4">
        {news &&
          news.map((newItem, i) => <Thumbnail key={i} newItem={newItem} />)}
      </div>
      <div>{error && <p>No search result found!</p>}</div>
    </div>
  );
}
