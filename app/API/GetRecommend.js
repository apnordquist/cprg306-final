"use client";

import { useState, useEffect } from "react";
import GetNetflix from "./Netflix";
import DisplayRecommendations from "./DisplayRecommend";

export default function GetRecommendations({ query }) {
  const [recommendations, setRecommend] = useState([]);
  const API_KEY = process.env.NEXT_PUBLIC_WATCHMODE_API_KEY;

  //primary search function; needed to return id for other parts of the API
  async function getID({ query }) {
    try {
      const title = query.toString();
      const response = await fetch(
        `https://api.watchmode.com/v1/search/?apiKey=${API_KEY}&search_field=name&search_value=${title}&types=movie`
      );
      const data = await response.json();
      console.log(data.title_results[0].id);
      return data.title_results[0].id.toString();
    } catch (error) {
      console.log("Error:", error);
    }
  }

  //secondary search function to retrieve recommended ids
  async function getRecommendations(title) {
    try {
      const id = await getID(title);
      const response = await fetch(
        `https://api.watchmode.com/v1/title/${id}/details/?apiKey=${API_KEY}`
      );
      const data = await response.json();
      setRecommend(data.similar_titles);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    getRecommendations({ query });
  }, [query]);

  //section to display
  return (
    <div className="w-screen flex flex-row justify-around m-6 align-middle">
      <DisplayRecommendations id={recommendations[0]} />
      <DisplayRecommendations id={recommendations[1]} />
      <DisplayRecommendations id={recommendations[2]} />
    </div>
  );
}
