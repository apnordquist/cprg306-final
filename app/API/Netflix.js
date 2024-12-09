"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function GetNetflix({ id }) {
  const [results, setResults] = useState([]);
  const API_KEY = process.env.NEXT_PUBLIC_WATCHMODE_API_KEY;

  async function getLink({ id }) {
    try {
      console.log(id);
      const response = await fetch(
        `https://api.watchmode.com/v1/title/${id}/sources/?apiKey=${API_KEY}&region=CA`
      );
      const data = await response.json();
      console.log(data);
      setResults(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    getLink({ id });
  }, [id]);

  return (
    <div>
      {/* {results.name["Netflix"] ? (
        <Link
          href={results.name["Netflix"].web_url}
          className="bg-[#CC252C] py-2 rounded-xl text-[#FAE9EA] text-l"
        >
          On Netflix
        </Link>
      ) : (
        <p>unavailable</p>
      )} */}
    </div>
  );
}
