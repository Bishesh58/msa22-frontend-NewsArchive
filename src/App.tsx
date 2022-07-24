import NewsFeed from "./components/NewsFeed";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-100 h-screen w-full">
      <div className="max-w-7xl mx-auto p-2">
        <Navbar />
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;
