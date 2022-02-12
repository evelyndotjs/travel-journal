import "./App.css";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import data from "./data";

function App() {
  const travelBlog = data.map((blog) => {
    return <Blog key={blog.id} entries={blog} />;
  });

  return (
    <div>
      <Navbar />
      {travelBlog}
    </div>
  );
}

export default App;
