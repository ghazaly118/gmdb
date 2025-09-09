import { Routes,Route } from "react-router-dom";
import { Moviedetails,Movielist,Search,Pagenotfound } from "../pages";
 export function AllRoutes(){
  return(
    <>
    <Routes>
      <Route path="" element={<Movielist api="/movie/now_playing"/>}/>
      <Route path="movies/top" element={<Movielist api="/movie/top_rated"/>}/>
      <Route path="movies/popular" element={<Movielist api="/movie/popular"/>}/>
      <Route path="movies/upcomming" element={<Movielist api="/movie/upcoming"/>}/>
      <Route path="movie/:id" element={<Moviedetails/>}/>
      <Route path="search" element={<Search api="/search/movie"/>}/>
      <Route path="*" element={<Pagenotfound/>}/>
    </Routes>
    </>
  )
 }