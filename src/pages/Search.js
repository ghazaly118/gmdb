// pages/Movielist.js
import React from "react";
import { Moviecard } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
export function Search({api}) {
  const [searchparam]=useSearchParams()
  const query=searchparam.get("q")
  const { data:movies} = useFetch(
    api,query
  
  );
  console.log(query)

  return (
    <main className="max-w-7xl mx-auto py-7">
      <p className="text-3xl dark:text-red-50 text-slate-800 my-4">
  {movies && movies.length > 0
    ? `Results for "${query}"`
    : `No results for "${query}"`}
</p>
      <div className="flex justify-items-start flex-wrap gap-4">
      
      
        {movies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
