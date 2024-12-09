"use client";

import { useState, useEffect } from "react";

export default function DisplayRecommendations({ id }) {
  const [movie, setMovie] = useState({});
  const API_KEY = process.env.NEXT_PUBLIC_WATCHMODE_API_KEY;

  async function getInfo({ id }) {
    try {
      const response = await fetch(
        `https://api.watchmode.com/v1/title/${id}/details/?apiKey=${API_KEY}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    getInfo({ id });
  }, [id]);

  return (
    <div className="flex flex-col mx-6">
      <img
        src={movie.poster}
        alt={movie.title}
        className="mx-auto rounded-lg drop-shadow-lg"
      />

      <p className="text-2xl text-center mt-3 mb-6 text-[#FAE9F2]">
        {movie.title}, {movie.year}
      </p>
    </div>
  );
}
