"use client";

import Link from "next/link";
import { useState } from "react";
import GetMovie from "./API/Movie";
import GetRecommendations from "./API/GetRecommend";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState("");
  const [renderMovie, setRender] = useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setMovie(query);
    setRender(true);
    setQuery("");
  };

  return (
    <main className="flex flex-col align-middle justify-center h-screen bg-[#140404]">
      <div className="h-2/5 w-screen align-middle justify-center">
        {renderMovie ? (
          <GetMovie query={movie} />
        ) : (
          <div>
            <p className="text-3xl text-center m-12">Welcome!</p>
            <p className="text-3xl text-center m-12">
              Lets find something to watch!
            </p>
          </div>
        )}
      </div>
      <div className="px-12 py-0 flex justify-center my-12">
        <div className="w-10/12">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for a movie you enjoyed..."
            className="px-12 py-2 rounded-l-xl bg-[#FAE9EA] text-[#140404] placeholder:text-[#887778] w-10/12 text-xl"
          ></input>
          <button
            onClick={handleSearch}
            className="bg-[#CC252C] py-2 rounded-r-xl text-[#FAE9EA] w-2/12 text-xl hover:bg-[#CC6633]"
          >
            SEARCH
          </button>
        </div>
      </div>
      <div className="flex flex-row w-screen h-2/5 align-middle justify-center px-12">
        {renderMovie ? (
          <div>
            <p className="text-xl text-center m-6">Have you tried...</p>
            <GetRecommendations query={movie} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </main>
  );
}
