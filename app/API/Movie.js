"use client";

import { useState, useEffect } from "react";

export default function GetMovie({ query }) {
  const [results, setResults] = useState({});
  const API_KEY = process.env.NEXT_PUBLIC_WATCHMODE_API_KEY;

  //primary search function; needed to return id for other parts of the API
  async function getID({ query }) {
    try {
      const title = query.toString();
      const response = await fetch(
        `https://api.watchmode.com/v1/search/?apiKey=${API_KEY}&search_field=name&search_value=${title}&types=movie`
      );
      const data = await response.json();
      return data.title_results[0].id.toString();
    } catch (error) {
      console.log("Error:", error);
    }
  }

  //secondary search function to retrieve details to display, title, actors, poster...
  async function getMovie(title) {
    try {
      const id = await getID(title);
      const response = await fetch(
        `https://api.watchmode.com/v1/title/${id}/details/?apiKey=${API_KEY}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    getMovie({ query });
  }, [query]);

  //section to display
  return (
    <div
      // style={{ "--image-url": `url(${results.backdrop})` }}
      // className="bg-[image:var(--image-url)] bg-no-repeat bg-center bg-cover"
      className="flex flex-col justify-center m-6 align-middle"
    >
      {/* <img
        src={results.poster}
        alt={results.title}
        className="mx-auto rounded-sm drop-shadow-lg"
      /> */}
      <img
        src={results.backdrop}
        alt={results.title}
        className="mx-auto rounded-lg drop-shadow-lg h-72"
      />
      <p className="text-2xl text-center mt-3 mb-6 text-[#FAE9F2]">
        {results.title}, {results.year}
      </p>
      {/* <ul>
        <li>{results.similar_titles[0]}</li>
        <li>{results.similar_titles[1]}</li>
        <li>{results.similar_titles[2]}</li>
      </ul> */}

    </div>
  );
}
