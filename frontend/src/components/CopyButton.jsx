import { useState } from "react";

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400 transition"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
};

export default CopyButton;
