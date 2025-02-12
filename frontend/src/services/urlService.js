export const shortenUrl = async (longUrl) => {
    try {
      const response = await fetch("https://urlshortener-noa8.onrender.com/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl }),
      });
      return response.json();
    } catch (error) {
      console.error("Error shortening URL:", error);
      return null;
    }
  };