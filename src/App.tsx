import NewsFeed from "./components/news/NewsFeed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Widgets from "./components/Widgets";

const App = () => {
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
