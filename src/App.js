import './App.css';
import { useEffect, useState } from "react";
import CustomRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from './assets/elements/Loader';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const checkImagesLoaded = () => {
        const images = Array.from(document.images);
        const allLoaded = images.every((img) => img.complete);

        if (allLoaded) {
          setShowLoader(false);
        } else {
          setTimeout(checkImagesLoaded, 100);
        }
      };

      checkImagesLoaded();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return <Router>{showLoader ? <Loader /> : <CustomRoutes />}</Router>;
}

export default App;
