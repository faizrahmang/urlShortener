import CopyButton from "./CopyButton";

const UrlList = ({ urls }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Shortened URLs</h2>
      <ul className="mt-2 space-y-2">
        {urls.map((item, index) => (
          <li key={index} className="border p-2 rounded flex justify-between items-center">
            <a href={item.shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {item.shortUrl}
            </a>
            <CopyButton text={item.shortUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;
