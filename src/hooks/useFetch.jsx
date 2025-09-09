// hooks/useFetch.js
import React from "react";

export function useFetch(url,query="") {
  const [data, setData] = React.useState([]);

  
  React.useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjNmMjI4NzVkODZjYzM1ZGJjODc0MzI3ZjlhNmFkOSIsIm5iZiI6MTc1NzM3OTc2Mi42ODQsInN1YiI6IjY4YmY3Y2IyNjRkMjc4Nzg5YjFmNTcwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dAIzk0Ri0ZEK0YPy_-ywWUfqbeicFJEB8vF4fFM4lAs",
      },
    };
    async function fetchData() {

        const res = await fetch(`https://api.themoviedb.org/3${url}?language=en-US&query=${query}`, options);
        const json = await res.json();
        setData(json.results || []); // if results missing, fallback to []
    
    }

    fetchData();
  }, [url,query]);
  console.log(`https://api.themoviedb.org/3${url}?language=en-US&query=${query}`)

  return { data };
}
