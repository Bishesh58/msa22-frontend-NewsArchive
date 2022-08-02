import NewsFeed from "./components/news/NewsFeed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Widgets from "./components/Widgets";
import { useCallback, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { getHeadlines } from "./slices/newsSlice";

const App = () => {
  const dispatch = useAppDispatch();

  //due to async fun for fetching data
  const initApp = useCallback(async () => {
    await dispatch(getHeadlines());
   
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, []);

  
  return (
    <div className="bg-gray-100 h-screen overflow-hidden">
      <Navbar />
      <main className="max-w-7xl mx-auto p-2 grid grid-cols-9">
        <Sidebar />
        <NewsFeed />
        <Widgets />
      </main>
    </div>
  );
};

export default App;
