export const shortenUrl = async (longUrl) => {
    try {
      const response = await fetch("http://localhost:5000/api/shorten", {
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