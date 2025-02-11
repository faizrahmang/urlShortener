import { useState } from "react";
import ShortenForm from "../components/ShortenForm";
import UrlList from "../components/UrlList";
import { shortenUrl } from "../services/urlService";

const Home = () => {
  const [urls, setUrls] = useState([]);

  const handleShorten = async (longUrl) => {
    const data = await shortenUrl(longUrl);
    if (data && data.shortUrl) {
      setUrls((prev) => [...prev, data]);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">URL Shortener</h1>
      <ShortenForm onSubmit={handleShorten} />
      <UrlList urls={urls} />
    </div>
  );
};

export default Home;