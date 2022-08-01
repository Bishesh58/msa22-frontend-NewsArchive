import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { getTrending } from "../slices/widgetSlice";

type Props = {};

export default function Widgets({}: Props) {
  const dispatch = useAppDispatch();
  const { widget, error } = useAppSelector((state) => state.widgets);

  useEffect(() => {
    dispatch(getTrending());
  }, []);

  return (
    <div className="hidden lg:inline col-span-2">
      <h1 className="font-bold p-2">#Top news nz</h1>
      <div className="overflow-auto scrollbar-hide max-h-screen">
        {widget.map((item) => (
          <div className="flex flex-col space-x-4 bg-white p-4 mr-4 space-y-4">
            <h2 className="text-md font-semibold">{item.title}</h2>
            <img
              loading="lazy"
              src={item.image_url}
              alt="cover"
              className="max-h-30 rounded-lg shadow-sm object-contain self-start"
            />
            <p className="text-sm">
              {item.snippet}{" "}
              <a href={item.url} target="_blank" className="text-blue-500">
                Read more
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
