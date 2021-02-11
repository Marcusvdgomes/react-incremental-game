import NewsMarquee from "./components/NewsMarquee";
import Nav from "./components/Nav.js"
import { useState } from 'react'

function App() {
  const [showMarquee, setShowMarquee] = useState(true);
  const [btnText, setBtnText] = useState("Liga Notícias");

  const handleClick = () => {
    setShowMarquee((showMarquee) => !showMarquee);
    setBtnText(showMarquee ? "Desliga Notícias" : "Liga Notícias");
  }; 

  return (
    <div className="App flex items-center justify-center min-h-screen bg-white dark:bg-black transition duration-500">
      <Nav />
      {/* <NewsMarquee show={showMarquee} /> */}
      <h1 className="text-center text-blue-600 dark:white">
        React-DarkMode with Tailwind.css
      </h1>
      {/* <button
        className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded absolute bottom-0 right-0 mb-1 mr-1"
        onClick={handleClick}
      >
        {btnText}
      </button> */}
    </div>
  );
}

export default App;
