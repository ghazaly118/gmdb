// pages/Movielist.js
import React from "react";
import { Moviecard } from "../components";
import { useFetch } from "../hooks/useFetch";

export function Movielist({api}) {
  const { data:movies} = useFetch(
    api
  );

  return (
    <main className="max-w-7xl mx-auto py-7">
      <div className="flex justify-items-start flex-wrap gap-4">
        {movies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
