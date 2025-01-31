import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "tailwindcss/tailwind.css";

const movies = [
  { id: 1, title: "Inception", image: "https://via.placeholder.com/200" },
  { id: 2, title: "Interstellar", image: "https://via.placeholder.com/200" },
  { id: 3, title: "The Dark Knight", image: "https://via.placeholder.com/200" },
];

function Home() {
  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Bienvenue sur Mon Netflix</h1>
      <div className="grid grid-cols-3 gap-4">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="p-2 bg-gray-800 rounded-lg">
              <img src={movie.image} alt={movie.title} className="rounded-lg" />
              <h2 className="text-lg mt-2">{movie.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function MovieDetail({ id }) {
  const movie = movies.find((m) => m.id === Number(id));
  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold">{movie?.title}</h1>
      <img src={movie?.image} alt={movie?.title} className="rounded-lg" />
      <p className="mt-4">Description du film...</p>
      <Link to="/" className="text-blue-400">Retour</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetailWrapper />} />
      </Routes>
    </Router>
  );
}

function MovieDetailWrapper() {
  const id = window.location.pathname.split("/").pop();
  return <MovieDetail id={id} />;
}

export default App;
