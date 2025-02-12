import Url from "../models/Url.js";
import { nanoid } from "nanoid";

export const shortenUrl = async (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl) return res.status(400).json({ error: "URL is required" });

  try {
    const shortUrl = nanoid(7);
    const newUrl = new Url({ longUrl, shortUrl });
    await newUrl.save();
    res.json({ shortUrl: `https://urlshortener-noa8.onrender.com/api/${shortUrl}` });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const redirectUrl = async (req, res) => {
    try {
      const url = await Url.findOne({ shortUrl: req.params.shortUrl });
      if (url) {
        return res.redirect(url.longUrl);
      }
      res.status(404).json({ error: "URL not found" });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
};